import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    HttpException,
    HttpStatus,
    Param,
    ParseUUIDPipe,
    Post,
    Put,
    Query,
  } from '@nestjs/common';
  import { Category } from 'src/categories/category-entity';
  import { Live } from 'src/lives/live-entity';
  import { LiveService } from './live-services';

  
  @Controller('live')
  export class LiveController {
    constructor(private service: LiveService) {}
  
    @Get()
    findAll(@Query('categoryId') categoryId?: string): Promise<Live[]> {
      if (categoryId) {
        return this.service.findByCategory({
          id: (categoryId),
        } as Category);
      }
      return this.service.findAll();
    }
  
    @Get(':id')
    async findById(@Param('id', new ParseUUIDPipe()) id: string): Promise<Live> {
      const found = await this.service.findById(id);
  
      if (!found) {
        throw new HttpException('Live not found', HttpStatus.NOT_FOUND);
      }
  
      return found;
    }
  
    @Post()
    create(@Body() live: Live): Promise<Live> {
      return this.service.save(live);
    }
  
    @Put(':id')
    async update(
      @Param('id', ParseUUIDPipe) id: string,
      @Body() live: Live,
    ): Promise<Live> {
      const found = await this.service.findById(id);
  
      if (!found) {
        throw new HttpException('Live not found', HttpStatus.NOT_FOUND);
      }
  
      live.id = found.id;
  
      return this.service.save(live);
    }
  
    @Delete(':id')
    @HttpCode(204)
    async remove(@Param('id', ParseUUIDPipe) id: string): Promise<void> {
      const found = await this.service.findById(id);
  
      if (!found) {
        throw new HttpException('Live not found', HttpStatus.NOT_FOUND);
      }
  
      return this.service.remove(id);
    }
  }