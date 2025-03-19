//ACTIVER L'ANIMMATION EN CLIQUANT SUR UN BOUTON

// LANCER L'ANIMATION AVEC CLICK
document.getElementById('animateButton').addEventListener('click', function() {
    var element = document.getElementById('myElement');
    element.classList.toggle('show');
});
//FAIRE DISPARAÎTRE L'ÉLEMENT AVEC UN CLICK
element.addEventListener('transitionend', function() {
    element.classList.add('hide');
});