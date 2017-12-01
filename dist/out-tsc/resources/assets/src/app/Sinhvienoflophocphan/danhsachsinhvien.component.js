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
var lophocphan_service_1 = require("../services/lophocphan.service");
var router_1 = require("@angular/router");
var Danhsachsinhvien = /** @class */ (function () {
    function Danhsachsinhvien(Danhsachservice, ActivatedRoute) {
        this.Danhsachservice = Danhsachservice;
        this.ActivatedRoute = ActivatedRoute;
    }
    Danhsachsinhvien.prototype.ngOnInit = function () {
        var _this = this;
        console.log();
        this.subscription = this.activatedRouter.params.subscribe(function (params) {
            _this._id = params['id'];
        });
        // this.lophocphanservice.getdetail().subscribe(data => {
        // 	console.log(data);
        // 	this.danhsach=data['lophocphan'];
        // 	},error => {
        //           console.log(error);
        //       });
    };
    Danhsachsinhvien = __decorate([
        core_1.Component({
            selector: 'sinhvien_lophocphan',
            templateUrl: './danhsachsinhvien.component.html',
            styleUrls: ['./danhsachsinhvien.component.scss'],
            providers: [lophocphan_service_1.LophocphanService]
        }),
        __metadata("design:paramtypes", [lophocphan_service_1.LophocphanService,
            router_1.ActivatedRoute])
    ], Danhsachsinhvien);
    return Danhsachsinhvien;
}());
exports.Danhsachsinhvien = Danhsachsinhvien;
//# sourceMappingURL=danhsachsinhvien.component.js.map
