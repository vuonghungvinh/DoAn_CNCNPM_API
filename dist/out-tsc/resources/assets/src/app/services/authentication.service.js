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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(_http) {
        this._http = _http;
    }
    AuthenticationService.prototype.login = function (data) {
        return this._http.post('/api/admin/login', data).map(function (response) {
            var user = response.json();
            if (user && user.token) {
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
        });
    };
    AuthenticationService.prototype.logout = function () {
        localStorage.removeItem("currentUser");
    };
    AuthenticationService.prototype.checkLogin = function () {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            return true;
        }
        else {
            return false;
        }
    };
    AuthenticationService.prototype.getDetail = function () {
        return this._http.post("/api/admin/info", {}, this.jwt()).map(function (result) { return result.json(); });
    };
    // getUser() {
    // 	let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    //     if (currentUser && currentUser.api_token) {
    //     	return currentUser;
    //     } else {
    //     	return {};
    //     }
    // }
    AuthenticationService.prototype.jwt = function () {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new http_1.RequestOptions({ headers: headers });
        }
    };
    AuthenticationService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], AuthenticationService);
    return AuthenticationService;
}());
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=authentication.service.js.map