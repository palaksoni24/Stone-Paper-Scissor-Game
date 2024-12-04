let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () =>{
    const options = ["rock","paper","scissors"];
    const randCompChoice = (Math.floor(Math.random() * 3));
    return options[randCompChoice];
} 
//Draw game
const drawGame = ()=>{
        msg.innerText = "Game was Draw. Play Again";
        msg.style.backgroundColor = "#081b31";

};
//Check winner
const showWinner = (userWin, compChoice, userChoice) =>{
    if(userWin){
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You Win! your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
    } else{
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You Lose. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
    }
};
//Play game
const playGame = (userChoice)=>{
        //Generate Computer Choice-> will make another fn which known as modular way of programming.
       const compChoice = genCompChoice();
       if(compChoice===userChoice){
        drawGame();
       }else {
         let userWin = true;
         if(userChoice === "rock"){
        //paper, scissors
         userWin = compChoice === "paper" ? false : true;
       }else if(userChoice === "paper"){
        //scissors, rock
        userWin = compChoice === "scissors" ? false : true;
    }else{
        //rock, paper
        userWin = compChoice === "rock" ? false : true;
       }
       showWinner(userWin, compChoice, userChoice);
       
    }

}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        //console.log("choice was clicked!",userChoice);
         playGame(userChoice);
    })
})

