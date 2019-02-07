import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
var HomePageComponent = /** @class */ (function () {
    function HomePageComponent() {
    }
    HomePageComponent.prototype.ngOnInit = function () {
        this.archives = [
            { year: 2017, month: 1 },
            { year: 2017, month: 2 },
            { year: 2017, month: 3 }
        ];
    };
    HomePageComponent = tslib_1.__decorate([
        Component({
            selector: "home-page",
            templateUrl: "./home-page.component.html",
            styleUrls: ["./home-page.component.css"]
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], HomePageComponent);
    return HomePageComponent;
}());
export { HomePageComponent };
//# sourceMappingURL=home-page.component.js.map