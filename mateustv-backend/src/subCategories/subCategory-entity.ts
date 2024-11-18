import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('SubCategory')
export class SubCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 60, nullable: false })
  name: string;

}