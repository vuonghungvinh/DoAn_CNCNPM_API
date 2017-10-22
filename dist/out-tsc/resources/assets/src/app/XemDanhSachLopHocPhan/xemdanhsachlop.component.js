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
var Xemdanhsachlop = /** @class */ (function () {
    function Xemdanhsachlop(lophocphanservice) {
        this.lophocphanservice = lophocphanservice;
    }
    Xemdanhsachlop.prototype.ngOnInit = function () {
        var _this = this;
        console.log();
        this.lophocphanservice.getlophocphan().subscribe(function (data) {
            console.log(data);
            _this.lophocphans = data['lophocphan'];
        }, function (error) {
            console.log(error);
        });
    };
    Xemdanhsachlop = __decorate([
        core_1.Component({
            selector: 'xemdanhsach-lop',
            templateUrl: './xemdanhsachlop.component.html',
            styleUrls: ['./xemdanhsachlop.component.scss'],
            providers: [lophocphan_service_1.LophocphanService]
        }),
        __metadata("design:paramtypes", [lophocphan_service_1.LophocphanService])
    ], Xemdanhsachlop);
    return Xemdanhsachlop;
}());
exports.Xemdanhsachlop = Xemdanhsachlop;
//# sourceMappingURL=xemdanhsachlop.component.js.map