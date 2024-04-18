var round1 = parseInt(localStorage.getItem('round')) || 0;
let sequence1 = [];
let userSelections1 = [];

function hard() {
    document.getElementById('button1').style.display = 'none';
    document.getElementById('button2').style.display = 'none';
    document.querySelector('.button h3').style.display = 'none';
    document.querySelector('.button h4').style.display = 'none';
    sequence1 = [];
    userSelections1 = [];
    round1++;
    for (let i = 0; i < round1; i++) {
        sequence1.push(Math.floor(Math.random() * 4));
    }
    highlightSequence1(0, 300); 
}

function highlightSequence1(index, timeout) {
    if (index < sequence1.length) {
        const shapeId = sequence1[index];
        const image = document.getElementById(shapeId.toString());
        image.classList.add("highlighted");

        setTimeout(() => {
            image.classList.remove("highlighted");
            if (index + 1 < sequence1.length) {
                setTimeout(() => highlightSequence1(index + 1, timeout), timeout);
            } else {
                enableClickListeners1();
            }
        }, timeout);
    }
}


function enableClickListeners1() {
    const shapes = document.querySelectorAll(".shape input[type='image']");
    shapes.forEach(shape => {
        shape.classList.add("clickable"); 
        shape.addEventListener("click", handleShapeClick1);
    });
}

function handleShapeClick1(event) {
    const selectedShapeId = parseInt(event.target.id);
    userSelections1.push(selectedShapeId);

    if (selectedShapeId !== sequence1[userSelections1.length - 1]) {
      
        round1 =1;

        var revive = document.createElement("a");
        revive.href = "rps.html";
        revive.textContent = "REVIVE";

        var buttonDiv = document.getElementById("revive");
        buttonDiv.innerHTML = "YOU LOST! WIN A GAME OF ROCK PAPER SCISSORS TO REVIVE AND START FROM WHERE YOU LEFT OFF. ";
  
        buttonDiv.appendChild(revive);
       
        return;
    }

    if (userSelections1.length === sequence1.length) {
    
      var outputDiv = document.getElementById("score");
    outputDiv.innerHTML = "SCORE:" + round1;
        hard(); 
    }
}

function resetGame1() {
  
    document.getElementById('button').style.display = 'inline-block';
    document.querySelector('.button h3').style.display = 'block';

    const shapes = document.querySelectorAll(".shape input[type='image']");
    shapes.forEach(shape => {
        shape.classList.remove("clickable");
        shape.removeEventListener("click", handleShapeClick1);
    });
}



