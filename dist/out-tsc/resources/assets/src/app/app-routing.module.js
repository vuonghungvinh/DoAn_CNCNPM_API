"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var question_component_1 = require("./quanlicauhoi/question.component");
var addquestion_component_1 = require("./quanlicauhoi/addquestion/addquestion.component");
var reviewtest_component_1 = require("./xemlaibaithi/reviewtest.component");
var score_component_1 = require("./quanlidiem/score.component");
var listexam_component_1 = require("./quanlidethi/xemdethi/listexam.component");
var exam_component_1 = require("./quanlidethi/taodethi/exam.component");
var taikhoan_component_1 = require("./quanlitaikhoan/taikhoan.component");
var xemdanhsach_component_1 = require("./XemDanhSachSinhVien/xemdanhsach.component");
var themsinhvien_component_1 = require("./ThemSinhVien/themsinhvien.component");
var xemdanhsachlop_component_1 = require("./XemDanhSachLopHocPhan/xemdanhsachlop.component");
var themlophocphan_component_1 = require("./ThemLopHocPhan/themlophocphan.component");
var xemlichthi_component_1 = require("./Xemlichthi/xemlichthi.component");
var dangkilichthi_component_1 = require("./Dangkilichthi/dangkilichthi.component");
var login_component_1 = require("./login/login.component");
var danhsachsinhvien_component_1 = require("./Sinhvienoflophocphan/danhsachsinhvien.component");
var routes = [
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'question', component: question_component_1.QuestionComponent },
    { path: 'addquestion', component: addquestion_component_1.AddQuestionComponent },
    { path: 'reviewtest', component: reviewtest_component_1.ReViewTestComponent },
    { path: 'score', component: score_component_1.ScoreComponent },
    { path: 'listexam', component: listexam_component_1.ListExamComponent },
    { path: 'createxam', component: exam_component_1.ExamComponent },
    { path: 'account', component: taikhoan_component_1.AccountComponent },
    { path: 'themlophocphan', component: themlophocphan_component_1.Themlophocphan },
    { path: 'dangkilichthi', component: dangkilichthi_component_1.Dangkilichthi },
    { path: 'xemdanhsachlop', component: xemdanhsachlop_component_1.Xemdanhsachlop },
    { path: 'xemdanhsach', component: xemdanhsach_component_1.XemDanhSach },
    { path: 'xemlichthi', component: xemlichthi_component_1.Xemlichthi },
    { path: 'themsinhvien', component: themsinhvien_component_1.ThemSinhVien },
    { path: 'danhsachsinhvien/:id', component: danhsachsinhvien_component_1.Danhsachsinhvien },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
//# sourceMappingURL=app-routing.module.js.map