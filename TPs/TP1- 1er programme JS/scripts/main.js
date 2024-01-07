let title = document.querySelector("h1");
title.textContent = "Hello Wolrd !";

if (!localStorage.getItem('username')) {
    let myName = prompt("Veuillez saisir votre nom.");
    title.textContent = `Hello Wolrd ${myName} !`
    localStorage.setItem('username', myName);
} else {
    title.textContent = `Hello Wolrd ${localStorage.getItem('username')} !`
}


// let myBtn = document.querySelector("button");
// myBtn.addEventListener('click', () => {
//     let myName = prompt("Veuillez saisir votre nom.");
//     myHeading.textContent = `Hello Wolrd ${myName} !`
// })