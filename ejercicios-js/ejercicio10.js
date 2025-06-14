function esPalindromo(palabra) {
    const invertida = palabra.split('').reverse().join('');
    return palabra === invertida;
}

console.log(esPalindromo("reconocer"));  // true