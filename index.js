const fs = require('fs');
const {registrar, leer} = require('./operaciones');
const argumetos = process.argv.slice(2);


if(argumetos[0] === "leer"){
    leer();
}

if(argumetos[0] === "registrar"){
    const[nombre, edad, tipoAnimal, colorAnimal, enfermedad] = argumetos.slice(1);
    registrar(nombre, edad, tipoAnimal, colorAnimal, enfermedad);
}