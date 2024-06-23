import { randomInt } from 'crypto';
import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity({ name: 'projects' })
export class ProjectEntity {
  @PrimaryColumn()
  id: number = randomInt(9999999);

  @Column()
  title: string;

  @Column({name: "created_at"})
  created_at: string;

  @Column({name: "user_id"})
  user_id: string
}
