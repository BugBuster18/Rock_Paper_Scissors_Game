let humanChoice = null;  // Declare the global variable for the player's choice
let humanScore=0 , computerScore=0;
let okbttn = document.querySelector(".Restart");
let drawno=0,wonno=0,lostno=0;
let plrboard = document.querySelector(".PlayerScore");
let compboard = document.querySelector(".ComputerScore")
function resetstatclick(){
    drawno=0;
    wonno=0;
    lostno=0;
    document.querySelector(".drawno").textContent = drawno;
    document.querySelector(".wonno").textContent = wonno;
    document.querySelector(".lostno").textContent = lostno;
}

function getComputerChoice(){
    let a;
    let resultc =document.querySelector(".resultc");
    a = Math.floor(Math.random()*3) +1;
    switch(a){
        case 1: 
        resultc.src ="./rockpaperscissorsimage/rockimg.png";
        return "rock";
        break;
        case 2: 
        resultc.src ="./rockpaperscissorsimage/paperimg.png";
        return "paper";
        break;
        case 3: 
        resultc.src ="./rockpaperscissorsimage/scissorsimg.png";
        return "scissors";
        break;
        default:
            console.log("invalid input");
    }
}
function getHumanChoice() {
    let resultp = document.querySelector(".resultp");
    let options = document.querySelector("#options"); // Assuming you have a div with the id "options"
 
        function clickfunction(event) {
        let playerschoice=event.target;
        switch(playerschoice.className){
            case 'box Rockimg': 
            playerschoice='rock';
            resultp.src ="./rockpaperscissorsimage/rockimg.png";
            break;
            case 'box Paperimg': playerschoice='paper';
            resultp.src ="./rockpaperscissorsimage/paperimg.png";
            break;
            case 'box Scissorsimg': playerschoice='scissors';
            resultp.src ="./rockpaperscissorsimage/scissorsimg.png";
            break;  
        }
        options.removeEventListener("click", clickfunction);
        if (playerschoice) {
            humanChoice = playerschoice; // Save the class name of the clicked element
            console.log("Player's choice:", humanChoice);
            playRound(humanChoice, getComputerChoice());
        }
    }
    options.addEventListener("click", clickfunction); 
    
}


// paper beats rock , scissor beats paper , rock beats scissors
function playRound(humanChoice , computerChoice){
    let updatescoreplr = document.querySelector(".updatescoreplr");
    let updatescorecomp = document.querySelector(".updatescorecomp");
    let statdraw = document.querySelector(".drawno");
    let statwon =document.querySelector(".wonno");
    let statlost = document.querySelector(".lostno");
    
    if((humanChoice == "rock" && computerChoice== "scissors")||(humanChoice=="paper" && computerChoice=="rock")||(humanChoice=="scissors" && computerChoice=="paper")){
        humanScore++;
        wonno++;
        updatescoreplr.textContent= parseInt(humanScore);
        plrboard.style.backgroundColor="#d4edda";
        plrboard.style.borderLeft=" 5px solid #28a745";
        compboard.style.backgroundColor="#f8d7da";
        compboard.style.borderLeft="5px solid #dc3545";
        statwon.textContent=wonno;
        console.log(`You won the round! - ${humanChoice} beats ${computerChoice}`);
    }
    if((computerChoice == "rock" && humanChoice== "scissors")||(computerChoice=="paper" && humanChoice=="rock")||(computerChoice=="scissors" && humanChoice=="paper")){
        computerScore++;
        lostno++;
        compboard.style.backgroundColor="#d4edda";
        compboard.style.borderLeft=" 5px solid #28a745";
        plrboard.style.backgroundColor="#f8d7da";
        plrboard.style.borderLeft="5px solid #dc3545";
        updatescorecomp.textContent=computerScore;
        statlost.textContent=lostno;
        console.log(`Computer won the round! - ${computerChoice} beats ${humanChoice}`);
    }
    if(computerChoice === humanChoice){
        console.log(`It's a Tie!`);
        drawno++;
        plrboard.style.backgroundColor="#fff3cd";
        plrboard.style.borderLeft=" 5px solid #ffc107";
        compboard.style.backgroundColor="#fff3cd";
        compboard.style.borderLeft="5px solid #ffc107";
        statdraw.textContent=drawno;
    }
    if(humanScore==3 || computerScore==3){
        declareWinner();
    }
    else{
        getHumanChoice();
        
    }
}

// function playGame(){
//     for(let i=1;i<=5;i++){
//         // let humanChoice = getHumanChoice();
//         // let computerChoice = getComputerChoice();
//         // playRound(humanChoice,computerChoice);
//         getHumanChoice();
//     }
// }

function declareWinner(){
    let displayfinal = document.querySelector(".overlay");
    let textresult = document.querySelector(".textResult");
    let textdescribe = document.querySelector(".textDescribe");
    let announce =document.querySelector(".announceResult");
   
    if(humanScore>computerScore){
        displayfinal.classList.add("show");
        announce.classList.add("announceResultshow");
        textresult.textContent="CONGRATULATIONS 🎉";
        textdescribe.textContent="You Won!"
        textresult.style.color ="rgb(16, 185, 78)";

    }
    else if(humanScore<computerScore){
        displayfinal.classList.add("show");
        announce.classList.remove("announceResultshow");
        textresult.textContent="Try Again 🙁";
        textdescribe.textContent="You Lost";
        textresult.style.color ="Red";
    }
    else{
        displayfinal.classList.add("show");
        announce.classList.remove("announceResultshow");
        textresult.textContent="Tie";
        textdescribe.textContent="It's a Tie!";
        textresult.style.color ="Blue";
    }
    okbttn.addEventListener("click",restart);
    // okbttn.removeEventListener("click",resetGame());
    let resetstat = document.querySelector(".statsText");
    resetstat.addEventListener("click",resetstatclick);
    
    
}


function restart(){
    resetGame();
    getHumanChoice();
}
function resetGame() {
    humanScore = 0;
    computerScore = 0;
    let displayfinal = document.querySelector(".overlay");
    displayfinal.classList.remove("show");
    let updatescoreplr = document.querySelector(".updatescoreplr");
    let updatescorecomp = document.querySelector(".updatescorecomp");
    updatescoreplr.textContent = humanScore;
    updatescorecomp.textContent = computerScore;
    let resultp = document.querySelector(".resultp");
    let resultc = document.querySelector(".resultc");
    resultp.src = "./rockpaperscissorsimage/paperimg.png"; 
    resultc.src = "./rockpaperscissorsimage/paperimg.png"; 
    okbttn.removeEventListener("click",restart);

        plrboard.style.backgroundColor="rgb(159, 159, 159,0.4)";
        plrboard.style.borderLeft=" 0px solid #ffc107";
        compboard.style.backgroundColor="rgb(159, 159, 159,0.4)";
        compboard.style.borderLeft="0px solid #ffc107";
   
    
  }
getHumanChoice();
