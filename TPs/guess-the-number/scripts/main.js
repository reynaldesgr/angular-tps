// Déclaration des variables
let nbTries = null;
const nbMaxTries = 5;
let number = null;
let titles = document.querySelector("h1");
let elems = document.querySelector(".elems");
let btnGuess = document.querySelector("#btnGuess");
let btnRelaunch= document.querySelector("#btnRelaunch");
let result = document.querySelector("#result");
let inputNb = document.querySelector("#inputNumber");
let labelTry = document.querySelector("#labelTry");
let previousGuess = document.querySelector("#previousGuess");

main();

function main() {
    initGame();
    btnGuess.addEventListener('click', (val) => {
        if (inputNb.value) {
            guess(Number(inputNb.value));
        }
    })
    btnRelaunch.addEventListener('click', () => {
        initGame();
    })
}

function initGame() {
    nbTries = 0;
    btnGuess.enabled = true;
    number = Math.floor(Math.random() * 100) +1;
    console.log('Nombre généré : ' + number);
    inputNb.value = null;
    labelTry.innerHTML = `${nbMaxTries - nbTries} essais restants`;
    result.innerHTML= '';
}

function guess(value) {
    console.log(value)
    previousGuess.textContent = previousGuess.textContent.concat(' ').concat(value);
    if (value) {
        let text = '';
        nbTries++ ;
        inputNb.value = null;
        if(Number(value) === number) {
            text = `Félicitations tu as gagné en ${nbTries} essais`
            btnGuess.disabled= true;
        } else {
            if (nbTries < nbMaxTries) {
                if (value < number) {
                    text = `Le nombre est plus grand. Il te reste ${nbMaxTries - nbTries} essais`
                } else {
                    text = `Le nombre est plus petit. Il te reste ${nbMaxTries - nbTries} essais`
                }
            } else {
                text = `Tu as perdu !!! Le nombre a deviné était ${number}`;
            }
        }
        labelTry.innerHTML = `${nbMaxTries - nbTries} essais restants`;
        result.innerHTML = text;
    }
}

function relaunch() {
    initGame();
}
