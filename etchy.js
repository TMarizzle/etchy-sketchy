const squares = document.querySelector(".squaresContainer");
//set number of squares to draw, but needs to be Row x Col (4x4)
const numSquares = 4;
let i = 0;

function drawSquares(num){
    // while (i <= num){
    //     //draw squares and increase counter
    //     const newSquare = document.createElement("div");
    //     newSquare.classList = "squares";
    //     //add mouseover for each div to change background color
    //     newSquare.addEventListener('mouseover', () => {
    //         newSquare.style.backgroundColor = "green";
    //     });
    //     squares.appendChild(newSquare);
    //     console.log("Drawing square!");
    //     i++;
    // }
    for (let i = 1; i <= num; i++){
        let newSquare = "";
        for (let j = 1; j <= num; j++){
            newSquare = document.createElement("div");
            newSquare.classList = "squares";
            squares.appendChild(newSquare);
        }
    }
}

drawSquares(numSquares);
console.log("Done drawing squares!");