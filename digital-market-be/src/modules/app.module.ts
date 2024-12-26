import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RedisModule } from '@nestjs-modules/ioredis';

import { env } from 'src/config';

import { HealthCheckModule } from './health-check/health-check.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import dataSource from 'src/libs/typeorm.config';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { SanitizeInterceptor } from 'src/interceptors/sanitize.interceptor';
import { ProductModule } from './product/product.module';
import { ChatModule } from './chat/chat.module';
import { FileUploadModule } from './file-upload/file-upload.module';
import { OrderModule } from './order/order.module';
import { RatingModule } from './rating/rating.module';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    TypeOrmModule.forRoot(dataSource.options),
    RedisModule.forRoot({
      type: 'single',
      options: {
        host: env.redis.host,
        password: env.redis.password,
        port: env.redis.port,
        db: env.redis.db,
      },
    }),
    FileUploadModule,
    HealthCheckModule,
    AuthModule,
    UserModule,
    ProductModule,
    ChatModule,
    OrderModule,
    RatingModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: SanitizeInterceptor,
    },
  ],
})
export class AppModule {}
