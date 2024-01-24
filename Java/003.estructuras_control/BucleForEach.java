public class BucleForEach {
    

    public static void main(String[] args) {
        
        long[] calificaciones = {10, 8, 9, 5, 3};

        // foreach: obrtiene directamente el valor en cada iteración
        for (long calificacion : calificaciones) {
            System.out.println(calificacion);
        }
        // Itera de uno en uno
        for (int i = 0; i < calificaciones.length; i ++) {
            System.out.println(calificaciones[i]);
        }

        // Itera de dos en dos
         for (int i = 0; i < calificaciones.length; i += 2) {
            System.out.println(calificaciones[i]);
        }
    }
}
