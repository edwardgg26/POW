"use strict"



function addDigit(botonPulsado){

    if( document.getElementById("campoDeTexo").innerHTML == 0){
        document.getElementById("campoDeTexo").innerHTML = "";
    }
    document.getElementById("campoDeTexo").innerHTML += botonPulsado;
}

function borrar(){
    document.getElementById("campoDeTexo").innerHTML = 0;
}