"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var MyAppPage = /** @class */ (function () {
    function MyAppPage() {
    }
    MyAppPage.prototype.navigateTo = function () {
        return protractor_1.browser.get('/');
    };
    MyAppPage.prototype.getParagraphText = function () {
        return protractor_1.element(protractor_1.by.css('app-root h1')).getText();
    };
    return MyAppPage;
}());
exports.MyAppPage = MyAppPage;
//# sourceMappingURL=app.po.js.map