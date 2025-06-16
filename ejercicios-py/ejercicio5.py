import random

numero = random.randint(1, 100)
es_primo = numero > 1

for i in range(2, numero):
    if numero % i == 0:
        es_primo = False
        break

print(f"El número {numero} {'es primo' if es_primo else 'no es primo'}")