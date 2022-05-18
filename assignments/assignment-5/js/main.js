// This whole page works using just one function:
var generate = function() {
  
    var storyDiv = document.getElementById("story");
   
    
var name = document.getElementById("name").value;
    var place = document.getElementById("place").value;
    var noun = document.getElementById("noun").value; 
    var adjective = document.getElementById("adjective").value;
    var noun1 = document.getElementById("noun1").value; 
    var noun2 = document.getElementById("noun2").value; 
    var noun3 = document.getElementById("noun3").value; 
    var noun4 = document.getElementById("noun4").value; 
    var noun5 = document.getElementById("noun5").value; 
    var noun6 = document.getElementById("noun6").value; 
   var verb = document.getElementById("verb").value;
    
 
   
    storyDiv.innerHTML =
  
  "One day" +'&nbsp' + name  +'&nbsp' + "and his friend were lying on a"  +'&nbsp' + place  +'&nbsp' +"and enjoying the"  +'&nbsp' +noun   +'&nbsp' +". It was a"  +'&nbsp' +adjective +'&nbsp' +"day, and they were smiling to themselves."  + "Seeing his friend,"  +'&nbsp' +name  +'&nbsp' +"inquired as to what was causing him to smile. His friend replied saying he was thinking about the day when he will be truly happy"+
"“When is that?”"  +'&nbsp' +name  +'&nbsp' + "asked. His friend went on to explain that he will truly feel happy when he has"  +'&nbsp' +noun1  +'&nbsp' + ","  +'&nbsp' +noun2 +"," +'&nbsp' + noun3 +"," +'&nbsp'  + "a pretty"  +'&nbsp'  +noun4  +'&nbsp' + "and four"  +'&nbsp' +noun5  +'&nbsp' + "who would get educated and earn a lot of" +'&nbsp' + noun6 +"."+
  `Interrupting this monologue,&nbsp${name}&nbspasked, “After all this, what will you do?” To which his friend replies “After all this, I can &nbsp${verb}. Hearing this,&nbsp${name}&nbspgives out a mighty laugh!` ;}