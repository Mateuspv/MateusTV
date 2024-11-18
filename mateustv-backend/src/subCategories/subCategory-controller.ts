import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    HttpException,
    HttpStatus,
    Param,
    ParseIntPipe,
    Post,
    Put,
  } from '@nestjs/common';
  
  
import { SubCategory } from './subCategory-entity';
import { SubCategoryService } from './subCategory-services';

  
  @Controller('categories')
  export class SubCategoryController {
    constructor(private service: SubCategoryService) {}
  
    @Get()
    findAll(): Promise<SubCategory[]> {
      return this.service.findAll();
    }
  
    @Get(':id')
    async findById(@Param('id', ParseIntPipe) id: number): Promise<SubCategory> {
      const found = await this.service.findById(id);
  
      if (!found) {
        throw new HttpException('SubCategory not found', HttpStatus.NOT_FOUND);
      }
  
      return found;
    }
  
    @Post()
    create(@Body() subSubCategory: SubCategory): Promise<SubCategory> {
      return this.service.save(subSubCategory);
    }
  
    @Put(':id')
    async update(
      @Param('id', ParseIntPipe) id: number,
      @Body() subSubCategory: SubCategory,
    ): Promise<SubCategory> {
      const found = await this.service.findById(id);
  
      if (!found) {
        throw new HttpException('SubCategory not found', HttpStatus.NOT_FOUND);
      }
  
      subSubCategory.id = found.id;
  
      return this.service.save(subSubCategory);
    }
  
    @Delete(':id')
    @HttpCode(204)
    async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
      const found = await this.service.findById(id);
  
      if (!found) {
        throw new HttpException('SubCategory not found', HttpStatus.NOT_FOUND);
      }
  
      return this.service.remove(id);
    }
  }