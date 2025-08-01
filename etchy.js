const squares = document.querySelector(".squaresContainer");
const resetBtn = document.getElementById("reset").addEventListener('click', () =>{
    location.reload();
});
const sixteenBtn = document.getElementById("sixteen").addEventListener('click', () => {
    if (squares.children.length === 0){
        drawSquares(16);
    } else{
        removeSquares();
        drawSquares(16);
    }
});
const eightBtn = document.getElementById("eight").addEventListener('click', () => {
    //check if grid already exists; if it does, erase and then redraw a new one
    if (squares.children.length === 0){
        drawSquares(8);
    } else{
        removeSquares();
        drawSquares(8);
    }
});
const fortyBtn = document.getElementById("forty").addEventListener('click', () => {
    if (squares.children.length === 0){
        drawSquares(48);
    } else{
        removeSquares();
        drawSquares(48);
    }
});

function drawSquares(num){
    for (let i = 1; i <= num; i++){
        let newRow = document.createElement("div");
        newRow.classList = `row${i}`;
        for (let j = 1; j <= num; j++){
            let newSquare = document.createElement("div");
            newSquare.id = "squares";
            newSquare.onmouseover = addColor;
            newRow.appendChild(newSquare);
        }
        squares.appendChild(newRow);
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