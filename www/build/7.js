webpackJsonp([7],{

/***/ 714:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadPageModule", function() { return UploadPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__upload__ = __webpack_require__(802);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UploadPageModule = (function () {
    function UploadPageModule() {
    }
    UploadPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__upload__["a" /* UploadPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__upload__["a" /* UploadPage */]),
            ],
        })
    ], UploadPageModule);
    return UploadPageModule;
}());

//# sourceMappingURL=upload.module.js.map

/***/ }),

/***/ 769:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SN1; });
var SN1 = (function () {
    function SN1() {
    }
    return SN1;
}());

//# sourceMappingURL=SN1.js.map

/***/ }),

/***/ 802:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_http_http__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_SN1_SN1__ = __webpack_require__(769);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
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
 * Generated class for the UploadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UploadPage = (function () {
    function UploadPage(navCtrl, navParams, loadingController, httpProvider, toastCtrl, storage, events, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingController = loadingController;
        this.httpProvider = httpProvider;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.events = events;
        this.alertCtrl = alertCtrl;
        this.noUpload = true;
        this.sn1 = this.navParams.get("sn1");
        this.sn22 = this.navParams.get("sn22");
        this.user = this.navParams.get("User");
        this.EAList = this.navParams.get("EaList");
    }
    UploadPage.prototype.home = function () {
        var _this = this;
        this.storage.set("sn1", this.sn1).then(function () {
            _this.events.publish('noSave');
            _this.storage.set("sn22", _this.sn22).then(function () {
                _this.events.publish('noSave2');
                _this.navCtrl.pop();
            });
        });
    };
    UploadPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad UploadPage');
        this.checkStatus();
        this.noUpload = true;
    };
    UploadPage.prototype.checkStatus = function () {
        this.flag1 = this.sn1.SN1P2.filter(function (sn) { return sn.status == 4; }).length != 0;
        this.flag2 = this.sn22.filter(function (sn) { return sn.status == 4; }).length != 0;
        //console.log(this.sn22)
    };
    UploadPage.prototype.upload = function () {
        var _this = this;
        var loading = this.loadingController.create({
            content: "กำลังส่งแบบฟอร์ม กรุณารอสักครู่...",
        });
        loading.present();
        var date = new Date();
        if (this.sn1) {
            for (var i in this.sn1.SN1P2) {
                if (this.sn1.SN1P2[i].status == 4) {
                    this.sn1.SN1P2[i].status = 6;
                    try {
                        if (this.sn1.SN1P2[i].H3)
                            if (this.sn1.SN1P2[i].H3.length > 0)
                                this.sn1.SN1P2[i].H3.map(function (l) {
                                    l.submit_date = date;
                                    if (!l.G1) {
                                        l.SN2_1.A1 = null;
                                        l.SN2_1.A6 = null;
                                    }
                                    if (!l.G2)
                                        l.SN2_1.A2 = null;
                                    if (!l.G3)
                                        l.SN2_1.A3 = null;
                                    if (!l.G4)
                                        l.SN2_1.A4 = null;
                                });
                    }
                    catch (e) {
                    }
                }
            }
            this.sn1.submit_date = date;
            var sn1 = this.sn1;
            if (sn1.SN1P2.length != 0) {
                this.httpProvider.saveSN1(sn1).subscribe(function (result) {
                    //console.log(result);
                    _this.checkStatus();
                    _this.presentToast('งาน');
                }, function (error) {
                    console.log("error: " + error);
                    var alert = _this.alertCtrl.create({
                        title: 'เกิดปัญหาขณะส่งข้อมูล',
                        subTitle: 'รหัสข้อผิดพลาด: ' + error,
                        buttons: [{
                                text: 'ยืนยัน',
                                handler: function () {
                                }
                            }]
                    });
                    alert.present();
                    if (_this.sn1) {
                        for (var i in _this.sn1.SN1P2) {
                            if (_this.sn1.SN1P2[i].status == 6) {
                                _this.sn1.SN1P2[i].status = 4;
                            }
                        }
                    }
                });
            }
        }
        if (this.sn22) {
            for (var i in this.sn22) {
                if (this.sn22[i].status == 4) {
                    this.sn22[i].status = 6;
                    this.sn22[i].submit_date = date;
                }
            }
            var sn2_2 = this.sn22;
            if (sn2_2.length != 0) {
                for (var _i = 0, sn2_2_1 = sn2_2; _i < sn2_2_1.length; _i++) {
                    var s = sn2_2_1[_i];
                    this.httpProvider.saveSN2_2(s).subscribe(function (result) {
                        //console.log(result);
                        _this.checkStatus();
                        _this.presentToast('งาน');
                    }, function (error) {
                        console.log(error.status);
                        var alert = _this.alertCtrl.create({
                            title: 'เกิดปัญหาขณะส่งข้อมูล',
                            subTitle: 'รหัสข้อผิดพลาด: ' + error,
                            buttons: [{
                                    text: 'ยืนยัน',
                                    handler: function () {
                                    }
                                }]
                        });
                        alert.present();
                    });
                }
            }
        }
        this.noUpload = false;
        loading.dismiss();
    };
    UploadPage.prototype.refresh = function () {
        var _this = this;
        this.httpProvider.downloadSN1(this.user.USERID).timeout(60000).subscribe(function (newSn1) {
            //console.log("New SN1");
            //console.log(newSn1.json());
            for (var i in newSn1) {
                var newSN = new __WEBPACK_IMPORTED_MODULE_1__models_SN1_SN1__["a" /* SN1 */]();
                newSN = newSn1.json()[i];
                //console.log(newSN)
                //console.log(this.sn1)
                if (newSN != null) {
                    if (_this.sn1 == null || _this.sn1.SN1P2.length == 0) {
                        //console.log('1');
                        if (newSN.SN1_ID == _this.sn1.SN1_ID) {
                            //console.log('2');
                            _this.sn1 = newSN;
                            _this.sn1.SN1P2 = newSN.SN1P2.filter(function (sn) { return sn.status == 6 || sn.status == 10; });
                        }
                    }
                    else {
                        if (newSN.SN1_ID == _this.sn1.SN1_ID) {
                            _this.sn1.status_approve = newSN.status_approve;
                            // //console.log('3');
                            for (var index in _this.sn1.SN1P2) {
                                var sn = newSN.SN1P2.filter(function (sn) { return (sn.A1 == _this.sn1.SN1P2[index].A1) && (sn.status == 6 || sn.status == 10); });
                                if (sn.length == 1) {
                                    if (_this.sn1.SN1P2[index].version) {
                                        if (sn[0].version) {
                                            if (_this.sn1.SN1P2[index].version < sn[0].version)
                                                _this.sn1.SN1P2[index] = sn[0];
                                        }
                                        else
                                            _this.sn1.SN1P2[index] = sn[0];
                                    }
                                }
                            }
                        }
                    }
                    _this.storage.set('sn1', _this.sn1);
                }
            }
        }, function (error) {
        });
        this.httpProvider.downloadSN22(this.user.USERID).timeout(60000).subscribe(function (newSn1) {
            //console.log("New SN22");
            //console.log(newSn1.json());
            var newSN = Array();
            newSN = newSn1.json();
            if (newSN != null) {
                var ea = _this.EAList[0];
                if (_this.sn22 == null || _this.sn22.length == 0) {
                    //console.log('11');
                    _this.sn22 = [];
                    for (var _i = 0, newSN_1 = newSN; _i < newSN_1.length; _i++) {
                        var i = newSN_1[_i];
                        //console.log("------------i------------")
                        //console.log(i)
                        if (i.SN2_2_ID.substring(0, i.SN2_2_ID.length - 1) == "" + ea.REG + ea.CWT + ea.AMP + ea.TAM + ea.DISTRICT + ea.EA)
                            _this.sn22.push(i);
                    }
                }
                else {
                    for (var _a = 0, newSN_2 = newSN; _a < newSN_2.length; _a++) {
                        var i = newSN_2[_a];
                        if (i.SN2_2_ID.substring(0, i.SN2_2_ID.length - 1) == "" + ea.REG + ea.CWT + ea.AMP + ea.TAM + ea.DISTRICT + ea.EA) {
                            var flag = true;
                            for (var sn in _this.sn22) {
                                if (_this.sn22[sn].SN2_2_ID == i.SN2_2_ID) {
                                    if (_this.sn22[sn].version < i.version)
                                        _this.sn22[sn] = i;
                                    flag = false;
                                }
                            }
                            if (flag) {
                                _this.sn22.push(i);
                            }
                        }
                    }
                }
                _this.storage.set('sn22', _this.sn22);
            }
        }, function (error) {
        });
    };
    UploadPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: 'ส่ง' + msg + 'เรียบร้อย',
            duration: 3000,
            position: 'top'
        });
        toast.onDidDismiss(function () {
            //console.log('Dismissed toast');
        });
        toast.present();
    };
    UploadPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-upload',template:/*ion-inline-start:"D:\New folder\TraineeProject\src\pages\upload\upload.html"*/'<!--\n\n  Generated template for the UploadPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n\n\n\n\n<ion-content padding>\n\n  <h1 class="text-center">ส่งงาน</h1>\n\n  <hr id="hr-line">\n\n  <div *ngIf="noUpload">\n\n  <ion-label *ngIf="flag1">สน. 1</ion-label>\n\n  <ion-list *ngFor="let sn of sn1.SN1P2">\n\n    <ion-item *ngIf="sn.status==4">\n\n      <ion-row class="w-100">\n\n\n\n        <button ion-button full clear icon-end class="btn-align">อาคารลำดับที่ {{sn.A1}}\n\n          <label style="margin-left:5px" *ngIf="sn.A2"> {{sn.A2}} </label>\n\n          <label style="margin-left:5px" *ngIf="sn.A3"> {{sn.A3}} </label>\n\n          <label style="margin-left:5px" *ngIf="sn.A4"> {{sn.A4}}</label>\n\n          <label style="margin-left:5px" *ngIf="sn.A5"> {{sn.A5}} </label>\n\n          <ion-icon *ngIf="sn.status==4" name="md-checkmark-circle-outline" color="secondary"></ion-icon>\n\n        </button>\n\n      </ion-row>\n\n    </ion-item>\n\n  </ion-list>\n\n  <ion-label *ngIf="flag2">สน. 2-2</ion-label>\n\n  <ion-list *ngFor="let sn of sn22">\n\n    <ion-item *ngIf="sn.status==4">\n\n      <ion-row class="w-100">\n\n        <button ion-button full clear icon-end class="btn-align">หมู่บ้าน/ชุมชน {{sn.B0.VIL_NAME}}\n\n          <ion-icon *ngIf="sn.status==4" name="md-checkmark-circle-outline" color="secondary"></ion-icon>\n\n        </button>\n\n      </ion-row>\n\n    </ion-item>\n\n  </ion-list>\n\n  </div>\n\n  <button ion-button (click)="upload()">ส่งงาน</button>\n\n  <button ion-button (click)="home()" color="light">ย้อนกลับ</button>\n\n</ion-content>'/*ion-inline-end:"D:\New folder\TraineeProject\src\pages\upload\upload.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["t" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["p" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_0__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["y" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* Events */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */]])
    ], UploadPage);
    return UploadPage;
}());

//# sourceMappingURL=upload.js.map

/***/ })

});
//# sourceMappingURL=7.js.map