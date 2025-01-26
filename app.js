/* El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
Aquí deberás desarrollar la lógica para resolver el problema.*/
//llenar la lista al momento de agregar un nombre   check
//poner el ganador en la pag   check
//poner el alert cuando esta vacio
//quizas verificar q sea un nombre no repetido

let amigo = document.getElementById('amigo').value
//let amigo;
let nombres = []
var NumAmigos
var indice
var ganador;

function asignarTextoElementos(elemento, texto) {
    //let elementoHTML = document.querySelector(elemento);
    let elementoHTML = document.getElementById(elemento)
    //elementoHTML.innerHTML += `<li> ${amigo} </li>`
    elementoHTML.innerHTML += texto;
    return;
}

function agregarAmigo() {
    console.log(nombres.length)
    if( amigo === ''){
        alert('debe ingresar un nombre');
    }else{
        let amigo = document.getElementById('amigo').value
        nombres.push(amigo)
        NumAmigos = nombres.length
        console.log(nombres)
        asignarTextoElementos("listaAmigos",`<li> ${amigo} </li>`);
        limpiarCaja()
    }
        
    
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

function sortearAmigo() {
    
    limpiarCaja()
    const indice = Math.floor(Math.random()* NumAmigos)

    ganador = nombres[indice]
    console.log(ganador)
    document.getElementById('listaAmigos').remove()
    
    asignarTextoElementos("resultado",`el ganador es ${ganador}!!`);
    return ganador
}
//agregarAmigo()
//sortearAmigo(ganador) 


//console.log(ganador)