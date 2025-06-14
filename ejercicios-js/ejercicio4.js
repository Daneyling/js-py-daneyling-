const numero = Math.floor(Math.random() * 10) + 1;

console.log(`Tabla del ${numero}`);
for (let i = 1; i <= 10; i++) {
  console.log(`${numero} x ${i} = ${numero * i}`);
}