import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return "Hola mundo soy un controlador de NestJs"
    //this.appService.getHello();

  }

  @Get('prueba')
  prueba(): string {
    return "Pruebas desde NestJs ";
  }


}
