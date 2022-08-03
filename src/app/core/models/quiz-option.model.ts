export class QuizOption {
  id: number;
  questionId: number;
  name: string

  constructor(id: number, questionId: number, name: string) {
    this.id = id;
    this.questionId = questionId;
    this.name = name;
  }
}
