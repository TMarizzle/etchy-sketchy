const squares = document.querySelector(".squaresContainer");
//const newSquare = document.createElement("div");
const numSquares = 4;
let i = 0;

function drawSquares(num){
    while (i <= num){
        //draw squares and increase counter
        const newSquare = document.createElement("div");
        newSquare.classList = "squares";
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

//for each div in squaresContainer, add mouse event listener
