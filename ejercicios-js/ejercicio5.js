const num = Math.floor(Math.random() * 100) + 1;

function esPrimo(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

console.log(`Número generado: ${num}`);
console.log(esPrimo(num) ? `El número ${num} es primo` : `El número ${num} no es primo`);