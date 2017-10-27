import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { QuestionComponent } from './quanlicauhoi/question.component';
import { AddQuestionComponent } from './quanlicauhoi/addquestion/addquestion.component';
import { ReViewTestComponent } from './xemlaibaithi/reviewtest.component';
import { ScoreComponent } from './quanlidiem/score.component';
import { ListExamComponent } from './quanlidethi/xemdethi/listexam.component';
import { ExamComponent } from './quanlidethi/taodethi/exam.component';
import { AccountComponent } from './quanlitaikhoan/taikhoan.component';
import { UpdateQuestionComponent } from './quanlicauhoi/updatequestion/updatequestion.component';

import { XemDanhSach } from "./XemDanhSachSinhVien/xemdanhsach.component";
import { ThemSinhVien } from "./ThemSinhVien/themsinhvien.component";
import { Xemdanhsachlop } from "./XemDanhSachLopHocPhan/xemdanhsachlop.component";
import { Themlophocphan } from "./ThemLopHocPhan/themlophocphan.component";
import { Xemlichthi } from "./Xemlichthi/xemlichthi.component";
import { Dangkilichthi } from "./Dangkilichthi/dangkilichthi.component";
import { LoginComponent } from "./login/login.component";
import { Danhsachsinhvien } from "./Sinhvienoflophocphan/danhsachsinhvien.component";
import { AuthGurad } from "./guards/auth.guard";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'question',  component: QuestionComponent, canActivate: [AuthGurad] },
  { path: 'addquestion',  component: AddQuestionComponent, canActivate: [AuthGurad] },
  { path: 'reviewtest',  component: ReViewTestComponent, canActivate: [AuthGurad] },
  { path: 'score',  component: ScoreComponent, canActivate: [AuthGurad] },
  { path: 'listexam',  component: ListExamComponent, canActivate: [AuthGurad] },
  { path: 'createxam',  component: ExamComponent, canActivate: [AuthGurad] },
  { path: 'account',  component: AccountComponent, canActivate: [AuthGurad] },
  { path: 'updatequestion/:id',  component: UpdateQuestionComponent, canActivate: [AuthGurad] },
  { path: 'themlophocphan', component : Themlophocphan, canActivate: [AuthGurad] },
  { path: 'dangkilichthi', component : Dangkilichthi, canActivate: [AuthGurad]},
  { path: 'xemdanhsachlop', component : Xemdanhsachlop, canActivate: [AuthGurad] },
  { path: 'xemdanhsach', component: XemDanhSach, canActivate: [AuthGurad] },
  { path: 'xemlichthi', component: Xemlichthi, canActivate: [AuthGurad] },
  { path: 'themsinhvien', component: ThemSinhVien, canActivate: [AuthGurad] },
  { path: 'danhsachsinhvien/:id', component: Danhsachsinhvien, canActivate: [AuthGurad] },

  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent, canActivate: [AuthGurad] },
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
