// Funcional
// Restricciones
// 1. No puedes usar ciclos
// 2. Ninguna función puede recibir más de un parámetro
// 3. Las funciones pueden (o no) recibir funciones como parámetros
// 4. Las funciones pueden (o no) retornar funciones
// Monadas, categorías, functores
const factorial = n => (n === 1 || n === 0) ? 1 : factorial(n - 1) * n;

const procesar = n => {
    const x = factorial(n);
    return b => x * b;
};

const factorialCinco = procesar(5);
console.log(`El doble del factorial es: ${ factorialCinco(2) }`);
console.log(`El triple del factorial es: ${ factorialCinco(3) }`);