import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SubCategory } from './subCategory-entity';

@Injectable()
export class SubCategoryService {
  constructor(
    @InjectRepository(SubCategory)
    private repository: Repository<SubCategory>,
  ) {}

  findAll(): Promise<SubCategory[]> {
    return this.repository.find({
      where: {
        active: true,
      },
    });
  }

  findById(id: number): Promise<SubCategory> {
    return this.repository.findOneBy({ id: id });
  }

  save(subCategory: SubCategory): Promise<SubCategory> {
    return this.repository.save(subCategory);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}