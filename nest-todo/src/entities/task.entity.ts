import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'tasks' })
export class TaskEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  number: number;

  @Column()
  description: string;

  @Column()
  title: string

  @Column({name: "created_at"})
  created_at: string

  @Column({name: "project_id"})
  project_id: number

  @Column({name: "column_id"})
  column_id: number
}
