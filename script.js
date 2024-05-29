'use strict';
// document.querySelector('.message').textContent='correct number';
// document.querySelector('.number').textContent=13;
// document.querySelector('.score').textContent=10;
// document.querySelector('.guess').value=30;

const secretNumber=Math.trunc(Math.random()*20)+1;
let score=20;
let highscore=0;

//function display message
const displayMessage=function(message){
    document.querySelector('.message').textContent=message;
}
document.querySelector('.check').addEventListener('click',function(){
const guess=Number(document.querySelector('.guess').value);
console.log(guess);
if(!guess){
   // document.querySelector('.message').textContent='No number!';
   displayMessage('No number!');
}

//When guess is correct
else if(guess===secretNumber){
    displayMessage('correct number');
   // document.querySelector('.message').textContent='correct number';
    document.querySelector('.number').textContent=secretNumber;
    document.querySelector('body').style.backgroundColor='green';
    document.querySelector('.number').style.width='30rem';

    if(score>highscore){
        highscore=score;
        document.querySelector('.highscore').textContent=highscore;
    }
}
//when Guess is wrong
else if(guess!== secretNumber){
    if(score>1){
        displayMessage(guess>secretNumber? 'Too High': 'Too Low');
       // document.querySelector('.message').textContent=
       // guess>secretNumber? 'Too High': 'Too Low';
    score--;
    document.querySelector('.score').textContent=score;
}else{
    displayMessage('You lost the game..');
    //document.querySelector('.message').textContent='You lost the game..';
    document.querySelector('.score').textContent=0;
}
}

//when guess is too low
// else if(guess<secretNumber){
//     if(score>1){
//         document.querySelector('.message').textContent='Too low';
//     score--;
//     document.querySelector('.score').textContent=score;

//     }else{
//         document.querySelector('.message').textContent='You lost the game..';
//         document.querySelector('.score').textContent=0;
//     }

    
// } 
// //when Guess is Too High
// else if(guess >secretNumber){

//     if(score>1){
//         document.querySelector('.message').textContent='Too high';
//     score--;
//     document.querySelector('.score').textContent=score;

//     }
    /*else if(guess>20){
        document.querySelector('.quess').value='';
        document.querySelector('.message').textContent='Sorry!!! wrong number put number between 1 to 20';
    }*/
    //lost the game
    // else{
    //     displayMessage('You lost the game..');
    //     //document.querySelector('.message').textContent='You lost the game..';
    //     document.querySelector('.score').textContent=0;
    // }
    
});
//restarting the game by pressing again button
document.querySelector('.again').addEventListener('click',function(){

let score=20;
const secretNumber=Math.trunc(Math.random()*20)+1;
displayMessage('start geusing...');
//document.querySelector('.message').textContent='start geusing...';
document.querySelector('.score').textContent=score;
document.querySelector('.number').textContent='?';
document.querySelector('.guess').value='';

document.querySelector('body').style.backgroundColor='black';
document.querySelector('.number').style.width='15rem';


});