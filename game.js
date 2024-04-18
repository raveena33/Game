var round = parseInt(localStorage.getItem('round')) || 0;
let sequence = [];
let userSelections = [];

function easy() {
    document.getElementById('button1').style.display = 'none';
    document.getElementById('button2').style.display = 'none';
    document.querySelector('.button h3').style.display = 'none';
    document.querySelector('.button h4').style.display = 'none';
    sequence = [];
    userSelections = [];
    round++;
    for (let i = 0; i < round; i++) {
        sequence.push(Math.floor(Math.random() * 4));
    }
    highlightSequence(0, 1000); 
}


function highlightSequence(index, timeout) {
    if (index < sequence.length) {
        const shapeId = sequence[index];
        const image = document.getElementById(shapeId.toString());
        image.classList.add("highlighted");

        setTimeout(() => {
            image.classList.remove("highlighted");
            if (index + 1 < sequence.length) {
                setTimeout(() => highlightSequence(index + 1, timeout), timeout);
            } else {
                enableClickListeners();
            }
        }, timeout);
    }
}

function enableClickListeners() {
    const shapes = document.querySelectorAll(".shape input[type='image']");
    shapes.forEach(shape => {
        shape.classList.add("clickable"); 
        shape.addEventListener("click", handleShapeClick);
    });
}

function handleShapeClick(event) {
    const selectedShapeId = parseInt(event.target.id);
    userSelections.push(selectedShapeId);

    if (selectedShapeId !== sequence[userSelections.length - 1]) {
    
        round =1;

       
    var revive = document.createElement("a");
    revive.href = "rps.html";
    revive.textContent = "REVIVE";
    var buttonDiv = document.getElementById("revive");

    buttonDiv.innerHTML = "YOU LOST! WIN A GAME OF ROCK PAPER SCISSORS TO REVIVE AND START FROM WHERE YOU LEFT OFF. ";
  
    buttonDiv.appendChild(revive);
       
        return;
    }

    if (userSelections.length === sequence.length) {
      
      var outputDiv = document.getElementById("score");
    outputDiv.innerHTML = "SCORE:" + round;
        easy(); 
    }
}

function resetGame() {
   
    document.getElementById('button').style.display = 'inline-block';
    document.querySelector('.button h3').style.display = 'block';

    
    const shapes = document.querySelectorAll(".shape input[type='image']");
    shapes.forEach(shape => {
        shape.classList.remove("clickable");
        shape.removeEventListener("click", handleShapeClick);
    });
}




