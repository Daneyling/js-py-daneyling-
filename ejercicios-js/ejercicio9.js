let contador = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        contador++;
    }
}
console.log('Hay ${contador} números pares entre 1 y 100');