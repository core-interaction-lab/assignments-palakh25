
const bg60s = ["blue", "red", "purple", "orange"]; //array of lists of colors, varies from era to era
const fnt60s = ["adobe", "khand", "kohinoor", "munshi", "saman"];
const txt60s = ["blue", "red", "pink", "yellow"];
var myPix = new Array("js/images/1.png", "js/images/2.png", "js/images/3.png", "js/images/4.png", "js/images/6.png");
const collage = ["js/collage/f1.png", "js/collage/f2.png", "js/collage/f3.png", "js/collage/f5.png", "js/collage/f6.png"];
const bg260s = ["blue", "red", "purple", "orange"];

function generate60(){
    
    var border60s = document.getElementById("border");
    border60s.style.opacity= 1;}

function generate60controls() {

    var background= document.getElementById("background");
    var random= Math.floor(Math.random()*bg60s.length);
    console.log(random) ;
    console.log(bg60s[random]);
    background.style.backgroundColor= bg60s[random];

    // var font= document.getElementById ("text");
   
    
   
    var rectangle= document.getElementById("textblock-color");
    var random= Math.floor(Math.random()*txt60s.length);
    console.log(random);
    console.log(txt60s[random]);
    rectangle.style.backgroundColor= txt60s[random];

    
    var input60 = document.getElementById('title60');
    input60.style.opacity= '1';}
    
    function generate60controlsprint(){
var randomNum = Math.floor(Math.random() * myPix.length);
document.getElementById("print").src = myPix[randomNum];
   
    }
    //  var randomNum = Math.floor(Math.random() * collage.length);
    //  document.getElementById("actor").src = collage[randomNum];

    function generate60text() {

       
    
        // var font= document.getElementById ("text");
        var title=document.getElementById("title60");
        title.style.opacity= '1';
        var random= Math.floor(Math.random()*fnt60s.length);
        console.log(random);
        console.log (fnt60s[random]);
        // font.style.fontFamily= fnt60s[random];
        title.style.fontFamily= fnt60s[random];
     
        

};


        

var count=0 
function toggleImage() {
    
//     var img1 = "js/collage/f1.png";
//     var img2 = "js/collage/f2.png";
// var img3 = "js/collage/f3.png";
    
//     var imgElement = document.getElementById('toggleImage');
 
//     imgElement.src = (imgElement.src === img1)? img2 : img3; img1;
//  }

// function disappear (){
// var dis =document.getElementById('print');

// print.style.opacity = 0
// 

count=count+1
if (count>collage.length){
    count=0;
}
var imgElement = document.getElementById('toggleImage');
imgElement.setAttribute("src", collage[count])
imgElement.style.opacity= "1";



}


// 90s STYLING 

var bg90s = new Array("90/ombre-90/bg901.jpeg", "js/90/ombre-90/bg902.jpeg", "js/90/ombre-90/bg903.jpg", "js/90/ombre-90/bg904.jpeg", "js/90/ombre-90/bg905.jpeg", "js/90/ombre-90/bg906.jpeg", "js/90/ombre-90/bg907.jpeg", "js/90/ombre-90/bg908.jpg", "js/90/ombre-90/bg909.jpg", "js/90/ombre-90/bg910.jpeg" );
 const fnt90s = ["family1", "family2", "family3", "family4"];
  const collage2 = ["js/collage2/90sactor1.png", "js/collage2/90sactor2.png","js/collage2/90sactor3.png", "js/collage2/90sactor4.png", "js/collage2/90sactor5.png", "js/collage2/90sactor6.png", "js/collage2/90sactor7.png", "js/collage2/90sactor8.png","js/collage2/90sactor9.png", "js/collage2/90sactor10.png"];


    function generate90(){
    
        var border90s = document.getElementById("border3");
        border90s.style.opacity= "1";}

function generate90bg(){
    var randomNum1 = Math.floor(Math.random() * bg90s.length);
    document.getElementById("background1").src = bg90s[randomNum1];}


