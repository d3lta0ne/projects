// var sz = Number(prompt("How big is the grid?"));
var sz = 5;
var grid = document.getElementById("master-grid");

createGrid = () => {
    grid.style.setProperty(
        "grid-template-columns",
        `repeat(${sz}, 2fr)`
      );
      grid.style.setProperty(
        "grid-template-rows",
        `repeat(${sz}, 2fr)`
      );

    for (let i = 0; i < sz*sz; i++) {        
      const cells = document.createElement("div");
      cells.classList.add("cell")
      cells.addEventListener("mouseover", function(event) {
        event.target.classList.toggle("color");
    });
      grid.appendChild(cells);
    }
  };

createGrid();