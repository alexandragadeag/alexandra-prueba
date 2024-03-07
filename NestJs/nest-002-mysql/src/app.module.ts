import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './book/book.model';
import { BookController } from './book/book.controller';
import { Author } from './author/author.model';
import { AuthorController } from './author/author.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'admin1234',
      database: 'nest', // crear esta base de datos en MYSQL primero 
      entities: [Book, Author],
      synchronize: true, // generar tablas en base de datos 
      logging: true
    }),
    TypeOrmModule.forFeature([Book]) // Esto permite acceder a Repository

  ],
  controllers: [AppController, BookController, AuthorController],
  providers: [AppService],
})
export class AppModule {}
