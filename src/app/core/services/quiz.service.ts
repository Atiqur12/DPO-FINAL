import {Injectable} from '@angular/core';
import {Quiz} from "../models/quiz.model";

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor() {}

  getNewQuiz() { //TODO: to implement
    var dd = {
      content: [
        'First paragraph',
        'Another paragraph, this time a little bit longer to make sure, this line will be divided into at least two lines'
      ]
      
    }
    const questions = [
      {
        "id": 1,
        "name": "This is the first question of the quiz",
        "options": [
          {
            "id": 1055,
            "questionId": 1,
            "name": "First Option"
          },
          {
            "id": 1056,
            "questionId": 1,
            "name": "Second Option"
          },
          {
            "id": 1057,
            "questionId": 1,
            "name": "Third Option"
          },
          {
            "id": 1058,
            "questionId": 1010,
            "name": "Fourth Option"
          }
        ]
      },
      {
        "id": 2,
        "name": "This is the Second question of the quiz",
        "options": [
          {
            "id": 1055,
            "questionId": 1,
            "name": "First Option 2"
          },
          {
            "id": 1056,
            "questionId": 1,
            "name": "Second Option 2"
          },
          {
            "id": 1057,
            "questionId": 1,
            "name": "Third Option 2"
          },
          {
            "id": 1058,
            "questionId": 1010,
            "name": "Fourth Option 2"
          }]
      }
      ];
    return new Quiz(1, questions);
  }

}
