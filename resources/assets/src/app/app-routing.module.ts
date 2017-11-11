import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuestionComponent } from './quanlicauhoi/question.component';
import { AddQuestionComponent } from './quanlicauhoi/addquestion/addquestion.component';
import { ReViewTestComponent } from './xemlaibaithi/reviewtest.component';
import { ScoreComponent } from './quanlidiem/score.component';
import { ListExamComponent } from './quanlidethi/xemdethi/listexam.component';
import { ExamComponent } from './quanlidethi/taodethi/exam.component';
import { AccountComponent } from './quanlitaikhoan/taikhoan.component';
import { UpdateQuestionComponent } from './quanlicauhoi/updatequestion/updatequestion.component';

import { ThemMonHocComponent } from './Themmonhoc/themonhoc.component';
import { SinhVienExcelComponent } from './ThemSinhVien/themtufileexcel/sinhvienexcelcomponent';
import { XemDanhSachComponent } from './XemDanhSachSinhVien/xemdanhsachsinhvien.component';
import { ThemSinhVien } from './ThemSinhVien/themsinhvien.component';
import { XemdanhsachlopHPComponent } from './XemDanhSachLopHocPhan/xemdanhsachlop.component';
import { Themlophocphan } from './ThemSinhVienVaoLopHocPhan/themlophocphan.component';
import { Xemlichthi } from './Xemlichthi/xemlichthi.component';
import { DangkilichthiComponent } from './Dangkilichthi/dangkilichthi.component';
import { LoginComponent } from './login/login.component';
import { DanhsachsinhvienCuaLopHPComponent } from './Sinhvienoflophocphan/danhsachsinhviencualopHP.component';
import { AuthGurad } from './guards/auth.guard';
import { LopComponent } from './quanlilop/xemdanhsachlop/xemdanhsachlop.component';
import { SinhVienBoHocComponent } from './XemDanhSachSinhVien/sinhvienbohoc/xemdanhsachsinhvienbohoc.component';
import { SinhVienTotNghiepComponent } from './XemDanhSachSinhVien/sinhvientotnghiep/sinhvientotnghiep.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'sinhviennghihoc',  component: SinhVienBoHocComponent, canActivate: [AuthGurad] },
  { path: 'sinhvientotnghiep',  component: SinhVienTotNghiepComponent, canActivate: [AuthGurad] },
  { path: 'question',  component: QuestionComponent, canActivate: [AuthGurad] },
  { path: 'addquestion',  component: AddQuestionComponent, canActivate: [AuthGurad] },
  { path: 'reviewtest',  component: ReViewTestComponent, canActivate: [AuthGurad] },
  { path: 'score',  component: ScoreComponent, canActivate: [AuthGurad] },
  { path: 'listexam',  component: ListExamComponent, canActivate: [AuthGurad] },
  { path: 'createxam',  component: ExamComponent, canActivate: [AuthGurad] },
  { path: 'account',  component: AccountComponent, canActivate: [AuthGurad] },
  { path: 'updatequestion/:id',  component: UpdateQuestionComponent, canActivate: [AuthGurad] },
  { path: 'themlophocphan', component : Themlophocphan, canActivate: [AuthGurad] },
  { path: 'dangkilichthi', component : DangkilichthiComponent, canActivate: [AuthGurad]},
  { path: 'xemdanhsachlophocphan', component : XemdanhsachlopHPComponent, canActivate: [AuthGurad] },
  { path: 'xemdanhsachlopsinhvien', component : LopComponent, canActivate: [AuthGurad] },
  { path: 'xemdanhsach', component: XemDanhSachComponent, canActivate: [AuthGurad] },
  { path: 'xemlichthi', component: Xemlichthi, canActivate: [AuthGurad] },
  { path: 'themmonhoc', component: ThemMonHocComponent, canActivate: [AuthGurad] },
  { path: 'importexcel', component: SinhVienExcelComponent, canActivate: [AuthGurad] },
  { path: 'themsinhvien', component: ThemSinhVien, canActivate: [AuthGurad] },
  { path: 'danhsachsinhvien/:id', component: DanhsachsinhvienCuaLopHPComponent, canActivate: [AuthGurad] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
