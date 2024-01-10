public class FuncionesString {


    /*
     * La clase String proporciona una serie de métodos/funciones ya listos
     * para ser utilizados sobre una variable de tipo String
     */
    public static void main(String[] args) {

        String nombre = "Antonio developer";

        
        int nombreLongitud = nombre.length();
        System.out.println(nombreLongitud);

        char primeraLetra = nombre.charAt(0);
        char ultimaLetra = nombre.charAt(nombreLongitud - 1); // 17
        System.out.println(primeraLetra);
        System.out.println(ultimaLetra);

        boolean isDeveloper = nombre.contains("developer"); // true
        if (isDeveloper) {

            int beginIndex = 0;
            // int endIndex = 8;
            int endIndex = nombre.indexOf(" ");

            String firstName = nombre.substring(beginIndex, endIndex ); //Ambrosio

            System.out.println(firstName + " es desarrollador de software");
        }

        
    }
}
