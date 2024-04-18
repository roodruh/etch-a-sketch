const body = document.querySelector('body');

const app = document.createElement('div');
app.setAttribute('id', 'app-window');
body.appendChild(app);

//customizing app
const title = document.createElement('div');
title.setAttribute('class', 'title');
app.appendChild(title);
title.innerText = "Etch-a-Sketch";

const gridButton = document.createElement('button');
gridButton.setAttribute('class', 'button');
gridButton.innerText = "New Grid!"
app.appendChild(gridButton);

const defaultGrid = document.createElement('div');
defaultGrid.setAttribute('class', 'default-grid');
app.appendChild(defaultGrid);

const etchASketch = document.createElement('div');
etchASketch.setAttribute('id', 'etch-a-sketch');
app.appendChild(etchASketch);

for(let i = 0; i < 16; i++) {
    const row = document.createElement('div');
    row.setAttribute('class', 'row');
    etchASketch.appendChild(row);

    for(let j = 0; j < 16; j++) {
        const cell = document.createElement('div');
        cell.setAttribute('class', 'cell');
        row.appendChild(cell);
    }
}

gridButton.addEventListener('click', MouseEvent => generateGrid());

function generateGrid() {

    var gridHeight = prompt('Enter height of grid: ');
    var gridLength = prompt('Enter length of grid: ');

    const etchASketch = document.createElement('div');
    etchASketch.setAttribute('id', 'etch-a-sketch');
    app.appendChild(etchASketch);

    for(let i = 0; i < gridHeight; i++) {
        const row = document.createElement('div');
        row.setAttribute('class', 'row');
        etchASketch.appendChild(row);

        for(let j = 0; j < gridLength; j++) {
            const cell = document.createElement('div');
            cell.setAttribute('class', 'cell');
            row.appendChild(cell);
        }
    }
}
