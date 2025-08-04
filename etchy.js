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

function drawSquares(num){
    // for (let i = 1; i <= num; i++){
    //     let newRow = document.createElement("div");
    //     newRow.classList = `row`;
    //     for (let j = 1; j <= num; j++){
    //         let newSquare = document.createElement("div");
    //         newSquare.id = "square";
    //         newSquare.onmouseover = addColor;
    //         newRow.appendChild(newSquare);
    //     }
    //     squares.appendChild(newRow);
    // }
    for (let i = 0; i < (num * num); i++){
        let square = document.createElement('div');
        square.id = "square";
        let squareHeight = 500 / num;
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

function addColor(){
    this.style.backgroundColor = "green";
}

window.onload = drawSquares(8);