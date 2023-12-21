public class IfElse {

    public static void main(String[] args) {
        
        double precio = 56.44;

        if (precio >= 50) {
            System.out.println("Precio igual o superior a 50 €");
        } else {
            System.out.println("Precio inferior a 50 €");
        }

        // múltiples condicones
        int hora =12;
        if (hora > 0 && hora <= 8) 
            System.out.println("Durmiento");

         else if (hora > 8 && hora <= 15) 
            System.out.println("Trabajando");

         else if (hora > 15 && hora < 24)
            System.out.println("Curso de Java");
         else
            System.out.println("Valor incorrecto");


            // Si solo hay una SENTENCIA dentro de las estructuras if else entonces se pueden omitir las llaves {} y la estructura queda más sencillas. 

    }
    
}
