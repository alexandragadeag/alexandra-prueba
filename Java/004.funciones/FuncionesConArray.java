public class FuncionesConArray {

    private static final double IVA_TIPO_GENERAL = 1.21;

    public static void main(String[] args) {
        
        double[] preciosSinIVAs = {10, 20, 30, 40, 50};

        double [] preciosConIVA = calcularIVAs(preciosSinIVAs);


    }
    /*
     * Crear una función llamada calcularIVAs que recibe un array de precios
     * y devuelve un nuevo array de precios con los IVAs calculados en cada precio*/
    private static double[] calcularIVAs(double[] preciosSinIVA) {
        //Crear un nuevo array donde almacenas los precios con IVA
        // con la misma longitud que el array original
        double[] preciosConIVA = new double[preciosSinIVA.length];

        for (int i = 0; i < preciosSinIVA.length; i++) {
            double precioConIVA = preciosSinIVA[i] * IVA_TIPO_GENERAL;
            preciosConIVA[i] = precioConIVA;
            
        }

        return preciosConIVA;
    }
    
}
