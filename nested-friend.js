let myScore=80;
let friendScore=55;
if(myScore>80){
    if(friendScore>80){
        console.log('go for a lunch.');
    }else if(friendScore<=80 && friendScore>=60){
        console.log('good luck next time.');
    }else if(friendScore<=60 && friendScore>=40){
        console.log('unseen his massage');
    }else if(friendScore<40 ){
        console.log('block kora da.');
    }
}else{
    console.log('go to home and sleep and act sad');
}