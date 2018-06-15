webpackJsonp([12],{

/***/ 705:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(792);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 792:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(26);
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




var LoginPage = (function () {
    function LoginPage(formBuilder, navCtrl, navParams, loadingController, storage, alertCtrl) {
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingController = loadingController;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.userInfo = { name: '', password: '' };
        this.valiadUsername = true;
        this.valiadPassword = true;
    }
    LoginPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.storage.get("userInfo").then(function (userInfo) {
            if (_this.userInfo) {
                _this.saveUser = userInfo;
                _this.userInfo.name = _this.saveUser.USERID;
            }
            else
                _this.alertNo();
        });
    };
    LoginPage.prototype.alertNo = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: "กรุณากดเปิดใช้งาน Tablet ครั้งแรกก่อนใช้งาน",
            buttons: [{
                    text: 'ยืนยัน',
                    handler: function () {
                        _this.navCtrl.push('scanqr', {}, { animate: false });
                    }
                }]
        });
        alert.present();
    };
    LoginPage.prototype.ngOnInit = function () {
        this.myForm = this.formBuilder.group({
            'name': ['', this.nameValidator.bind(this)],
            'password': ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, this.passwordValidator.bind(this)]]
        });
    };
    LoginPage.prototype.onSubmit = function () {
        //console.log('submitting form');
        var loading = this.loadingController.create({
            content: "กำลังเข้าสู่ระบบ กรุณารอสักครู่...",
        });
        loading.present();
        this.valiadUsername = true;
        this.valiadPassword = true;
        if (this.saveUser) {
            //console.log(this.saveUser);
            //console.log(this.userInfo)
            if (!this.userInfo.name) {
                this.valiadUsername = false;
            }
            if (!this.userInfo.password) {
                this.valiadPassword = false;
            }
            if (this.userInfo.name == this.saveUser.USERID) {
                if (this.userInfo.password == this.saveUser.PASSWORD) {
                    loading.dismiss();
                    this.valiadUsername = true;
                    this.valiadPassword = true;
                    this.navCtrl.push('confirmuser', { 'userInfo': this.saveUser }, { animate: false });
                }
                else {
                    loading.dismiss();
                    this.alertPR("กรุณากรอกรหัสผ่านให้ถูกต้อง");
                    this.valiadPassword = false;
                }
            }
            else {
                loading.dismiss();
                this.alertPR("กรุณากรอกรหัสพนักงานให้ถูกต้อง");
                this.valiadUsername = false;
            }
        }
        else {
            loading.dismiss();
            this.alertNo();
        }
    };
    LoginPage.prototype.alertPR = function (msg) {
        var alert = this.alertCtrl.create({
            title: msg,
            buttons: [{
                    text: 'ยืนยัน',
                    handler: function () {
                    }
                }]
        });
        alert.present();
    };
    LoginPage.prototype.isValid = function (field) {
        // let formField = this.myForm.find(field);
        // return formField.valid || formField.pristine;
    };
    LoginPage.prototype.nameValidator = function (control) {
        if (control.value !== '') {
            if (control.value.match("^\d{7}$")) {
                return { invalidName: true };
            }
        }
    };
    LoginPage.prototype.passwordValidator = function (control) {
        if (control.value !== '') {
            return { invalidPassword: true };
        }
    };
    LoginPage.prototype.goBack = function (value) {
        this.navCtrl.pop({ animate: false });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'login',template:/*ion-inline-start:"D:\New folder\TraineeProject\src\pages\login\login.html"*/'\n\n<h1 class="text-center">เปิดใช้งาน Tablet</h1>\n\n<hr id="hr-line">\n\n\n\n<div id="container">\n\n  <ion-list>\n\n    <form [formGroup]="myForm" (ngSubmit)="onSubmit()">\n\n      <ion-item class="clerk-font"> \n\n        <ion-label  stacked primary class="clerk-font">รหัสพนักงาน</ion-label>\n\n        <ion-input [(ngModel)]="userInfo.name" formControlName="name" type="text" id="name" placeholder="รหัสพนักงาน">\n\n        </ion-input>\n\n      </ion-item>\n\n      <p id="error" *ngIf="!valiadUsername" danger padding-left>กรุณากรอกข้อมูลรหัสพนักงาน</p>\n\n      <ion-item>\n\n        <ion-label stacked primary>รหัสผ่าน</ion-label>\n\n        <ion-input [(ngModel)]="userInfo.password" formControlName="password" type="password" id="password" placeholder="รหัสผ่าน">\n\n        </ion-input>\n\n      </ion-item>\n\n      <p id="error" *ngIf="!valiadPassword" danger padding-left>กรุณากรอกข้อมูล รหัสผ่าน</p>\n\n\n\n      <button ion-button padding-left id="loginButton" type="submit" inline-block color="primary">ตกลง</button>\n\n    </form>\n\n    <button ion-button padding-left (click)="goBack()" id="loginButton" class="btn btn-default" color="light">ย้อนกลับ</button>\n\n  </ion-list>\n\n</div>\n\n'/*ion-inline-end:"D:\New folder\TraineeProject\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["t" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["p" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["a" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=12.js.map