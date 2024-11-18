import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubCategory } from './subCategory-entity';
import { SubCategoryService } from './subCategory-services';
import { SubCategoryController } from './subCategory-controller';


@Module({
  imports: [TypeOrmModule.forFeature([SubCategory])],
  providers: [SubCategoryService],
  controllers: [SubCategoryController],
})
export class SubCategoryModule {}