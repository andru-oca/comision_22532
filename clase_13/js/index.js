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


(()=> {
    
    if (true){
        var data = 1;
        let scope_block = 10;
        document.write("<h1>This is passed </h1>");
        console.log("BY BLOCK")
        console.log( data );
        console.warn(scope_block);
    }
    console.log("IN THE FUNCTION")
    console.log( data );
    console.warn(scope_block);
})()



/*Type of */















