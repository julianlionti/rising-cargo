import { NestFactory } from '@nestjs/core';
import { ReservationModule } from './reservation.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(ReservationModule);

  const config = new DocumentBuilder()
    .setTitle('Rising Cargo - Reservation')
    .setDescription('Rising Cargo API documentation')
    .setVersion('1.0')
    // .addTag('rising-cargo')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(8000);
}
bootstrap();
