import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Author {
    @PrimaryGeneratedColumn() // Para que se autoincremental, el id se genere automaticamente
    id:number;

    @Column()
    firstName: string;
    
    @Column()
    lastName: string;

    @Column({type: 'date'}) // sin hora ni minuto 
    birhDate: Date;

    @Column()
    salary: number;

}