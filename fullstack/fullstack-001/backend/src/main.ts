import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as express from 'express';
import { join } from 'path';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const config = new DocumentBuilder().setTitle("BACKEND NEST").build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  // Acceso a Open API: http://localhost:3000/api

  // Configurar carpeta para subida imágenes/archivos
  // http://localhost:3000/uploads/nombrearchivo.png
  app.use('/uploads', express.static(join(__dirname, '..', 'uploads')));


  await app.listen(3000);
}
bootstrap();
