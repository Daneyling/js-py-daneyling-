import random

numero = random.randint(1, 10)
factorial = 1

for i in range(2, numero + 1):
    factorial *= i

print(f"{numero}! = {factorial}")