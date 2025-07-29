let marks=70;
let fail= "no scholarship";
let isRural=false
let result;

if(marks>=90){
result= "full scholarship";

}else if(marks>=80 && isRural===true){
    result="full scholarship";

}else if(marks>=70){
    result=result*0.5;

}else{
result=fail;
}

console.log('your result is:', result);