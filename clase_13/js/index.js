// window.onload = (e) => alert("First JS")


// let data = document.getElementById("to_insert"); 
// let create_element = document.createElement("p");

// // create_element.classList = "border";
// // create_element.classList.add("background");

// create_element.innerHTML = "Booleans";
// data.appendChild(create_element);


/*Voy a comentar en bloque*/

let obj = {
    name : "anderson",
    age : 34
};

console.table(obj);

/* Tipos de variables*/

// Booleans
// String
// Numbers | Integers | Floats


/*Declaracion de variables*/

// let | var | const


let numbers = 44 ; // permite variacion, scope bloques {}
var numbers_var = 55; //permite variacion, scope functions 
const numbers_const = 10; // inmutable


// (()=> {
    
//     if (true){
//         var data = 1;
//         let scope_block = 10;
//         document.write("<h1>This is passed </h1>");
//         console.log("BY BLOCK")
//         console.log( data );
//         console.warn(scope_block);
//     }
//     console.log("IN THE FUNCTION")
//     console.log( data );
//     console.warn(scope_block);
// })()


// console.log( valueError);

// var valueError = "Will be as undefined";

// let valueError = "Will be as Referene Error";


/*Type of  data type*/


/*Type  objecst*/


/*Asignacion | aritmeticos*/



/*prompt | alert | document.write */


let miNombre = prompt("Ingresa tu Nombre");


window.alert("Hey! Hola " + miNombre);

let text = `<h1> Hola tu nombre es ${miNombre}</h1>` ;

document.write(text);

let to_insert_data = document.querySelector('[data-v]');

to_insert_data.insertAdjacentHTML('afterend',text);


// window.alert('hello');

/*
    Permisos para usar elementos de los dispositivos
    Material Extra de informacion de las capacidades de JS

*/

// let video = document.getElementById("stream");

// navigator.mediaDevices.getUserMedia(
//     {   
//         video : true
//     })
// .then ( stream => 
//     {
        
//         video.srcObject = stream;
//         console.log(stream);
//     }
// );


















