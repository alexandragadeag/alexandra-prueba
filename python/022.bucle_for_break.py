
# Bucle For on Break
# Nos permite salir completamente del bucle for cuando se cumpla
# una condición específica 

# Crear lista de numeros del 1-5
numeros = [1, 2, 3, 4, 5]
for num in numeros:
    if num == 3:
        break
    print(num)
    
# Buscar una fruta en específico de una lista de frutas 
frutas = ["Manzana", "Melon", "Naranja", "Cereza", "Kiwi"]
for fruta in frutas:
    if fruta == "Cereza":
        print("Cereza encontrada")
        break
print(f"Revisando {fruta}...") # no funciona bien, revisar en apuntes 

# Un bucle utilizando la función range() que tenga un break
for i in range(10):
    if i == 4:
        break
    print(i)
    
    
# bucle for, que se interrumpa (break) cuando se encuentre una letra en una cadena de texto 
# cadena de texto (string)
# Crear una variable que sea de tipo string ""

# Crear una variable de tipo string
cadena_texto = "Hola123Mundo"
for caracter in cadena_texto:
    if caracter == "M":
        print(f"Se encontró la letra '{caracter}'. El bucle se interrumpirá.")
        break

    



    
    
