import { ApiProperty } from "@nestjs/swagger";
import { Author } from "src/author/author.model";
import { Category } from "src/category/category.model";
import { Editorial } from "src/editorial/editorial.model";
import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Book {

    @ApiProperty({example: 2})
    @PrimaryGeneratedColumn()
    id: number;
    
    @ApiProperty({example: "Libro 2"})
    @Column()
    title: string;
    
    @ApiProperty({example: "1111111111"})
    @Column({unique: true, length: 13})
    isbn: string;

    @ApiProperty({example: "200"})
    @Column({name: 'pages', type: 'int', unsigned: true, default: 0})
    numPages: number;
    
    @ApiProperty()
    @CreateDateColumn()
    createDate: Date;
    
    @ApiProperty()
    @UpdateDateColumn()
    updateDate: Date;
    
    @ApiProperty()
    @Column({type: 'boolean', default: false}) // En MySQL aprecerá como 0 o 1
    published: boolean;

    @ApiProperty()
    @Column({type: 'decimal', precision: 14, scale: 2})
    price: number;

    // Asociaciones: ManyToOne, Many to Many 
    // @ManyToOne(() => Author)
    // eager true hace que el autor aparezca en las consultas a book. DESACONSEJADO en aplicaciones grandes
    // eager false hace que no traiga la asociación, RECOMENDADO en aplicaciones grandes para optimizar consultas
    
    @ApiProperty({example: {id: 1}})
    @ManyToOne(() => Author, { eager:true})
    author: Author;
    
    @ApiProperty( {example: {id: 1}})
    @ManyToOne(() => Editorial, {eager: true})
    @JoinColumn({name: 'id_editorial'}) // opcional, cambia el nombre
    editorial: Editorial;
    
    @ApiProperty({example: [{id: 1}]})
    @ManyToMany(() => Category, { eager: true})
    @JoinTable()
    categories: Category[]; //varias categorías


}