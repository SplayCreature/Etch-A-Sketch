// X Create a default 16 x 16 grid
// X Create a hover effect to change cell color
// Create a way to change grid size
// Make the new grid replace the default
// Set grid limit to 100
// Make the grid stay the same size
// Make a RGB hover option
// Make a 10% black per pass option



const myGrid = document.getElementById('myGrid');
let rows = document.getElementsByClassName('gridRow');
let cells = document.getElementsByClassName('cell');
const container = document.getElementById('container');

container.appendChild(myGrid);


let slider = document.getElementById('myRange');
let output = document.getElementById('slideval');
output.textContent = '16 x 16';






function defaultGrid() {
    makeRows(16);
    makeColumns(16);
}

function makeRows(rowNum) {
    for(r = 0; r < rowNum; r++) {
        let row = document.createElement('div');
        myGrid.appendChild(row).className = 'gridRow';
    };
};

function makeColumns(cellNum) {
    
    for(i = 0; i < rows.length; i++) {
        for(j = 0; j < cellNum; j++) {
            let newCell = document.createElement('div');
            rows[j].appendChild(newCell).className = 'cell';
        };
    };
};

slider.oninput = function() {

    if(slider.value === '1') {
        myGrid.innerHTML = '';
        defaultGrid();
        return output.textContent = '16 x 16';
    }
    else if(slider.value === '2') {
        output.textContent = '32 x 32';
        myGrid.innerHTML = '';
        makeRows(32);
        makeColumns(32);
        return;
    }
    else if(slider.value === '3') {
        return output.textContent = '48 x 48';
    }
    else if(slider.value === '4') {
        return output.textContent = '64 x 64';
    }
    else if(slider.value === '5') {
        return output.textContent = '80 x 80';
    }
    else if(slider.value === '6') {
        return output.textContent = '96 x 96'
    }
}

defaultGrid();

for(i = 0; i < cells.length; i++) {
    cells[i].addEventListener('mouseover', function(event) {
        event.target.style.backgroundColor = 'black';
    })
}