
def contar_vocales(texto):
    # Inicializamos el contador de vocales
    num_vocales = 0
    
    # Recorremos cada carácter en el texto
    for carac in texto:
        # Verificamos si el carácter es una vocal (mayúscula o minúscula)
        if carac.lower() in 'aeiou': # con la función .lower() convertimos todos los carácteres en minúsculas.
            num_vocales += 1
    
    # Retornamos el número total de vocales encontradas
    return num_vocales

# Ejemplos de uso
num_vocales = contar_vocales("Alan")
print(num_vocales)  # 2

num_vocales2 = contar_vocales("Hola Mundo")
print(num_vocales2)  # 4