def es_palindromo(palabra):
    invertida = palabra[::-1]
    return palabra == invertida

print(es_palindromo("reconocer"))  # True