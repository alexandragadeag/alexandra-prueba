
# Función sin parametros
def saludar():
    print("Hola mundo")
    
saludar() # Llamada a la función
saludar() 

# Función con un parametro 
def saludar2(nombre):
    print(f"¡Hola, {nombre}!")

# Llamar a la función con diferentes argumentos    
saludar2("Ana")
saludar2("Diego")
saludar2("Alexandra")

# Función con múltiples parámetros
def saludar3(nombre, hora_dia):
    print(f"¡Buenas {hora_dia}, {nombre}!")

saludar3("Juan", "noches")
saludar3("Amparo", "tardes")

# Funciones que devuelven un valor
def saludar4(nombre):
    return (f"¡Hola, {nombre}!")

mensaje = saludar4("Luisa") # variable que almacena el valor devuelto por la función
print(mensaje) # Llamada a la función

# Función que devuelve un valor, en este caso una suma 
def sumar(a, b):
    return a + b

resultado = sumar(5, 3)
print("Resultado: ", resultado) # Imprimir el valor de la variable resulatado (8)


# calculo de iva sin función 
precio= 100
precio_iva = precio * 0.21
precio_final = precio + precio_iva
print(precio_final)

# Función para calcular el iva sobre el precio de un producto 
def calcular_iva(precio_producto):
    iva = precio_producto * 0.21
    resultado_iva = precio_producto + iva
    print(f"Precio final: {resultado_iva} €")
    return precio_producto + iva

calcular_iva(100)
calcular_iva(500)

#Sin función y con input
# Definir el precio original del producto
precio_original = float(input("Ingrese el precio original del producto: "))

# Definir la tasa de IVA (porcentaje)
tasa_iva = 0.20  # Puedes ajustar esto según la tasa de IVA en tu región

# Calcular el precio con IVA
precio_con_iva = precio_original + (precio_original * tasa_iva)

# Imprimir el resultado
print(f"El precio con IVA es: {precio_con_iva}")