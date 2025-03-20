//FAIRE APPARAÎTRE LA BARRE MENU EN CLIQUANT SUR BURGER

function toggleMenu(){
    const menu = document.getElementById('menu');
    //ajoute ou enlève la class show
    menu.classList.toggle('showMenu');
}






// ANIMATION SECTION 2
document.getElementById('animateButton').addEventListener('click', function () {
    let element = document.getElementById('myElement');
    element.classList.toggle('show');
});
//FAIRE DISPARAÎTRE L'ÉLÉMENT EN RECLIQUANT
let element = document.getElementById('myElement');
element.addEventListener('click', function () {
    element.classList.add('hide');
});

//ANIMATION SECTION 3
let object = document.getElementById("myElementRight");
let button = document.getElementById("animateButtonRight");

button.addEventListener('click', function () {
    object.classList.toggle('showRight');
});
//FAIRE DISPARAÎTRE L'ÉLÉMENT EN RECLIQUANT
object.addEventListener('click', function () {
    object.classList.add('hideRight');
});

//ANIMATION SECTION 4
let objectB = document.getElementById("myElementBottom");
let buttonB = document.getElementById("animateButtonBottom");

buttonB.addEventListener('click', function () {
    objectB.classList.toggle('showBottom');
});
//FAIRE DISPARAÎTRE L'ÉLÉMENT EN RECLIQUANT
objectB.addEventListener('click', function () {
    objectB.classList.add('hideBottom');
});


