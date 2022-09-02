// X Create a default 16 x 16 grid
// X Create a hover effect to change cell color
// X Create a way to change grid size
// X Make the new grid replace the default
// X Set grid limit to 100
// X Make the grid stay the same size
// Make a RGB hover option
// Make an eraser option

const defaultSize = 16;
const defaultMode = 'color';
const defaultColor = '#333333';

let currentSize = defaultSize;
let currentMode = defaultMode;
let currentColor = defaultColor;

function setCurrentSize(newSize) {
    currentSize = newSize;
}

function setCurrentMode(newMode) {
    currentMode = newMode;
}

function setCurrentColor(newColor) {
    currentColor = newColor;
}

const colorPicker = document.getElementById('colorPicker');
const colorBtn = document.getElementById('color');
const rainbowBtn = document.getElementById('rainbow');
const eraserBtn = document.getElementById('eraser');
const clearBtn = document.getElementById('clear');
const grid = document.getElementById('grid');
const sizeSlider = document.getElementById('sizeSlider');
const sizeValue = document.getElementById('sizeValue');

colorPicker.oninput = (e) => setCurrentColor(e.target.value)
colorBtn.onclick = () => setCurrentMode('color');
rainbowBtn.onclick = () => setCurrentMode('rainbow');
eraserBtn.onclick = () => setCurrentMode('eraser');
clearBtn.onclick = () => reloadGrid();
sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value);
sizeSlider.onchange = (e) => changeSize(e.target.value);

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function changeSize(value) {
    setCurrentSize(value);
    updateSizeValue(value);
    reloadGrid();
}

function updateSizeValue(value) {
    sizeValue.textContent = `${value} x ${value}`;
}

function reloadGrid() {
    clearGrid();
    setupGrid(currentSize);
}

function clearGrid() {
    grid.innerHTML = '';
}

function setupGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for(i = 0; i < size * size; i++) {
        const gridElement = document.createElement('div');
        gridElement.classList.add('grid-element');
        gridElement.addEventListener('mouseover', changeColor);
        gridElement.addEventListener('mousedown', changeColor);
        grid.appendChild(gridElement);
    }

}

function changeColor(e) {
    if(e.type === 'mouseover' && !mouseDown) return;
    if(currentMode === 'rainbow') {
        const randomR = Math.floor(Math.random() * 256);
        const randomG = Math.floor(Math.random() * 256);
        const randomB = Math.floor(Math.random() * 256);

        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
    } else if(currentMode === 'color') {
        e.target.style.backgroundColor = currentColor;
    } else if(currentMode === 'eraser') {
        e.target.style.backgroundColor = '#fefefe';
    }
}

function activateButton(newMode) {
    if(currentMode === 'rainbow') {
        rainbowBtn.classList.remove('active');
    } else if(currentMode === 'color') {
        colorBtn.classList.remove('active');
    } else if(currentMode === 'eraser') {
        eraserBtn.classList.remove('active');
    }
}

window.onload = () => {
    setupGrid(defaultSize);
    activateButton(defaultMode);
}