webpackJsonp([13],{

/***/ 701:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadPageModule", function() { return DownloadPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__download__ = __webpack_require__(776);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DownloadPageModule = (function () {
    function DownloadPageModule() {
    }
    DownloadPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__download__["a" /* DownloadPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__download__["a" /* DownloadPage */]),
            ],
        })
    ], DownloadPageModule);
    return DownloadPageModule;
}());

//# sourceMappingURL=download.module.js.map

/***/ }),

/***/ 776:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DownloadPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_http_http__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(152);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DownloadPage = (function () {
    function DownloadPage(navCtrl, navParams, httpProvider, storage, loadingController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpProvider = httpProvider;
        this.storage = storage;
        this.loadingController = loadingController;
        this.id = "4060001";
    }
    DownloadPage.prototype.downloadEA = function () {
        var _this = this;
        var loading = this.loadingController.create({
            content: "กำลังสร้างแบบฟอร์ม กรุณารอสักครู่...",
        });
        loading.present();
        this.httpProvider.downloadEA().subscribe(function (result) {
            _this.downloadedEA = result;
            //console.log(this.downloadedEA);
            loading.dismiss();
        }, function (err) {
            loading.dismiss();
        });
    };
    DownloadPage.prototype.saveDownload = function () {
        var _this = this;
        this.storage.set('EA', this.downloadedEA).then(function () {
            if (_this.downloadedEA.length == 1)
                _this.navCtrl.pop();
            else if (_this.downloadedEA.length > 1) {
                //console.log("Hello ea")
                _this.storage.remove('saveEA');
                _this.navCtrl.push('selectea');
            }
        });
    };
    DownloadPage.prototype.home = function () {
        this.navCtrl.pop();
    };
    DownloadPage.prototype.ionViewDidLoad = function () {
        this.downloadEA();
    };
    DownloadPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-download',template:/*ion-inline-start:"/Users/pomgade/Desktop/NSOWaterMGTSystem21/src/pages/download/download.html"*/'<!--\n  Generated template for the DownloadPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n<ion-content padding>\n  <h1 class="text-center">รับงาน</h1>\n  <hr id="hr-line"> กดปุ่ม\n  <label id="bold" (click)="downloadEA()">ดาวน์โหลด</label> เพื่อรับข้อมูลงานสำรวจที่ท่านได้รับมอบหมายต่อไปนี้\n  <ion-list *ngFor="let data of downloadedEA">\n    <ion-grid>\n      <ion-row style="font-weight:bold;text-align: center">\n        <ion-col col-2>\n          จังหวัด\n        </ion-col>\n        <ion-col col-2>\n          อำเภอ\n        </ion-col>\n        <ion-col col-2>\n          ตำบล\n        </ion-col>\n        <ion-col col-2>\n          เขตการปกครอง\n        </ion-col>\n        <ion-col *ngIf="data.MUN_NAME!=\'\'" col-2>\n          เทศบาล\n        </ion-col>\n        <ion-col *ngIf="data.TAO_NAME!=\'\'" col-2>\n          อบต.\n        </ion-col>\n        <ion-col col-1>\n          EA\n        </ion-col>\n      </ion-row>\n      <ion-row style="text-align: center">\n        <ion-col col-2>\n          {{data.CWT_NAME}}\n        </ion-col>\n        <ion-col col-2>\n          {{data.AMP_NAME}}\n        </ion-col>\n        <ion-col col-2>\n          {{data.TAM_NAME}}\n        </ion-col>\n        <ion-col col-2>\n          <label *ngIf="data.DISTRICT==1">ในเขตเทศบาล</label>\n          <label *ngIf="data.DISTRICT==2">นอกเขตเทศบาล</label>\n        </ion-col>\n        <ion-col *ngIf="data.MUN_NAME!=\'\'" col-2>\n          {{data.MUN_NAME}}\n        </ion-col>\n        <ion-col *ngIf="data.TAO_NAME!=\'\'" col-2>\n          {{data.TAO_NAME}}\n        </ion-col>\n        <ion-col col-1>\n          {{data.EA}}\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-list>\n  <ion-row>\n    <button ion-button (click)="saveDownload()">ดาวน์โหลด</button>\n    <button ion-button (click)="home()" color="light">ย้อนกลับ</button>\n  </ion-row>\n</ion-content>'/*ion-inline-end:"/Users/pomgade/Desktop/NSOWaterMGTSystem21/src/pages/download/download.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["t" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* LoadingController */]])
    ], DownloadPage);
    return DownloadPage;
}());

//# sourceMappingURL=download.js.map

/***/ })

});
//# sourceMappingURL=13.js.map