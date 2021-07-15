const container = document.querySelector("#container");
let gridSize = 0;

function changeColor(e, color) {

    if (color == 'Pink') {
        const pinkR = 255;
        const pinkG = 192;
        const pinkB = 203;
        e.target.style.backgroundColor = `rgb(${pinkR}, ${pinkG}, ${pinkB})`;
    }
    else if (color == 'Rainbow'){
        const randomR = Math.floor(Math.random() * 256);
        const randomG = Math.floor(Math.random() * 256);
        const randomB = Math.floor(Math.random() * 256);
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    }
    else if (color == 'Lightpink') {
        const lightpinkR = 250;
        const lightpinkG = 234;
        const lightpinkB = 244;
        e.target.style.backgroundColor = `rgb(${lightpinkR}, ${lightpinkG}, ${lightpinkB})`;
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