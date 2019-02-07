import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
var ArchivePageComponent = /** @class */ (function () {
    function ArchivePageComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    ArchivePageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (paramMap) {
            _this.year = +paramMap.get("year");
            _this.month = +paramMap.get("month");
        });
    };
    ArchivePageComponent.prototype.goToHome = function () {
        this.router.navigate([""]);
    };
    ArchivePageComponent = tslib_1.__decorate([
        Component({
            selector: "archive-page",
            templateUrl: "./archive-page.component.html",
            styleUrls: ["./archive-page.component.css"]
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute, Router])
    ], ArchivePageComponent);
    return ArchivePageComponent;
}());
export { ArchivePageComponent };
//# sourceMappingURL=archive-page.component.js.map