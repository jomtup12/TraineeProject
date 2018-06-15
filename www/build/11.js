webpackJsonp([11],{

/***/ 707:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageModule", function() { return MenuPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu__ = __webpack_require__(796);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MenuPageModule = (function () {
    function MenuPageModule() {
    }
    MenuPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__menu__["a" /* MenuPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__menu__["a" /* MenuPage */]),
            ],
        })
    ], MenuPageModule);
    return MenuPageModule;
}());

//# sourceMappingURL=menu.module.js.map

/***/ }),

/***/ 796:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
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
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MenuPage = (function () {
    function MenuPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.countStatus = 0;
        this.countPause = 0;
        this.countEdit = 0;
        this.countJob = 0;
        this.sn1 = this.navParams.get('sn1');
        this.sn22 = this.navParams.get('sn22');
        this.user = this.navParams.get('user');
    }
    MenuPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MenuPage');
    };
    MenuPage.prototype.navigate = function (page) {
        this.navCtrl.push(page, {}, { animate: false });
    };
    MenuPage.prototype.upload = function () {
        this.navCtrl.push('upload', { sn1: this.sn1, sn22: this.sn22 }, { animate: false });
    };
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menu',template:/*ion-inline-start:"D:\New folder\TraineeProject\src\pages\menu\menu.html"*/'<!--\n\n  Generated template for the MenuPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n  <ion-header>\n\n    <ion-navbar>\n\n      <ion-title style="text-align: center">MENU</ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  <ion-content>\n\n    <ion-grid>\n\n      <ion-row style="flex:0.4;padding:5px;">\n\n        <ion-label style="margin-left:5%;font-size:1.2em" *ngIf="countStatus&&countJob">ปฏิบัติงานเสร็จแล้ว {{countStatus}}/{{countJob}} EA</ion-label>\n\n        <ion-label style="margin-right:5%;font-size:1.5em" *ngIf="user">{{user.TITLE}}{{user.FIRSTNAME}} {{user.LASTNAME}}</ion-label>\n\n      </ion-row>\n\n      <ion-row>\n\n\n\n      </ion-row>\n\n      <ion-row style="background-color: #227ebb" (click)="navigate(\'download\')">\n\n\n\n        <ion-item style="background-color: transparent;text-align: center">\n\n          <ion-icon name="md-cloud-download" color="light" style="font-size: 3em;margin-right:10px;"></ion-icon>\n\n          <label style="color:white;font-size: 2em">รับงาน</label>\n\n        </ion-item>\n\n      </ion-row>\n\n      <ion-row style="background-color: #7c9ccf" (click)="navigate(\'selectea\')">\n\n        <ion-item style="background-color: transparent;text-align: center">\n\n          <ion-icon name="md-create" color="light" style="font-size: 3em;margin-right:10px;"></ion-icon>\n\n          <label style="color:white;font-size: 2em">เลือก EA</label>\n\n        </ion-item>\n\n      </ion-row>\n\n      <!--<ion-row style="flex:0.4;padding:5px;">\n\n        <ion-label style="margin-left:5%;">สื่อสาร</ion-label>\n\n      </ion-row>-->\n\n      <!--<ion-row style="background-color: #227ebb">\n\n        <ion-item style="background-color: transparent;text-align: center">\n\n          <ion-icon name="ios-chatbubbles" color="light" style="font-size: 3em;margin-right:10px;"></ion-icon>\n\n          <label style="color:white;font-size: 2em">ข้อความ</label>\n\n        </ion-item>\n\n      </ion-row>-->\n\n      <ion-row style="background-color: #7c9ccf" (click)="upload()">\n\n        <ion-item style="background-color: transparent;text-align: center" id="notification-button">\n\n          <ion-icon name="md-cloud-upload" color="light" style="font-size: 3em;margin-right:10px;">\n\n            <ion-badge id="notifications-badge" color="danger" *ngIf="countStatus!=0">{{countStatus}}</ion-badge>\n\n          </ion-icon>\n\n          <label style="color:white;font-size: 2em">ส่งข้อมูล</label>\n\n        </ion-item>\n\n      </ion-row>\n\n      <ion-row style="background-color: #227ebb" (click)="navigate(\'download\')">\n\n        <ion-item style="background-color: transparent;text-align: center">\n\n          <ion-icon name="md-cloud-download" color="light" style="font-size: 3em;margin-right:10px;"></ion-icon>\n\n          <label style="color:white;font-size: 2em">ดาวน์โหลด</label>\n\n        </ion-item>\n\n      </ion-row>\n\n\n\n    </ion-grid>\n\n  </ion-content>\n\n\n\n\n\n\n\n\n\n'/*ion-inline-end:"D:\New folder\TraineeProject\src\pages\menu\menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */]])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ })

});
//# sourceMappingURL=11.js.map