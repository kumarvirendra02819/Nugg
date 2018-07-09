function getClothing(isCold) {
  if(isCold){
   var freezing = 'Grab a jacket';
 } else {
    var hot = 'It’s a shorts kind of day.';
   console.log(freezing);
 }
 
 }
 

 //returns undefined because isCold variable in not passed as argument in the function, due to this the program will enter into the "else" part of condition
 //and in the else part of condition, variable 'freezing' is undefined because it is defined in the 'true' part of 'if' statement
 getClothing();

 //following function will also work like the getClothing() call
 getClothing(false); 