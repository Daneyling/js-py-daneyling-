const palabras = ["hola", "mundo", "javascript", "acciones", "github", "programa"];
const palabra = palabras[Math.floor(Math.random() * palabras.length)];
const invertida = palabra.split('').reverse().join('');

console.log(`Palabra original: ${palabra}`);
console.log(`Palabra invertida: ${invertida}`);