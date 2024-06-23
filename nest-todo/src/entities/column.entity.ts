import { randomInt } from 'crypto';
import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity({ name: 'columns' })
export class ColumnEntity {
  @PrimaryColumn()
  id: number = randomInt(999999);

  @Column()
  number: number;

  @Column()
  title: string;

  @Column({ name: 'project_id' })
  project_id: number;
}
