import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QuestionComponent } from './quanlicauhoi/question.component';
import { HeaderComponent } from './header/header.component';
import { AddQuestionComponent } from './quanlicauhoi/addquestion/addquestion.component';
import { ReViewTestComponent } from './xemlaibaithi/reviewtest.component';
import { ScoreComponent } from './quanlidiem/score.component';
import { ListExamComponent } from './quanlidethi/xemdethi/listexam.component';
import { ExamComponent } from './quanlidethi/taodethi/exam.component';
import { AccountComponent } from './quanlitaikhoan/taikhoan.component';

import { Themlophocphan } from "./ThemLopHocPhan/themlophocphan.component"; 
import { XemDanhSach } from "./XemDanhSachSinhVien/xemdanhsach.component";
import { ThemSinhVien } from "./ThemSinhVien/themsinhvien.component";
import { Xemdanhsachlop } from "./XemDanhSachLopHocPhan/xemdanhsachlop.component";
import { Xemlichthi } from "./Xemlichthi/xemlichthi.component"; 
import { Dangkilichthi } from "./Dangkilichthi/dangkilichthi.component";
import { LoginComponent }  from "./login/login.component";
import { Danhsachsinhvien } from "./Sinhvienoflophocphan/danhsachsinhvien.component";
import { AlertService } from "./services/alert.service";
import { AuthGurad } from "./guards/auth.guard";
import { AlertComponent } from "./alert/alert.component";
import { AuthenticationService } from "./services/authentication.service";


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    AlertComponent,
    DashboardComponent,
    QuestionComponent,
    HeaderComponent,
    AddQuestionComponent,
    ReViewTestComponent,
    ScoreComponent,
    ListExamComponent,
    ExamComponent,
    AccountComponent,
    XemDanhSach,
    ThemSinhVien,
    Xemdanhsachlop,
    Themlophocphan,
    Xemlichthi,
    Dangkilichthi,
    HeaderComponent,
    LoginComponent,
    Danhsachsinhvien
  ],
  providers: [
    AlertService,
    AuthGurad,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
