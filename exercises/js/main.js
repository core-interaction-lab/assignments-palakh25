const db = {   
    id: 'appCH6UjCo1Bkw16M',
    table: 'project3',
    apiKey: 'keyzJ9RlZVLsdVb9O'
};


const airtableUrl = `https://api.airtable.com/v0/${db.id}/${db.table}?maxRecords=100&view=Grid%20view&api_key=${db.apiKey}`

const slideshowContainer = document.getElementById('slideshow-container');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

const fetchMovies = async () => {
    const response = await fetch(airtableUrl).then(data => data.json());
    // console.log(response);
    buildSlideshow(response.records);
    return response.records;


};

const buildSlideshow = (movies) => { 
    console.log(movies);
    console.log(buildSlide(movies[0]));

    console.log(slideshowContainer);
    const firstMovie = buildSlide(movies[0]);
    console.log(firstMovie);
    slideshowContainer.append(firstMovie);

    let currentMovie = 0;
    
    nextButton.addEventListener('click', () => {
    
        if (currentMovie === movies.length -1) {
            currentMovie = 0;
        } else { 
            currentMovie = currentMovie + 1;

        }

        const movieRecord = movies[currentMovie];

        const slideEl = buildSlide(movieRecord);
        slideshowContainer.innerHTML = '';
        slideshowContainer.append(slideEl);
    });

    prevButton.addEventListener('click', () => {    
        if (currentMovie === 0) {
            currentMovie = movies.length - 1;
        } else { 
            currentMovie = currentMovie - 1; 
        }
    
        const movieRecord = movies[currentMovie];
        swapSlide(movieRecord);  
    });
}

const swapSlide = (movieRecord) => {
    const slideEl = buildSlide(movieRecord);
    slideshowContainer.innerHTML = '';
    slideshowContainer.append(slideEl);
};


const buildSlide = (movie) => {
    const movieContainer = document.createElement ('article');
    if (movie.fields.Attachments) {
    console.log(movie.fields.Attachments[0].url);

    const posterImg = document.createElement ('img');
    // posterImg.src =name.fields.Attachments[0].url;
    posterImg.classList.add('poster-img', 'sjjsjsjjs');
    posterImg.setAttribute( 'src', movie.fields.Attachments[0].url)
    movieContainer.append(posterImg);
    }

    if (movie.fields.weight){
    const weightEl = document.createElement ('p');
    weightEl.innerHTML = movie.fields.weight;
    weightEl.classList.add('weight')
    movieContainer.append(weightEl);
    }
    return movieContainer
}

fetchMovies();