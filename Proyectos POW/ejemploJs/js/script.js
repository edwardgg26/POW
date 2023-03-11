"use strict"

function mostrarDatos(){
    let formulario = document.forms["formularioNombre"];
    let nombre = formulario.inputNombre.value;
    let apellido = formulario.inputApellido.value;
    let edad = formulario.inputEdad.value;
    console.log(`Informacion administrada: ${nombre},${apellido},${edad}`);
    alert(`Informacion administrada: ${nombre},${apellido},${edad}`);
}

function calcularHipotenusa(){
    let formulario = document.forms["formularioHipotenusa"];
    let catetoA = Number(formulario.labelCatetoA.value);
    let catetoB = Number(formulario.labelCatetoB.value);
    let hipotenusa = Math.sqrt(catetoA**2+catetoB**2);
    console.log(`Valor cateto a: ${catetoA}, Valor cateto b: ${catetoB}, el valor de la hipotenusa es: ${hipotenusa}`);
    alert(`Valor cateto a: ${catetoA}, Valor cateto b: ${catetoB}, el valor de la hipotenusa es: ${hipotenusa}`);
}

function calcularCuadratica(){
    let formulario = document.forms["formularioCuadratica"];
    let a = Number(formulario.labelA.value);
    let b = Number(formulario.labelB.value);
    let c = Number(formulario.labelC.value);
    let determinante = (b**2)-(4*a*c);

    if(a == 0){
        console.log(`El valor de A (${a}) no puede ser 0`);
        alert(`El valor de A (${a}) no puede ser 0`);
    }else if(determinante < 0){
        alert(`El valor del determinante (${determinante}) es negativo por lo que la ecuacion no tiene solucion`);
        console.log(`El valor del determinante (${determinante}) es negativo por lo que la ecuacion no tiene solucion`);
    }else if(determinante == 0){
        let solucion = (-b+Math.sqrt(determinante))/(2*a);
        alert(`La ecuacion cuadratica solo tiene una solucion y es (${solucion}). La ecuacion cuadratica es (${a}X^2)+(${b})+(${c})=0`);
        console.log(`La ecuacion cuadratica solo tiene una solucion y es (${solucion}). La ecuacion cuadratica es (${a}X^2)+(${b})+(${c})=0`);
    }else if(determinante > 0){
        let solucion1 = (-b+Math.sqrt(determinante))/(2*a);
        let solucion2 = (-b-Math.sqrt(determinante))/(2*a);
        alert(`La ecuacion cuadratica tiene dos soluciones y son: X1 = ${solucion1},X2 = ${solucion2}. La ecuacion cuadratica es (${a}X^2)+(${b})+(${c})=0`);
        console.log(`La ecuacion cuadratica tiene dos soluciones y son: X1 = ${solucion1},X2 = ${solucion2}. La ecuacion cuadratica es (${a}X^2)+(${b})+(${c})=0`);
    }
}