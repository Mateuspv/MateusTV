import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Live } from './live-entity';
import { LiveService } from './live-services';
import { LiveController } from './live-controller';
import { Category } from 'src/categories/category-entity';
import { Genre } from 'src/genres/genre-entity';
import { SubCategory } from 'src/subCategories/subCategory-entity';

@Module({
  imports: [TypeOrmModule.forFeature([Category, Genre, SubCategory, Live])],
  providers: [LiveService],
  controllers: [LiveController],
})
export class LiveModule {}