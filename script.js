let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () =>{
    const options = ["rock","paper","scissors"];
    //rock,paper,scissors
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}
//print func for draw game

const drawGame = () =>{
    console.log("Game was Draw.");
    msg.innerText = "!!! DRAW !!! PLAY AGAIN !!!"
    msg.style.backgroundColor = "#085"
    msg.style.color= "#000";
}

const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you win!!");
        msg.innerText = `YOU WIN! ${userChoice} beats ${compChoice}`; 
        msg.style.backgroundColor = "red";
        msg.style.color= "#000";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("You Lose!!");
        msg.innerText = `YOU LOSE! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "blue";
        msg.style.color= "#fff";
    }
}
const  playGame = (userChoice) =>{
    console.log("user choice =",userChoice);
    //Generate computer choice
    const compChoice = genCompChoice();
    console.log("comp Choice = ", compChoice);

    if(userChoice === compChoice){
        //Draw Game
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissors, paper
            userWin = compChoice ==="paper" ? false :true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice==="scissors"? false : true; 
        }
        else{
            userWin = compChoice==="rock"? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked",userChoice);
        playGame(userChoice);
    })
})
