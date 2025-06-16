import random

numero = random.randint(1, 10)
print(f"Tabla de multiplicar del {numero}")
for i in range(1, 11):
    print(f"{numero} x {i} = {numero * i}")