

// db = database
// you get your api key from airtable//acount 


const db = {   
    id: 'appCH6UjCo1Bkw16M',
    table: 'project3',
    apiKey: 'keyzJ9RlZVLsdVb9O'
};




const airtableUrl = `https://api.airtable.com/v0/${db.id}/${db.table}?maxRecords=100&view=Grid%20view&api_key=${db.apiKey}`

const fetchMovies = async () => {
    const response = await fetch(airtableUrl).then(data => data.json());
    console.log(response);


const myObject = {
    title:'name',
    weight: 'vnnnnnnt',
}
const myArray = ['name', 'net-weight,'];

console.log (myObject.title)
console.log (myArray[1])

const container = document.getElementById('project3-container');


response.records.forEach((name) => {
    console.log(name);
    if (name.fields.Attachments) {
        console.log(name.fields.Attachments[0].url);

        const posterImg = document.createElement ('img');
        // posterImg.src =name.fields.Attachments[0].url;
        posterImg.setAttribute( 'src', name.fields.Attachments[0].url)
        container.append(posterImg);
    }
   
    if (name.fields.weight){
        const weightEl = document.createElement ('p');
     weightEl.innerHTML = name.fields.weight;
     weightEl.classList.add('weight')
     container.append(weightEl);

    }

    //  if (name.fields.spice) {
    //      const spiceEl = document.createElement ('p');
    //      spiceEl.innerHTML = name.fields.spice;
    //      spiceEl.classList.add ('name');
    //      container.append(spiceEL);
    // }
});


};

fetchMovies ();



    // const myObject = {
    // title: 'movie',
    // release_date: '4745454',

    // }
    // const myArray =  [ 'movie', 4743343, 'rhfv'];
//array starts from 0
    // console.log (myObject.release_date)
    // console.log (myArray [0])



    //array is different in the sesne its just a list of objects 


//you can use this link for all airtables, just change id, name and api key 

// data being stored in response constant 
