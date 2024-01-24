public class ArraysEjemplo {
    
    public static void main(String[] args) {

        // Array es una estructura de datos
        
        int[] numeros = new int[5];
        numeros[0] = 10;
        numeros[1] = 20;
        numeros[2] = 30;
        numeros[3] = 40;
        numeros[4] = 50;
        // numeros[5] = 60; // Da error
        // Si intentamos poner un tipo de dato donde no es te da un error y no te deja compilar.

        // IMPRIMIR LA LONGITUD DEL ARRAY, 5
        System.out.println(numeros.length);
        System.out.println(numeros[2]); // 30

        String[] nombres = new String[3]; // Longitud 3
        nombres[0] = "Alexandra";
        nombres[1] = "Marian";

        System.out.println(nombres[0]);

        
        


    }

}
