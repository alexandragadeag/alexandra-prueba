def filtrar_precio(precios, precio_min, precio_max):
    precios_filtrados = []
    
    for precio in precios: #menor qué 
        if precio_min <= precio <= precio_max:
            precios_filtrados.append(precio) # .append es para agregar cosas en una lista 
    
    return precios_filtrados

# Uso
precios = [10, 99.56, 53.23, 120.76, 32.44]
precios_filtrados = filtrar_precio(precios, 5, 55)