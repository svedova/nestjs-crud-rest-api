import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  if (process.env.SK_APP_ID) {
    await app.init();
    return app.getHttpAdapter().getInstance();
  }
  
  await app.listen(3000);
}

export default bootstrap();
