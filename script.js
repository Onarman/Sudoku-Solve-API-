const puzzle = document.querySelector("#puzzle")
const solveBtn = document.querySelector("solve-button")
const squares = 81;

for(let i = 0; i< squares;i++){
    const inputElement =document.createElement("input")
    inputElement.setAttribute("type","number")
    inputElement.setAttribute("min","0")
    inputElement.setAttribute("max","9")
    puzzle.appendChild(inputElement)

}