import java.util.Scanner;

public class leerDatos {

    public static void main(String[] args) {
        
        // Clase Scanner
        // TipoDato identificador = new TipoDatos();
        Scanner scanner = new Scanner(System.in);


        System.out.println("Introduce tu nombre: ");
        String nombre = scanner.nextLine(); // Lee un texto
        System.out.println("Tu nombre es: " + nombre);

        System.out.println("Introduce tu apellido: ");
        String apellido = scanner.nextLine();
        System.out.println("Tu apellido es: " + apellido);

        System.out.println("Introduce tu edad: ");
        int edad = scanner.nextInt();
        System.out.println("Tu edad es: " + edad);

        System.out.println("Introduce si está dado de alta en la SS (true/false)");
        boolean isRegistered = scanner.nextBoolean();
        // Problema, nextBoolean solo lee el booleano y no lee
        // el salto de línea que introduce el usuario
        // Por tanto debemos Consumir ese salto de línea pendiente
        scanner.nextLine(); 
        System.out.println("Está registrado: " + isRegistered);
        

        System.out.println("Introduce si esta dado de alta en java (si/no) ");
        String isRegisteredJava = scanner.nextLine();
        boolean isRegisteredJavaCourse = false;
        if ( isRegisteredJava.equals("si"))
            isRegisteredJavaCourse = true;

        System.out.println("Esta registrado en java:" + isRegisteredJavaCourse);






    }
    
}
