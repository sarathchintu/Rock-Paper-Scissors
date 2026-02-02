let choices=document.querySelectorAll('.game_btn');
let computer_choices=['rock','paper','scissors'];
let choice='';
let computer_choice='';
let pScore=document.getElementById('player_score');
let cScore=document.getElementById('computer_score');
let player_score=0;
let computer_score=0;
choices.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        choice=btn.getAttribute('id');
        computer_choice=computer_choices[Math.floor(Math.random() * computer_choices.length)];
        if(choice==computer_choice){
            alert(`both choices are same ${choice} and ${computer_choice}`);
        }else if(computer_choice=='rock' && choice=='scissors' ||
            computer_choice=='scissors' && choice=='paper' ||
            computer_choice=='paper' && choice=='rock'
        ){
            computer_score=computer_score+1;
            cScore.innerText=computer_score;
        }
        else if(computer_choice=='rock' && choice=='paper' ||
            computer_choice=='scissors' && choice=='rock' ||
            computer_choice=='paper' && choice=='scissors'
        ){
            player_score=player_score+1;
            pScore.innerText=player_score;
        }
    })
})