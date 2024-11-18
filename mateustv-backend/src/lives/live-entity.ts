import {
    Column,
    Entity,
    JoinTable,
    ManyToMany,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  
import { Genre } from 'src/genres/genre-entity';
import { Category } from 'src/categories/category-entity';
import { SubCategory } from 'src/subCategories/subCategory-entity';
  
  @Entity('live')
  export class Live {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column({ nullable: false })
    streamName: string;

    @Column({ nullable: false })
    streamCard: string;
  
    @Column({ type: 'text', nullable: false })
    description: string;
  
    @Column({ type: 'text', nullable: false })
    playing: string;

    @Column({ nullable: false })
    liveCard: string;
  
    @ManyToMany(() => Category, { eager: true })
    @JoinTable({
      name: 'live_category',
    })
    categories: Category[];
  
    @ManyToMany(() => Genre, { eager: true })
    @JoinTable({
      name: 'live_genre',
    })
    genres: Genre[];

    @ManyToMany(() => SubCategory, { eager: true })
    @JoinTable({
      name: 'live_SubCategory',
    })
    subCategory: SubCategory[];
  }