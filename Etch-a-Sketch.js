const container1 = document.getElementById("container1");
let defaultValue = 16;

function createBoxes(n){
    container1.innerHTML = '';  /*It removes all the HTML content inside the container1 element, including:
                                All child <div> elements (or any other elements inside it),All classes, attributes, text, everything inside container1*/
    
    const containerSize = container1.clientWidth; //clientWidth returns the inner width of an element. It includes padding but excludes borders, margins, and scrollbars.
    let calcNumber = n * n;
    let size = containerSize / n;
    for(let i = 0; i < calcNumber; i++){
        const box = document.createElement("div");
        box.className = "smallBoxes";
        box.style.height = size +'px';
        box.style.width = size +'px';
        container1.appendChild(box);
    }
    const smallBoxes = document.getElementsByClassName("smallBoxes");
    let opacity = 0;
    for (let x of smallBoxes){
    x.addEventListener("mouseover", function(){
        if(opacity < 100){
            opacity = opacity + 10;
        }
        this.style.backgroundColor = randomColor();
        this.style.opacity = `${opacity}%`
        })
    }
}

function randomColor(){
    const red = Math.floor(Math.random()* 256);
    const green = Math.floor(Math.random()* 256);
    const blue = Math.floor(Math.random()* 256);
    return `rgb(${red}, ${green}, ${blue})`
}

document.addEventListener("DOMContentLoaded",function(){
    createBoxes(defaultValue);
})



function newGrid(){
   let newNumber = prompt("Please provide the number of squares per side for the new grid (max:100).");
   if (newNumber > 100){
    alert("Over limit. Please try again.");
    newNumber = 16;
   }
   newNumber = parseInt(newNumber); //Converts the string input from prompt into an integer number (e.g., "16" ➝ 16)
   createBoxes(newNumber);
}