// commitment
// while loop
let day = 1;
while (day <= 60) {
  console.log(
    "I will invest at least 6 hrs every single day for next 60 days!"
  );
  day++;
}
/// for loop
for(let day =1 ; day<=60; day++){
  console.log("I will invest at least 6 hrs every single day for next 60 days!:", day)
}


// odd even

// subtask-1  : Find all the odd numbers from 61 to 100.
// while    
let num = 61;
while (num <= 100) {
  console.log(num);

  if(num % 2===1){
    console.log('odd number', num)
  }
  num++;
}
// for loop    
for(let i=61; i<=100;i=i+2){
    console.log(i)
}

// Subtask-1:
// Find all the even numbers from 78 to 98.
let number =78;
while(number<=98){
    console.log(number);
    if(number % 2===0){
        console.log(' even numbers', number)
    }
    number++;
}
// for loop
for(let i=78; i<=98;i=i+2){
    console.log(i)
}

// Display sum of all the odd numbers from 81 to 131.


let sum =81;
let total=0;
while(sum<=131){
    console.log(sum);
    if(sum % 2 ===1){
        console.log('odd numbers', sum)
total += sum;
    }
sum++;
}

console.log('Sum of all odd numbers from 81 to 131 is:', total);




// Display sum of all the even numbers from 206 to 311.

let even=206;
let sums=0;

while(even<=311){
    console.log(even);
if(even %2 === 0){
    console.log('even numbers', even)
sums+= even
}
    even++;
}

console.log(' sum of all the even numbers from 206 to 311 is', sums);

