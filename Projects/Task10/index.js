const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  
  if(userInput==="rock"||userInput==="paper"||userInput==="scissors"||userInput==="bomb")
  {
    return userInput;
  }
  else
  {
    console.log("Invalid input !!!");
  }
}

const getComputerChoice = () =>{
  var choice = Math.floor(Math.random()*3);
   switch(choice){
     case 0 : return "rock";
     break;

     case 1 : return "paper";
     break;

     case 2 : return "scissors";
     break;
   }
}

const determineWinner = (userChoice , computerChoice) => {
  if(userChoice === computerChoice)
  {
    return "Match is a tie !!!";
  }

  if(userChoice === "rock")
  {
    if(computerChoice === "paper")
    {
      return "Computer Won the match";
    }
    else
    {
      return "You won the match";
    }
  }

  if(userChoice === "paper")
  {
    if(computerChoice === "scissors" || computerChoice === "rock")
    {
      return "Computer won the match";
    }
    else
    {
      return "You won the match";
    }
  }

  if(userChoice === "scissors")
  {
    if(computerChoice === "rock" || computerChoice === "paper")
    {
      return "Computer won the match";
    }
    else
    {
      return "You won the match";
    }
  }

}

const playGame = () => {
  var userChoice = getUserChoice("Rock");
  console.log(userChoice);
  if(userChoice === "bomb")
  {
     console.log("You won the match");
  }
  else
  {
    var computerChoice = getComputerChoice();
    console.log(computerChoice);

   console.log(determineWinner(userChoice,computerChoice));
  }
}

playGame();
