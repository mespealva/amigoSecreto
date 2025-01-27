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
    
//deshabilitar una vez hecho el sorteo
function botones(boton, nombre) {
    var elemento = document.getElementById(boton)
    
    elemento.setAttribute('disabled', true);
    elemento.innerText = nombre
    
    return
}


function agregarAmigo() {
    
    let amigo = document.getElementById('amigo').value

    if( amigo == ''){
        //--no permitir valores vacios
        alert('debe ingresar un nombre');
    }else{
        if(nombres.includes(amigo)){
            //--alertar valores repetidos
            alert(`${amigo} ya se encuentra en tu lista`)
            limpiarCaja()
        }else{
            //--agregar nombres a la lista
            nombres.push(amigo)
            NumAmigos = nombres.length

            //--mostrar nombres
            asignarTextoElementos("listaAmigos",`<li> ${amigo} </li>`);
            limpiarCaja() 
        }
        
    }
        
    
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

function sortearAmigo() {
    
    if (nombres.length === 0 ){
        //--alertar si no hay nombres en la lista
        alert('no haz ingresado nombres')
    }else{
        //--deshabilitar el boton de agregar una vez q inicia el sorteo
        botones('agregar', 'Ya sorteaste' )
        limpiarCaja()

        //--elegir ganador
        let indice = Math.floor(Math.random()* NumAmigos)
        ganador = nombres[indice]
        
        //--limpiar la lista en la pantalla
            for(i=1; i<=nombres.length; i++){
                lista = document.querySelector('li')
                lista.remove()
            }
        
        //--mostrar ganador
        asignarTextoElementos("resultado",`el ganador es ${ganador}!!`);

        //--una vez realizado el sorteo deshabilitar el boton        
        botones('botonSorteo', 'Ya tienes al ganador')
        
        console.log(ganador)
        console.log(nombres)
        
    }
    return ganador

    }
    




