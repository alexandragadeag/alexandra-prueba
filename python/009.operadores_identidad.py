
# is

# None equivale a null o vacío

email = None # nulo, no es texto, ni bool, ninumérico, no hay valor

user_email = input('Introduce tu email: ')

if user_email.endswith('@gmail.com'):
    email = user_email # Asignamos el user email sol si es de gmail.com
    
# llegados a este punto la variable email puede ser None o tener un valor

if email is None:
    print('Email incorrecto')

# is not

if email is not None:
    print('Correo registrado satisfactoriamente')
    
# is
print(1 == True) # True
print(0 == True) # False
print(1 is True) # False nos idénticos uno es int y otro es bool


