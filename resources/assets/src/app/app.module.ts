import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CKEditorModule } from 'ng2-ckeditor';


import { SinhVienCuaLopComponent } from './quanlilop/xemdanhsachsinhvienlop/danhsachsinhvienlop.component';
import { SinhVienBoHocComponent } from './XemDanhSachSinhVien/sinhvienbohoc/xemdanhsachsinhvienbohoc.component';
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
import { ThemsinhvienvaolophocphanComponent } from './ThemSinhVienVaoLopHocPhan/themsinhvienvaolophocphan.component';
import { XemDanhSachComponent } from './XemDanhSachSinhVien/xemdanhsachsinhvien.component';
import { LopComponent } from './quanlilop/xemdanhsachlop/xemdanhsachlop.component';
import { ThemSinhVien } from './ThemSinhVien/themsinhvien.component';
import { XemdanhsachlopHPComponent } from './XemDanhSachLopHocPhan/xemdanhsachlop.component';
import { Xemlichthi } from './Xemlichthi/xemlichthi.component';
import { DangkilichthiComponent } from './Dangkilichthi/dangkilichthi.component';
import { LoginComponent } from './login/login.component';
import { DanhsachsinhvienCuaLopHPComponent } from './Sinhvienoflophocphan/danhsachsinhviencualopHP.component';
import { ThemLopHPComponent } from './themlophocphan/themlophocphan.component';
import { AlertService } from './services/alert.service';
import { AuthGurad } from './guards/auth.guard';
import { AlertComponent } from './alert/alert.component';
import { SinhVienTotNghiepComponent } from './XemDanhSachSinhVien/sinhvientotnghiep/sinhvientotnghiep.component';
import { AuthenticationService } from './services/authentication.service';
import { XemdanhsachmonComponent } from './quanlimonhoc/xemdanhsachmonhoc/xemdanhsachmonhoc.component';
import { NoopInterceptor } from './services/httpinterceptor.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ThemMonHocComponent } from './quanlimonhoc/themmonhoc.component';
import { KhoiPhucCauHoiComponent } from './quanlicauhoi/khoiphuccauhoi/khoiphuccauhoi.component';
import { ThemLopComponent } from './quanlilop/themlop/themlop.component';
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
    ThemLopComponent,
    SinhVienCuaLopComponent,
    KhoiPhucCauHoiComponent,
    ThemMonHocComponent,
    XemdanhsachmonComponent,
    SinhVienTotNghiepComponent,
    SinhVienBoHocComponent,
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
    XemdanhsachlopHPComponent,
    ThemsinhvienvaolophocphanComponent,
    Xemlichthi,
    DangkilichthiComponent,
    HeaderComponent,
    LoginComponent,
    DanhsachsinhvienCuaLopHPComponent,
    UpdateQuestionComponent,
    SinhVienExcelComponent,
    ThemLopHPComponent
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
