const gridContainer = document.querySelector(".gridContainer");
for (let i = 0; i < 256; i++) 
{
    let child = document.createElement('div');
    child.className = "gridBox";
    child.textContent = "Child";

    child.addEventListener("mouseover", function(e)
    {
        child.classList.add("hover");
    });
    
    gridContainer.appendChild(child);
}