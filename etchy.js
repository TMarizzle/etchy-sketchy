const squares = document.querySelector(".squaresContainer");
const resetBtn = document.getElementById("reset").addEventListener('click', () =>{
    location.reload();
});
const sixteenBtn = document.getElementById("sixteen").addEventListener('click', () => {
    removeSquares();
    drawSquares(16);
});
const eightBtn = document.getElementById("eight").addEventListener('click', () => {
    removeSquares();
    drawSquares(8);
});
const fortyBtn = document.getElementById("forty").addEventListener('click', () => {
    removeSquares();
    drawSquares(48);
});
const choiceBtn = document.getElementById("choice").addEventListener('click', () =>{
    let userChoice = prompt("Enter number from 8 to 100");
    removeSquares();
    drawSquares(userChoice);
});

function drawSquares(num){
    for (let i = 0; i < (num * num); i++){
        let square = document.createElement('div');
        square.id = "square";
        let squareHeight = 600 / num;
        square.setAttribute("style", `height: ${squareHeight}px; width: ${squareHeight}px;`);
        square.onmouseover = addColor;
        squares.appendChild(square);
    }
}

function removeSquares(){
    while (squares.firstChild){
            squares.removeChild(squares.firstChild);
    }
}

function addColor(color){
    this.style.backgroundColor = "black";
}

window.onload = drawSquares(8);
