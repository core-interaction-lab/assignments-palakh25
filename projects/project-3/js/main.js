function myFunction() {
    // alert("I am an alert box!");
    console.log("arm was clicked ");
    
    var arm= document.getElementById("arm");
 var bodyparts= document.getElementsByClassName ("body");

 
 console.log("bodyparts was clicked",bodyparts);

for (var i=0; i<bodyparts.length; i++)

{
    if (bodyparts[i].getAttribute('id')!= "arm")
    { bodyparts[i].style.opacity=0;}
    
}
    
arm.style.fontSize="50px";

}
function myFunction2() {
    console.log("leg was clicked");

    var leg=document.getElementById("leg");
    var bodyparts= document.getElementsByClassName ("body");

    console.log("bodyparts was clicked", bodyparts);

    for(var i=0; i<bodyparts.length; i++)

    {
        if (bodyparts[i].getAttribute('id')!= "leg")
        { bodyparts[i].style.opacity=0;}

    }
    leg.style.fontSize="50px";
}
function myFunction3() {
    console.log("hand was clicked");

    var hand=document.getElementById("hand");
    var bodyparts= document.getElementsByClassName ("body");

    console.log("bodyparts was clicked", bodyparts);

    for(var i=0; i<bodyparts.length; i++)

    {
        if (bodyparts[i].getAttribute('id')!= "hand")
        { bodyparts[i].style.opacity=0;}

    }
    hand.style.fontSize="50px";
}

function myFunction4() {
    console.log("neck was clicked");

    var neck=document.getElementById("neck");
    var bodyparts= document.getElementsByClassName ("body");

    console.log("bodyparts was clicked", bodyparts);

    for(var i=0; i<bodyparts.length; i++)

    {
        if (bodyparts[i].getAttribute('id')!= "neck")
        { bodyparts[i].style.opacity=0;}

    }
    neck.style.fontSize="50px";
}

function myFunction5() {
    console.log("torso was clicked");

    var torso=document.getElementById("torso");
    var bodyparts= document.getElementsByClassName ("body");

    console.log("bodyparts was clicked", bodyparts);

    for(var i=0; i<bodyparts.length; i++)

    {
        if (bodyparts[i].getAttribute('id')!= "torso")
        { bodyparts[i].style.opacity=0;}

    }
    torso.style.fontSize="50px";
}

function myFunction6() {
    console.log("butt was clicked");

    var butt=document.getElementById("butt");
    var bodyparts= document.getElementsByClassName ("body");

    console.log("bodyparts was clicked", bodyparts);

    for(var i=0; i<bodyparts.length; i++)

    {
        if (bodyparts[i].getAttribute('id')!= "butt")
        { bodyparts[i].style.opacity=0;}

    }
    butt.style.fontSize="50px";
}

const list=["js/images/1.png", "js/images/2.png", "js/images/3.png", "js/images/4.png", "js/images/5.png", "js/images/6.png", "js/images/7.png", "js/images/8.png", "js/images/9.png"]

let position=0;
function nextimage() {position=position+1
    if(position>=list.length)  {position=0};
    const next=list[position] 
    var image=document.getElementById("png");
    image.setAttribute("src", next) 
    


    
}

function previmage() {position=position-1
    if(position<=0)  {position= list.length};
    const prev =list[position] 
    var image=document.getElementById("png");
    image.setAttribute("src", prev) 
   


    
}


//     if(paragraph.style.display=="none" )
      
//     {paragraph.style.display="block";}
//        // body.style.fontSize="14px";
        
        
   
  
  


//     else{
//         paragraph.style.display="none";
//     body.style.fontSize="12px";

   
 


