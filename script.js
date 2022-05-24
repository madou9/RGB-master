const squares = document.querySelectorAll('.square');
const answerDisplay = document.querySelector('.correct');
const colourDislay = document.querySelector('h1');
const button = document.querySelector('button');
let colours = [];
generateRandomColour();
assign_colours();
checkColour();


// function pour generer des couleur aléatoire pour les 6
function generateRandomColour(){
    for(let i = 0; i<squares.length; i++){
        colours.push(
            `rgb(${Math.floor(Math.random() *255)},${Math.floor(Math.random() *255)},${Math.floor(Math.random() *255)}) `
        )
    }
};

// assigner des couleurs
function assign_colours(){
    colours.forEach((colour, index) => {
        squares[index].style.background = colour;
        squares[index].setAttribute('data-colour', colour);
    });
}


// function pour deviner un couleur aléatoire en nombre
function getRandomPickedColour(){
    const randomColour = colours[Math.floor(Math.random() *colours.length)]; 
    colourDislay.textContent = randomColour;
    return randomColour;
}

// function pour renvoyez correct ou mauvaise couleur
function checkColour(){
    squares.forEach((square) => {
        square.addEventListener('click', (e) =>{
            if(e.target.dataset.colour === pickedColour){
                answerDisplay.textContent = "correct";
            }else {
                answerDisplay.textContent = "mauvaise";
                e.target.classList.add("fade");
            }
        });
    });
}

let pickedColour = getRandomPickedColour();


//  function pour remettre à l'etat initial
function reset(){
    colours = [];
    generateRandomColour();
    squares.forEach((squares) => squares.classList.remove("fade"));
    assign_colours();
    checkColour();
    pickedColour = getRandomPickedColour();

}
// pour click sur le button
button.addEventListener('click', reset);

