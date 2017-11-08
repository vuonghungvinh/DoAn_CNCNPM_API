"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var question_component_1 = require("./quanlicauhoi/question.component");
var header_component_1 = require("./header/header.component");
var addquestion_component_1 = require("./quanlicauhoi/addquestion/addquestion.component");
var reviewtest_component_1 = require("./xemlaibaithi/reviewtest.component");
var score_component_1 = require("./quanlidiem/score.component");
var listexam_component_1 = require("./quanlidethi/xemdethi/listexam.component");
var exam_component_1 = require("./quanlidethi/taodethi/exam.component");
var taikhoan_component_1 = require("./quanlitaikhoan/taikhoan.component");
var themlophocphan_component_1 = require("./ThemLopHocPhan/themlophocphan.component");
var xemdanhsach_component_1 = require("./XemDanhSachSinhVien/xemdanhsach.component");
var themsinhvien_component_1 = require("./ThemSinhVien/themsinhvien.component");
var xemdanhsachlop_component_1 = require("./XemDanhSachLopHocPhan/xemdanhsachlop.component");
var xemlichthi_component_1 = require("./Xemlichthi/xemlichthi.component");
var dangkilichthi_component_1 = require("./Dangkilichthi/dangkilichthi.component");
var login_component_1 = require("./login/login.component");
var danhsachsinhvien_component_1 = require("./Sinhvienoflophocphan/danhsachsinhvien.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpModule
            ],
            declarations: [
                app_component_1.AppComponent,
                dashboard_component_1.DashboardComponent,
                question_component_1.QuestionComponent,
                header_component_1.HeaderComponent,
                addquestion_component_1.AddQuestionComponent,
                reviewtest_component_1.ReViewTestComponent,
                score_component_1.ScoreComponent,
                listexam_component_1.ListExamComponent,
                exam_component_1.ExamComponent,
                taikhoan_component_1.AccountComponent,
                xemdanhsach_component_1.XemDanhSach,
                themsinhvien_component_1.ThemSinhVien,
                xemdanhsachlop_component_1.Xemdanhsachlop,
                themlophocphan_component_1.Themlophocphan,
                xemlichthi_component_1.Xemlichthi,
                dangkilichthi_component_1.Dangkilichthi,
                header_component_1.HeaderComponent,
                login_component_1.LoginComponent,
                danhsachsinhvien_component_1.Danhsachsinhvien
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map