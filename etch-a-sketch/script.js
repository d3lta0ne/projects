let sz = 10;
const GRID = document.getElementById("master-grid");
const RESIZE = document.getElementById("resize-button");
const RESET = document.getElementById("reset");

// Function that creates the grid space
createGrid = () => {
  GRID.style.setProperty("grid-template-columns", `repeat(${sz}, 1fr)`);
  GRID.style.setProperty("grid-template-rows", `repeat(${sz}, 1fr)`);

  for (let i = 1; i <= sz * sz; i++) {
    const cells = document.createElement("div");
    cells.classList.add("cell");
    cells.addEventListener("mouseover", function (event) {
      // cells.style.backgroundImage = `url("images/nicky-cage-6/image_part_${(
      //   "000" + i
      // ).substr(-3)}.jpg")`;
      color(event);
    });
    GRID.appendChild(cells);
  }
};

// Create functionality for fade event
color = (event) => {
  let currentOpacity = Number(
    window.getComputedStyle(event.target).getPropertyValue("opacity")
  );
  if (currentOpacity < 1) {
    currentOpacity += 0.5;
    event.target.style.setProperty("opacity", currentOpacity);
  }
};

//Function to clear the board on the grid space
resetGrid = () => {
  let grid = GRID.getElementsByClassName("cell");
  for (let i = 0; i < grid.length; i++) {
    grid[i].classList.remove("color");
    grid[i].style.setProperty("opacity", "0");
  }
};

// Function to remove all the cells in the grid
clearGrid = () => {
  let grid = GRID;
  grid.style.setProperty(
    "background-image",
    `url("images/nicky-cage-${Math.floor(Math.random() * 5 + 1)}.jpg")`
  );
  while (GRID.firstChild) {
    GRID.removeChild(GRID.lastChild);
  }
};

//Funciton to resize the size of the current grid
resizeGrid = () => {
  clearGrid();

  // check input value
  let tempSZ = document.getElementById("resize-number").value;
  sz = tempSZ > 0 && tempSZ <= 64 ? tempSZ : sz;

  createGrid();
};

//Add Event listeners to the buttons
RESET.addEventListener("click", resetGrid);
RESIZE.addEventListener("click", resizeGrid);

createGrid();
