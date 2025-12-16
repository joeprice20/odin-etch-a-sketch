// Helper functions

const Clamp = (val, min, max) => Math.min(Math.max(val, min), max)

function deleteChildren(parentElement) {

    //e.firstElementChild can be used. 
    let child = parentElement.lastElementChild;
    while (child) {
        parentElement.removeChild(child);
        child = parentElement.lastElementChild;
    }
}

function getRandomArrayElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

const colorPalettesMap = new Map();

colorPalettesMap.set("Lospec 500", new Array(
        "#6b2643",
        "#ac2847",
        "#ec273f",
        "#94493a",
        "#de5d3a",
        "#e98537",
        "#f3a833",
        "#4d3533",
        "#6e4c30",
        "#a26d3f",
        "#ce9248",
        "#dab163",
        "#e8d282",
        "#f7f3b7",
        "#1e4044",
        "#006554",
        "#26854c",
        "#5ab552",
        "#9de64e",
        "#008b8b",
        "#62a477",
        "#a6cb96",
        "#d3eed3",
        "#3e3b65",
        "#3859b3",
        "#3388de",
        "#36c5f4",
        "#6dead6",
        "#5e5b8c",
        "#8c78a5",
        "#deceed",
        "#9a4d76",
        "#c878af",
        "#cc99ff",
        "#fa6e79",
        "#ffa2ac",
        "#ffd1d5",
    ));

colorPalettesMap.set("Pear36", new Array(
        "#5e315b",
        "#8c3f5d",
        "#ba6156",
        "#f2a65e",
        "#ffe478",
        "#cfff70",
        "#8fde5d",
        "#3ca370",
        "#3d6e70",
        "#323e4f",
        "#322947",
        "#473b78",
        "#4b5bab",
        "#4da6ff",
        "#66ffe3",
        "#ffffeb",
        "#c2c2d1",
        "#7e7e8f",
        "#606070",
        "#43434f",
        "#272736",
        "#3e2347",
        "#57294b",
        "#964253",
        "#e36956",
        "#ffb570",
        "#ff9166",
        "#eb564b",
        "#b0305c",
        "#73275c",
        "#422445",
        "#5a265e",
        "#80366b",
        "#bd4882",
        "#ff6b97",
        "#ffb5b5"
    ));

let colorList = colorPalettesMap.get("Lospec 500");

const palettesSelect = document.querySelector("#palettes-select");

palettesSelect.addEventListener("change", onPaletteOptionChange)

function onPaletteOptionChange(e) {
    colorList = colorPalettesMap.get(e.target.value.toString());
}

colorPalettesMap.forEach(addPaletteOption)

function addPaletteOption(value, key) {
    console.log(key);
    let paletteOption = document.createElement("option");
    paletteOption.value = key
    paletteOption.textContent = key;
    palettesSelect.appendChild(paletteOption);
}


function onHover(e) {
    if (e.target.getAttribute("bHasBeenHovered")) {
        e.target.style.opacity = e.target.style.opacity * 1.5;
        return;
    }
    e.target.setAttribute("bHasBeenHovered", true)
    e.target.style.opacity = 0.4;
    e.target.style.background = getRandomArrayElement(colorList);
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
    gridSize = Clamp(gridSize, 1, 100);
    createGrid(gridSize);
}

const generateGridButton = document.querySelector("#generate-grid-button");
generateGridButton.addEventListener("click", onGenerateGridButtonClicked);

createGrid(16);