function mostrarDatos(){
    formulario = document.forms[0];
    nombre = document.getElementById("inputNombre").value;
    apellido = document.getElementById("inputApellido").value;
    edad = document.getElementById("inputEdad").value;
    console.log(`Informacion administrada: ${nombre},${apellido},${edad}`)
    alert(`Informacion administrada: ${nombre},${apellido},${edad}`);
}

function calcularHipotenusa(){
    formulario = document.forms[1];
    catetoA = Number(document.getElementById("labelCatetoA").value);
    catetoB = Number(document.getElementById("labelCatetoB").value);
    hipotenusa = Math.sqrt(catetoA**2+catetoB**2);
    alert(`Valor cateto a: ${catetoA}, Valor cateto b: ${catetoB}, el valor de la hipotenusa es: ${hipotenusa}`);
}

function calcularCuadratica(){
    formulario = document.forms[2];
    a = Number(document.getElementById("labelA").value);
    b = Number(document.getElementById("labelB").value);
    c = Number(document.getElementById("labelC").value);
    determinante = (b**2)-(4*a*c);

    if(a == 0){
        alert(`El valor de A (${a}) no puede ser 0`);
    }else if(determinante < 0){
    
        alert(`El valor del determinante (${determinante}) es negativo por lo que la ecuacion no tiene solucion`);
    }else if(determinante == 0){
        solucion = (-b+Math.sqrt(determinante))/(2*a);
        alert(`La ecuacion cuadratica solo tiene una solucion y es (${solucion}). La ecuacion cuadratica es (${a}X^2)+(${b})+(${c})=0`);
    }else if(determinante > 0){
        solucion1 = (-b+Math.sqrt(determinante))/(2*a);
        solucion2 = (-b-Math.sqrt(determinante))/(2*a);
        alert(`La ecuacion cuadratica tiene dos soluciones y son: X1 = ${solucion1},X2 = ${solucion2}. La ecuacion cuadratica es (${a}X^2)+(${b})+(${c})=0`);
    }
}

function sumar(num1,num2){
    return num1+num2;
}

console.log(sumar(2,4))