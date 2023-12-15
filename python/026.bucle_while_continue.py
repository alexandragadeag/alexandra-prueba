
# Saltarnos el número 5 en un conteo del 1 al 10
# Utilizando continue

contador = 0

while contador <10:
    contador += 1
    if contador == 5:
        continue
    print(contador)
    
    
# Impimir solo los números impares entre 1 y 10 

contador = 0

while contador < 10:
    contador += 1

    if contador % 2 == 0:
        continue

    print(contador)
    
    
    contador = 0

while contador < 10:
    contador += 1

    # Saltar números impares
    if contador % 2 != 0:
        continue

    print(contador)