function generate90text(){
    var input90 = document.getElementById('title90');
input90.style.opacity= '1';

// var title2=document.getElementById('title90');
    
    var random= Math.floor(Math.random()*fnt90s.length);
    console.log(random);
    console.log (fnt90s[random]);
  
     input90.style.fontFamily= fnt90s[random];
 
}


var count=0 
function generate90img() {
    

count=count+1
if (count>collage2.length){
    count=0;
}
var imgElement3 = document.getElementById('toggleImage2');
imgElement3.setAttribute("src", collage2[count])
imgElement3.style.opacity= "1";}
// 80s code

const border1980s = ["blue", "red", "purple", "orange"]; 
const fnt80s = ["family5.ttf", "family6.ttf", "family7.otf", "family8.ttf", "family9.ttf"];
function generate80(){

    var border80s = document.getElementById("border4");
    border80s.style.opacity= "1";}

    function generate80sborder(){
var border80= document.getElementById("border1980s");
    var random= Math.floor(Math.random()*border1980s.length);
    console.log(random) ;
    console.log(border1980s[random]);
    border80.style.borderColor = border1980s[random];
    border80.style.opacity = "1";

    }
    function generate80stext(){
        var input80 = document.getElementById('title80');
    input80.style.opacity= '1';
    
    // var title2=document.getElementById('title90');
        
        var random= Math.floor(Math.random()*fnt80s.length);
        console.log(random);
        console.log (fnt80s[random]);
      
         input80.style.fontFamily= fnt80s[random];
     

    }
    const collage4 = ["js/collage3/80actor1.png", "js/collage3/80actor2.png","js/collage3/80actor3.png","js/collage3/80actor4.png","js/collage3/80actor5.png"];
    var count=0 
function generate80simg() {
    

count=count+1
if (count>collage4.length){
    count=0;
}
var imgElement5 = document.getElementById('img80s');
imgElement5.setAttribute("src", collage4[count])
imgElement5.style.opacity= 1;}

const collage5 = ["js/bg80/bg801.jpg", "js/bg80/bg802.jpg", "js/bg80/bg803.jpg", "js/bg80/bg804.jpg", "js/bg80/bg805.jpg", "js/bg80/bg806.jpeg", "js/bg80/bg807.jpg"]

var count=0 
function generate80sbg() {
    
   
if (count>collage5.length){
    count=0;
}
var imgElement6 = document.getElementById('bg80s');
imgElement6.setAttribute("src", collage5[count])
imgElement6.style.opacity= 1;}







function custom() {
    var border2000s = document.getElementById("twothousand");
        border2000s.style.opacity= "1";}


        function gradientsbg() {
    const bgInner = document.querySelector('#bg-gradient .inner');
    document.addEventListener('mousemove', evt => {
        const x = evt.clientX;
        const y = evt. clientY;
        //console.log(x, y);
        const percent = x / window.innerWidth;
        console.log(percent);
        bgInner.setAttribute('style', `left: -${percent * 100}%`);
        bgInner.style.opacity="1";
    });
    
    }

    function generate2000text(){
        var title2000 = document.getElementById('title2000');
    title2000.style.opacity= '1';

    // var font= document.getElementById ("text");
    var title2000=document.getElementById("title2000");
    
    var random= Math.floor(Math.random()*fnt60s.length);
    console.log(random);
    console.log (fnt60s[random]);
    // font.style.fontFamily= fnt60s[random];
    title2000.style.fontFamily= fnt60s[random];
 
    
    }
    const gifs2000 = ["js/gifs/gif1.gif", "js/gifs/gif2.gif","js/gifs/gif3.gif","js/gifs/gif4.gif","js/gifs/gif5.gif","js/gifs/gif6.gif", "js/gifs/gif7.gif", "js/gifs/gif8.gif", "js/gifs/gif9.gif", "js/gifs/gif10.gif", "js/gifs/gif11.gif"];
      
    var count=0 
function gif2000() {
    

count=count+1
if (count>gifs2000.length){
    count=0;
}
var imgElement6 = document.getElementById('gifs');
imgElement6.setAttribute("src", gifs2000[count])
imgElement6.style.opacity= "1";}


