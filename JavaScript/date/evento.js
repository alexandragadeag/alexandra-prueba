

//new Date()


// Crear una clase Evento
// atributos: title, price, starDate, finishDate,


// Crear objetos con fecha

class Evento {

    constructor(title, price, startDate, finishDate, participantsNum) {
        this.title = title;
        this.price =price;
        this.startDate = startDate; // Fecha
        this.finishDate = finishDate; // Fecha
        this.participantsNum = participantsNum;

    }
}


let fechaInicio = new Date(2024, 2, 14, 10, 30); // 14/03/2024 10:30
let fechaFin = new Date(2024, 2, 15, 18); // 15/03/2024 18:00

let techFest = new Evento("Evento de desarrollo web", 6, fechaInicio, fechaFin, 50);
console.log(techFest);

console.log(techFest.startDate); // por defecto es UTC+0
console.log(techFest.startDate.toLocaleString()); // Locale de España UTC+1
console.log(techFest.startDate.toLocaleString('es-ES', {timeZone: 'Europe/Madrid'})); 
console.log(techFest.startDate.toLocaleString('pt-BR', {timeZone: 'America/Sao_Paulo'}));
