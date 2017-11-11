import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CKEditorModule } from 'ng2-ckeditor';

import { SinhVienExcelComponent } from './ThemSinhVien/themtufileexcel/sinhvienexcelcomponent';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionComponent } from './quanlicauhoi/question.component';
import { HeaderComponent } from './header/header.component';
import { AddQuestionComponent } from './quanlicauhoi/addquestion/addquestion.component';
import { ReViewTestComponent } from './xemlaibaithi/reviewtest.component';
import { ScoreComponent } from './quanlidiem/score.component';
import { ListExamComponent } from './quanlidethi/xemdethi/listexam.component';
import { ExamComponent } from './quanlidethi/taodethi/exam.component';
import { AccountComponent } from './quanlitaikhoan/taikhoan.component';
import { UpdateQuestionComponent } from './quanlicauhoi/updatequestion/updatequestion.component';
import { Themlophocphan } from './ThemSinhVienVaoLopHocPhan/themlophocphan.component';
import { XemDanhSachComponent } from './XemDanhSachSinhVien/xemdanhsachsinhvien.component';
import { LopComponent } from './quanlilop/xemdanhsachlop/xemdanhsachlop.component';
import { ThemSinhVien } from './ThemSinhVien/themsinhvien.component';
import { Xemdanhsachlop } from './XemDanhSachLopHocPhan/xemdanhsachlop.component';
import { Xemlichthi } from './Xemlichthi/xemlichthi.component';
import { DangkilichthiComponent } from './Dangkilichthi/dangkilichthi.component';
import { LoginComponent } from './login/login.component';
import { Danhsachsinhvien } from './Sinhvienoflophocphan/danhsachsinhvien.component';
import { ThemMonHocComponent } from './Themmonhoc/themonhoc.component';
import { AlertService } from './services/alert.service';
import { AuthGurad } from './guards/auth.guard';
import { AlertComponent } from './alert/alert.component';
import { AuthenticationService } from './services/authentication.service';
import { NoopInterceptor } from './services/httpinterceptor.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    Ng2SearchPipeModule,
    CKEditorModule,
  ],
  declarations: [
    AppComponent,
    AlertComponent,
    QuestionComponent,
    HeaderComponent,
    AddQuestionComponent,
    ReViewTestComponent,
    LopComponent,
    ScoreComponent,
    ListExamComponent,
    ExamComponent,
    AccountComponent,
    XemDanhSachComponent,
    ThemSinhVien,
    Xemdanhsachlop,
    Themlophocphan,
    Xemlichthi,
    DangkilichthiComponent,
    HeaderComponent,
    LoginComponent,
    Danhsachsinhvien,
    UpdateQuestionComponent,
    SinhVienExcelComponent,
    ThemMonHocComponent
  ],
  providers: [
    AlertService,
    AuthGurad,
    AuthenticationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NoopInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
