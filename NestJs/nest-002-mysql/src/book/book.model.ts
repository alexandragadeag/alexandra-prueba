import { Author } from "src/author/author.model";
import { Category } from "src/category/category.model";
import { Editorial } from "src/editorial/editorial.model";
import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Book {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;
    
    @Column({unique: true, length: 13})
    isbn: string;

    @Column({name: 'pages', type: 'int', unsigned: true, default: 0})
    numPages: number;

    @CreateDateColumn()
    createDate: Date;

    @UpdateDateColumn()
    updateDate: Date;
    
    @Column({type: 'boolean', default: false}) // En MySQL aprecerá como 0 o 1
    published: boolean;

    @Column({type: 'decimal', precision: 14, scale: 2})
    price: number;

    // Asociaciones: ManyToOne, Many to Many 
    // @ManyToOne(() => Author)
    // eager true hace que el autor aparezca en las consultas a book. DESACONSEJADO en aplicaciones grandes
    // eager false hace que no traiga la asociación, RECOMENDADO en aplicaciones grandes para optimizar consultas
    @ManyToOne(() => Author, { eager:true})
    author: Author;

    @ManyToOne(() => Editorial, {eager: true})
    @JoinColumn({name: 'id_editorial'}) // opcional, cambia el nombre
    editorial: Editorial;
    
    @ManyToMany(() => Category, { eager: true})
    @JoinTable()
    categories: Category[]; //varias categorías


}