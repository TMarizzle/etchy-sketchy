const squares = document.querySelector(".squaresContainer");
//set number of squares to draw, but needs to be Row x Col (4x4)
const numSquares = 4;
let i = 0;

function drawSquares(num){
    while (i <= num){
        //draw squares and increase counter
        const newSquare = document.createElement("div");
        newSquare.classList = "squares";
        //add mouseover for each div to change background color
        newSquare.addEventListener('mouseover', () => {
            newSquare.style.backgroundColor = "green";
        });
        squares.appendChild(newSquare);
        console.log("Drawing square!");
        i++;
    }
}

drawSquares(numSquares);
console.log("Done drawing squares!");