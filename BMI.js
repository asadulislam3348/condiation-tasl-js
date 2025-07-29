
// task 2

let weight=65;
let hight=1.85;
let bmi=weight/(hight)^2;

console.log('your bmi is:' +bmi);

if(bmi<18.5){
    console.log('you are underweight');
}else if (bmi>=18.5 && bmi<=24.9){
        console.log('you are normal');
    }else if (bmi >= 25 && bmi<=29.9){
        console.log('you are overweight');
    } else{
    console.log('You are obese');
}