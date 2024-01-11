import java.util.Scanner;

public class App {
public static void main(String[] args) {
String menu = """
Opciones:
1 - Mostrar productos
2 - Mostrar un producto por id
3 - Introducir nuevo producto
4 - Actualizar un producto
5 - Borrar un producto
6 - Salir
""";
System.out.println(menu); // El menú se muestra solo 1 vez
Scanner scanner = new Scanner(System.in);
boolean executeProgram = true;
while (executeProgram) {
System.out.println("Introduce una opcion: ");
int option = scanner.nextInt(); // Lee un número entero por consola
switch(option) {
case 1 -> System.out.println("opcion 1");
case 2 -> System.out.println("opcion 2");
case 3 -> System.out.println("opcion 3");
case 4 -> System.out.println("opcion 4");
case 5 -> System.out.println("opcion 5");
case 6 -> executeProgram = false; // SALIR, ROMPE WHILE
}
}
// break salir del bucle
}
}
