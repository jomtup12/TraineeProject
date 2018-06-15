webpackJsonp([6],{

/***/ 708:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagePageModule", function() { return MessagePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__message__ = __webpack_require__(797);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MessagePageModule = (function () {
    function MessagePageModule() {
    }
    MessagePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__message__["a" /* MessagePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__message__["a" /* MessagePage */]),
            ],
        })
    ], MessagePageModule);
    return MessagePageModule;
}());

//# sourceMappingURL=message.module.js.map

/***/ }),

/***/ 717:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SN1P3; });
var SN1P3 = (function () {
    function SN1P3() {
    }
    return SN1P3;
}());

//# sourceMappingURL=SN1P3.js.map

/***/ }),

/***/ 797:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular_navigation_view_controller__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_SN1_SN1P3__ = __webpack_require__(717);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(22);
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
 * Generated class for the MessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MessagePage = (function () {
    function MessagePage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.messages = [];
        this.sn = this.navParams.get('SN');
        //console.log("Msg");
        //console.log(this.sn);
        this.messages = [];
        //console.log(this.messages);
    }
    MessagePage.prototype.ionViewDidEnter = function () {
        //console.log('ionViewDidLoad MessagePage');
        for (var _i = 0, _a = this.sn.H3; _i < _a.length; _i++) {
            var i = _a[_i];
            //console.log("Msg1");
            var h3 = new __WEBPACK_IMPORTED_MODULE_1__models_SN1_SN1P3__["a" /* SN1P3 */]();
            h3 = i;
            //console.log(h3);
            if (h3.messages != null) {
                //console.log("Msg2");
                for (var _b = 0, _c = i.messages; _b < _c.length; _b++) {
                    var msg = _c[_b];
                    //console.log("Msg3");
                    if (i.H4)
                        this.messages.push({ H4: i.H4, date: msg.date, message: msg.message });
                    else {
                        this.messages.push({ H4: null, date: msg.date, message: msg.message });
                    }
                }
            }
        }
    };
    MessagePage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    MessagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-message',template:/*ion-inline-start:"D:\New folder\TraineeProject\src\pages\message\message.html"*/'<!--\n\n  Generated template for the MessagePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>ข้อความ</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="close()">ตกลง</button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-label style="font-size:1.5em">อาคารลำดับที่ {{sn.A1}}</ion-label>\n\n  <hr id="hr-line">\n\n  <ion-label style="font-size:1.3em;font-style: oblique;font-weight: lighter;" *ngIf="messages && messages.length==0">ไม่มีข้อความจากระบบ</ion-label>\n\n  <ion-list *ngFor="let msg of messages">\n\n    <ion-label *ngIf="msg.H4">ครัวเรือนหมายเลขห้อง {{msg.H4}}</ion-label>\n\n    <ion-item>\n\n      <ion-label>{{msg.message}}</ion-label>\n\n      <ion-label>{{msg.date}}</ion-label>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"D:\New folder\TraineeProject\src\pages\message\message.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["t" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular_navigation_view_controller__["a" /* ViewController */]])
    ], MessagePage);
    return MessagePage;
}());

//# sourceMappingURL=message.js.map

/***/ })

});
//# sourceMappingURL=6.js.map