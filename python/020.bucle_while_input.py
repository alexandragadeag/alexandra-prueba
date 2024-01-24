
password_correct = "admin"
password = ""

while password != password_correct:
    password = input("Introduce la contraseña: ").replace(" ", " ")

print("Contraseña correcta. ¡Bienvenido!")

departamentos = ['marketing', 'desarrollo', 'soporte', 'IA']
departamento = ''

while departamento not in departamentos:
    departamento = input('Introduce el departamento: ')

print('Departamento correcto.')

