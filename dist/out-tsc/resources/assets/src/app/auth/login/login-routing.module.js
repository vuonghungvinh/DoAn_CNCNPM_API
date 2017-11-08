"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var login_component_1 = require("./login.component");
exports.LoginRoutes = [
    { path: '', component: login_component_1.LoginComponent }
];
exports.LoginRoute = router_1.RouterModule.forChild(exports.LoginRoutes);
//# sourceMappingURL=login-routing.module.js.map