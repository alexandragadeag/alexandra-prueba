/*
 Las funciones que devuelven algo deben:

 1. especificar el tipo de retorno distinto a void
 2. Incluir una o varias sentencias return dentrode la función

 */


public class FuncionesConReturn {
   
   /* 
   private: hace que solamente se pueda usar la constante dentro de esta clase y no en otras
   static: pertenece a la clase y no ahce falta crar objeto
   final: indica que no se puede modificar, que es el final
    */ 
 static final double IVA_TIPO_GENERAL = 0.21; // variable constante
 static final double IVA_TIPO_REDUCIDO = 0.10;
    // main se ejecuta siempre al ejecutar el programa sí o sí 
   // no confundir con ramas de git, son totalmente independientes
   public static void main(String[] args){
     
    // Si no se guarda se ignora
     calcularIVA(100);
    
     // Guardar el resultado en una variable nueva
    double precioConIVA = calcularIVA(100);
    System.out.println(precioConIVA);

   }

   public static double calcularIVA(double precio) {
    double iva = precio * IVA_TIPO_GENERAL;
    return precio + iva;
   }
}
