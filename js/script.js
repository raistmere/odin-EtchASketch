const generateButton = document.querySelector(".generateButton");
console.log(generateButton);
generateButton.addEventListener("click", generateGrid);

function generateGrid()
{
    //We grab the input from the user to figure out how big they want the grid to be.
    const userInput = prompt("Number of squares for the grid:");

    //Because it's a grid, it's userInput by userInput.
    const totalSquares = userInput * userInput;

    //Go ahead and place all the divs under the gridContainer. The div count is based off totalSquares.
    const gridContainer = document.querySelector(".gridContainer");

    //We clear all the divs in the gridContainer so we can add the correct divs based on userInput.
    while(gridContainer.firstChild) gridContainer.removeChild(gridContainer.firstChild);
    
    for (let i = 0; i < totalSquares; i++) 
    {
        //Create the new child div
        let child = document.createElement('div');
        child.className = "gridBox";

        //Each square on the grid will be pre calculated based on the userInput #.
        let gridSize = (960 / userInput); //The grid will always be 960px wide
        child.style.width = `${gridSize}px`;
        child.style.height = `${gridSize}px`;


        child.addEventListener("mouseenter", function(e)
        {
            child.classList.add("hover");
        });

        gridContainer.appendChild(child);
    }
}
