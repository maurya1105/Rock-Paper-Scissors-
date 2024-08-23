let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");


const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3); //Generate random index value between 0-2
    return options[randIdx];
}

const drawGame = () =>{
    console.log("Game Draw");
    msg.innerText = "Game Draw, Play Again :)";
    msg.style.backgroundColor = "blue";
}

const showWinner = (userWin,userChoice, compChoice) =>{
    if(userWin){
        userScore++;
        userScorepara.innerText = userScore;
        msg.innerText = `You WIN!! , ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorepara.innerText = compScore;
        msg.innerText = `You Loose :( ,  ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame  = (userChoice) => {
    console.log("choice clicked was", userChoice);
    //Genterate Computer Choice
    const compChoice = genCompChoice();
    console.log("Comp choice =", compChoice);
    //Draw Game
    if(userChoice === compChoice){
        drawGame();
    //Win or Loose
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            if(compChoice === "scissors"){
                userWin = true;                                         //User wins, cuz rock beats scissors
            }else if(compChoice === "paper"){
                userWin = false;                                       //User looses, cuz paper beats rock
            }
        }else if(userChoice === "paper"){
            if(compChoice === "rock"){
                userWin = true;                                      //User wins, cuz paper beats rock
            }else if(compChoice === "scissors"){
                userWin = false;                                    //User looses, cuz scissors beats paper
            }
        }else if(userChoice === "scissors"){ 
            if(compChoice === "rock"){
                userWin = false;                                    //User looses, cuz rock beats scissors
            }else if(compChoice === "paper"){
                userWin = true;                                     //User win, cuz scissors beats paper
            }
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
    
});