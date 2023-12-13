
password_correct = "admin"
password = ""

while password != password_correct:
    password = input("Introduce la contraseña: ").replace(" ", " ")

print("Contraseña correcta. ¡Bienvenido!")