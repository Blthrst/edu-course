import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'users' })
export class TaskEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  number: number;

  @Column()
  description: string;

  @Column()
  title: string

  @Column()
  createdAt: string

  @Column()
  projectId: number

  @Column()
  columnId: number
}
