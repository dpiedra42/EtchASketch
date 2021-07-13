
const container = document.getElementById("container");

function createGrid(size) {
    for(var i = 0; i < size; i++){ 
        var row = document.createElement("div"); 
        row.className = "row"; 
        for(var x = 0; x < size; x++){ 
            var cell = document.createElement("div"); 
            cell.className = "gridsquare"; 
            row.appendChild(cell); 
        } 
        container.appendChild(row); 
      } 
}

createGrid(16);