import { Entity, PrimaryColumn, Column } from 'typeorm';
import { randomUUID } from 'crypto';

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryColumn("varchar")
  id: string = randomUUID();

  @Column()
  email: string;

  @Column()
  password: string;
}
