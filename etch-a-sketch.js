const body = document.querySelector('body');

const app = document.createElement('div');
app.setAttribute('id', 'app-window');
body.appendChild(app);

//customizing app
const title = document.createElement('div');
title.setAttribute('class', 'title');
app.appendChild(title);
title.innerText = "Etch-a-Sketch";

const buttonRow = document.createElement('div');
buttonRow.setAttribute('class', 'button-row');
app.appendChild(buttonRow);

const gridButton = document.createElement('button');
gridButton.setAttribute('class', 'button');
gridButton.innerText = "New Grid!"
buttonRow.appendChild(gridButton);


const removeButton = document.createElement('button');
removeButton.setAttribute('class', 'button');
removeButton.innerText = "Delete Grid"
buttonRow.appendChild(removeButton);

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

// gridButton.addEventListener('click', e => {
//     console.log(e);
// })
gridButton.addEventListener('click', e => generateGrid());
gridButton.addEventListener('click', e => etchASketch.remove());

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
    removeButton.addEventListener('click', e => etchASketch.remove());
}
