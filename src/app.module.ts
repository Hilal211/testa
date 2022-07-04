import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BrandsModule } from './brand/brand.module';
import { BusinessRequestModule } from './business_request/business_request.module';
import { APP_FILTER } from '@nestjs/core';
import { HttpErrorFilter } from './shared/http-error.filter';
@Module({
  imports: [
    BrandsModule,BusinessRequestModule, TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'aplo',
      entities: [__dirname + '/../**/entities/*.js'],
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
