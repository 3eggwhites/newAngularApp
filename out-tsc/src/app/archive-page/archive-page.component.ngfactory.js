/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
import * as i0 from "./archive-page.component.css.shim.ngstyle";
import * as i1 from "@angular/core";
import * as i2 from "./archive-page.component";
import * as i3 from "@angular/router";
var styles_ArchivePageComponent = [i0.styles];
var RenderType_ArchivePageComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_ArchivePageComponent, data: {} });
export { RenderType_ArchivePageComponent as RenderType_ArchivePageComponent };
export function View_ArchivePageComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), i1.ɵted(1, null, ["Archive for ", "/", ""])), (_l()(), i1.ɵeld(2, 0, null, null, 1, "button", [["class", "btn btn-defulat"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.goToHome() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵted(-1, null, ["View All"]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.year; var currVal_1 = _co.month; _ck(_v, 1, 0, currVal_0, currVal_1); }); }
export function View_ArchivePageComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "archive-page", [], null, null, null, View_ArchivePageComponent_0, RenderType_ArchivePageComponent)), i1.ɵdid(1, 114688, null, 0, i2.ArchivePageComponent, [i3.ActivatedRoute, i3.Router], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ArchivePageComponentNgFactory = i1.ɵccf("archive-page", i2.ArchivePageComponent, View_ArchivePageComponent_Host_0, {}, {}, []);
export { ArchivePageComponentNgFactory as ArchivePageComponentNgFactory };
//# sourceMappingURL=archive-page.component.ngfactory.js.map