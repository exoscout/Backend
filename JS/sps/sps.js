let score= JSON.parse(localStorage.getItem('score')) || {
    loss:0,
    wins:0,
    ties:0,
};


function genTurn(){
    let compTurn=Math.random();
    compTurn=compTurn*3;
    compTurn=Math.floor(compTurn)+1;
    return compTurn;
}

function compTurnText(compTurn){
    if(compTurn==1){
        document.querySelector('#CompTurn').textContent="Computer chose :Stone";
    }else if(compTurn==2){
        document.querySelector('#CompTurn').textContent="Computer chose :Paper";
    }else{
        document.querySelector('#CompTurn').textContent="Computer chose :Scissors";
    }
}

function genScore(userTurn,compTurn){
    if(compTurn==1 && userTurn==1){
        compTurnText(compTurn);
        document.querySelector('#result').textContent="It's a tie!";
        score.ties++;
    }else if(compTurn==2 && userTurn==1){
        compTurnText(compTurn);
        document.querySelector('#result').textContent="You lose!";
        score.loss++;
    }else if(compTurn==3 && userTurn==1){
        compTurnText(compTurn);
        document.querySelector('#result').textContent="You win!";
        score.wins++;
    }else if(compTurn==1 && userTurn==2){
        compTurnText(compTurn);
        document.querySelector('#result').textContent="You win!";
        score.wins++;
    }else if(compTurn==2 && userTurn==2){
        compTurnText(compTurn);
        document.querySelector('#result').textContent="It's a tie!";
        score.ties++;
    }else if(compTurn==3 && userTurn==2){
        compTurnText(compTurn);
        document.querySelector('#result').textContent="You lose!";
        score.loss++;
    }else if(compTurn==1 && userTurn==3){
        compTurnText(compTurn);
        document.querySelector('#result').textContent="You lose!";
        score.loss++;
    }else if(compTurn==2 && userTurn==3){
        compTurnText(compTurn);
        document.querySelector('#result').textContent="You win!";
        score.wins++;
    }else if(compTurn==3 && userTurn==3){
        compTurnText(compTurn);
        document.querySelector('#result').textContent="It's a tie!";
        score.ties++;
    } 

}

updateScore();
function updateScore(){
    document.querySelector("#score").innerText= `Wins : ${score.wins} Losses : ${score.loss} Ties : ${score.ties}`;
    localStorage.setItem('score', JSON.stringify(score));
}

function resetScore(){
    document.querySelector("#score").innerText= `Wins : 0 Losses : 0 Ties : 0`;
    localStorage.removeItem('score');
    location.reload();
}

document.querySelector('#stone').addEventListener('click', function() {
    let compTurn=genTurn();
    let userTurn=1;
    genScore(userTurn,compTurn);
    updateScore();
});

document.querySelector('#paper').addEventListener('click', function() {

    let compTurn=genTurn();
    let userTurn=2;
    genScore(userTurn,compTurn);
    updateScore();
});

document.querySelector('#scissors').addEventListener('click', function() {
    let compTurn=genTurn();
    let userTurn=3;
    genScore(userTurn,compTurn);
    updateScore();
});

document.querySelector('#resetButton').addEventListener('click', function() {
    resetScore();
});



