
const bg60s = ["blue", "red", "purple", "orange"]; //array of lists of colors, varies from era to era
const fnt60s = ["adobe", "khand", "kohinoor", "munshi", "saman"];
const txt60s = ["blue", "red", "pink", "yellow"];
var myPix = new Array("js/images/1.png", "js/images/2.png", "js/images/3.png", "js/images/4.png", "js/images/6.png");
const collage = ["js/collage/f1.png", "js/collage/f2.png", "js/collage/f3.png", "js/collage/f5.png", "js/collage/f6.png"];
const bg260s = ["blue", "red", "purple", "orange"];

function generate60(){

    var background= document.getElementById("background");
    var random= Math.floor(Math.random()*bg60s.length);
    console.log(random) ;
    console.log(bg60s[random]);
    background.style.backgroundColor= bg60s[random];

    // var font= document.getElementById ("text");
    var title=document.getElementById("title60");
    
    var random= Math.floor(Math.random()*fnt60s.length);
    console.log(random);
    console.log (fnt60s[random]);
    // font.style.fontFamily= fnt60s[random];
    title.style.fontFamily= fnt60s[random];
 
    
   
    var rectangle= document.getElementById("textblock-color");
    var random= Math.floor(Math.random()*txt60s.length);
    console.log(random);
    console.log(txt60s[random]);
    rectangle.style.backgroundColor= txt60s[random];

    
    var input60 = document.getElementById('title60');
    input60.style.opacity= '1';
    
    
var randomNum = Math.floor(Math.random() * myPix.length);
document.getElementById("print").src = myPix[randomNum];
   

    //  var randomNum = Math.floor(Math.random() * collage.length);
    //  document.getElementById("actor").src = collage[randomNum];


}
    

        

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
imgElement.setAttribute("src", collage[count]);


}


// 90s STYLING 

var bg90s = new Array("90/ombre-90/bg901.jpeg", "js/90/ombre-90/bg902.jpg", "js/90/ombre-90/bg903.jpg", "js/90/ombre-90/bg904.jpeg", "js/90/ombre-90/bg905.jpg", "js/90/ombre-90/bg906.jpeg", "js/90/ombre-90/bg907.jpeg", "js/90/ombre-90/bg908.jpg", "js/90/ombre-90/bg909.jpg" );
 const fnt90s = ["family1", "family2", "family3", "family4"];
  const collage2 = ["js/collage2/90sactor1.png", "js/collage2/90sactor2.png","js/collage2/90sactor3.png", "js/collage2/90sactor4.png", "js/collage2/90sactor5.png", "js/collage2/90sactor6.png", "js/collage2/90sactor7.png", "js/collage2/90sactor8.png","js/collage2/90sactor9.png", "js/collage2/90sactor10.png"];

function generate90() {

    var randomNum1 = Math.floor(Math.random() * bg90s.length);
    document.getElementById("background1").src = bg90s[randomNum1];

    var input90 = document.getElementById('title90');
input90.style.opacity= '1';



    var title2=document.getElementById('title90');
    
    var random= Math.floor(Math.random()*fnt90s.length);
    console.log(random);
    console.log (fnt90s[random]);
  
    title2.style.fontFamily= fnt90s[random];
 
}

const bgInner = document.querySelector('#bg-gradient .inner');
document.addEventListener('mousemove', evt => {
    const x = evt.clientX;
    const y = evt. clientY;
    //console.log(x, y);
    const percent = x / window.innerWidth;
    console.log(percent);
    bgInner.setAttribute('style', `left: -${percent * 100}%`);
});

var count=0 
function toggleImage2() {
    

count=count+1
if (count>collage2.length){
    count=0;
}
var imgElement2 = document.getElementById('toggleImage2');
imgElement2.setAttribute("src", collage2[count]);}

// 80s code

const border80s = ["blue", "red", "purple", "orange"]; 

function generate80(){
var border80= document.getElementById("border");
    var random= Math.floor(Math.random()*border80s.length);
    console.log(random) ;
    console.log(border80s[random]);
    border80.style.border = border80s[random];
}