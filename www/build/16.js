webpackJsonp([16],{

/***/ 698:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmuserPageModule", function() { return ConfirmuserPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__confirmuser__ = __webpack_require__(773);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ConfirmuserPageModule = (function () {
    function ConfirmuserPageModule() {
    }
    ConfirmuserPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__confirmuser__["a" /* ConfirmuserPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__confirmuser__["a" /* ConfirmuserPage */]),
            ],
        })
    ], ConfirmuserPageModule);
    return ConfirmuserPageModule;
}());

//# sourceMappingURL=confirmuser.module.js.map

/***/ }),

/***/ 773:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmuserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
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
 * Generated class for the ConfirmuserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConfirmuserPage = (function () {
    function ConfirmuserPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.profilePic = 'assets/imgs/profileDefault.jpg';
        this.userInfo = navParams.get('userInfo');
    }
    ConfirmuserPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad ConfirmuserPage');
    };
    ConfirmuserPage.prototype.ConfirmButton = function () {
        this.navCtrl.push('home', {}, { animate: false });
        this.navCtrl.setRoot('home', {}, { animate: false });
        //this.navCtrl.push('home',{},{animate: false});
    };
    ConfirmuserPage.prototype.CancelButton = function () {
        this.navCtrl.pop({ animate: false });
    };
    ConfirmuserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-confirmuser',template:/*ion-inline-start:"D:\New folder\TraineeProject\src\pages\confirmuser\confirmuser.html"*/'<ion-content padding>\n\n    <h2 class="text-center">เปิดใช้งาน Tablet</h2>\n\n    <hr id="hr-line">\n\n    <ion-grid>\n\n        <ion-row>\n\n            <ion-col col-6>\n\n                <img [src]="profilePic" />\n\n            </ion-col>\n\n            <ion-col col-6>\n\n                    <ion-grid style="margin-top:20%;margin-left:10px;text-align: center;">\n\n                        <ion-row>\n\n                            <ion-col>\n\n                            <label style="font-size:1.5em;font-weight:bold;">ยืนยันการเปิดใช้งาน</label></ion-col>\n\n                        </ion-row>\n\n                        <ion-row>\n\n                            <ion-col col-6>\n\n                                ชื่อ-นามสกุล\n\n                            </ion-col>\n\n                            <ion-col col-6>\n\n                                {{userInfo.FIRSTNAME}} {{userInfo.LASTNAME}}\n\n                            </ion-col>\n\n                        </ion-row>\n\n                        <ion-row>\n\n                            <ion-col col-6>\n\n                                อีเมลล์\n\n                            </ion-col>\n\n                            <ion-col col-6>\n\n                                {{userInfo.EMAIL}}\n\n                            </ion-col>\n\n                        </ion-row>\n\n                        <ion-row>\n\n                            <ion-col col-6>\n\n                                รหัสพนักงาน\n\n                            </ion-col>\n\n                            <ion-col col-6>\n\n                                {{userInfo.USERID}}\n\n                            </ion-col>\n\n                        </ion-row>\n\n                        <ion-row>\n\n                            <ion-col col-6>\n\n                                <button ion-button color="light" full (click)=CancelButton()>ยกเลิก</button>\n\n                            </ion-col>\n\n                            <ion-col col-6>\n\n                                <button ion-button full (click)=ConfirmButton()>ตกลง</button>\n\n                            </ion-col>\n\n                        </ion-row>\n\n                    </ion-grid>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n</ion-content>'/*ion-inline-end:"D:\New folder\TraineeProject\src\pages\confirmuser\confirmuser.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */]])
    ], ConfirmuserPage);
    return ConfirmuserPage;
}());

//# sourceMappingURL=confirmuser.js.map

/***/ })

});
//# sourceMappingURL=16.js.map