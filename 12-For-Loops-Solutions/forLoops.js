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


console.log("PRINTING ALL NUMBERS BETWEEN -10 AND 19");

for(var i = -10; i < 20; i++){
	console.log(i)
}



console.log("PRINTING ALL EVEN BETWEEN 10 AND 40");

// for(var i = 11; i <= 40; i += 2){
// 	console.log(i);
// }

for(var i = 10; i <= 40; i += 1){
	if(i % 2 === 0) {
		console.log(i);
	}
}




console.log("PRINTING ALL ODD NUMBERS BETWEEN 300 AND 333");

for(var i = 300; i <= 333; i++) {
	if(i % 2 !== 0) {
		console.log(i);
	}
}

console.log("PRINTING ALL NUMBERS DIVISIBLE BY 5 AND 3 BETWEEN 5 AND 50");

for(var i = 5; i <= 50; i++){
	if(i % 5 === 0 && i % 3 === 0) {
		console.log(i);
	}
}