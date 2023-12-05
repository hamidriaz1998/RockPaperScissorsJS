function getComputerChoice() {
    choices = ["Rock", "Paper", "Scissors"]
    return choices[Math.floor((Math.random() * 3))]
}
function hasPlayerWon(playerChoice, computerChoice) {
    if ((playerChoice == "Rock" && computerChoice == "Paper") || (playerChoice == "Paper" && computerChoice == "Scissors") || (playerChoice == "Scissors" && computerChoice == "Rock")) {
        return false;
    }
    else {
        return true;
    }
}

function game() {
    let pCount = 0, cCount = 0, count = 5;
    while (count != 0) {
        let playerChoice = prompt("Enter your choice: ");
        let computerChoice = getComputerChoice();
        console.log(`Your choice: ${playerChoice}\n`);
        console.log(`Computer's choice: ${computerChoice}\n`);
        if (hasPlayerWon(playerChoice, computerChoice)) {
            console.log("You won have this round\n");
            pCount++;
        }
        else {
            console.log("You have lost this round\n");
            cCount++;
        }
        count--;
    }
    if (pCount > cCount) {
        console.log(`You won the best of 5 with ${pCount} points.`)
    }
    else {
        console.log(`You lost the best of 5 by ${cCount} points`)
    }
}
game();