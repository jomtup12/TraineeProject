webpackJsonp([14],{

/***/ 700:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatepasswordPageModule", function() { return CreatepasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__createpassword__ = __webpack_require__(775);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CreatepasswordPageModule = (function () {
    function CreatepasswordPageModule() {
    }
    CreatepasswordPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__createpassword__["a" /* CreatepasswordPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__createpassword__["a" /* CreatepasswordPage */]),
            ],
        })
    ], CreatepasswordPageModule);
    return CreatepasswordPageModule;
}());

//# sourceMappingURL=createpassword.module.js.map

/***/ }),

/***/ 775:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreatepasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_http_http__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(152);
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
 * Generated class for the CreatepasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreatepasswordPage = (function () {
    function CreatepasswordPage(formBuilder, navCtrl, navParams, storage, httpProvider, loadingController, alertCtrl) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.httpProvider = httpProvider;
        this.loadingController = loadingController;
        this.alertCtrl = alertCtrl;
        this.USERID = null;
        this.savePassword = null;
        this.oldPassword = null;
        this.newPassword = null;
        this.newPassword2 = null;
        var u = navParams.get('userInfo');
        this.userInfo = u[0];
        this.USERID = this.userInfo.USERID;
        //console.log(this.USERID);
        this.storage.get("userInfo").then(function (userInfo) {
            _this.saveUser = userInfo;
        });
        this.notValid = false;
        // this.savePassword = navParams.get('password');
        // this.http.login(this.userInfo.USERID, this.savePassword).subscribe(result => {
        //   let info = result.json();
        //   this.userInfo = info;
        // });
    }
    CreatepasswordPage.prototype.ngOnInit = function () {
    };
    CreatepasswordPage.prototype.onSubmit = function () {
        var _this = this;
        //console.log('submitting form');
        //console.log(this.USERID);
        //console.log(this.oldPassword);
        //console.log(this.newPassword);
        //console.log(this.newPassword2);
        //console.log(this.saveUser)
        //console.log((!this.USERID || !this.oldPassword || !this.newPassword || !this.newPassword2));
        if (!this.USERID) {
            this.alertPR("กรุณากรอกข้อมูลให้ถูกต้อง");
            this.notValid = true;
        }
        else if (!this.oldPassword) {
            this.alertPR("กรุณากรอกข้อมูลให้ถูกต้อง");
            this.notValid = true;
        }
        else if (!this.newPassword) {
            this.alertPR("กรุณากรอกข้อมูลให้ถูกต้อง");
            this.notValid = true;
        }
        else if (!this.newPassword2) {
            this.alertPR("กรุณากรอกข้อมูลให้ถูกต้อง");
            this.notValid = true;
        }
        else if (this.USERID == this.saveUser.USERID) {
            if (this.oldPassword == this.saveUser.PASSWORD) {
                if (this.newPassword == this.newPassword2) {
                    var loading_1 = this.loadingController.create({
                        content: "กำลังเชื่อมต่อกับระบบ กรุณารอสักครู่...",
                    });
                    loading_1.present();
                    this.saveUser.PASSWORD = this.newPassword;
                    this.httpProvider.updateUserinfo(this.saveUser).subscribe(function (result) {
                        loading_1.dismiss();
                        _this.storage.set("userInfo", _this.saveUser).then(function () {
                            _this.navCtrl.push('confirmuser', { 'userInfo': _this.saveUser }, { animate: false });
                        });
                    }, function (err) {
                        loading_1.dismiss();
                    });
                }
                else {
                    this.alertPR("กรุณากรอกข้อมูล รหัสผ่านให้ตรงกัน");
                }
            }
            else {
                this.alertPR("กรุณากรอกข้อมูล รหัสผ่านให้ถูกต้อง");
            }
        }
        else {
            this.alertPR("กรุณากรอกข้อมูล รหัสพนักงานให้ถูกต้อง");
        }
    };
    CreatepasswordPage.prototype.alertPR = function (msg) {
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
    CreatepasswordPage.prototype.isValid = function (field) {
        // let formField = this.myForm.find(field);
        // return formField.valid || formField.pristine;
    };
    CreatepasswordPage.prototype.nameValidator = function (control) {
        if (control.value !== '') {
            if (control.value.match("^\d{7}$")) {
                return { invalidName: true };
            }
        }
    };
    // passwordValidator(control: FormControl): { [s: string]: boolean } {
    //   if (control.value == this.savePassword) {
    //     return { invalidPassword: true };
    //   }
    // }
    CreatepasswordPage.prototype.goBack = function (value) {
        this.navCtrl.pop({ animate: false });
    };
    CreatepasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-createpassword',template:/*ion-inline-start:"D:\New folder\TraineeProject\src\pages\createpassword\createpassword.html"*/'<h1 class="text-center">เปิดใช้งาน Tablet</h1>\n\n<hr id="hr-line">\n\n<div id="container">\n\n  <ion-list>\n\n      <ion-item>\n\n        <ion-label stacked primary>รหัสพนักงาน</ion-label>\n\n        <ion-input [(ngModel)]="USERID"  type="text" id="name">\n\n        </ion-input>\n\n      </ion-item>\n\n      <p id="error" *ngIf="!USERID && notValid" danger padding-left>กรุณากรอกข้อมูล รหัสพนักงาน</p>\n\n      <ion-item>\n\n        <ion-label stacked primary>รหัสผ่านเก่า</ion-label>\n\n        <ion-input [(ngModel)]="oldPassword"  type="password" id="password" placeholder="รหัสผ่านเก่า">\n\n        </ion-input>\n\n      </ion-item>\n\n      <p id="error" *ngIf="!oldPassword && notValid" danger padding-left>กรุณากรอกข้อมูล รหัสผ่านเก่า</p>\n\n      <ion-item>\n\n        <ion-label stacked primary>รหัสผ่านใหม่</ion-label>\n\n        <ion-input [(ngModel)]="newPassword"  type="password" id="password" placeholder="รหัสผ่านใหม่">\n\n        </ion-input>\n\n      </ion-item>\n\n      <p id="error" *ngIf="!newPassword && notValid" danger padding-left>กรุณากรอกข้อมูล รหัสผ่านใหม่</p>\n\n      <ion-item>\n\n        <ion-label stacked primary>รหัสผ่านใหม่</ion-label>\n\n        <ion-input [(ngModel)]="newPassword2"  type="password" id="password" placeholder="รหัสผ่านใหม่">\n\n        </ion-input>\n\n      </ion-item>\n\n      <p id="error" *ngIf="!newPassword2 && notValid" danger padding-left>กรุณากรอกข้อมูล รหัสผ่านใหม่</p> \n\n\n\n      <button ion-button id="loginButton" (click)="onSubmit()" inline-block color="primary">ยืนยัน</button> \n\n    \n\n    <button ion-button (click)="goBack()" id="loginButton" class="btn btn-default" color="light">ย้อนกลับ</button>\n\n  </ion-list>\n\n</div>\n\n'/*ion-inline-end:"D:\New folder\TraineeProject\src\pages\createpassword\createpassword.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["t" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_0__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["p" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */]])
    ], CreatepasswordPage);
    return CreatepasswordPage;
}());

//# sourceMappingURL=createpassword.js.map

/***/ })

});
//# sourceMappingURL=14.js.map