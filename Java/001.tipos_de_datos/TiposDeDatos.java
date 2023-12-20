public class TiposDeDatos {
    public static void main(String[] args) {
    
        // números enteros
        int miNumero1 = 200;
        int miNumero2 = 300;
        // int miNumero2 = 300; // Intenta volver a crearlo pero falla porque ya existe
        miNumero2 = 500; // sobreescribe el valor de la variable

        long miNumero3 = 500;

        System.out.println(miNumero1);
        System.out.println(miNumero2);
        System.out.println(miNumero3);

        // Números decimales
        float numeroDecimal = 5.99f; // Hay que especificar con una f que se trata de un float
        double numeroDecimal2 = 10.99; // En este caso no es obligatorio poner una d. 
        double numeroDecimal3 = 10.99d; // Se puede poner la d, pero no es necesario. 

        System.out.println(numeroDecimal);
        System.out.println(numeroDecimal2);
        System.out.println(numeroDecimal3);

        // Booleanos
        boolean isActive = true;
        boolean isStudent = false;
        boolean isWorker = true;

        // Caracteres
        char letter = 'A';
        // char letter2 = 'A'; // No deja añadir más de un caracter
        // char letter3 = 'A'; // No deja usar comillas deble para char porque son para String

        // Texto, String la S tiene que ser mayuscula. Los Strings tienen un comportamiento distinto, porque tiene métodos asociados con atributos. Permite hacer comportamientos sobre el string.
        String texto = "Hola mundo";
        boolean esVacio = texto.isBlank(); // Método de string para comprobar si un string esta vacío. 




    
    


    }

}
    

