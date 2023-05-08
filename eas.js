
// button for grid size choice
let gridSize = document.getElementById('gridSizeButton');

// listener for grid size choice, prompt for number
gridSize.addEventListener('click', function(){
    let size = prompt ("Enter a number between 0 and 100!");
    if (isNaN(size) || size < 0 || size > 100) {
        alert("Invalid input! Please enter a positive number.");
        createGrid(1);
    } else {
        createGrid(size);
    }
});

// 16 containers
let gridContainers = document.getElementById('gridContainers');

function createGrid(size) {
    // clear the existing grid
    gridContainers.innerHTML = '';

    // Calculate the width and height of each grid item based on the number of cells
    const containerSize = 960; // maximum size of the container
    const gap = size - 1; // number of gaps between cells
    const cellSize = (containerSize - gap * 10) / size; // size of each cell
    const cellStyle = `width: ${cellSize}px; height: ${cellSize}px;`;

    for (let i = 1; i <= size*size; i++){
        let newDiv = document.createElement('div');
        newDiv.classList.add ('gridItem');
        newDiv.setAttribute('style', cellStyle);
        // newDiv.textContent = i;
        gridContainers.appendChild(newDiv);

        // event listeners for hover effect
        newDiv.addEventListener('mouseover', function() {
            newDiv.classList.add('hover');
        });
        newDiv.addEventListener('mouseout', function() {
            newDiv.classList.remove('hover');
        });
    }
}