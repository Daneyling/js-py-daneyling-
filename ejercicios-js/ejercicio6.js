const n = Math.floor(Math.random() * 10) + 1;

function factorial(num) {
  let resultado = 1;
  for (let i = 1; i <= num; i++) {
    resultado *= i;
  }
  return resultado;
}

console.log(`${n}! = ${factorial(n)}`);