
const container = document.querySelector("#container");
let gridSize = 0;

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
        gridElement.addEventListener('mouseover', e => e.target.classList.add('pinkColor'));
        container.appendChild(gridElement);
    }
}

createGrid(16);