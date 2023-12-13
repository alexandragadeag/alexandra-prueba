

# Sistemas puntuación

puntos = 50
nivel = 3

if nivel == 1:
    
    if puntos < 20:
        print('tienes que mejorear')
    else:
        print('Buen comienzo')
        
elif nivel == 2:
    
    if puntos < 30:
        print('Podría hacerse mejor, para un nivle 2')
    else:
        print('Gran avance')
    
elif nivel == 3:
    if puntos < 40:
        print('Mejorable para un nivle avanzado')
    else:
        print('Impresionante')
    
else:
    print('Majestuoso, sigue así')
    