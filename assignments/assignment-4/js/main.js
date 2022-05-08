const albumContainer = document.getElementById ('album-container');


const fetchContent =  (fetchUrl) => {
   return fetch(fetchUrl).then(data => data.json());
};


 const htmlDecode = (imput) => {
     const e = document.createElement ('div');
 e.innerHTML = imput;
 return e.innerText;
 } 
 

//  const buildStories= stories => {
//      stories.forEach (item => {
//          console.log(item);
//          const container= document.createElement ('article');
//         const titleEL = document.createElement ('h2');
//          const bodyEl = document.createElement('div');

//         titleEL.innerHTML = item.data.title;
//          bodyEl.innerHTML = htmlDecode (item.data.selftext_html);


//          container.append(titleEL, bodyEl);
//         albumContainer.append(container);


        
//      });
//  };



// const buildEpisodes= episodes => {
//     episodes.forEach (item => {
//         console.log(item);
//         const imgEl = document.createElement('img');
//         imgEl.setAttribute ('src', item.image.medium);
//         albumContainer.append(imgEl);

//     });
// };


const buildAlbums = album => {
    album.forEach(item => {
        console.log(item);
        const imgEl = document.createElement('img');
        imgEl.setAttribute ('src', item.images[1].url);
        albumContainer.append(imgEl);

        // const nameEl = document.createElement('p');
        // nameEl.innerHTML = item.name;
        // nameEL.classList.add("name");

       
        // albumContainer.append(nameEl);


        const container = document.createElement('article');
        const nameEL = document.createElement('div');
        const release_dateEl = document.createElement('div');
        const total_tracksEl = document.createElement('div');
        const urlEl = document.createElement('a');

        nameEL.innerHTML = item.name;
        nameEL.classList.add("name");

        release_dateEl.innerHTML = item.release_date;
        release_dateEl.classList.add("date");

        total_tracksEl.innerHTML = item.total_tracks;
        total_tracksEl.classList.add("total_tracks");

        urlEl.innerHTML = item.href;
        urlEl.classList.add("url");
        
        container.append(nameEL);
        container.append(release_dateEl);
        container.append(total_tracksEl);
        container.append(urlEl);
        albumContainer.append(container);
    })
}


// const slideshowContainer = document.getElementById('slideshow-container');
// const prevButton = document.getElementById('prev');
// const nextButton = document.getElementById('next');

// const buildSlideshow = (album) => {
//     let leftI = 0;
//     let rightI = 4;
  
//     // const articles = songs.slice(0, 10).map(buildSlide);

//     // const firstSongs = songs.slice(0,10).map(buildSlide);
//     console.log(album.slice(0,5));
//     album.slice(0,5).forEach(e => (buildSlide(e)));


//     // slideshowContainer.append(buildSlide(songs.slice(0,4)));

//     prevButton.addEventListener('click', () => {
//         leftI += 1;
//         rightI += 1;
//         if (rightI >= album.length) {
//             rightI = 0;
//         }
//         if (leftI >= album.length) {
//             leftI = 0;
//         }
//         slideshowContainer.removeChild(slideshowContainer.querySelectorAll('img')[4]);
//         // slideshowContainer.removeChild(slideshowContainer.children[4]);
//         (buildSlide(album[rightI],"pre"));
//         // slideshowContainer.prepend(buildSlide(songs[rightI]));

//     });

  
//     nextButton.addEventListener('click', () => {
//         leftI -= 1;
//         rightI -= 1;
//         if (leftI < 0) {
//             leftI = album.length - 1;
//         }
//         if (rightI < 0) {
//             rightI = album.length - 1;
//         }
//         // console.log(slideshowContainer.querySelectorAll('article'));
//         slideshowContainer.removeChild(slideshowContainer.querySelectorAll('img')[0]);
//         (buildSlide(album[leftI]));

//         // slideshowContainer.append(buildSlide(songs[leftI],leftI));
//     });
// }

//     const buildSlide = (album,state="post") => {
//         console.log(album.images[0].url);
//         const albumContainer = document.createElement('article');
//             const posterImg = document.createElement('img');
//             posterImg.src = album.images[0].url;
//             posterImg.classList.add('poster-img');
//             posterImg.id = 'poster-img-id';
//             // songContainer.append(posterImg);
//             if (state=="post"){
//                 console.log("post")
//                 slideshowContainer.append(posterImg);
//             }
//             else if(state=="pre"){
//                 console.log("pre")
//                 slideshowContainer.prepend(posterImg);
//             }
//  };
 

const buildSlideshow = (album) => {
    console.log(album);
    console.log(buildSlide(album.images[0]));
  
    const firstAlbum = buildSlide(album.images[0]);
    slideshowContainer.append(firstAlbum);
  
    let currentAlbum = 0;
  
    prevButton.addEventListener('click', () => {
        if (currentAlbum=== 0) {
            currentAlbum = album.length - 1;
        } else {
            currentAlbum = currentAlbum - 1;
        }
  
        const AlbumRecord = album[currentAlbum];
        swapSlide(AlbumRecord);
    });
  
    nextButton.addEventListener('click', () => {
        if (currentAlbum === album.length - 1) {
            currentAlbum = 0;
        } else {
            currentAlbum = currentAlbum + 1;
        }
  
        const AlbumRecord = album[currentAlbum];
        swapSlide(AlbumRecord);
    });
  };
  
  const swapSlide = (AlbumRecord) => {
    const slideEl = buildSlide(AlbumRecord);
  
    slideshowContainer.innerHTML = '';
    slideshowContainer.append(slideEl);
  };
  
  const buildSlide = (album) => {
    const albumContainer = document.createElement('article');
    if (album.images) {
        console.log(album.images[0].url);
        const posterImg = document.createElement('img');
        posterImg.src = album.images[0].url;
        posterImg.classList.add('poster-img');
        posterImg.id = 'poster-img-id';
        albumContainer.append(posterImg);
    };
}

const url1= 'https://interactionlab.space/data/assignment-4-1.json';
// const url2= 'https://interactionlab.space/data/assignment-4-2.json';
// const url3= 'https://interactionlab.space/data/assignment-4-3.json';


const main = async () => {
const response1 = await fetchContent(url1);
buildAlbums(response1.items);
buildSlideshow(response1.items);

// const response2 = await fetchContent(url2);
// const response3 = await fetchContent(url3);

 console.log (response1);
 return albumContainer;


// buildEpisodes (response2);
//  buildStories (response3.data.children);

};

main();