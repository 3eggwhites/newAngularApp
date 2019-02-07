import * as tslib_1 from "tslib";
import { HomePageComponent } from "./home-page/home-page.component";
import { ArchivePageComponent } from "./archive-page/archive-page.component";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NotFoundComponent } from "./not-found/not-found.component";
var routes = [
    { path: "archives/:year/:month", component: ArchivePageComponent },
    { path: "", component: HomePageComponent },
    { path: "**", component: NotFoundComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map