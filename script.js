const container = document.querySelector("#container");
let gridSize = 0;

function changeColor(e, color) {

    if (color == 'Pink') {
        e.target.style.backgroundColor = `rgb(255, 192, 203)`;
    }
    else if (color == 'Rainbow'){
        e.target.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    }
    else if (color == 'Lightpink') {
        e.target.style.backgroundColor = `rgb(250, 234, 244)`;
    }
  }

function getColor(e) {
    let color = document.querySelector('input[name="color_choice"]:checked').value;

    changeColor(e, color);
}

function clearGrid() {
    const gridArray = Array.from(container.childNodes);
    gridArray.forEach((element) => {
        container.removeChild(element);
    });
  }

function changeSize() {
    let chosenSize = prompt("Enter the size you would like :)");

    if (chosenSize < 1 || chosenSize > 100)
        chosenSize = prompt("The number has to be within 1-100");
    clearGrid();
    createGrid(chosenSize);
}

function refreshPage() {
    clearGrid();
    createGrid(gridSize);
}

function createGrid(size) {
    gridSize = size;
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const gridElement = document.createElement("div");
        gridElement.className = "grid-square";
        gridElement.addEventListener('mouseover', getColor);
        container.appendChild(gridElement);
    }
}

createGrid(16);