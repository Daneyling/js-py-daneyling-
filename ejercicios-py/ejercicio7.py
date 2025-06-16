import random

palabras = ["hola", "guitarra", "javascript", "murciélago", "pantalla"]
palabra = random.choice(palabras)
invertida = palabra[::-1]

print(f"Palabra original: {palabra}")
print(f"Palabra invertida: {invertida}")