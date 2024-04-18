function rps(imageID) {
    var outputObj = document.getElementById("output");
   var randomSelection = getRandomInt();
    var img = document.getElementById("image");
    var resetButton = document.getElementById("resetButton");


    disableButtons(true); 

    if (imageID == 'rock') {
        if (randomSelection == 1) {
            outputObj.innerHTML = "<br>DRAW! <br> PICK AGAIN";
            img.src = "rock.png";
            handleDraw();
        } else if (randomSelection == 2) {
            outputObj.innerHTML = "<br>YOU LOST";
            img.src = "paper.png";
            resetButton.textContent = "TRY AGAIN";
            resetButton.style.display = "block";
        } else if (randomSelection == 3) {
            outputObj.innerHTML = "<br>YOU WIN";


            img.src = "scissors.png";
            resetButton.textContent = "RESUME";
            resetButton.style.display = "block";
        }
    } else if (imageID == 'paper') {
        if (randomSelection == 1) {
            outputObj.innerHTML = "<br>YOU WIN";
            img.src = "rock.png";
            resetButton.textContent = "RESUME";
            resetButton.style.display = "block";
        } else if (randomSelection == 2) {
            outputObj.innerHTML = "<br>DRAW! <br> PICK AGAIN";

            img.src = "paper.png";
            handleDraw();
        } else if (randomSelection == 3) {
            outputObj.innerHTML = "<br>YOU LOST";
            img.src = "scissors.png";
            resetButton.textContent = "TRY AGAIN";
            resetButton.style.display = "block";
        }
    } else if (imageID == 'scissors') {
        if (randomSelection == 1) {
            outputObj.innerHTML = "<br>YOU LOST";
            img.src = "rock.png";
            resetButton.style.display = "block";
            resetButton.textContent = "TRY AGAIN";
        } else if (randomSelection == 2) {
            outputObj.innerHTML = "<br>YOU WIN";
            img.src = "paper.png";
            resetButton.style.display = "block";
            resetButton.textContent = "RESUME";
        } else if (randomSelection == 3) {
            outputObj.innerHTML = "<br>DRAW! <br> PICK AGAIN";
            img.src = "scissors.png";
            handleDraw();
        }
    }

    function handleDraw() {
        outputObj.innerHTML = "<br>DRAW! <br> PICK AGAIN";
        img.src = "question.png"; 
        resetButton.style.display = "none"; 
        setTimeout(function () {
            outputObj.innerHTML = ""; 
            disableButtons(false);
        }, 1000); 
    }
   
}

function getRandomInt() {
    return Math.floor((Math.random() * 3) + 1);
}

function disableButtons(disable) {
    document.getElementById("rock").disabled = disable;
    document.getElementById("paper").disabled = disable;
    document.getElementById("scissors").disabled = disable;
}

function resetGame(action) {
    var outputObj = document.getElementById("output");
    var img = document.getElementById("image");

    disableButtons(false);
    outputObj.innerHTML = "";
    img.src = "question.png";

    if (action === 'tryAgain') {
       
        localStorage.setItem('round', 0);
    } else if (action === 'resume') {
       
    }

    window.location.href = 'game.html'; 
}