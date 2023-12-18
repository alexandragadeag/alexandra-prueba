



#Al utilizar la función vscode muestra su docstring


def sumatorio(numeros):
    """Calcula el sumatorio y lo devuelve
    
    Args:
        numeros (list): lista de números int float
    """
    
    sumatorio = 0
    
    for num in numeros:
        sumatorio += num
    
    return sumatorio

numeros = [1, 2, 3, 4, 5]
resultado = sumatorio(numeros)
resultado2 = sumatorio([100,200,300,400]) #Lo puedes reutilizar y llamar cuantas veces quieras 
print(resultado)
print(resultado2)


def contar_vocales(Frase):
    pass
