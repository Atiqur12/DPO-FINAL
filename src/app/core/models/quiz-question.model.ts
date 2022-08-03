import {QuizOption} from "./quiz-option.model";

export class QuizQuestion {
  id: number;
  name: string;
  options : QuizOption[];

  constructor(id: number, name: string, options: QuizOption[]) {
    this.id = id;
    this.name = name;
    this.options = options;
  }
}
