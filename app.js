/* El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
Aquí deberás desarrollar la lógica para resolver el problema.*/



let amigo;
let nombres = []
var NumAmigos
var indice
var ganador;

function asignarTextoElementos(elemento, texto) {
    let elementoHTML = document.getElementById(elemento)
    elementoHTML.innerHTML += texto;
    return;
}

function botones(boton, nombre) {
    let elemento = document.getElementById(boton)
    
    //document.getElementById('botonSorteo').setAttribute('disabled', true);
    //let palabra = document.getElementById(nombre)
    elemento.innerText = nombre
    elemento.setAttribute('disable', true)
}

function agregarAmigo() {
    
    let amigo = document.getElementById('amigo').value

    if( amigo == ''){
        //no permitir valores vacios
        alert('debe ingresar un nombre');
    }else{
        if(nombres.includes(amigo)){
            //alertar valores repetidos
            alert(`${amigo} ya se encuentra en tu lista`)
            limpiarCaja()
        }else{
            //agregar nombres a la lista
            nombres.push(amigo)
            NumAmigos = nombres.length
            //mostrar nombres
            asignarTextoElementos("listaAmigos",`<li> ${amigo} </li>`);
            limpiarCaja() 
        }
        
    }
        
    
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

function sortearAmigo() {
    //deshabilitar el boton de agregar una vez q inicia el sorteo
    //document.getElementById('agregar').setAttribute('disabled', true);
    //botones('agregar', 'Ya sorteaste' )
    limpiarCaja()

    if (nombres.length === 0 ){
        //alertar si no hay nombres en la lista
        alert('no haz ingresado nombres')
    }else{
        //elegir ganador
        let indice = Math.floor(Math.random()* NumAmigos)
        ganador = nombres[indice]
        
        //limpiar la lista en la pantalla
        lista = document.querySelector('li')
        lista.remove()
        
        //mostrar ganador
        asignarTextoElementos("resultado",`el ganador es ${ganador}!!`);
        //una vez realizado el sorteo deshabilitar el boton
        
        botones('botonSorteo', 'listo el sorteo')
        //document.getElementById('botonSorteo').setAttribute('disabled', true);
        //document.getElementById('botonSorteo').innerText = "Ya realisaste el sorteo"
        
        //console.log(ganador)
        //console.log(nombres)
    }
    
    return ganador
}
//pense agregar un boton para empezar denuevo, pero no lo pedian

