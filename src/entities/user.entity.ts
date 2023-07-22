import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Result } from './result.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  // A user can have multiple results
  @OneToMany(() => Result, (result) => result.user)
  results: Result[];
}
