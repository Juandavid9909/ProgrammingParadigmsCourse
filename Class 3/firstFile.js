// Funcional
// Restricciones
// 1. No puedes usar ciclos
// 2. Ninguna función puede recibir más de un parámetro
// 3. Las funciones pueden (o no) recibir funciones como parámetros
// 4. Las funciones pueden (o no) retornar funciones
// Monadas, categorías, functores
const sumar = a  => b => a + b;

const sumarAlSeis = sumar(6);

console.log(`El resultado es: ${ sumarAlSeis(4) }`);
console.log(`El resultado es: ${ sumarAlSeis(11) }`);