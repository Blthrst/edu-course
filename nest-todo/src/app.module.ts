import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';

import options from './options';

@Module({
  imports: [AuthModule, TypeOrmModule.forRoot(options)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
