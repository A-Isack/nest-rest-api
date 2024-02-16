import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common'; // adding validation to be used on endpoints 

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe() // using the validation pipes globally 
  )
  
  await app.listen(3000);
}
bootstrap();