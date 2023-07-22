import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Question } from './questions.entity';
import { Result } from './result.entity';

@Entity()
export class Assessments {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  // An assessment would have multiple questions!
  @OneToMany(() => Question, (question) => question.assessment)
  questions: Question[];

  @OneToMany(() => Result, (result) => result.assessment)
  result: Result[];
}
