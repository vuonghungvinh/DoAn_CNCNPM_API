import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';

import { XemDanhSach } from "./XemDanhSachSinhVien/xemdanhsach.component";
import { ThemSinhVien } from "./ThemSinhVien/themsinhvien.component";
import { Xemdanhsachlop } from "./XemDanhSachLopHocPhan/xemdanhsachlop.component";
import { Themlophocphan } from "./ThemLopHocPhan/themlophocphan.component";  
import { Xemlichthi } from "./Xemlichthi/xemlichthi.component";  
import { Dangkilichthi } from "./Dangkilichthi/dangkilichthi.component"; 


const routes: Routes = [
  { path: 'login', loadChildren: './auth/login/login.module#LoginModule' },
  { path: 'forgot', loadChildren: './auth/forgot/forgot.module#ForgotModule' },
  { path: 'reset', loadChildren: './auth/reset/reset.module#ResetModule' },
  { path: 'themlophocphan', component : Themlophocphan},
   { path: 'dangkilichthi', component : Dangkilichthi},
  { path: 'xemdanhsachlop', component : Xemdanhsachlop},
  { path: 'xemdanhsach', component: XemDanhSach },
  { path: 'xemlichthi', component: Xemlichthi },
  { path: 'themsinhvien', component: ThemSinhVien},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
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