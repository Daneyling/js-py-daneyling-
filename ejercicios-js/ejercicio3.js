const palabras = [
  "Aceituna", "Murciélago", "Educación", "Aeropuerto",
  "Otorrinolaringólogo", "Euforia", "Aceite",
  "Paleontólogo", "Arquitectura", "Hipopótamo"
];

const vocales = ['A', 'E', 'I', 'O', 'U', 'Á', 'É', 'Í', 'Ó', 'Ú'];

const palabra = palabras[Math.floor(Math.random() * palabras.length)];
const encontradas = palabra.toUpperCase().split('').filter(letra => vocales.includes(letra));

console.log(`Palabra: ${palabra}`);
console.log(`Vocales encontradas: ${encontradas.join(', ')}`);
console.log(`Cantidad de vocales: ${encontradas.length}`);