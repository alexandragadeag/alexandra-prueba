
texto = "Hola curso Angular"

# Calcular la longitud de un texto

longitud =len(texto)
print("longitud texto:", longitud)

# Convertir a mayúsculas upper()
print(texto.upper())

texto_mayusculas = texto.upper()
print(texto_mayusculas)

# Convertir a minúsculas lower()

print(texto.lower())

# Partir un texto en base a un caracter split()
# Genera como resultado una lista de strings

palabras = texto.split() # por defecto divide por espacios
print(palabras) # ['Hola', 'curso', 'Angular']
print(len(palabras)) # calcula la longitud d la lista, 3
print(palabras[0]) # accede a la primera palabra
print(palabras[1]) # curso
print(palabras[2]) # Angular
# print(palabras(3)) # Error, IndexError: list index out of range

# Reemplazar tecto dentro de un string, replace()

texto_adios = texto.replace("Hola","Adiós") # devuelve un nuevo string
print(texto_adios) # Adiós curso Angular


# Estraer y convertir un número de una frase

precio_producto = "53.99 dólares"
# paso 1: split
precio_elementos = precio_producto.split()
print(precio_elementos[0]) # 53.99 en texto

# paso 2: convertir texto a número float()
precio_num = float(precio_elementos[0])
print(precio_num) # 53.99 en número 

# paso 3: + 5
precio_num = precio_num + 5
print(precio_num) # 58.99



