const h1 = document.querySelector("h1");
const form = document.querySelector("#form");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const resultado = document.querySelector("#resultado");

//se debe pasar el input a numnero para que no concatene si no que sume
//Number() o parseInt() sirven para pasar de string a numeros
//para escuchar eventos agregamos el metodo .addEventListener('nombre del evento', funcion o parte del codigo sin parentesis)

/*form.addEventListener('submit', sumarImputsValues);

function sumarImputsValues(event) {
    //console.log({event});
    event.preventDefault();
    const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
    resultado.innerText = "Resultado " + sumaInputs;
}
*/
//otra solucion seria 
btn.addEventListener('click', sumarImputsValues);
btn.addEventListener('mouseover', seguimiento);

function sumarImputsValues(event) {
    //console.log({event});
    //event.preventDefault();
    const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
    resultado.innerText = "Resultado " + sumaInputs;
}



function seguimiento() {
    console.log("paso por encima del boton");
}
//eventos que se pueden usar 
/*
+ Hara lo que la funcion haga haciendo click en algo
element.addEventListener("click", myFunction);
---
+ Hara lo que la funcion  haga pasando por encima el mouse
element.addEventListener("mouseover", myFunction);
---
+ Hara lo que la funcion haga cuando se reinicie la pagina
element.addEventListener("risize", myFunction);
---
+ 

*/