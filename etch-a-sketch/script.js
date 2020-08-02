// var sz = Number(prompt("How big is the grid?"));
let sz = 5;
const GRID = document.getElementById("master-grid");
const RESIZE = document.getElementById("resize");
const RESET = document.getElementById("reset");

// Function that creates the grid space
createGrid = () => {
  GRID.style.setProperty("grid-template-columns", `repeat(${sz}, 1fr)`);
  GRID.style.setProperty("grid-template-rows", `repeat(${sz}, 1fr)`);

  for (let i = 0; i < sz * sz; i++) {
    const cells = document.createElement("div");
    cells.classList.add("cell");
    cells.addEventListener("mouseover", function (event) {
      event.target.classList.toggle("color");
    });
    GRID.appendChild(cells);
  }
};
// console.log(GRID.getElementsByClassName("cell"));

//Function to clear the board on the grid space
resetGrid = () => {
  let grid = GRID.getElementsByClassName("cell");
  for (let i = 0; i < grid.length; i++) {
    grid[i].classList.remove("color");
  }
};

// Function to remove all the cells in the grid
clearGrid = () => {
  let grid = GRID;
  while (GRID.firstChild) {
    GRID.removeChild(GRID.lastChild);
  }
};

//Funciton to resize the size of the current grid
resizeGrid = () => {
  clearGrid();
  sz = 10;
  createGrid();
};

createGrid();

//Add Event listeners to the buttons
RESET.addEventListener("click", resetGrid);
RESIZE.addEventListener("click", resizeGrid);
