webpackJsonp([9],{

/***/ 711:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScanqrPageModule", function() { return ScanqrPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scanqr__ = __webpack_require__(799);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ScanqrPageModule = (function () {
    function ScanqrPageModule() {
    }
    ScanqrPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__scanqr__["a" /* ScanqrPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__scanqr__["a" /* ScanqrPage */]),
            ],
        })
    ], ScanqrPageModule);
    return ScanqrPageModule;
}());

//# sourceMappingURL=scanqr.module.js.map

/***/ }),

/***/ 799:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScanqrPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_http_http__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_qr_scanner__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_device__ = __webpack_require__(354);
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
 * Generated class for the ScanqrPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ScanqrPage = (function () {
    function ScanqrPage(navCtrl, navParams, qrScanner, http, loadingController, storage, device, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.qrScanner = qrScanner;
        this.http = http;
        this.loadingController = loadingController;
        this.storage = storage;
        this.device = device;
        this.platform = platform;
    }
    ScanqrPage.prototype.Scan = function () {
        var _this = this;
        if (this.platform.is('cordova')) {
            this.qrScanner.prepare()
                .then(function (status) {
                if (status.authorized) {
                    // camera permission was granted
                    var ionApp_1 = document.getElementsByTagName("ion-app")[0];
                    // start scanning
                    var scanSub_1 = _this.qrScanner.scan().timeout(60000).subscribe(function (text) {
                        //alert(text);
                        var loading = _this.loadingController.create({
                            content: "กำลังเชื่อมต่อกับระบบ กรุณารอสักครู่...",
                        });
                        loading.present();
                        _this.scanData = text;
                        var userID = _this.scanData.slice(0, 7);
                        var password = _this.scanData.slice(7);
                        _this.storage.get('userInfo').then(function (user) {
                            if (user.USERID != userID) {
                                _this.storage.remove('EA');
                                _this.storage.remove('userInfo');
                                _this.storage.remove('sn1');
                                _this.storage.remove('sn22');
                            }
                        });
                        _this.qrScanner.hide(); // hide camera preview
                        scanSub_1.unsubscribe(); // stop scanning
                        ionApp_1.style.display = "block";
                        // this.navCtrl.push('createpassword', { 'userID': userID, 'password': password }, { animate: false });
                        _this.http.login(userID, password).subscribe(function (result) {
                            //console.log(JSON.stringify(result.json()));
                            loading.dismiss();
                            if (JSON.stringify(result.json()) == '[]') {
                                alert('รหัสพนักงาน หรือ รหัสผ่าน ไม่ถูกต้อง');
                            }
                            else {
                                var u = result.json();
                                var info = {
                                    tablet_sn: _this.device.serial,
                                    user_id: userID
                                };
                                //console.log(info);
                                _this.http.updateTablet(info).subscribe(function (result) {
                                    //console.log(result)
                                });
                                _this.storage.set("userInfo", u[0]).then(function () { return _this.navCtrl.push('createpassword', { 'userInfo': result.json() }, { animate: false }); });
                            }
                        });
                    });
                    // show camera preview
                    ionApp_1.style.display = "none";
                    _this.qrScanner.show();
                    // setTimeout(() => {
                    //     ionApp.style.display = "block";
                    //     scanSub.unsubscribe(); // stop scanning
                    //     this.qrScanner.hide();
                    //   }, 5000);
                    // wait for user to scan something, then the observable callback will be called
                }
                else if (status.denied) {
                    // camera permission was permanently denied
                    // you must use QRScanner.openSettings() method to guide the user to the settings page
                    // then they can grant the permission from there
                }
                else {
                    // permission was denied, but not permanently. You can ask for permission again at a later time.
                }
            })
                .catch(function (e) { return console.log('Error is', e); });
        }
        else {
            this.http.login("1050001", "1234").subscribe(function (result) {
                //console.log(JSON.stringify(result.json()));
                _this.storage.remove('EA');
                _this.storage.remove('userInfo');
                _this.storage.remove('sn1');
                _this.storage.remove('sn22');
                if (JSON.stringify(result.json()) == '[]') {
                    alert('รหัสพนักงาน หรือ รหัสผ่าน ไม่ถูกต้อง');
                }
                else {
                    var u = result.json();
                    _this.storage.set("userInfo", u[0]).then(function () { return _this.navCtrl.push('createpassword', { 'userInfo': result.json() }, { animate: false }); });
                }
            });
        }
    };
    ScanqrPage.prototype.Back = function () {
        this.navCtrl.popToRoot();
    };
    ScanqrPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-scanqr',template:/*ion-inline-start:"/Users/pomgade/Desktop/NSOWaterMGTSystem21/src/pages/scanqr/scanqr.html"*/'<!--\n  Generated template for the ScanqrPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n<ion-content padding style="text-align:center;background: none transparent;">\n    <h1 class="text-center">เปิดใช้งาน Tablet</h1>\n    <hr id="hr-line">\n    <label style="font-size:1.5em;font-weight:bold;">สแกน QR Code เพื่อยืนยันตัวตน</label>\n    <ion-item style="text-align:center;">\n  <img src=\'assets/imgs/scanQR.png\' (click)="Scan()" style="width:40%"> </ion-item>\n  <button ion-button full (click)="Scan()" style="font-size:1.5em;">กดเพื่อเริ่มสแกน</button>\n  <button ion-button full (click)="Back()" color="light" style="font-size:1.5em;">ย้อนกลับ</button>\n  \n</ion-content>\n'/*ion-inline-end:"/Users/pomgade/Desktop/NSOWaterMGTSystem21/src/pages/scanqr/scanqr.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["t" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_qr_scanner__["a" /* QRScanner */], __WEBPACK_IMPORTED_MODULE_1__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["p" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_0__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_device__["a" /* Device */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["w" /* Platform */]])
    ], ScanqrPage);
    return ScanqrPage;
}());

//# sourceMappingURL=scanqr.js.map

/***/ })

});
//# sourceMappingURL=9.js.map