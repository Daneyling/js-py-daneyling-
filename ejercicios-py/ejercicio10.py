import random
import string

longitud = random.randint(16, 40)
caracteres = string.ascii_letters + string.digits
contraseña = ''.join(random.choice(caracteres) for _ in range(longitud))

print(f"Contraseña generada ({longitud} caracteres): {contraseña}")