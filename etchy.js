const squares = document.querySelector(".squaresContainer");
//set number of squares to draw, but needs to be Row x Col (4x4)
const numSquares = 8;
let i = 1;

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
drawSquares(numSquares);
console.log("Done drawing squares!");

function addColor(){
    console.log("You touched my square!");
    this.style.backgroundColor = "green";
}