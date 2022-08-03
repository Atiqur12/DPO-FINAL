import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {QuizComponent} from './quiz/quiz.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DocumentTwoComponent } from './document-two/document-two.component';
import { DocumentThreeComponent } from './document-three/document-three.component';


@NgModule({
  declarations: [
    QuizComponent,
    DocumentTwoComponent,
    DocumentThreeComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class QuizModule { }
