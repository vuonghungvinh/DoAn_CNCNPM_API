import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { StudentsComponent } from "./students/student.component";
import { QuestionComponent } from "./quanlicauhoi/question.component";

const routes: Routes = [
  { path: 'login', loadChildren: './auth/login/login.module#LoginModule' },
  { path: 'forgot', loadChildren: './auth/forgot/forgot.module#ForgotModule' },
  { path: 'reset', loadChildren: './auth/reset/reset.module#ResetModule' },
  { path: 'students',  component: StudentsComponent },
  { path: 'question',  component: QuestionComponent },
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
