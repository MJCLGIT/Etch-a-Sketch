
// button for grid size choice
let gridSize = document.getElementById('gridsize');

// listener for grid size choice, prompt for number
gridSize.addEventListener('click', function(){
    prompt ("Enter a number!");
});

// 16 containers
let gridContainers = document.getElementById('gridContainers');

for (let i = 1; i <= 16; i++){
    let newDiv = document.createElement('div');
    newDiv.classList.add ('gridItem');
    // newDiv.textContent = i;
    gridContainers.appendChild(newDiv);

    // even listeners for hover effect
    newDiv.addEventListener('mouseover', function() {
        newDiv.classList.add('hover');
    });
    newDiv.addEventListener('mouseout', function() {
        newDiv.classList.remove('hover');
    });
}
