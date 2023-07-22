import { Column, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Answers } from './answers.entity';
import { Assessments } from './assessments.entity';

export class Question {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  content: string;

  // A Question must belong to an assessment!
  @ManyToOne(() => Assessments, (assessments) => assessments.questions)
  assessment: Assessments;

  // A Question could have multiple answers
  @OneToMany(() => Answers, (answers) => answers.question)
  answers: Answers[];
}
