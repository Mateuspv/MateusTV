import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Category } from './category-entity';


@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private repository: Repository<Category>,
  ) {}

  findAll(): Promise<Category[]> {
    return this.repository.find();
  }

  findById(id: number): Promise<Category> {
    return this.repository.findOneBy({ id: id });
  }

  save(category: Category): Promise<Category> {
    return this.repository.save(category);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}