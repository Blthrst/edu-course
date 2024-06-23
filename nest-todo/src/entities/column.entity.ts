import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'columns' })
export class ColumntEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  number: number;

  @Column()
  title: string;

  @Column({name: "project_id"})
  project_id: number;
}
