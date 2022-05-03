

// db = database
//container to store infromation abput database 
// you get your api key from airtable//acount 


const db = {   
    id: 'ppPiFK0x3NJa8GDs',
    table: 'tattoo',
    apiKey: 'keyzJ9RlZVLsdVb9O',
};




const airtableUrl = `https://api.airtable.com/v0/${db.id}/${db.table}?maxRecords=100&view=Grid%20view&api_key=${db.apiKey}`;
// aurtableulr is a container that brings in info frm the table 

const fetchSpices = async () => {
    const response = await fetch(airtableUrl).then(data => data.json());
    console.log(response);
// fetchMovies is a name created by us to bring in all the airtable records 
//array  - collection of objects

const myObject = {
    title:'name',
    weight: 'vnnnnnnt',
}

// myObject is a template 
//curly object = object 
//square brackets is an array 



const myArray = ['name', 'net-weight,'];

console.log (myObject.title)
console.log (myArray[1])
//array start from 0 
const container = document.getElementById('project3-container');

//link between html and javascript 


response.records.forEach((Number) => {
    //response contains table, response ha sall 100 records 
    //forEach go one by one and pick up each record
    //in table fpr all records pick one by one 
    console.log(Number);
    const spiceContainer = document.createElement('article');
    if (Number.fields.Attachments) {
        console.log(Number.fields.Attachments[0].url);


        const posterImg = document.createElement ('img');
        // posterImg.src =name.fields.Attachments[0].url;
        posterImg.setAttribute( 'src', Number.fields.Attachments[0].url)
        spiceContainer.append(posterImg);
    }
   
    if (name.fields.weight){
        const weightEl = document.createElement ('p');
     weightEl.innerHTML = Number.fields.weight;
     weightEl.classList.add('weight')
     spiceContainer.append(weightEl);

    }

      if (name.fields.spice.length > 0) {
        const spiceEl = document.createElement('p');
        spiceEl.innerHTML = Number.fields.spice;
        spiceEl.classList.add ('spice');
        spiceContainer.append(spiceEl);
      }

      container.append(spiceContainer);
      //p and img are html tags 
      //picking up spice containr and put the whole thing in project3 conatiner
});


};

fetchSpices();



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
