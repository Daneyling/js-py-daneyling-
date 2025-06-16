const longitud = Math.floor(Math.random() * (40 - 16 + 1)) + 16;
const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
let contraseña = '';

for (let i = 0; i < longitud; i++) {
  contraseña += chars[Math.floor(Math.random() * chars.length)];
}

console.log(`Longitud: ${longitud}`);
console.log(`Contraseña generada: ${contraseña}`);