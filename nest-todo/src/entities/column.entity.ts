import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'users' })
export class ColumntEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  number: number;

  @Column()
  title: string;

  @Column()
  projectId: number;
}
