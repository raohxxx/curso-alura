let titulo=document.querySelector('h1');
titulo.innerHTML='Juego del numero secreto';
let parrafo=document.querySelector('p');
parrafo.innerHTML= 'Escoje un numero del 1 al 10';
let entrada=document.querySelector('input')
function intentoDeUsuario() {alert(`click desde el boton con el numero : ${entrada.value}`);}
