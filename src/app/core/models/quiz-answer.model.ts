export class QuizAnswer {
  questionId: number;
  optionId: number;

  constructor(questionId: number, optionId: number) {
    this.questionId = questionId;
    this.optionId = optionId;
  }
}
