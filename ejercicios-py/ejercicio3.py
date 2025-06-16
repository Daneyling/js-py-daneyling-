import random
import re

palabras = [
    "Aceituna", "Murciélago", "Educación", "Aeropuerto", "Otorrinolaringólogo",
    "Euforia", "Aceite", "Paleontólogo", "Arquitectura", "Hipopótamo"
]

palabra = random.choice(palabras)
vocales = re.findall(r"[aeiouáéíóú]", palabra, re.IGNORECASE)

print(f"Palabra seleccionada: {palabra}")
print(f"Vocales encontradas: {', '.join(vocales)}")
print(f"Total de vocales: {len(vocales)}")