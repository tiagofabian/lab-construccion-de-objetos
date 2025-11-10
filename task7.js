// ESTE CODIGO CONTIENE EMOJIS VISIBLES CON CHALK
// Type your code below this line!
const prompt = require("prompt-sync")();
 
function car(marca, modelo, año, motor, color, kilometraje) { 
 
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
    this.motor = motor;
    this.color = color;
    this.kilometraje = kilometraje;
    
    this.mostrarInfo = function(){
        console.log(` 🚗 ${this.marca} ${this.modelo} ${this.año}`);
        console.log(`Color: ${this.color}`);
        console.log(`Motor: ${this.motor}`);
        console.log(`Kilometraje: ${this.kilometraje} km`);
    }
};

// Type your code below this line!


const marca = prompt("Ingrese marca: ");
const modelo = prompt("Ingrese modelo: ");
const año = parseInt(prompt("Ingrese año: "));
const motor = prompt("Ingrese tipo de motor (combustión o electrico): ");
const color = prompt ("Ingrese color: ");
const kilometraje = parseInt(prompt("ingrese kilometraje: "));

const miAuto = new car(marca, modelo, año, motor, color, kilometraje)
console.log("=== Información del Auto ===")
miAuto.mostrarInfo()
// Type your code above this line!

