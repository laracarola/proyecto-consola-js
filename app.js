/***************************************************
 * PROYECTO: Aplicación de consola en JavaScript
 * Módulo: Fundamentos de programación
 ***************************************************/

/* =================================================
   1. MENSAJES INICIALES Y USO DE CONSOLA
 ================================================= */

// console.log sirve para mostrar mensajes en la consola
console.log("Bienvenido a la aplicación de consola en JavaScript");

// alert muestra un mensaje emergente al usuario
alert("Este proyecto se ejecuta desde la consola del navegador");

// prompt permite pedir datos al usuario
// Todo lo que entra por prompt es TEXTO (string)
let nombreUsuario = prompt("Ingresa tu nombre");

// Mostramos un mensaje personalizado
console.log("Hola " + nombreUsuario + ", comencemos con el proyecto");

/* =================================================
   2. VARIABLES Y OPERACIONES MATEMÁTICAS
   ================================================= */

// Pedimos dos números al usuario
let numero1 = prompt("Ingresa el primer número");
let numero2 = prompt("Ingresa el segundo número");

// Convertimos el texto a número usando Number()
numero1 = Number(numero1);
numero2 = Number(numero2);

// Validamos que realmente sean números
if (isNaN(numero1) || isNaN(numero2)) {
    console.log("Error: Debes ingresar solo números");
} else {
    console.log("Números ingresados correctamente");
}

/* =================================================
   3. FUNCIONES MATEMÁTICAS
   ================================================= */

// Función para sumar dos números
function sumar(a, b) {
    return a + b;
}

// Función para restar
function restar(a, b) {
    return a - b;
}

// Función para multiplicar
function multiplicar(a, b) {
    return a * b;
}

// Función para dividir con validación
function dividir(a, b) {
    if (b === 0) {
        return "No se puede dividir por cero";
    }
    return a / b;
}

/* =================================================
   4. USO DE CONDICIONALES (if / switch)
================================================= */

// Pedimos al usuario la operación
let operacion = prompt(
    "Elige una operación: sumar, restar, multiplicar o dividir"
);

let resultado;

// switch evalúa distintos casos posibles
switch (operacion) {
    case "sumar":
        resultado = sumar(numero1, numero2);
        break;
    case "restar":
        resultado = restar(numero1, numero2);
        break;
    case "multiplicar":
        resultado = multiplicar(numero1, numero2);
        break;
    case "dividir":
        resultado = dividir(numero1, numero2);
        break;
    default:
        resultado = "Operación no válida";
}

// Mostramos el resultado
console.log("Resultado:", resultado);

/* =================================================
   5. ARREGLOS Y CICLOS
  ================================================= */

// Creamos un arreglo de números
let numeros = [5, 12, 30, 7, 25, 40];

// Mostramos el arreglo completo
console.log("Lista de números:", numeros);

// Recorremos el arreglo con un for
console.log("Recorriendo el arreglo con for:");
for (let i = 0; i < numeros.length; i++) {
    console.log("Número:", numeros[i]);
}

// Función que filtra números mayores a un valor
function filtrarMayores(arreglo, limite) {
    let resultado = [];

    // Usamos un ciclo for
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] > limite) {
            resultado.push(arreglo[i]);
        }
    }

    return resultado;
}

// Usamos la función
let mayoresA20 = filtrarMayores(numeros, 20);
console.log("Números mayores a 20:", mayoresA20);

/* =================================================
   6. OBJETOS EN JAVASCRIPT
   ================================================= */

// Creamos un objeto usuario
let usuario = {
    nombre: nombreUsuario,
    edad: 30,
    ciudad: "Osorno",

    // Método del objeto
    descripcion: function () {
        return (
            "El usuario se llama " +
            this.nombre +
            ", tiene " +
            this.edad +
            " años y vive en " +
            this.ciudad
        );
    }
};

// Mostramos el objeto
console.log("Objeto usuario:", usuario);

// Llamamos al método del objeto
console.log(usuario.descripcion());

/* =================================================
   7. ARREGLO DE OBJETOS
================================================= */

// Creamos un arreglo de objetos
let personas = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Carlos", edad: 40 },
    { nombre: "Sofía", edad: 32 }
];

// Recorremos con forEach
console.log("Listado de personas:");
personas.forEach(function (persona) {
    console.log(
        persona.nombre + " tiene " + persona.edad + " años"
    );
});

console.log("Fin del proyecto 🚀");