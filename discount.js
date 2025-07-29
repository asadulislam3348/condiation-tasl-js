let age=9;
let isStudent=true;
let mainfare=800;
let fare;


if(age<10){
    fare=0;

}else if(isStudent===true){
fare=mainfare*0.5;

}else if(age>=60){
    fare=mainfare*0.85;
}

else{
    fare=mainfare;
   
}
console.log('give regular fare is:'
   , fare)

