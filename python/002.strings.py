
nombre = "Alexandra"

# Crear String utilizando constructor

apellido = str("García")

# Convertir de núero a string:
edad = 18
edad_txt = str(edad)

print(edad + 1)
# error concatenar print(edad_txt +1)
# error print(nombre,apellido,edad_txt)
print(edad_txt + str(1)) # 181 concatena los textos

print(nombre, apellido, edad)
print(nombre, apellido, edad_txt)