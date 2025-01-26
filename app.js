/* El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
Aquí deberás desarrollar la lógica para resolver el problema.*/
//llenar la lista al momento de agregar un nombre   check
//poner el ganador en la pag   check
//poner el alert cuando esta vacio check
//quizas verificar q sea un nombre no repetido


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

function agregarAmigo() {
    //console.log(nombres.length)
    let amigo = document.getElementById('amigo').value
    if( amigo == ''){
        alert('debe ingresar un nombre');
    }else{
        if(nombres.includes(amigo)){
            alert(`${amigo} ya se encuentra en tu lista`)
            limpiarCaja()
        }else{
           nombres.push(amigo)
        NumAmigos = nombres.length
        console.log(nombres)
        asignarTextoElementos("listaAmigos",`<li> ${amigo} </li>`);
        limpiarCaja() 
        }
        
    }
        
    
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

function sortearAmigo() {
    document.getElementById('agregar').setAttribute('disabled', true);

    limpiarCaja()
    if (nombres.length === 0 ){
        alert('no haz ingresado nombres')
    }else{
        let indice = Math.floor(Math.random()* NumAmigos)
        ganador = nombres[indice]
        console.log(ganador)
        lista = document.getElementById('listaAmigos')
        lista.remove()
        asignarTextoElementos("resultado",`el ganador es ${ganador}!!`);
        document.getElementById('botonSorteo').setAttribute('disabled', true);

        
        //nombres.slice()
        //console.log(nombres)
    }
    
    return ganador
}

