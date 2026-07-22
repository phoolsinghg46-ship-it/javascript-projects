let userscore = 1;
let compscore = 1;

const choices = document.querySelectorAll(".image");
let status = document.querySelector("#status");
let users = document.querySelector("#userscore");
let comps = document.querySelector("#compscore");
let s = document.querySelector(".status");

const showWinner = (userwin,compchoice) => {
    if (userwin === true){
        status.innerText = `Computer chosse ${compchoice} Wow! You win`;
        users.innerText = userscore;
        userscore += 1;
        console.log("you win!")
        s.style.backgroundColor = "green"
        status.style.backgroundColor = "green"
    }else{
        status.innerText = `Computer chosse ${compchoice} Oh! You lose`;
        console.log("you lose!")
        comps.innerText = compscore;
        compscore += 1;
        s.style.backgroundColor = "red"
        status.style.backgroundColor = "red"
    }
    }




const playgame = (userchoice) => {
    console.log(userchoice);
    let comprandom = Math.floor((Math.random())*3);
    let choiceArr = ["rock","paper","scissor"];
    let compchoice = choiceArr[comprandom];
    console.log(compchoice);

    if (compchoice === userchoice){
        status.innerText =`Computer chosse ${compchoice}Its Draw! `; 
        status.style.backgroundColor = "rgb(12, 6, 6)";
        s.style.backgroundColor = "rgb(12, 6, 6)";
        console.log("Draw!")
    }else{
        let userwin = true;
        if (userchoice = "rock"){
            userwin = compchoice === "paper" ? false : true ;
        }else if (userchoice === "paper") {
            userwin = compchoice === "rock" ? false : true;
        }else {
            userwin = compchoice === "scissor" ? false : true;
        }
        showWinner(userwin,compchoice);
    } 

    
};





choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        let userchoice = choice.getAttribute("id");
        playgame(userchoice);
        
    });
});

