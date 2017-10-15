import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentsComponent } from './students/student.component';
import { QuestionComponent } from './quanlicauhoi/question.component';
import { HeaderComponent } from './header/header.component';
import { AddQuestionComponent } from './quanlicauhoi/addquestion/addquestion.component';
import { ReViewTestComponent } from './xemlaibaithi/reviewtest.component';
import { ScoreComponent } from './quanlidiem/score.component';
import { ListExamComponent } from './quanlidethi/xemdethi/listexam.component';
import { ExamComponent } from './quanlidethi/taodethi/exam.component';
import { AccountComponent } from './quanlitaikhoan/taikhoan.component';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    StudentsComponent,
    QuestionComponent,
    HeaderComponent,
    AddQuestionComponent,
    ReViewTestComponent,
    ScoreComponent,
    ListExamComponent,
    ExamComponent,
    AccountComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
