import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './user.entity';
import { Assessments } from './assessments.entity';

@Entity()
export class Result {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  score: number;

  @ManyToOne(() => Assessments, (assessment) => assessment.result)
  assessment: Assessments;

  // A user can have many results
  @ManyToOne(() => User, (user) => user.results)
  user: User;
}
