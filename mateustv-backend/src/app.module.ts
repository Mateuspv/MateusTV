import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryModule } from './categories/category-module';
import { GenreModule } from './genres/genre-controller';
import { SubCategoryModule } from './subCategories/subCategory-module';
import { LiveModule } from './lives/live-module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      database: process.env.DB_NAME,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      entities: [],
      synchronize: true,
      autoLoadEntities: true,
    }),
    CategoryModule,
    GenreModule,
    SubCategoryModule,
    LiveModule
  ],
  
})
export class AppModule {}