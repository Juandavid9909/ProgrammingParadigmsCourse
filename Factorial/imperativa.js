// Imperativa - Estructurada
const factorial = n => {
    if(n <= 0) {
        return "No se puede generar factorial";
    }

    let res = 1;

    for(let i = 1; i <= n; i++) {
        res *= i;
    }
    return res;
};

console.log(factorial(5));