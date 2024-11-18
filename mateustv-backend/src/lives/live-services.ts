import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/categories/category-entity';
import { Repository } from 'typeorm';
import { Live } from './live-entity';

@Injectable()
export class LiveService {
  constructor(
    @InjectRepository(Live)
    private repository: Repository<Live>,
  ) {}

  findAll(): Promise<Live[]> {
    return this.repository.find();
  }

  findById(id: string): Promise<Live> {
    return this.repository.findOneBy({ id: id });
  }

  findByCategory(category: Category): Promise<Live[]> {
    return this.repository.find({
      where: {
        categories: {
          id: category.id,
        },
      },
    });
  }

  save(live: Live): Promise<Live> {
    return this.repository.save(live);
  }

  async remove(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}