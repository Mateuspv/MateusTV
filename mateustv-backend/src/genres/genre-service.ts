import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Genre } from './genre-entity';

@Injectable()
export class GenreService {
  constructor(
    @InjectRepository(Genre)
    private repository: Repository<Genre>,
  ) {}

  findAll(): Promise<Genre[]> {
    return this.repository.find();
  }

  findById(id: string): Promise<Genre> {
    return this.repository.findOneBy({ id: id });
  }

  save(genre: Genre): Promise<Genre> {
    return this.repository.save(genre);
  }

  async remove(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}