
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
