public class BucleWhile2 {
    public static void main(String[] args) {
        


       String[] nombres = {"Juan", "Alexandra", "Wally", "Bob"};
       boolean encontrado = false; // false por defecto
       int count = 0;

       while (count < nombres.length) {
           encontrado = nombres[count] == "Wally"; // Comparación devuelve boolean

           System.out.println(nombres[count] + " igual a Wally es " + encontrado);

           if (encontrado) {
              break;

           } else {
            System.out.println("No se ha encontrado a Wally sigo buscando");
           }

           count++; // incrementa en 1
           
    }
    System.out.println(encontrado); // ahora sí se puede usar la variable fuera del bucle, al ser creada furera del bucle.
    }
}


