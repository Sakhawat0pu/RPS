function rpsGame(yourChoice) {
    let humanChoice = yourChoice.id;
    let num = Math.floor(Math.random() * 3);
    let list = ["rock", "paper", "scissor"];
    let botChoice = list[num];
    result = decideWinner(humanChoice, botChoice);
    message = finalMessage(result);
    frontEnd(humanChoice, botChoice, message);
};

function decideWinner(yourChoice, computerChoice) {
    let winnerDatabase = {
        "rock": { "scissor": 1, "rock": 0.5, "paper": 0 },
        "paper": { "rock": 1, "paper": 0.5, "scissor": 0 },
        "scissor": { "paper": 1, "scissor": 0.5, "rock": 0 }
    }
    let humanScore = winnerDatabase[yourChoice][computerChoice];
    let computerScore = winnerDatabase[computerChoice][yourChoice];

    return [humanScore, computerScore];
};

function finalMessage([yourScore, computerScore]) {
    if (yourScore == 0) {
        return { "text": "You lost!", "color": "red" };
    }
    else if (yourScore == 0.5) {
        return { "text": "You tied!", "color": "yellow" };
    }
    else {
        return { "text": "You won!", "color": "green" };
    }
};

function frontEnd(humanImageChoice, botImageChoice, message) {
    let rpsDatabase = {
        "rock": document.getElementById("rock").src,
        "paper": document.getElementById("paper").src,
        "scissor": document.getElementById("scissor").src
    }
    // removing images
    document.getElementById("rock").remove();
    document.getElementById("paper").remove();
    document.getElementById("scissor").remove();

    // adding divs for images and message
    let humanDiv = document.createElement("div");
    let messageDiv = document.createElement("div");
    let botDiv = document.createElement("div");

    humanDiv.innerHTML = "<img src='" + rpsDatabase[humanImageChoice] + "' style='box-shadow: 0px 10px 50px rgba(37, 50, 223, 1);'>"
    messageDiv.innerHTML = "<h1 style ='font-size: 70px; color:" + message["color"] + ";'>" + message["text"] + "</h1>";
    botDiv.innerHTML = "<img src='" + rpsDatabase[botImageChoice] + "'style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>"

    document.getElementById("flex-box-rps").appendChild(humanDiv);
    document.getElementById("flex-box-rps").appendChild(messageDiv);
    document.getElementById("flex-box-rps").appendChild(botDiv);
}

function reset() {
    document.location.reload(true);
}