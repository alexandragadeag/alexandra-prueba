/*
 
Las palabras que van delante del nombre de la función se llaman:
 modificadores

 1. Visibilidad:public, private, protected, (default)
 2. [static]: opcional, indica que un método se puede ivocar sin crear un objeto:
       FuncionesBasicas.holamundo()
 3. tipoRetorno:
       Si la función no devuelve nada, entonces se usa void: enviar un email, main incia el programa de java y no devuelve nada
       Si la función devuelve algo, se escribe el tipo de dato de ese algo: String, int, double, (recuperar algo de base de datos)
 4. identificador: nombre que el desarrollador da la función 
       La función main es una función especial que indica el comienzo de un programa java
       Por tanto el nombre debe ser main
       No se puede duplicar el nombre, salbo usando el mecanismo "sobrecarga"
       No puede empezar por números
       Nomenclatura para los nombres de las funciones: camelCase
       Sugerencia: crear nombres descriptivos que expliquen lo que hace la función,
       normalmente se empieza con un verbo.
 5. Paréntesis: ()
 6. Parámetors: puede haber 0,1, o más
       Cuantos menos parámetos entonces más fácil de testear, mantener

 Reglas, recomendaciones: las funciones se crean dentro de una clase, al final de la clase.
 7. Llaves {}
 8. La función debe estar dentro de una clase/interfaz/enum/record

 9. Invocar la función, se invocan desde otras funciones, habitualmente quien empieza las invocaciones es la función main()

 */


public class FuncionesBasicas {

    
    public static void main(String[] args) {

        saludar(); // Hola mundo
        saludar(); // Hola mundo
        saludar("Alexandra"); // Hola Alexandra
        
    }

    public static void saludar () {
        System.out.println("Hola mundo");
    }


    // Sobrecarga, tiene el mismo nombre que otra función pero distintos parámetros
    public static void saludar(String nombre) { // signatura
        System.out.println("Hola " + nombre);

    }
    
}
