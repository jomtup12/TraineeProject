webpackJsonp([8],{

/***/ 713:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelecteaPageModule", function() { return SelecteaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__selectea__ = __webpack_require__(801);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SelecteaPageModule = (function () {
    function SelecteaPageModule() {
    }
    SelecteaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__selectea__["a" /* SelecteaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__selectea__["a" /* SelecteaPage */]),
            ],
        })
    ], SelecteaPageModule);
    return SelecteaPageModule;
}());

//# sourceMappingURL=selectea.module.js.map

/***/ }),

/***/ 801:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelecteaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(152);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SelecteaPage = (function () {
    function SelecteaPage(navCtrl, navParams, storage, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.events = events;
    }
    SelecteaPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.storage.get('saveEA').then(function (ea) {
            if (ea) {
                _this.EA = ea;
            }
            else {
                _this.storage.get('EA').then(function (ea0) {
                    _this.storage.set('saveEA', ea0);
                    _this.EA = ea0;
                });
            }
        });
        this.storage.get('sn1').then(function (sn) {
            if (sn) {
                _this.storage.get('saveSN1').then(function (saveSn) {
                    //console.log("ข้อมูลsave")
                    //console.log(saveSn);
                    if (saveSn && saveSn.length > 0) {
                        var save = [];
                        try {
                            save = saveSn.filter(function (sn1) { return sn.SN1_ID != sn1.SN1_ID; });
                        }
                        catch (e) {
                        }
                        if (save.length == 0)
                            save = [];
                        save.push(sn);
                        _this.storage.set('saveSN1', save);
                        //console.log(save.length);
                        //console.log(sn);
                    }
                    else {
                        var save = [];
                        if (sn)
                            save.push(sn);
                        _this.storage.set('saveSN1', save);
                        //console.log(save.length);
                    }
                });
            }
        });
        this.storage.get('sn22').then(function (sn) {
            if (sn) {
                _this.storage.get('saveSN22').then(function (saveSn) {
                    console.log("ข้อมูลsave");
                    console.log("-------------saveSN22------------------");
                    console.log(saveSn);
                    console.log("---------------------------------------");
                    if (saveSn && saveSn.length > 0) {
                        var save = [];
                        try {
                            console.log(sn[0].SN2_2_ID.slice(0, 11));
                            console.log(saveSn[0].SN2_2_ID.slice(0, 11));
                            save = saveSn.filter(function (sn22) { return sn[0].SN2_2_ID.slice(0, 11) != sn22.SN2_2_ID.slice(0, 11); });
                            console.log("-------------save------------------");
                            console.log(sn[0].SN2_2_ID.slice(0, 11));
                            console.log(saveSn[0].SN2_2_ID.slice(0, 11));
                            console.log(save);
                            console.log("---------------------------------------");
                        }
                        catch (e) {
                        }
                        if (save.length == 0 && saveSn.length == 0) {
                            console.log(save.length);
                            console.log(sn);
                        }
                        else if (save.length > 0 && sn.length > 0) {
                            for (var _i = 0, sn_1 = sn; _i < sn_1.length; _i++) {
                                var s = sn_1[_i];
                                save.push(s);
                            }
                            console.log('save2');
                            console.log(save);
                            _this.storage.set('saveSN22', save);
                        }
                    }
                    else {
                        var save = [];
                        if (sn) {
                            for (var _a = 0, sn_2 = sn; _a < sn_2.length; _a++) {
                                var s = sn_2[_a];
                                save.push(s);
                            }
                        }
                        //console.log('save');
                        // console.log(save);
                        _this.storage.set('saveSN22', save);
                        //console.log(save.length);
                    }
                });
            }
        });
    };
    SelecteaPage.prototype.selectEA = function (ea) {
        var _this = this;
        var e = this.EA.filter(function (ea0) { return ea0 == ea; });
        this.storage.get('EA').then(function (ea0) {
            //console.log("Eaใหม่: " + e[0].EA);
            //console.log("Eaเก่า: " + ea0[0].EA);
            if (e[0].EA != ea0[0].EA) {
                //console.log("EAใหม่")
                _this.storage.get("saveSN1").then(function (save) {
                    var newSN = [];
                    try {
                        if (save.length > 0)
                            newSN = save.filter(function (s) { return ("" + e[0].REG + e[0].CWT + e[0].AMP + e[0].TAM + e[0].DISTRICT + e[0].EA) == s.SN1_ID; });
                    }
                    catch (e) { }
                    ;
                    //console.log(newSN.length);
                    //console.log(newSN)
                    //console.log("" + e[0].REG + e[0].CWT + e[0].AMP + e[0].TAM + e[0].DISTRICT + e[0].EA)
                    if (newSN.length == 1) {
                        //console.log("EAใหม่1")
                        _this.storage.set('sn1', newSN[0]).then(function () {
                            _this.events.publish('noSave');
                            _this.storage.set('EA', e).then(function () {
                                _this.navCtrl.popToRoot();
                            });
                        });
                    }
                    else {
                        //console.log("EAใหม่2")
                        _this.storage.set('sn1', null).then(function () {
                            _this.events.publish('noSave');
                            _this.storage.set('EA', e).then(function () {
                                _this.navCtrl.popToRoot();
                            });
                        });
                    }
                });
                _this.storage.get("saveSN22").then(function (save) {
                    var newSN = [];
                    //console.log("save3")
                    // console.log(save)
                    try {
                        if (save.length > 0)
                            newSN = save.filter(function (s) { return ("" + e[0].REG + e[0].CWT + e[0].AMP + e[0].TAM + e[0].DISTRICT + e[0].EA) == s.SN2_2_ID.slice(0, 11); });
                        console.log("test----------------------");
                        console.log("" + e[0].REG + e[0].CWT + e[0].AMP + e[0].TAM + e[0].DISTRICT + e[0].EA);
                        console.log(save[0].SN2_2_ID.slice(0, 11));
                        console.log("--------------------------");
                    }
                    catch (e) { }
                    ;
                    //console.log(newSN.length);ea.REG + ea.CWT + ea.AMP + ea.TAM + ea.DISTRICT + ea.EA
                    //console.log(newSN)
                    //console.log("" + e[0].REG + e[0].CWT + e[0].AMP + e[0].TAM + e[0].DISTRICT + e[0].EA)
                    // console.log('----------------sn22--------');
                    //console.log(newSN)
                    _this.storage.set('sn22', newSN).then(function () {
                        _this.events.publish('noSave2');
                        _this.storage.set('EA', e).then(function () {
                            _this.navCtrl.popToRoot();
                        });
                    });
                    //console.log("EAใหม่2")
                });
            }
            else {
                //console.log("EAเก่า")
                _this.storage.set('EA', e).then(function () {
                    _this.navCtrl.popToRoot();
                });
            }
        });
    };
    SelecteaPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad SelecteaPage');
    };
    SelecteaPage.prototype.home = function () {
        this.navCtrl.popToRoot();
    };
    SelecteaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-selectea',template:/*ion-inline-start:"/Users/pomgade/Desktop/NSOWaterMGTSystem21/src/pages/selectea/selectea.html"*/'<!--\n  Generated template for the SelecteaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content padding>\n  <h1 class="text-center">เลือก EA</h1>\n  <hr id="hr-line">\n  <ion-list *ngFor="let data of EA">\n    <ion-grid>\n      <ion-row style="font-weight:bold;text-align: center">\n        <ion-col col-2>\n          จังหวัด\n        </ion-col>\n        <ion-col col-2>\n          อำเภอ\n        </ion-col>\n        <ion-col col-2>\n          ตำบล\n        </ion-col>\n        <ion-col col-2>\n          เขตการปกครอง\n        </ion-col>\n        <ion-col *ngIf="data.MUN_NAME!=\'\'" col-2>\n          เทศบาล\n        </ion-col>\n        <ion-col *ngIf="data.TAO_NAME!=\'\'" col-2>\n          อบต.\n        </ion-col>\n        <ion-col col-1>\n          EA\n        </ion-col>\n      </ion-row>\n      <ion-row style="text-align: center">\n        <ion-col col-2>\n          {{data.CWT_NAME}}\n        </ion-col>\n        <ion-col col-2>\n          {{data.AMP_NAME}}\n        </ion-col>\n        <ion-col col-2>\n          {{data.TAM_NAME}}\n        </ion-col>\n        <ion-col col-2>\n          <label *ngIf="data.DISTRICT==1">ในเขตเทศบาล</label>\n          <label *ngIf="data.DISTRICT==2">นอกเขตเทศบาล</label>\n        </ion-col>\n        <ion-col *ngIf="data.MUN_NAME!=\'\'" col-2>\n          {{data.MUN_NAME}}\n        </ion-col>\n        <ion-col *ngIf="data.TAO_NAME!=\'\'" col-2>\n          {{data.TAO_NAME}}\n        </ion-col>\n        <ion-col col-1>\n          {{data.EA}}\n        </ion-col>\n        <ion-col col-1>\n          <button ion-button (click)="selectEA(data)">เลือก\n          </button >\n          </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-list>\n    <button ion-button (click)="home()" color="light">ย้อนกลับ</button>\n</ion-content>\n'/*ion-inline-end:"/Users/pomgade/Desktop/NSOWaterMGTSystem21/src/pages/selectea/selectea.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Events */]])
    ], SelecteaPage);
    return SelecteaPage;
}());

//# sourceMappingURL=selectea.js.map

/***/ })

});
//# sourceMappingURL=8.js.map