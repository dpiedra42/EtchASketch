
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
        gridElement.className = "grid-element";
        gridElement.addEventListener('mouseover', e => e.target.classList.add('pinkColor'));
        container.appendChild(gridElement);
    }
}

createGrid(16);