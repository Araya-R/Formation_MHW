document.getElementById('animateButton').addEventListener('click', function() {
    let element = document.getElementById('myElement');
    element.classList.toggle('show');  // Affiche ou cache l'élément
});

// Utilisation de transitionend pour ajouter la classe 'hide' après la fin de la transition
let element = document.getElementById('myElement');
element.addEventListener('click', function() {
    element.classList.add('hide');  // Cache l'élément après la fin de la transition
});

// Partie 2 : Animer le déplacement de l'élément vers la gauche au clic

let object = document.getElementById("myElementRight");
let button = document.getElementById("animateButtonRight");

button.addEventListener("click", function() {
    object.classList.toggle('showRight');  // Déplace l'élément vers la gauche
});

// Lorsque la transition est terminée, on ajoute la classe 'hideLeft' pour rendre l'élément invisible
object.addEventListener('click', function() {
    object.classList.add('hideRight');  // Cache l'élément après son déplacement
});