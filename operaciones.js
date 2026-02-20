const fs = require('fs');

const registrar = (nombre, edad, tipo, color, enfermedad) => {
    animales = {nombre, edad, tipo, color, enfermedad}
    const animalesAnteriores = JSON.parse(fs.readFileSync("citas.json", "utf-8"))
    animalesAnteriores.push(animales);
    fs.writeFileSync("citas.json", JSON.stringify(animalesAnteriores))
}

const leer = () => {
    const animales = fs.readFileSync("citas.json", "utf-8");
    console.log(JSON.parse(animales))
};

module.exports={
    registrar,
    leer
}

