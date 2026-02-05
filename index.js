let choices=document.querySelectorAll('.game_btn');
let computer_choices=['rock','paper','scissors'];

let pScore=document.getElementById('player_score');
let cScore=document.getElementById('computer_score');

let reset_button=document.querySelector('#reset');
let choices_info=document.querySelector('#choice_display_area');

let choice='';
let computer_choice='';
choices_info.innerText='choose your option!';

let player_score=0;
let computer_score=0;

choices.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        choice=btn.getAttribute('id');
        computers_turn()
    })
})

function computers_turn(){
    computer_choice=computer_choices[Math.floor(Math.random() * computer_choices.length)];

    game_logic()
}

function game_logic(){
    if(choice==computer_choice){
        choices_info.innerText='Draw';
    }else if(computer_choice=='rock' && choice=='scissors' ||
        computer_choice=='scissors' && choice=='paper' ||
        computer_choice=='paper' && choice=='rock'){
        computer_score=computer_score+1;
        cScore.innerText=computer_score;
        choices_info.innerText=`your's ${choice}, computer's ${computer_choice}`;
    }else if(computer_choice=='rock' && choice=='paper' ||
        computer_choice=='scissors' && choice=='rock' ||
        computer_choice=='paper' && choice=='scissors'){
        player_score=player_score+1;
        pScore.innerText=player_score;
        choices_info.innerText=`your's ${choice}, computer's ${computer_choice}`;
    }
}

reset_button.addEventListener('click',() => {
    player_score=0;
    computer_score=0;
    pScore.innerText=player_score;
    cScore.innerText=computer_score;
    choices_info.innerText='choose your option!';
})