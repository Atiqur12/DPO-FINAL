import {QuizAnswer} from "./quiz-answer.model";
import {QuizQuestion} from "./quiz-question.model";

export class Quiz {
  id: number;
  questions: QuizQuestion[];
  answers : QuizAnswer[] = [];

  private currentQuestionIndex: number = 0;
  private currentQuestionNumber: number = 1;

  constructor(id: number, questions: QuizQuestion[]) {
    this.id = id;
    this.questions = questions;
  }

  updateQuizAnswer(answerToAdd: QuizAnswer) {
    this.answers.push(answerToAdd);
  }

  getNextQuestion(): QuizQuestion {
    this.currentQuestionIndex += 1;
    this.currentQuestionNumber += 1;

    return this.getCurrentQuestion();
  }

  getCurrentQuestionNumber(): number {
    return this.currentQuestionNumber;
  }

  getCurrentQuestion(): QuizQuestion {
    return this.questions[this.currentQuestionIndex];
  }

  getTotalNumberOfQuestions(): number {
    return this.questions.length;
  }

  isLastQuestion(): boolean {
    return this.currentQuestionNumber == this.getTotalNumberOfQuestions();
  }
}
