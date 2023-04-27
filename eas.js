let gridContainers = document.getElementById('gridContainers');

for (let i = 1; i <= 16; i++){
    let newDiv = document.createElement('div');
    newDiv.textContent = "Created Div " + i;
    gridContainers.appendChild(newDiv);
}