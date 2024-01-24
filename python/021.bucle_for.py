
# Bucle for

# Se puede utilizar con diferentes colecciones de datos (listas,tupla, diccionarios, conjuntos, etc.)
# Estructura iterativa, iterar (repetir un proceso un número determinado de veces)
# Bcle con numero determinado de iteraciones 

for i in [1, 2, 3, 4, 5]:
    print("Hola mundo")
    
numbers = [1, 2, 3, 4, 5]
for n in numbers:
    print("Hola Mundo") # Se imprime cinco veces porque hay cinco elementos en la lista.
    
# Una lista puede contener elementos de diferentes tipos
# No tienen que ir ordenados, no sobre el tipo de datos, no asigna un valor a cada elemento
# Está iterando sobre la cantidad de elementos de la lista, 
for i in [1, 10, 3, "Daniela"]: # Cuenta los elementos de la lista, no el tipo de datos, son 4 elementos 
    print("Ejercicio bucle for")
    
coleccion = [5, 10, "Python", 20]
for i in coleccion:
    print(f"Elemento: {i}")
  
# Iterar sobre una lista de frutas

frutas = ["manzana", "banana", "naranja", "uva"]

for fruta in frutas:
    print(f"Fruta: {fruta}")
    
# Utilizar la función "range()" para generar una lista de números
for i in range(5):
    print(i)
    
# Imprimir "HOLA" 5 veces
for i in range(5):
    print("HOLA")
    
# Iterar sobre una cadena de texto
palabra = "Descanso"
for i in palabra:
    print(i)
    
frase = "Descanso a las 11"
for i in frase:
    print(i)
       
    
# Iterar sobre una cadena de texto pero sin salto de línea
nombre = "Alexandra"
# for n in nombre:
    # print(f"{n}", end="") # Se puede poner dentro de las comillas de end . - nada.
    
# Sumar los elementos de una lista
numeros = [1, 2, 3, 4, 5]
#crear variable acumuladora

suma = 0 # incializar en 0
for num in numeros:
    suma += num # en cada iteración, el valor de num se suma al valor actual de la suma 

print("La suma es: ", suma)

# suma empieza en 0.En la primera vuelta toma el valor de 1, 1+2,3+3,6+4,10+5.

# Concatenar cadenas de texto de una lista
words = ["Son", "las", "10:45 am"]
sentence = ""

for w in words:
    sentence += w + " "
print("La frase es: ", sentence)





    
