// Helper functions

const Clamp = (val, min, max) => Math.min(Math.max(val, min), max)


function onHover(e) {
    e.target.style.background = "blue";
}

function deleteChildren(parentElement) {

    //e.firstElementChild can be used. 
    let child = parentElement.lastElementChild;
    while (child) {
        parentElement.removeChild(child);
        child = parentElement.lastElementChild;
    }
}


function createGrid(gridWidth) {
    const gridContainer = document.querySelector("#grid-container");

    deleteChildren(gridContainer)

    for (let x = 0; x < gridWidth; x++) {
        let gridColumn = document.createElement("div");
        gridColumn.classList.add("grid-column");
        gridContainer.appendChild(gridColumn);

        for (let y = 0; y < gridWidth; y++) {
            let gridCell = document.createElement("div");
            gridCell.classList.add("grid-cells");
            gridCell.addEventListener("mouseover", onHover);
            gridColumn.appendChild(gridCell);
        }

    }
}

function onGenerateGridButtonClicked() {
    const gridSizeInput = document.querySelector("#grid-size-input");
    let gridSize = parseInt(gridSizeInput.value);
    gridSize = Clamp(gridSize, 1,100);
    createGrid(gridSize);
}

const generateGridButton = document.querySelector("#generate-grid-button");
generateGridButton.addEventListener("click", onGenerateGridButtonClicked);

createGrid(16);