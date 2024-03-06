import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Book {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;
    
    @Column({unique: true, length: 13})
    isbn: string;

    @Column({name: 'pages', type: 'int', unsigned: true, default: 0})
    quantity: number;

    @CreateDateColumn()
    createDate: Date;

    @UpdateDateColumn()
    updateDate: Date;
    
    @Column({type: 'boolean', default: false}) // En MySQL aprecerá como 0 o 1
    published: boolean;

    @Column({type: 'decimal', precision: 14, scale: 2})
    price: number;

}