import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./core/home-page/home-page.component";
import {QuizComponent} from "./modules/quiz/quiz/quiz.component";
import { DocumentTwoComponent } from "./modules/quiz/document-two/document-two.component";
import { DocumentThreeComponent } from './modules/quiz/document-three/document-three.component';


const routes: Routes = [ 
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'documentTwo', component: DocumentTwoComponent },
  { path: 'documentThree', component: DocumentThreeComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
