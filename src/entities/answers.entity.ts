import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Question } from './questions.entity';

@Entity()
export class Answers {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  // this will act as the right answer to the question
  @Column()
  content: string;

  @Column()
  isCorrect: boolean;

  @ManyToOne(() => Question, (question) => question.answers)
  question: Question;
}
