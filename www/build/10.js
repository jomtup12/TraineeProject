webpackJsonp([10],{

/***/ 710:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PumpWaterImgPageModule", function() { return PumpWaterImgPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pump_water_img__ = __webpack_require__(798);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PumpWaterImgPageModule = (function () {
    function PumpWaterImgPageModule() {
    }
    PumpWaterImgPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pump_water_img__["a" /* PumpWaterImgPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pump_water_img__["a" /* PumpWaterImgPage */]),
            ],
        })
    ], PumpWaterImgPageModule);
    return PumpWaterImgPageModule;
}());

//# sourceMappingURL=pump-water-img.module.js.map

/***/ }),

/***/ 798:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PumpWaterImgPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular_navigation_view_controller__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the PumpWaterImgPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PumpWaterImgPage = (function () {
    function PumpWaterImgPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.model = "";
        this.type = this.navParams.get("type");
        this.model = this.navParams.get("model");
    }
    PumpWaterImgPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad PumpWaterImgPage');
    };
    PumpWaterImgPage.prototype.back = function () {
        this.viewCtrl.dismiss();
    };
    PumpWaterImgPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-pump-water-img',template:/*ion-inline-start:"D:\New folder\TraineeProject\src\pages\pump-water-img\pump-water-img.html"*/'<!--\n\n  Generated template for the PumpWaterImgPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-content padding>\n\n  <h2 class="text-center">ตัวอย่างรูปเครื่องสูบน้ำ</h2>\n\n  <hr id="hr-line">\n\n  <div *ngIf="type == \'badan\'">\n\n    <ion-grid style="text-align: center" *ngIf="model == 1">\n\n      <ion-row>\n\n        <ion-col col-6>\n\n          1.(ไฟฟ้า) ปั๊มซับเมิร์ส-ปั๊มแบบจุ่ม\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <img src="assets/imgs/img/badan/1/1.jpg" style="width:35%" />\n\n        </ion-col>\n\n      </ion-row>\n\n      <hr id="hr-line">\n\n    </ion-grid>\n\n    <ion-grid style="text-align: center" *ngIf="model == 1">\n\n      <ion-row>\n\n        <ion-col col-6>\n\n          2. (ไฟฟ้า) ปั๊มเจ็ท-ปั๊มน้ำอัตโนมัติสำหรับดูดน้ำลึก\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <img src="assets/imgs/img/badan/2/1.jpg" style="width:35%"\n\n          />\n\n        </ion-col>\n\n      </ion-row>\n\n      <hr id="hr-line">\n\n    </ion-grid>\n\n    <ion-grid style="text-align: center" *ngIf="model == 1">\n\n      <ion-row>\n\n        <ion-col col-6>\n\n          3.(ไฟฟ้า) ปั๊มหอยโข่ง\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <img src="assets/imgs/img/badan/3/images.jpg" style="width:35%" />\n\n        </ion-col>\n\n      </ion-row>\n\n      <hr id="hr-line">\n\n    </ion-grid>\n\n    <ion-grid style="text-align: center" *ngIf="model == 1">\n\n      <ion-row>\n\n        <ion-col col-6>\n\n          4.(ไฟฟ้า) ปั๊มชัก\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <img src="assets/imgs/img/badan/4/am.jpg" style="width:35%" />\n\n        </ion-col>\n\n      </ion-row>\n\n      <hr id="hr-line">\n\n    </ion-grid>\n\n    <ion-grid style="text-align: center" *ngIf="model == 2">\n\n      <ion-row>\n\n        <ion-col col-6>\n\n          5. (ดีเซล) ปั๊มหอยโข่ง\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <img src="assets/imgs/img/badan/5/100KB-4E.jpg" style="width:35%" />\n\n        </ion-col>\n\n      </ion-row>\n\n      <hr id="hr-line">\n\n    </ion-grid>\n\n    <ion-grid style="text-align: center" *ngIf="model == 3">\n\n      <ion-row>\n\n        <ion-col col-6>\n\n          6. (เบนซิน) ปั๊มหอยโข่ง\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <img src="assets/imgs/img/badan/6/WP-653 LPG.jpg" style="width:35%" />\n\n        </ion-col>\n\n      </ion-row>\n\n      <hr id="hr-line">\n\n    </ion-grid>\n\n    \n\n    <ion-grid style="text-align: center" *ngIf="model == 4">\n\n      <ion-row>\n\n        <ion-col col-6>\n\n          7. (รถไถ) ปั๊มหอยโข่ง\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <img src="assets/imgs/img/badan/7/WPD-150.jpg" style="width:35%" />\n\n        </ion-col>\n\n      </ion-row>\n\n      <hr id="hr-line">\n\n    </ion-grid>\n\n    \n\n    <ion-grid style="text-align: center" *ngIf="model == 4">\n\n      <ion-row>\n\n        <ion-col col-6>\n\n          8. (รถไถ) ปั๊มเจ็ท\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <img src="assets/imgs/img/badan/8/IM2.jpg" style="width:35%" />\n\n        </ion-col>\n\n      </ion-row>\n\n      <hr id="hr-line">\n\n    </ion-grid>\n\n    \n\n    <ion-grid style="text-align: center" *ngIf="model == 4">\n\n      <ion-row>\n\n        <ion-col col-6>\n\n          9. (รถไถ) เทอร์ไบร์\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <img src="assets/imgs/img/badan/9/5.png" style="width:35%"\n\n          />\n\n        </ion-col>\n\n      </ion-row>\n\n      <hr id="hr-line">\n\n    </ion-grid>\n\n    \n\n    <ion-grid style="text-align: center" *ngIf="model == 5">\n\n      <ion-row>\n\n        <ion-col col-6>\n\n          10. (แรงคน) ปั๊มน้ำแบบโยก\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <img src="assets/imgs/img/badan/10/2.jpg" style="width:35%" />\n\n        </ion-col>\n\n      </ion-row>\n\n      <hr id="hr-line">\n\n    </ion-grid>\n\n    \n\n  </div>\n\n  <div *ngIf="type == \'din\'">\n\n    <ion-grid style="text-align: center" *ngIf="model == 1">\n\n      <ion-row>\n\n        <ion-col col-6>\n\n          1. (ไฟฟ้า) ปั๊มไดโว่-ปั๊มจุ่ม-ป๊มแช่\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <img src="assets/imgs/img/ground/1/1482716642.jpg" style="width:35%" />\n\n        </ion-col>\n\n      </ion-row>\n\n      <hr id="hr-line">\n\n    </ion-grid>\n\n    \n\n    <ion-grid style="text-align: center" *ngIf="model == 1">\n\n      <ion-row>\n\n        <ion-col col-6>\n\n          2. (ไฟฟ้า) ปั๊มอัตโนมัติ\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <img src="assets/imgs/img/ground/2/128087.jpg" style="width:35%" />\n\n        </ion-col>\n\n      </ion-row>\n\n      <hr id="hr-line">\n\n    </ion-grid>\n\n    \n\n    <ion-grid style="text-align: center" *ngIf="model == 1">\n\n      <ion-row>\n\n        <ion-col col-6>\n\n          3.(ไฟฟ้า) ปั๊มหอยโข่ง\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <img src="assets/imgs/img/ground/3/images.jpg" style="width:35%" />\n\n        </ion-col>\n\n      </ion-row>\n\n      <hr id="hr-line">\n\n    </ion-grid>\n\n    \n\n    <ion-grid style="text-align: center" *ngIf="model == 2">\n\n      <ion-row>\n\n        <ion-col col-6>\n\n          4. (ดีเซล) ปั๊มหอยโข่ง\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <img src="assets/imgs/img/ground/4/CBP-60E.jpg" style="width:35%" />\n\n        </ion-col>\n\n      </ion-row>\n\n      <hr id="hr-line">\n\n    </ion-grid>\n\n    \n\n    <ion-grid style="text-align: center" *ngIf="model == 3">\n\n      <ion-row>\n\n        <ion-col col-6>\n\n          5. (เบนซิน) ปั๊มหอยโข่ง\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <img src="assets/imgs/img/ground/5/HPW-20.jpg" style="width:35%" />\n\n        </ion-col>\n\n      </ion-row>\n\n      <hr id="hr-line">\n\n    </ion-grid>\n\n    \n\n    <ion-grid style="text-align: center" *ngIf="model == 4">\n\n      <ion-row>\n\n        <ion-col col-6>\n\n          6. (รถไถ) ปั๊มหอยโข่ง-ปั๊มพญานาค\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <img src="assets/imgs/img/ground/6/images.jpg" style="width:35%" />\n\n        </ion-col>\n\n      </ion-row>\n\n      <hr id="hr-line">\n\n    </ion-grid>\n\n    \n\n\n\n  </div>\n\n  <button ion-button (click)="back()" color="light">ย้อนกลับ</button>\n\n</ion-content>'/*ion-inline-end:"D:\New folder\TraineeProject\src\pages\pump-water-img\pump-water-img.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["t" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular_navigation_view_controller__["a" /* ViewController */]])
    ], PumpWaterImgPage);
    return PumpWaterImgPage;
}());

//# sourceMappingURL=pump-water-img.js.map

/***/ })

});
//# sourceMappingURL=10.js.map