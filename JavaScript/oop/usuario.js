
// Creación de una clase
class Usuario {

    // atributos de clase
    activo = true;
    
    // atributos de instancia
    constructor(firstName, email, phone, age, password, street){
         this.firstName = firstName;
         this.email = email;
         this.phone = phone;
         this.age = age;
         this.password = password;
         this.street = street;

    }
    incrementarEdad() {
        // Incrementar age en 1 porque ha cumplido años
        this.age++;
    }
}

// Crear 3 objetos Usuario
let usuario1 = new Usuario("Usuario1", "user1mail.com", "11111111", 20, "admin", "corazón de maría");
console.log(usuario1);
console.log(usuario1.activo); //true
console.log(usuario1.street);

// Invocar un métdo de un objeto que modifica sus atributos:
usuario1.incrementarEdad()
console.log(usuario1);

let usuario2 = new Usuario("usuario2", "user2@gmail.com", "222222222", 31, "admin", "amposta");
console.log(usuario2);
