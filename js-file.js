
function createGrid(gridWidth) {
    const gridContainer = document.querySelector("#grid-container");

    for (let x = 0; x < gridWidth; x++) {
        let gridColumn = document.createElement("div");
        gridColumn.classList.add("grid-column");
        gridContainer.appendChild(gridColumn)

        for (let y = 0; y < gridWidth; y++) {
            let gridCell = document.createElement("div");
            gridCell.classList.add("grid-cells");
            gridColumn.appendChild(gridCell);
        }

    }
}

createGrid(4);