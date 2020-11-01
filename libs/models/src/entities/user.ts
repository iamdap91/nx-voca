import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity()
export class User extends BaseEntity {
  @Column('varchar', { length: 100 })
  name: string;

  @Column('varchar', { length: 100, nullable: true })
  logo: string;

  createdAt: Date;

  updatedAt: Date;

}
