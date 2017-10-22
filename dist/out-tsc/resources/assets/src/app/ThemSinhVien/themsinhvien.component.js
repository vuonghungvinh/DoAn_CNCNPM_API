"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var sinhvien_service_1 = require("../services/sinhvien.service");
var ThemSinhVien = /** @class */ (function () {
    function ThemSinhVien(sinhvienservice, router) {
        this.sinhvienservice = sinhvienservice;
        this.router = router;
    }
    ThemSinhVien.prototype.ngOnInit = function () {
        var _this = this;
        //lay danh sach lop da co bo vao select box
        this.sinhvienservice.getdanhsachsinhvien().subscribe(function (data) {
            _this.students = data['students'];
        });
    };
    //up len serve
    ThemSinhVien.prototype.addstudents = function (value) {
        console.log(value);
        this.sinhvienservice.addstudents(value).subscribe(function (data) {
            console.log(data);
        });
        // this.router.navigate(['xemdanhsach']);
    };
    ThemSinhVien = __decorate([
        core_1.Component({
            selector: 'them-sinhvien',
            templateUrl: './themsinhvien.component.html',
            styleUrls: ['./themsinhvien.component.scss'],
            providers: [sinhvien_service_1.SinhvienService]
        }),
        __metadata("design:paramtypes", [sinhvien_service_1.SinhvienService,
            router_1.Router])
    ], ThemSinhVien);
    return ThemSinhVien;
}());
exports.ThemSinhVien = ThemSinhVien;
//# sourceMappingURL=themsinhvien.component.js.map