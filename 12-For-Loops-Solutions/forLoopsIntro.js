//For Loops
//Printing numbers from 1-5 with a for loop

for(var count = 1; count < 6; count++) {
    console.log(count);
  }
  
  //Printing numbers from 1-5 with a while loop
  var count = 1;
  
  while(count < 6) {
   console.log("count is: " + count);
   count++;
  }
  
//Printing each character in a string with a for loop
var str = "hello";

for(var i = 0; i < str.length; i++){
  console.log(str[i]);
}

//Printing each character in a string with a while loop
var str = "hello";
var count = 0;   
 
while(count < str.length) {
 console.log(str[count]);
 count++;
}
