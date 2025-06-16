const numeros = [5, 8, 12, 3, 7, 10];
const suma = numeros.reduce((a, b) => a + b, 0);

console.log(`Array: ${numeros}`);
console.log(`Sumatoria: ${suma}`);