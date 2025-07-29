let age=60;
let price=1000;
let isStudent=false;
let pay;

if(age<5){
    pay=0;
}else if(age >=5 && age<=17){
    pay= price*0.5;
}else if(isStudent===true){
    pay=price*0.4;
}else if(age >= 60){
    pay=price*0.75;
}else{
    pay=price
}

console.log('total pay:', pay);