import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { readFile } from 'fs/promises';
import { dirname, join } from 'path';
import { AppModule } from './app.module';
import { parse } from 'yaml';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  const rootDirname = dirname(__dirname);
  const DOC_API = await readFile(join(rootDirname, 'doc', 'api.yaml'), 'utf-8');
  const document = parse(DOC_API);
  SwaggerModule.setup('doc', app, document);
  // const config = new DocumentBuilder()
  //   .setTitle('Home Library Service')
  //   .setDescription('Home music library service')
  //   .setVersion('1.0.0')
  //   .build();
  // const document = SwaggerModule.createDocument(app, config);
  // SwaggerModule.setup('doc', app, document);
  await app.listen(4000);
}
bootstrap();
