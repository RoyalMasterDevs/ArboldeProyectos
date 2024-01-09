// // TIPOS DE DATOS
// // STRING
// const hola = "Hola Mundo";
// console.log(hola);
// // NUMBER
// // var
// // const numeros = 1;
// let numeros = 1;
// console.log(numeros);
// numeros = 2;

// console.log(numeros);

// // Boolean
// const verdadero = true;
// console.log(verdadero);
// const falso = false;
// console.log(falso);

// Selector
let menu = document.querySelector('.hamburger');

// method
function toggleMenu(event) {
    this.classList.toggle('is-active');
    document.querySelector(".menuppal").classList.toggle("is_active");
    event.preventDefault();

}

// event
menu.addEventListener('click', toggleMenu, false);