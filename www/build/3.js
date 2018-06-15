webpackJsonp([3],{

/***/ 704:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(788);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
            ],
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 716:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SN1P2; });
var SN1P2 = (function () {
    function SN1P2() {
    }
    return SN1P2;
}());

//# sourceMappingURL=SN1P2.js.map

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

/***/ 788:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_http_http__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_SN2_2_SN2_2__ = __webpack_require__(789);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_SN1_SN1P2__ = __webpack_require__(716);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular_navigation_view_controller__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_SN1_SN1__ = __webpack_require__(769);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__models_SN1_SN1P1__ = __webpack_require__(790);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__models_SN2_2_SN2_2P0__ = __webpack_require__(791);
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
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomePage = (function () {
    function HomePage(navCtrl, navParams, geolocation, viewCtrl, storage, menuCtrl, loadingController, events, alertCtrl, httpProvider, platform, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geolocation = geolocation;
        this.viewCtrl = viewCtrl;
        this.storage = storage;
        this.menuCtrl = menuCtrl;
        this.loadingController = loadingController;
        this.events = events;
        this.alertCtrl = alertCtrl;
        this.httpProvider = httpProvider;
        this.platform = platform;
        this.modalCtrl = modalCtrl;
        this.EAList = [];
        this.isenabled = false;
        this.page = '1';
        this.searchTerm = "";
        this.searchDisplay = [];
        this.countStatus = 0;
        this.countPause = 0;
        this.countEdit = 0;
        this.countJob = 0;
        this.data = "1";
        //this.rootPage = HomePage;
        this.haveData = false;
        this.deleting = false;
    }
    HomePage.prototype.toggleMenu = function () {
        this.navCtrl.push('menu', { sn1: this.sn1, sn22: this.sn22, user: this.user }, { animate: false });
        // this.menuCtrl.toggle();
    };
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
        this.viewCtrl.showBackButton(false);
    };
    HomePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.events.subscribe('noSave', function () {
            _this.storage.get('sn1').then(function (sn1) { _this.sn1 = sn1; });
        });
        this.events.subscribe('noSave2', function () {
            _this.storage.get('sn22').then(function (sn22) { _this.sn22 = sn22; });
        });
    };
    HomePage.prototype.refresh = function () {
        var _this = this;
        var loading = this.loadingController.create({
            content: "กำลังเชื่อมต่อข้อมูลกับระบบ กรุณารอสักครู่...",
        });
        loading.present();
        this.httpProvider.downloadSN1(this.user.USERID).timeout(60000).subscribe(function (newSn1) {
            console.log("New SN1");
            console.log(newSn1);
            //console.log(newSn1.json());
            setTimeout(function () {
                loading.dismiss();
            }, 1000);
            for (var i in newSn1.json()) {
                var newSN = new __WEBPACK_IMPORTED_MODULE_8__models_SN1_SN1__["a" /* SN1 */]();
                newSN = newSn1.json()[i];
                console.log(newSN);
                console.log(_this.sn1);
                if (newSN != null) {
                    if (_this.sn1 == null || _this.sn1.SN1P2.length == 0) {
                        console.log('1');
                        if (newSN.SN1_ID == "" + _this.EAList[0].REG + _this.EAList[0].CWT + _this.EAList[0].AMP + _this.EAList[0].TAM + _this.EAList[0].DISTRICT + _this.EAList[0].EA) {
                            console.log('2');
                            _this.sn1 = newSN;
                            // this.sn1.SN1P2 = newSN.SN1P2.filter(sn => sn.status == 6 || sn.status == 10)
                            _this.countFinish();
                            _this.setFilteredItems();
                        }
                    }
                    else {
                        if (newSN.SN1_ID == _this.sn1.SN1_ID) {
                            _this.sn1.status_approve = newSN.status_approve;
                            // console.log('3');
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
                            _this.setFilteredItems();
                            // for (let index in this.sn1.SN1P2) {
                            //   let sn = newSN.SN1P2.filter(sn => (sn.A1 == this.sn1.SN1P2[index].A1) && (sn.status == 6 || sn.status == 10));
                            //   console.log(sn);
                            //   if (sn.length == 1) {
                            //     if (this.sn1.SN1P2[index].Modify_DATE) {
                            //       if (this.sn1.SN1P2[index].Modify_DATE.length <= sn[0].Modify_DATE.length)
                            //         this.sn1.SN1P2[index] = sn[0];
                            //     } else
                            //       this.sn1.SN1P2[index] = sn[0];
                            //   }
                            // }
                            // for (let index in newSN.SN1P2) {
                            //   let sn = this.sn1.SN1P2.filter(sn => (sn.A1 == newSN.SN1P2[index].A1));
                            //   console.log(sn);
                            //   if (sn.length == 1) {
                            //   } else {
                            //     this.sn1.SN1P2.push(newSN.SN1P2[index]);
                            //   }
                            // }
                        }
                    }
                    _this.storage.set('sn1', _this.sn1);
                }
            }
        }, function (error) {
            loading.dismiss();
        });
        this.httpProvider.downloadSN22(this.user.USERID).timeout(60000).subscribe(function (newSn1) {
            console.log("New SN22");
            console.log(newSn1.json());
            var newSN = Array();
            newSN = newSn1.json();
            if (newSN != null) {
                var ea = _this.EAList[0];
                if (_this.sn22 == null || _this.sn22.length == 0) {
                    console.log('11');
                    _this.sn22 = [];
                    for (var _i = 0, newSN_1 = newSN; _i < newSN_1.length; _i++) {
                        var i = newSN_1[_i];
                        console.log("------------i------------");
                        console.log(i);
                        if (i.SN2_2_ID.substring(0, 11) == "" + ea.REG + ea.CWT + ea.AMP + ea.TAM + ea.DISTRICT + ea.EA)
                            _this.sn22.push(i);
                    }
                    _this.countFinish();
                }
                else {
                    for (var _a = 0, newSN_2 = newSN; _a < newSN_2.length; _a++) {
                        var i = newSN_2[_a];
                        if (i.SN2_2_ID.substring(0, 11) == "" + ea.REG + ea.CWT + ea.AMP + ea.TAM + ea.DISTRICT + ea.EA) {
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
    HomePage.prototype.updateEdit = function (user) {
        var _this = this;
        if (this.platform.is('cordova')) {
            this.httpProvider.downloadSN1(user).subscribe(function (newSn1) {
                console.log("New SN1");
                //console.log(newSn1.json());
                var newSN = new __WEBPACK_IMPORTED_MODULE_8__models_SN1_SN1__["a" /* SN1 */]();
                newSN = newSn1.json()[0];
                if (newSN != null) {
                    if (newSN.SN1_ID == _this.sn1.SN1_ID) {
                        console.log(newSN);
                        if (_this.sn1.SN1P2.length > 0) {
                            _this.sn1.status_approve = newSN.status_approve;
                            for (var sn in _this.sn1.SN1P2) {
                                if (_this.sn1.SN1P2[sn].A1 == newSN.SN1P2[sn].A1) {
                                    if (_this.sn1.SN1P2[sn].status == 6) {
                                        if (newSN.SN1P2[sn].status == 10) {
                                            _this.sn1.SN1P2[sn] = newSN.SN1P2[sn];
                                        }
                                    }
                                }
                            }
                            _this.countFinish();
                        }
                    }
                }
            });
        }
    };
    HomePage.prototype.init = function () {
        var _this = this;
        this.storage.get('EA').then(function (val) {
            if (val != null) {
                _this.storage.get('userInfo').then(function (user) {
                    _this.user = user;
                    _this.EAList = val;
                    _this.haveData = true;
                    var ea = _this.EAList[0];
                    _this.storage.get('sn1').then(function (sn1) {
                        if (sn1) {
                            _this.sn1 = sn1;
                            _this.countFinish();
                            _this.setFilteredItems();
                            //this.updateEdit(user.USERID);
                        }
                        else {
                            _this.sn1 = new __WEBPACK_IMPORTED_MODULE_8__models_SN1_SN1__["a" /* SN1 */]();
                            console.log("สร้าง SNใหม่");
                        }
                        if (!_this.sn1.SN1P1) {
                            _this.sn1.SN1P1 = new __WEBPACK_IMPORTED_MODULE_9__models_SN1_SN1P1__["a" /* SN1P1 */]();
                            _this.sn1.SN1P1.FI_DATE = new Date();
                            console.log(_this.sn1.SN1P1.FI_DATE);
                            _this.sn1.SN1P1.FI_ID = user.USERID;
                            _this.sn1.SN1P1.FS_ID = ea.FS;
                            _this.sn1.SN1P1.REG = ea.REG;
                            _this.sn1.SN1P1.REG_NAME = ea.REG_NAME;
                            _this.sn1.SN1P1.CWT = ea.CWT;
                            _this.sn1.SN1P1.CWT_NAME = ea.CWT_NAME;
                            _this.storage.set("CWT", ea.CWT_NAME);
                            _this.sn1.SN1P1.AMP = ea.AMP;
                            _this.sn1.SN1P1.AMP_NAME = ea.AMP_NAME;
                            _this.storage.set("AMP", ea.AMP_NAME);
                            _this.sn1.SN1P1.TAM = ea.TAM;
                            _this.sn1.SN1P1.TAM_NAME = ea.TAM_NAME;
                            _this.storage.set("TAM", ea.TAM_NAME);
                            _this.sn1.SN1P1.DISTRICT = ea.DISTRICT;
                            _this.sn1.SN1P1.MUN = ea.MUN;
                            _this.sn1.SN1P1.MUN_NAME = ea.MUN_NAME;
                            _this.sn1.SN1P1.TAO = ea.TAO;
                            _this.sn1.SN1P1.TAO_NAME = ea.TAO_NAME;
                            _this.sn1.SN1P1.VIL = ea.VIL;
                            _this.sn1.SN1P1.VIL_NAME = ea.VIL_NAME;
                            _this.sn1.SN1P1.EA = ea.EA;
                            _this.sn1.status_data = 0;
                            _this.sn1.status_approve = 0;
                            _this.sn1.SN1P2 = [];
                            _this.sn1.SN1_ID = "" + ea.REG + ea.CWT + ea.AMP + ea.TAM + ea.DISTRICT + ea.EA;
                            console.log("ID: " + _this.sn1.SN1_ID);
                        }
                        else {
                            _this.sn1.SN1P1.FI_ID = user.USERID;
                        }
                        console.log(_this.sn1);
                    });
                    _this.storage.get('sn22').then(function (sn22) {
                        if (sn22) {
                            for (var _i = 0, sn22_1 = sn22; _i < sn22_1.length; _i++) {
                                var s = sn22_1[_i];
                                s.B0.FI_ID = user;
                            }
                            _this.sn22 = sn22;
                            _this.countFinish();
                            _this.setFilteredItems();
                        }
                        else {
                            _this.sn22 = [];
                        }
                    });
                    // else {
                    //   this.haveData = false;
                    // }
                });
                //alert(JSON.stringify(val));
            }
            else {
                _this.haveData = false;
            }
        });
    };
    HomePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        if (this.sn1)
            this.storage.set('sn1', this.sn1).then(function () {
                if (_this.sn22)
                    _this.storage.set('sn22', _this.sn22).then(function () { return _this.init(); });
                else
                    _this.init();
            });
        else
            this.init();
        this.events.subscribe('delete', function (sn, id) {
            _this.events.unsubscribe('delete');
            if (!_this.deleting) {
                _this.deleteFormWithoutConfirm(sn, id);
            }
        });
    };
    HomePage.prototype.seeMsg = function (sn) {
        var profileModal = this.modalCtrl.create('MessagePage', { SN: sn });
        profileModal.present();
    };
    HomePage.prototype.countFinish = function () {
        this.countStatus = 0;
        this.countJob = 0;
        this.countEdit = 0;
        this.countPause = 0;
        if (this.sn1)
            for (var _i = 0, _a = this.sn1.SN1P2; _i < _a.length; _i++) {
                var sn = _a[_i];
                if (sn.status == 4) {
                    this.countStatus = this.countStatus + 1;
                }
                else if (sn.status == 3) {
                    this.countPause = this.countPause + 1;
                }
                else if (sn.status == 10) {
                    this.countEdit = this.countEdit + 1;
                }
                this.countJob = this.countJob + 1;
            }
        if (this.sn22)
            for (var _b = 0, _c = this.sn22; _b < _c.length; _b++) {
                var sn = _c[_b];
                if (sn.status == 4) {
                    this.countStatus = this.countStatus + 1;
                }
                this.countJob = this.countJob + 1;
            }
    };
    HomePage.prototype.navigate = function (page) {
        this.navCtrl.push(page, {}, { animate: false });
    };
    HomePage.prototype.upload = function () {
        this.navCtrl.push('upload', { sn1: this.sn1, sn22: this.sn22 }, { animate: false });
    };
    HomePage.prototype.uploadAll = function () {
        this.sn1.status_approve = 1;
        this.navCtrl.push('upload', { sn1: this.sn1, sn22: this.sn22 }, { animate: false });
    };
    HomePage.prototype.uploadAll2 = function () {
        this.navCtrl.push('upload', { sn1: this.sn1, sn22: this.sn22 }, { animate: false });
    };
    HomePage.prototype.deleteFormWithoutConfirm = function (sn, id) {
        var _this = this;
        var loading = this.loadingController.create({
            content: "กำลังลบแบบฟอร์ม กรุณารอสักครู่...",
        });
        loading.present();
        this.deleting = true;
        if (id == 2) {
            var index = this.sn22.findIndex(function (sn1) { return sn1 === sn; });
            this.sn22.splice(index, 1);
            this.storage.set('sn22', this.sn22);
        }
        else {
            var index = this.sn1.SN1P2.findIndex(function (sn1_2) { return sn1_2.A1 === sn.A1; });
            this.sn1.SN1P2.splice(index, 1);
            for (var i = 0; i < this.sn1.SN1P2.length; i++) {
                this.sn1.SN1P2[i].A1 = i + 1;
            }
            this.storage.set('sn1', this.sn1);
        }
        setTimeout(function () {
            _this.deleting = false;
            loading.dismiss();
            _this.countFinish();
        }, 500);
    };
    HomePage.prototype.createForm = function (ea) {
        var loading = this.loadingController.create({
            content: "กำลังสร้างแบบฟอร์ม กรุณารอสักครู่...",
        });
        loading.present();
        var sn1p2 = new __WEBPACK_IMPORTED_MODULE_2__models_SN1_SN1P2__["a" /* SN1P2 */]();
        sn1p2.A1 = this.sn1.SN1P2.length + 1;
        sn1p2.status = 0;
        sn1p2.current_page = '1';
        sn1p2.Create_DATE = new Date();
        sn1p2.Modify_DATE = [];
        sn1p2.Modify_DATE.push(new Date());
        sn1p2.current_page = "1";
        if (this.sn1.SN1P2.length > 0) {
            sn1p2.A2 = this.sn1.SN1P2[this.sn1.SN1P2.length - 1].A2;
            sn1p2.A3 = this.sn1.SN1P2[this.sn1.SN1P2.length - 1].A3;
            sn1p2.A4 = this.sn1.SN1P2[this.sn1.SN1P2.length - 1].A4;
        }
        this.sn1.SN1P2.push(sn1p2);
        // this.storage.set('sn1', this.sn1);
        this.navCtrl.push('collectionform', { 'sn1p2': sn1p2 }, { animate: false }).then(function (v) { return loading.dismissAll(); }).catch(function (err) { return loading.dismissAll(); });
    };
    HomePage.prototype.editForm = function (sn12) {
        var loading = this.loadingController.create({
            content: "กำลังโหลดแบบฟอร์ม กรุณารอสักครู่...",
        });
        if (sn12.status == 3) {
            sn12.status = 0;
        }
        console.log("edit Form!!");
        loading.present();
        this.navCtrl.push('collectionform', { 'sn1p2': sn12 }, { animate: false }).then(function (v) { return loading.dismissAll(); }).catch(function (err) { console.log(err); loading.dismissAll(); });
        loading.dismissAll();
        console.log("edit Form success!!");
    };
    HomePage.prototype.deleteForm = function (sn12) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'ต้องการจะลบใช่หรือไม่',
            buttons: [{
                    text: 'ยืนยัน',
                    handler: function () {
                        console.log('ยืนยันการลบ');
                        var index = _this.sn1.SN1P2.findIndex(function (sn1_2) { return sn1_2.A1 === sn12.A1; });
                        _this.sn1.SN1P2.splice(index, 1);
                        for (var i = 0; i < _this.sn1.SN1P2.length; i++) {
                            _this.sn1.SN1P2[i].A1 = i + 1;
                        }
                        _this.storage.set('sn1', _this.sn1);
                        _this.countFinish();
                        _this.setFilteredItems();
                    }
                }, {
                    text: 'ยกเลิก',
                    role: 'cancel',
                    handler: function () {
                        console.log('Application exit prevented!');
                    }
                }]
        });
        alert.present();
    };
    HomePage.prototype.createForm22 = function (ea) {
        var loading = this.loadingController.create({
            content: "กำลังสร้างแบบฟอร์ม กรุณารอสักครู่...",
        });
        loading.present();
        var sn2_2 = new __WEBPACK_IMPORTED_MODULE_1__models_SN2_2_SN2_2__["a" /* SN2_2 */]();
        var user;
        //PorPor this.storage.get('userInfo').then((val) => {
        //   user = val;
        //   sn2_2.B0.FI_ID = this.user.USERID;
        // });
        sn2_2.STATUS = 0;
        sn2_2.status = 0;
        sn2_2.SN2_2_ID = ea.REG + ea.CWT + ea.AMP + ea.TAM + ea.DISTRICT + ea.EA + this.sn22.length;
        sn2_2.B0 = new __WEBPACK_IMPORTED_MODULE_10__models_SN2_2_SN2_2P0__["a" /* SN2_2P0 */]();
        sn2_2.B0.FI_ID = this.user.USERID;
        sn2_2.B0.REG = ea.REG;
        sn2_2.B0.REG_NAME = ea.REG_NAME;
        sn2_2.B0.CWT = ea.CWT;
        sn2_2.B0.CWT_NAME = ea.CWT_NAME;
        sn2_2.B0.AMP = ea.AMP;
        sn2_2.B0.AMP_NAME = ea.AMP_NAME;
        sn2_2.B0.TAM = ea.TAM;
        sn2_2.B0.TAM_NAME = ea.TAM_NAME;
        sn2_2.B0.DISTRICT = ea.DISTRICT;
        sn2_2.B0.MUN = ea.MUN;
        sn2_2.B0.MUN_NAME = ea.MUN_NAME;
        sn2_2.B0.TAO = ea.TAO;
        sn2_2.B0.TAO_NAME = ea.TAO_NAME;
        sn2_2.B0.EA = ea.EA;
        sn2_2.B0.VIL = ea.VIL;
        sn2_2.B0.VIL_NAME = ea.VIL_NAME;
        sn2_2.B0.FS_ID = ea.FS;
        // sn2_2.B0.FI_ID = user.USERID;
        sn2_2.B1_1 = null;
        sn2_2.Create_DATE = new Date();
        sn2_2.Modify_DATE = [];
        this.sn22.push(sn2_2);
        // this.storage.set('sn22', this.sn22);
        this.navCtrl.push('form2-2', { 'sn2_2': sn2_2 }, { animate: false }).then(function (v) { return loading.dismissAll(); }).catch(function (err) { return loading.dismissAll(); });
    };
    HomePage.prototype.editForm22 = function (sn2_2) {
        var loading = this.loadingController.create({
            content: "กำลังโหลดแบบฟอร์ม กรุณารอสักครู่...",
        });
        if (sn2_2.status == 3) {
            sn2_2.status = 0;
        }
        console.log("edit Form!!");
        loading.present();
        this.navCtrl.push('form2-2', { 'sn2_2': sn2_2 }, { animate: false }).then(function (v) { return loading.dismissAll(); }).catch(function (err) { console.log(err); loading.dismissAll(); });
        loading.dismissAll();
        console.log("edit Form success!!");
    };
    HomePage.prototype.deleteForm22 = function (sn) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'ต้องการจะลบใช่หรือไม่',
            buttons: [{
                    text: 'ยืนยัน',
                    handler: function () {
                        console.log('ยืนยันการลบ');
                        var index = _this.sn22.findIndex(function (sn1) { return sn1 === sn; });
                        _this.sn22.splice(index, 1);
                        for (var i = 0; i < _this.sn22.length; i++) {
                            _this.sn22[i].SN2_2_ID = _this.sn22[i].SN2_2_ID.slice(0, 11) + i;
                        }
                        _this.storage.set('sn22', _this.sn22);
                        _this.countFinish();
                        _this.setFilteredItems();
                    }
                }, {
                    text: 'ยกเลิก',
                    role: 'cancel',
                    handler: function () {
                        console.log('Application exit prevented!');
                    }
                }]
        });
        alert.present();
    };
    HomePage.prototype.navToForm2_2 = function (ea) {
        this.navCtrl.push('form2-2', { 'ea': ea }, { animate: false });
    };
    HomePage.prototype.loadMap = function () {
        this.geolocation.getCurrentPosition().then(function (position) {
            // resp.coords.latitude
            // resp.coords.longitude
            alert("Longtitude: " + position.coords.longitude + "\nLatitude: " + position.coords.latitude + "\n" + position.coords.speed);
        }, function (err) {
            console.log(err);
        });
    };
    HomePage.prototype.setFilteredItems = function () {
        var _this = this;
        this.searchDisplay = this.sn1.SN1P2.filter(function (sn12) {
            var temp = '' + sn12.A1 + sn12.A2 + sn12.A3 + sn12.A4 + sn12.A5;
            return temp.toLowerCase().indexOf(_this.searchTerm.toLowerCase()) > -1;
        });
    };
    HomePage.prototype.search = function () {
        this.setFilteredItems();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\New folder\TraineeProject\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-item>\n\n    <img item-start src="assets/imgs/logo.png" style="width:200px;">\n\n    <button id="notification-button" ion-button large item-end (click)="toggleMenu()">\n\n      <ion-icon name="menu">\n\n        <ion-badge id="notifications-badge" color="danger" *ngIf="countStatus!=0">{{countStatus}}</ion-badge>\n\n      </ion-icon>\n\n    </button>\n\n  </ion-item>\n\n</ion-header>\n\n<ion-content class="home">\n\n  <div id=\'block_container\' *ngIf="haveData">\n\n\n\n\n\n    <div id="left-panel" style="margin: 10px">\n\n      <ion-segment full [(ngModel)]="page">\n\n        <ion-segment-button full style="font-size:1.1em;color:black" value="1" text-wrap>\n\n          สถานะข้อมูลอาคาร\n\n        </ion-segment-button>\n\n      </ion-segment>\n\n      <!-- <ion-segment full [(ngModel)]="page">\n\n        <ion-segment-button full style="font-size:1.1em;color:black" value="2">\n\n          หยุดชั่วคราว <label *ngIf="countPause">({{countPause}})</label>\n\n        </ion-segment-button>\n\n      </ion-segment> -->\n\n      <ion-segment full [(ngModel)]="page">\n\n        <ion-segment-button full style="font-size:1.1em;color:black" value="3">\n\n          FS ให้แก้ไข\n\n          <label *ngIf="countEdit">({{countEdit}})</label>\n\n        </ion-segment-button>\n\n      </ion-segment>\n\n      <!-- <ion-segment full [(ngModel)]="page">\n\n        <ion-segment-button full style="font-size:1.1em;color:black" value="4">\n\n          ค้นหา\n\n        </ion-segment-button>\n\n      </ion-segment> -->\n\n      <ion-segment full [(ngModel)]="page">\n\n        <ion-segment-button full style="font-size:1.1em;color:black" value="5">\n\n          สน.2-2 พื้นที่ย่อย\n\n        </ion-segment-button>\n\n      </ion-segment>\n\n    </div>\n\n    <div class="w-75">\n\n      <div id=\'center-panel\' *ngIf="sn1">\n\n        <ion-list>\n\n          สถานะของ EA :\n\n          <ion-label id="fontsize" text-wrap> {{EAList[0].REG_NAME}} {{EAList[0].CWT_NAME}} {{EAList[0].AMP_NAME}} {{EAList[0].TAM_NAME}} {{EAList[0].DISTRICT}}\n\n            {{EAList[0].EA}}</ion-label>\n\n          <ion-grid radio-group [(ngModel)]="sn1.status_data" [disabled]=\'!isenabled\'>\n\n          <ion-row>\n\n            <ion-col col-6>\n\n              <ion-item>\n\n                <ion-radio style="margin:0px;" item-left [value]=0></ion-radio>\n\n                <ion-label text-wrap \n\n                style="margin:5px;">กำลังสำรวจ</ion-label>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-6>\n\n              <ion-item>\n\n                <ion-radio style="margin:0px;" item-left [value]=1></ion-radio>\n\n                <ion-label text-wrap style="margin:5px;">สำรวจครบแล้ว</ion-label>\n\n              </ion-item>\n\n            </ion-col>\n\n            </ion-row>\n\n          <ion-row>\n\n            <ion-col col-6>\n\n              <ion-item>\n\n                <ion-radio style="margin:0px;" item-left [value]=2></ion-radio>\n\n                <ion-label text-wrap style="margin:5px;">ตรวจสอบแล้ว</ion-label>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-6>\n\n              <ion-item>\n\n                <ion-radio style="margin:0px;" item-left [value]=3></ion-radio>\n\n                <ion-label text-wrap style="margin:5px;">อนุมัติแล้ว</ion-label>\n\n              </ion-item>\n\n            </ion-col>\n\n          </ion-row>\n\n          </ion-grid>\n\n          <ion-row>\n\n          <button ion-button color="light" (click)="refresh()" style="margin-left:15%">\n\n            <ion-icon name="md-refresh" style="margin-right:5px;"></ion-icon> อัปเดตข้อมูล</button>\n\n            <button ion-button color="secondary" (click)="navigate(\'map\')" style="margin-left:20px">\n\n              <ion-icon name="md-compass" style="margin-right:5px;"></ion-icon> ดูแผนที่</button>\n\n            </ion-row>\n\n        </ion-list>\n\n      </div>\n\n    </div>\n\n\n\n    \n\n\n\n  </div>\n\n  <div *ngIf="haveData" [ngSwitch]="page">\n\n    <hr style="width: 100%;margin-top:-10px; border-top: 1px solid;">\n\n    <div *ngSwitchCase="\'1\'">\n\n      <ion-segment [(ngModel)]="data">\n\n        <ion-segment-button value="1" style="font-family:Arial; font-size: 18px; background-color: #fdfd96; color: black">\n\n          ข้อมูลทั้งหมด\n\n        </ion-segment-button>\n\n        <ion-segment-button value="2" style="font-family:Arial; font-size: 18px; background-color: #fdfd96; color: black">\n\n          <ion-icon name="md-cloud-done" color="secondary" style="margin-right:5px"></ion-icon>ส่งแล้ว\n\n        </ion-segment-button>\n\n        <ion-segment-button value="3" style="font-family:Arial; font-size: 18px; background-color: #fdfd96; color: black">\n\n          <ion-icon name="md-checkmark-circle-outline" color="secondary" style="margin-right:5px"></ion-icon>\n\n          รอส่ง\n\n        </ion-segment-button>\n\n        <ion-segment-button value="4" style="font-family:Arial; font-size: 12px; background-color: #fdfd96; color: black">\n\n          <ion-icon name="md-pause" color="red-pig" style="margin-right:5px"></ion-icon>\n\n          หยุดชั่วคราว\n\n        </ion-segment-button>\n\n        <ion-segment-button value="5" style="font-family:Arial; font-size: 8px; background-color: #fdfd96; color: black">\n\n          <ion-icon name="md-stopwatch" color="red-pig" style="margin-right:5px"></ion-icon>\n\n          สำรวจครั้งที่ 2 และ 3\n\n        </ion-segment-button>\n\n      </ion-segment>\n\n      <div *ngIf="data == \'1\'">\n\n        <ion-grid *ngIf="sn1">\n\n          <ion-row>\n\n            <ion-col col-7>\n\n              <button ion-button (click)="createForm(EAList[0])" style="font-size:0.45em">สำรวจหน่วยต่อไป</button>\n\n              <button ion-button color="secondary" (click)="uploadAll()" style="margin-left:20px;font-size:0.45em">สำรวจครบทุกหน่วยใน EA</button>\n\n            </ion-col>\n\n            <ion-col col-4>\n\n              <ion-searchbar [(ngModel)]="searchTerm" (ionChange)="setFilteredItems()"></ion-searchbar>\n\n            </ion-col>\n\n            <ion-col col-1>\n\n              <button ion-button color="light">\n\n                <ion-icon name="md-search" style="font-size:15px;" (click)="search()"></ion-icon>\n\n              </button>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row style="text-align:center;border-bottom:1px solid;border-top:1px solid;">\n\n            <ion-col col-1 style="font-size:15px;">ลำดับที่</ion-col>\n\n            <ion-col col-3 style="font-size:18px;">บ้านเลขที่</ion-col>\n\n            <ion-col col-3 style="font-size:18px;">ชื่อสถานที่</ion-col>\n\n            <ion-col col-4><ion-row text-wrap style="font-size:16px;margin-left:auto;">\n\n              # ครัวเรือน / สถานประกอบการ\n\n            </ion-row>\n\n            <ion-row style="text-align:center">\n\n                <ion-col col-6 style="font-size:16px;">ทั้งสิ้น</ion-col>\n\n                <ion-col col-6 style="font-size:16px;">ไม่สมบูรณ์</ion-col>\n\n            </ion-row></ion-col>\n\n            <ion-col col-1 style="font-size:14px;" no-margin>ลบ</ion-col>\n\n          </ion-row>\n\n          <ion-row *ngFor="let sn12 of searchDisplay.reverse()" style="text-align:center;border-bottom: 0.5px groove;">\n\n            <ion-col col-1 style="font-size:15px;" (click)="editForm(sn12)" >\n\n              \n\n              <ion-icon *ngIf="sn12.status==6" name="md-cloud-done" color="secondary" style="margin-right:5px"></ion-icon>\n\n              <ion-icon *ngIf="sn12.status==4" name="md-checkmark-circle-outline" color="secondary" style="margin-right:5px"></ion-icon>\n\n              <ion-icon *ngIf="sn12.status==3||sn12.status==5" name="md-pause" color="red-pig" style="margin-right:5px"></ion-icon>\n\n              <ion-icon *ngIf="sn12.status==1||sn12.status==2" name="md-stopwatch" color="red-pig" style="margin-right:5px"></ion-icon>\n\n              <ion-icon *ngIf="sn12.status==10" name="md-build" color="danger" style="margin-right:5px"></ion-icon>\n\n              {{sn12.A1}}  \n\n            </ion-col>\n\n            <ion-col col-3 style="font-size:18px;" (click)="editForm(sn12)" >{{sn12.A5}}</ion-col>\n\n            <ion-col col-3 style="font-size:18px;" (click)="editForm(sn12)" >{{sn12.A4}}</ion-col>\n\n            <ion-col col-2 style="font-size:18px;" (click)="editForm(sn12)" *ngIf="sn12.N">{{sn12.N}}</ion-col>\n\n            <ion-col col-2 style="font-size:18px;" (click)="editForm(sn12)" *ngIf="!sn12.N">0</ion-col>\n\n            <ion-col col-2 style="font-size:18px;" (click)="editForm(sn12)" *ngIf="sn12.Ncount">{{sn12.Ncount}}</ion-col>\n\n            <ion-col col-2 style="font-size:18px;" (click)="editForm(sn12)" *ngIf="!sn12.Ncount"></ion-col>\n\n            <ion-col col-1 style="font-size:18px;">\n\n              <button ion-button color="danger" (click)="deleteForm(sn12)" style="font-size:10px;">\n\n                ลบ\n\n              </button>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n      </div>\n\n      <div *ngIf="data == \'2\'">\n\n          <ion-grid *ngIf="sn1">\n\n            <ion-row>\n\n              <ion-col col-7>\n\n                <button ion-button (click)="createForm(EAList[0])" style="font-size:0.45em">สำรวจหน่วยต่อไป</button>\n\n                <button ion-button color="secondary" (click)="uploadAll()" style="margin-left:20px;font-size:0.45em">สำรวจครบทุกหน่วยใน EA</button>\n\n              </ion-col>\n\n              <ion-col col-4>\n\n                <ion-searchbar [(ngModel)]="searchTerm" (ionChange)="setFilteredItems()"></ion-searchbar>\n\n              </ion-col>\n\n              <ion-col col-1>\n\n                <button ion-button color="light">\n\n                  <ion-icon name="md-search" style="font-size:15px;"></ion-icon>\n\n                </button>\n\n              </ion-col>\n\n            </ion-row>\n\n            <ion-row style="text-align:center;border-bottom:1px solid;border-top:1px solid;">\n\n              <ion-col col-1 style="font-size:15px;">ลำดับที่</ion-col>\n\n              <ion-col col-3 style="font-size:18px;">บ้านเลขที่</ion-col>\n\n              <ion-col col-3 style="font-size:18px;">ชื่อสถานที่</ion-col>\n\n              <ion-col col-4><ion-row text-wrap style="font-size:16px;margin-left:auto;">\n\n                # ครัวเรือน / สถานประกอบการ\n\n              </ion-row>\n\n              <ion-row style="text-align:center">\n\n                  <ion-col col-6 style="font-size:16px;">ทั้งสิ้น</ion-col>\n\n                  <ion-col col-6 style="font-size:16px;">ไม่สมบูรณ์</ion-col>\n\n              </ion-row></ion-col>\n\n              <ion-col col-1 style="font-size:14px;" no-margin>ลบ</ion-col>\n\n            </ion-row>\n\n            <div *ngFor="let sn12 of searchDisplay">\n\n            <ion-row  style="text-align:center;border-bottom: 0.5px groove;" *ngIf="sn12.status==6">\n\n              <ion-col col-1 style="font-size:15px;" (click)="editForm(sn12)" >\n\n                  \n\n                  <ion-icon *ngIf="sn12.status==6" name="md-cloud-done" color="secondary" style="margin-right:5px"></ion-icon>\n\n                  <ion-icon *ngIf="sn12.status==4" name="md-checkmark-circle-outline" color="secondary" style="margin-right:5px"></ion-icon>\n\n                  <ion-icon *ngIf="sn12.status==3||sn12.status==5" name="md-pause" color="red-pig" style="margin-right:5px"></ion-icon>\n\n                  <ion-icon *ngIf="sn12.status==10" name="md-build" color="danger" style="margin-right:5px"></ion-icon>\n\n                  {{sn12.A1}}\n\n              </ion-col>\n\n              <ion-col col-3 style="font-size:18px;" (click)="editForm(sn12)" >\n\n                  {{sn12.A5}}\n\n              </ion-col>\n\n              <ion-col col-3 style="font-size:18px;" (click)="editForm(sn12)" >{{sn12.A4}}</ion-col>\n\n              <ion-col col-2 style="font-size:18px;" (click)="editForm(sn12)" *ngIf="sn12.N">{{sn12.N}}</ion-col>\n\n              <ion-col col-2 style="font-size:18px;" (click)="editForm(sn12)" *ngIf="!sn12.N">0</ion-col>\n\n              <ion-col col-2 style="font-size:18px;" (click)="editForm(sn12)" *ngIf="sn12.Ncount">{{sn12.Ncount}}</ion-col>\n\n            <ion-col col-2 style="font-size:18px;" (click)="editForm(sn12)" *ngIf="!sn12.Ncount"></ion-col>\n\n              <ion-col col-1 style="font-size:18px;">\n\n                <button ion-button color="danger" (click)="deleteForm(sn12)" style="font-size:10px;">\n\n                  ลบ\n\n                </button>\n\n              </ion-col>\n\n            </ion-row>\n\n            </div>\n\n          </ion-grid>\n\n        </div>\n\n        <div *ngIf="data == \'3\'">\n\n            <ion-grid *ngIf="sn1">\n\n              <ion-row>\n\n                <ion-col col-7>\n\n                  <button ion-button (click)="createForm(EAList[0])" style="font-size:0.45em">สำรวจหน่วยต่อไป</button>\n\n                  <button ion-button color="secondary" (click)="uploadAll()" style="margin-left:20px;font-size:0.45em">สำรวจครบทุกหน่วยใน EA</button>\n\n                </ion-col>\n\n                <ion-col col-4>\n\n                  <ion-searchbar [(ngModel)]="searchTerm" (ionChange)="setFilteredItems()"></ion-searchbar>\n\n                </ion-col>\n\n                <ion-col col-1>\n\n                  <button ion-button color="light">\n\n                    <ion-icon name="md-search" style="font-size:15px;"></ion-icon>\n\n                  </button>\n\n                </ion-col>\n\n              </ion-row>\n\n              <ion-row style="text-align:center;border-bottom:1px solid;border-top:1px solid;">\n\n                <ion-col col-1 style="font-size:15px;">ลำดับที่</ion-col>\n\n                <ion-col col-3 style="font-size:18px;">บ้านเลขที่</ion-col>\n\n                <ion-col col-3 style="font-size:18px;">ชื่อสถานที่</ion-col>\n\n                <ion-col col-4><ion-row text-wrap style="font-size:16px;margin-left:auto;">\n\n                  # ครัวเรือน / สถานประกอบการ\n\n                </ion-row>\n\n                <ion-row style="text-align:center">\n\n                    <ion-col col-6 style="font-size:16px;">ทั้งสิ้น</ion-col>\n\n                    <ion-col col-6 style="font-size:16px;">ไม่สมบูรณ์</ion-col>\n\n                </ion-row></ion-col>\n\n                <ion-col col-1 style="font-size:14px;" no-margin>ลบ</ion-col>\n\n              </ion-row>\n\n              <div *ngFor="let sn12 of searchDisplay">\n\n              <ion-row  style="text-align:center;border-bottom: 0.5px groove;" *ngIf="sn12.status==4">\n\n                <ion-col col-1 style="font-size:15px;" (click)="editForm(sn12)" >\n\n                    \n\n                    <ion-icon *ngIf="sn12.status==6" name="md-cloud-done" color="secondary" style="margin-right:5px"></ion-icon>\n\n                    <ion-icon *ngIf="sn12.status==4" name="md-checkmark-circle-outline" color="secondary" style="margin-right:5px"></ion-icon>\n\n                    <ion-icon *ngIf="sn12.status==3||sn12.status==5" name="md-pause" color="red-pig" style="margin-right:5px"></ion-icon>\n\n                    <ion-icon *ngIf="sn12.status==10" name="md-build" color="danger" style="margin-right:5px"></ion-icon>\n\n                    {{sn12.A1}}\n\n                </ion-col>\n\n                <ion-col col-3 style="font-size:18px;" (click)="editForm(sn12)" >\n\n                    {{sn12.A5}}\n\n                </ion-col>\n\n                <ion-col col-3 style="font-size:18px;" (click)="editForm(sn12)" >{{sn12.A4}}</ion-col>\n\n                <ion-col col-2 style="font-size:18px;" (click)="editForm(sn12)" *ngIf="sn12.N">{{sn12.N}}</ion-col>\n\n                <ion-col col-2 style="font-size:18px;" (click)="editForm(sn12)" *ngIf="!sn12.N">0</ion-col>\n\n                <ion-col col-2 style="font-size:18px;" (click)="editForm(sn12)" *ngIf="sn12.Ncount">{{sn12.Ncount}}</ion-col>\n\n            <ion-col col-2 style="font-size:18px;" (click)="editForm(sn12)" *ngIf="!sn12.Ncount"></ion-col>\n\n                <ion-col col-1 style="font-size:18px;">\n\n                  <button ion-button color="danger" (click)="deleteForm(sn12)" style="font-size:10px;">\n\n                    ลบ\n\n                  </button>\n\n                </ion-col>\n\n              </ion-row>\n\n              </div>\n\n            </ion-grid>\n\n          </div>\n\n          <div *ngIf="data == \'4\'">\n\n              <ion-grid *ngIf="sn1">\n\n                <ion-row>\n\n                  <ion-col col-7>\n\n                    <button ion-button (click)="createForm(EAList[0])" style="font-size:0.45em">สำรวจหน่วยต่อไป</button>\n\n                    <button ion-button color="secondary" (click)="uploadAll()" style="margin-left:20px;font-size:0.45em">สำรวจครบทุกหน่วยใน EA</button>\n\n                  </ion-col>\n\n                  <ion-col col-4>\n\n                    <ion-searchbar [(ngModel)]="searchTerm" (ionChange)="setFilteredItems()"></ion-searchbar>\n\n                  </ion-col>\n\n                  <ion-col col-1>\n\n                    <button ion-button color="light">\n\n                      <ion-icon name="md-search" style="font-size:15px;"></ion-icon>\n\n                    </button>\n\n                  </ion-col>\n\n                </ion-row>\n\n                <ion-row style="text-align:center;border-bottom:1px solid;border-top:1px solid;">\n\n                  <ion-col col-1 style="font-size:15px;">ลำดับที่</ion-col>\n\n                  <ion-col col-3 style="font-size:18px;">บ้านเลขที่</ion-col>\n\n                  <ion-col col-3 style="font-size:18px;">ชื่อสถานที่</ion-col>\n\n                  <ion-col col-4><ion-row text-wrap style="font-size:16px;margin-left:auto;">\n\n                    # ครัวเรือน / สถานประกอบการ\n\n                  </ion-row>\n\n                  <ion-row style="text-align:center">\n\n                      <ion-col col-6 style="font-size:16px;">ทั้งสิ้น</ion-col>\n\n                      <ion-col col-6 style="font-size:16px;">ไม่สมบูรณ์</ion-col>\n\n                  </ion-row></ion-col>\n\n                  <ion-col col-1 style="font-size:14px;" no-margin>ลบ</ion-col>\n\n                </ion-row>\n\n                <div *ngFor="let sn12 of searchDisplay">\n\n                <ion-row  style="text-align:center;border-bottom: 0.5px groove;" *ngIf="sn12.status==3||sn12.status==5">\n\n                  <ion-col col-1 style="font-size:15px;" (click)="editForm(sn12)" >\n\n                      \n\n                      <ion-icon *ngIf="sn12.status==6" name="md-cloud-done" color="secondary" style="margin-right:5px"></ion-icon>\n\n                      <ion-icon *ngIf="sn12.status==4" name="md-checkmark-circle-outline" color="secondary" style="margin-right:5px"></ion-icon>\n\n                      <ion-icon *ngIf="sn12.status==3||sn12.status==5" name="md-pause" color="red-pig" style="margin-right:5px"></ion-icon>\n\n                      <ion-icon *ngIf="sn12.status==10" name="md-build" color="danger" style="margin-right:5px"></ion-icon>\n\n                      {{sn12.A1}}\n\n                  </ion-col>\n\n                  <ion-col col-3 style="font-size:18px;" (click)="editForm(sn12)" >\n\n                      {{sn12.A5}}\n\n                  </ion-col>\n\n                  <ion-col col-3 style="font-size:18px;" (click)="editForm(sn12)" >{{sn12.A4}}</ion-col>\n\n                  <ion-col col-2 style="font-size:18px;" (click)="editForm(sn12)" *ngIf="sn12.N">{{sn12.N}}</ion-col>\n\n                  <ion-col col-2 style="font-size:18px;" (click)="editForm(sn12)" *ngIf="!sn12.N">0</ion-col>\n\n                  <ion-col col-2 style="font-size:18px;" (click)="editForm(sn12)" *ngIf="sn12.Ncount">{{sn12.Ncount}}</ion-col>\n\n            <ion-col col-2 style="font-size:18px;" (click)="editForm(sn12)" *ngIf="!sn12.Ncount"></ion-col>\n\n                  <ion-col col-1 style="font-size:18px;">\n\n                    <button ion-button color="danger" (click)="deleteForm(sn12)" style="font-size:10px;">\n\n                      ลบ\n\n                    </button>\n\n                  </ion-col>\n\n                </ion-row>\n\n                </div>\n\n              </ion-grid>\n\n            </div>\n\n            <div *ngIf="data == \'5\'">\n\n                <ion-grid *ngIf="sn1">\n\n                  <ion-row>\n\n                    <ion-col col-7>\n\n                      <button ion-button (click)="createForm(EAList[0])" style="font-size:0.45em">สำรวจหน่วยต่อไป</button>\n\n                      <button ion-button color="secondary" (click)="uploadAll()" style="margin-left:20px;font-size:0.45em">สำรวจครบทุกหน่วยใน EA</button>\n\n                    </ion-col>\n\n                    <ion-col col-4>\n\n                      <ion-searchbar [(ngModel)]="searchTerm" (ionInput)="setFilteredItems()"></ion-searchbar>\n\n                    </ion-col>\n\n                    <ion-col col-1>\n\n                      <button ion-button color="light">\n\n                        <ion-icon name="md-search" style="font-size:15px;"></ion-icon>\n\n                      </button>\n\n                    </ion-col>\n\n                  </ion-row>\n\n                  <ion-row style="text-align:center;border-bottom:1px solid;border-top:1px solid;">\n\n                    <ion-col col-1 style="font-size:15px;">ลำดับที่</ion-col>\n\n                    <ion-col col-3 style="font-size:18px;">บ้านเลขที่</ion-col>\n\n                    <ion-col col-3 style="font-size:18px;">ชื่อสถานที่</ion-col>\n\n                    <ion-col col-4><ion-row text-wrap style="font-size:16px;margin-left:auto;">\n\n                      # ครัวเรือน / สถานประกอบการ\n\n                    </ion-row>\n\n                    <ion-row style="text-align:center">\n\n                        <ion-col col-6 style="font-size:16px;">ทั้งสิ้น</ion-col>\n\n                        <ion-col col-6 style="font-size:16px;">ไม่สมบูรณ์</ion-col>\n\n                    </ion-row></ion-col>\n\n                    <ion-col col-1 style="font-size:14px;" no-margin>ลบ</ion-col>\n\n                  </ion-row>\n\n                  <div *ngFor="let sn12 of searchDisplay.reverse()">\n\n                  <ion-row  style="text-align:center;border-bottom: 0.5px groove;" *ngIf="sn12.status==1 || sn12.status==2">\n\n                    <ion-col col-1 style="font-size:15px;" (click)="editForm(sn12)" >\n\n                        \n\n                        <ion-icon *ngIf="sn12.status==6" name="md-cloud-done" color="secondary" style="margin-right:5px"></ion-icon>\n\n                        <ion-icon *ngIf="sn12.status==4" name="md-checkmark-circle-outline" color="secondary" style="margin-right:5px"></ion-icon>\n\n                        <ion-icon *ngIf="sn12.status==3||sn12.status==5" name="md-pause" color="red-pig" style="margin-right:5px"></ion-icon>\n\n                        <ion-icon *ngIf="sn12.status==10" name="md-build" color="danger" style="margin-right:5px"></ion-icon>\n\n                        <ion-icon *ngIf="sn12.status==1||sn12.status==2" name="md-stopwatch" color="red-pig" style="margin-right:5px"></ion-icon>\n\n                        {{sn12.A1}}\n\n                    </ion-col>\n\n                    <ion-col col-3 style="font-size:18px;" (click)="editForm(sn12)" >\n\n                        {{sn12.A5}}\n\n                    </ion-col>\n\n                    <ion-col col-3 style="font-size:18px;" (click)="editForm(sn12)" >{{sn12.A4}}</ion-col>\n\n                    <ion-col col-2 style="font-size:18px;" (click)="editForm(sn12)" *ngIf="sn12.N">{{sn12.N}}</ion-col>\n\n                    <ion-col col-2 style="font-size:18px;" (click)="editForm(sn12)" *ngIf="!sn12.N">0</ion-col>\n\n                    <ion-col col-2 style="font-size:18px;" (click)="editForm(sn12)" *ngIf="sn12.Ncount">{{sn12.Ncount}}</ion-col>\n\n            <ion-col col-2 style="font-size:18px;" (click)="editForm(sn12)" *ngIf="!sn12.Ncount"></ion-col>\n\n                    <ion-col col-1 style="font-size:18px;">\n\n                      <button ion-button color="danger" (click)="deleteForm(sn12)" style="font-size:10px;">\n\n                        ลบ\n\n                      </button>\n\n                    </ion-col>\n\n                  </ion-row>\n\n                  </div>\n\n                </ion-grid>\n\n              </div>\n\n    </div>\n\n    <div *ngSwitchCase="\'5\'">\n\n        <ion-segment [(ngModel)]="data">\n\n          <ion-segment-button value="1" style="font-family:Arial; font-size: 18px; background-color: #fdfd96; color: black">\n\n            ข้อมูลทั้งหมด\n\n          </ion-segment-button>\n\n          <ion-segment-button value="2" style="font-family:Arial; font-size: 18px; background-color: #fdfd96; color: black">\n\n            <ion-icon name="md-cloud-done" color="secondary" style="margin-right:5px"></ion-icon>ส่งแล้ว\n\n          </ion-segment-button>\n\n          <ion-segment-button value="3" style="font-family:Arial; font-size: 18px; background-color: #fdfd96; color: black">\n\n            <ion-icon name="md-checkmark-circle-outline" color="secondary" style="margin-right:5px"></ion-icon>\n\n            รอส่ง\n\n          </ion-segment-button>\n\n          <ion-segment-button value="4" style="font-family:Arial; font-size: 18px; background-color: #fdfd96; color: black">\n\n            <ion-icon name="md-pause" color="red-pig" style="margin-right:5px"></ion-icon>\n\n            หยุดชั่วคราว\n\n          </ion-segment-button>\n\n        </ion-segment>\n\n        <div *ngIf="data == \'1\'">\n\n          <ion-grid *ngIf="sn1">\n\n            <ion-row>\n\n              <button ion-button (click)="createForm22(EAList[0])" style="margin-left:25%;font-size:0.45em">สำรวจหน่วยต่อไป</button>\n\n              <button ion-button color="secondary" (click)="uploadAll2()" style="margin-left:20px;font-size:0.45em">สำรวจครบทุกหน่วยใน EA</button>\n\n            </ion-row>\n\n            <ion-row style="text-align:center;border-bottom:1px solid;border-top:1px solid;">\n\n              <ion-col col-1 style="font-size:15px;">ลำดับที่</ion-col>\n\n              <ion-col col-4 style="font-size:18px;">หมู่ที่</ion-col>\n\n              <ion-col col-6 style="font-size:18px;">ชื่อหมู่บ้าน</ion-col>\n\n             \n\n              <ion-col col-1 style="font-size:14px;" no-margin>ลบ</ion-col>\n\n            </ion-row>\n\n            <ion-row *ngFor="let sn12 of sn22;let i=index;" style="text-align:center;border-bottom: 0.5px groove;">\n\n              <ion-col col-1 style="font-size:15px;" (click)="editForm22(sn12)" >\n\n                \n\n                <ion-icon *ngIf="sn12.status==6" name="md-cloud-done" color="secondary" style="margin-right:5px"></ion-icon>\n\n                <ion-icon *ngIf="sn12.status==4" name="md-checkmark-circle-outline" color="secondary" style="margin-right:5px"></ion-icon>\n\n                <ion-icon *ngIf="sn12.status==3||sn12.status==5" name="md-pause" color="red-pig" style="margin-right:5px"></ion-icon>\n\n                <ion-icon *ngIf="sn12.status==10" name="md-build" color="danger" style="margin-right:5px"></ion-icon> \n\n                {{i+1}}\n\n              </ion-col>\n\n              <ion-col col-4 style="font-size:18px;" (click)="editForm22(sn12)" text-wrap>{{sn12.B0.VIL}}</ion-col>\n\n              <ion-col col-6 style="font-size:18px;" (click)="editForm22(sn12)" text-wrap>{{sn12.B0.VIL_NAME}}</ion-col>\n\n             <ion-col col-1 style="font-size:18px;">\n\n                <button ion-button color="danger" (click)="deleteForm22(sn12)" style="font-size:10px;">\n\n                  ลบ\n\n                </button>\n\n              </ion-col>\n\n            </ion-row>\n\n          </ion-grid>\n\n        </div>\n\n        <div *ngIf="data == \'2\'">\n\n            <ion-grid *ngIf="sn1">\n\n              <ion-row>\n\n                <button ion-button (click)="createForm22(EAList[0])" style="margin-left:25%;font-size:0.45em">สำรวจหน่วยต่อไป</button>\n\n                <button ion-button color="secondary" (click)="uploadAll2()" style="margin-left:20px;font-size:0.45em">สำรวจครบทุกหน่วยใน EA</button>\n\n              </ion-row>\n\n              <ion-row style="text-align:center;border-bottom:1px solid;border-top:1px solid;">\n\n                <ion-col col-1 style="font-size:15px;">ลำดับที่</ion-col>\n\n                <ion-col col-4 style="font-size:18px;">หมู่ที่</ion-col>\n\n                <ion-col col-6 style="font-size:18px;">ชื่อหมู่บ้าน</ion-col>\n\n               \n\n                <ion-col col-1 style="font-size:14px;" no-margin>ลบ</ion-col>\n\n              </ion-row>\n\n              <div *ngFor="let sn12 of sn22;let i=index;">\n\n              <ion-row  style="text-align:center;border-bottom: 0.5px groove;" *ngIf="sn12.status==6">\n\n                <ion-col col-1 style="font-size:15px;" (click)="editForm22(sn12)" >\n\n                \n\n                  <ion-icon *ngIf="sn12.status==6" name="md-cloud-done" color="secondary" style="margin-right:5px"></ion-icon>\n\n                  <ion-icon *ngIf="sn12.status==4" name="md-checkmark-circle-outline" color="secondary" style="margin-right:5px"></ion-icon>\n\n                  <ion-icon *ngIf="sn12.status==3" name="md-pause" color="red-pig" style="margin-right:5px"></ion-icon>\n\n                  <ion-icon *ngIf="sn12.status==10" name="md-build" color="danger" style="margin-right:5px"></ion-icon> \n\n                  {{i+1}}\n\n                </ion-col>\n\n                <ion-col col-4 style="font-size:18px;" (click)="editForm22(sn12)" text-wrap>{{sn12.B0.VIL}}</ion-col>\n\n                <ion-col col-6 style="font-size:18px;" (click)="editForm22(sn12)" text-wrap>{{sn12.B0.VIL_NAME}}</ion-col>\n\n               <ion-col col-1 style="font-size:18px;">\n\n                  <button ion-button color="danger" (click)="deleteForm22(sn12)" style="font-size:10px;">\n\n                    ลบ\n\n                  </button>\n\n                </ion-col>\n\n              </ion-row>\n\n              </div>\n\n            </ion-grid>\n\n          </div>\n\n          <div *ngIf="data == \'3\'">\n\n              <ion-grid *ngIf="sn1">\n\n                <ion-row>\n\n                  <button ion-button (click)="createForm22(EAList[0])" style="margin-left:25%;font-size:0.45em">สำรวจหน่วยต่อไป</button>\n\n                  <button ion-button color="secondary" (click)="uploadAll2()" style="margin-left:20px;font-size:0.45em">สำรวจครบทุกหน่วยใน EA</button>\n\n                </ion-row>\n\n                <ion-row style="text-align:center;border-bottom:1px solid;border-top:1px solid;">\n\n                  <ion-col col-1 style="font-size:15px;">ลำดับที่</ion-col>\n\n                  <ion-col col-4 style="font-size:18px;">หมู่ที่</ion-col>\n\n                  <ion-col col-6 style="font-size:18px;">ชื่อหมู่บ้าน</ion-col>\n\n                 \n\n                  <ion-col col-1 style="font-size:14px;" no-margin>ลบ</ion-col>\n\n                </ion-row>\n\n                <div *ngFor="let sn12 of sn22;let i=index;">\n\n                <ion-row  style="text-align:center;border-bottom: 0.5px groove;" *ngIf="sn12.status==4">\n\n                  <ion-col col-1 style="font-size:15px;" (click)="editForm22(sn12)" >\n\n                  \n\n                    <ion-icon *ngIf="sn12.status==6" name="md-cloud-done" color="secondary" style="margin-right:5px"></ion-icon>\n\n                    <ion-icon *ngIf="sn12.status==4" name="md-checkmark-circle-outline" color="secondary" style="margin-right:5px"></ion-icon>\n\n                    <ion-icon *ngIf="sn12.status==3" name="md-pause" color="red-pig" style="margin-right:5px"></ion-icon>\n\n                    <ion-icon *ngIf="sn12.status==10" name="md-build" color="danger" style="margin-right:5px"></ion-icon> \n\n                    {{i+1}}\n\n                  </ion-col>\n\n                  <ion-col col-4 style="font-size:18px;" (click)="editForm22(sn12)" text-wrap>{{sn12.B0.VIL}}</ion-col>\n\n                  <ion-col col-6 style="font-size:18px;" (click)="editForm22(sn12)" text-wrap>{{sn12.B0.VIL_NAME}}</ion-col>\n\n                 <ion-col col-1 style="font-size:18px;">\n\n                    <button ion-button color="danger" (click)="deleteForm22(sn12)" style="font-size:10px;">\n\n                      ลบ\n\n                    </button>\n\n                  </ion-col>\n\n                </ion-row>\n\n                </div>\n\n              </ion-grid>\n\n            </div>\n\n            <div *ngIf="data == \'4\'">\n\n                <ion-grid *ngIf="sn1">\n\n                  <ion-row>\n\n                    <button ion-button (click)="createForm22(EAList[0])" style="margin-left:25%;font-size:0.45em">สำรวจหน่วยต่อไป</button>\n\n                    <button ion-button color="secondary" (click)="uploadAll()" style="margin-left:20px;font-size:0.45em">สำรวจครบทุกหน่วยใน EA</button>\n\n                  </ion-row>\n\n                  <ion-row style="text-align:center;border-bottom:1px solid;border-top:1px solid;">\n\n                    <ion-col col-1 style="font-size:15px;">ลำดับที่</ion-col>\n\n                    <ion-col col-4 style="font-size:18px;">หมู่ที่</ion-col>\n\n                    <ion-col col-6 style="font-size:18px;">ชื่อหมู่บ้าน</ion-col>\n\n                   \n\n                    <ion-col col-1 style="font-size:14px;" no-margin>ลบ</ion-col>\n\n                  </ion-row>\n\n                  <div *ngFor="let sn12 of sn22;let i=index;">\n\n                  <ion-row  style="text-align:center;border-bottom: 0.5px groove;" *ngIf="sn12.status==3">\n\n                    <ion-col col-1 style="font-size:15px;" (click)="editForm22(sn12)" >\n\n                    \n\n                      <ion-icon *ngIf="sn12.status==6" name="md-cloud-done" color="secondary" style="margin-right:5px"></ion-icon>\n\n                      <ion-icon *ngIf="sn12.status==4" name="md-checkmark-circle-outline" color="secondary" style="margin-right:5px"></ion-icon>\n\n                      <ion-icon *ngIf="sn12.status==3||sn12.status==5" name="md-pause" color="red-pig" style="margin-right:5px"></ion-icon>\n\n                      <ion-icon *ngIf="sn12.status==10" name="md-build" color="danger" style="margin-right:5px"></ion-icon> \n\n                      {{i+1}}\n\n                    </ion-col>\n\n                    <ion-col col-4 style="font-size:18px;" (click)="editForm22(sn12)" text-wrap>{{sn12.B0.VIL}}</ion-col>\n\n                    <ion-col col-6 style="font-size:18px;" (click)="editForm22(sn12)" text-wrap>{{sn12.B0.VIL_NAME}}</ion-col>\n\n                   <ion-col col-1 style="font-size:18px;">\n\n                      <button ion-button color="danger" (click)="deleteForm22(sn12)" style="font-size:10px;">\n\n                        ลบ\n\n                      </button>\n\n                    </ion-col>\n\n                  </ion-row>\n\n                  </div>\n\n                </ion-grid>\n\n              </div>\n\n              <div *ngIf="data == \'5\'">\n\n                  <ion-grid *ngIf="sn1">\n\n                    <ion-row>\n\n                      <button ion-button (click)="createForm22(EAList[0])" style="margin-left:25%;font-size:0.45em">สำรวจหน่วยต่อไป</button>\n\n                      <button ion-button color="secondary" (click)="uploadAll()" style="margin-left:20px;font-size:0.45em">สำรวจครบทุกหน่วยใน EA</button>\n\n                    </ion-row>\n\n                    <ion-row style="text-align:center;border-bottom:1px solid;border-top:1px solid;">\n\n                      <ion-col col-1 style="font-size:15px;">ลำดับที่</ion-col>\n\n                      <ion-col col-4 style="font-size:18px;">หมู่ที่</ion-col>\n\n                      <ion-col col-6 style="font-size:18px;">ชื่อหมู่บ้าน</ion-col>\n\n                     \n\n                      <ion-col col-1 style="font-size:14px;" no-margin>ลบ</ion-col>\n\n                    </ion-row>\n\n                    <div *ngFor="let sn12 of sn22;let i=index;">\n\n                    <ion-row  style="text-align:center;border-bottom: 0.5px groove;">\n\n                      <ion-col col-1 style="font-size:15px;" (click)="editForm22(sn12)" >\n\n                      \n\n                        <ion-icon *ngIf="sn12.status==6" name="md-cloud-done" color="secondary" style="margin-right:5px"></ion-icon>\n\n                        <ion-icon *ngIf="sn12.status==4" name="md-checkmark-circle-outline" color="secondary" style="margin-right:5px"></ion-icon>\n\n                        <ion-icon *ngIf="sn12.status==3||sn12.status==5" name="md-pause" color="red-pig" style="margin-right:5px"></ion-icon>\n\n                        <ion-icon *ngIf="sn12.status==10" name="md-build" color="danger" style="margin-right:5px"></ion-icon> \n\n                        {{i+1}}\n\n                      </ion-col>\n\n                      <ion-col col-4 style="font-size:18px;" (click)="editForm22(sn12)" text-wrap>{{sn12.B0.VIL}}</ion-col>\n\n                      <ion-col col-6 style="font-size:18px;" (click)="editForm22(sn12)" text-wrap>{{sn12.B0.VIL_NAME}}</ion-col>\n\n                     <ion-col col-1 style="font-size:18px;">\n\n                        <button ion-button color="danger" (click)="deleteForm22(sn12)" style="font-size:10px;">\n\n                          ลบ\n\n                        </button>\n\n                      </ion-col>\n\n                    </ion-row>\n\n                    </div>\n\n                  </ion-grid>\n\n                </div>\n\n      </div>\n\n  </div>\n\n  <div *ngIf="!haveData">\n\n    <button ion-button full style="text-align: center;width:80%;margin:auto;margin-top:30%;height:4em" (click)="navigate(\'download\')">\n\n      <ion-icon name="md-cloud-download" color="light" style="font-size: 4em;margin-right:10px;"></ion-icon>\n\n      <label style="color:white;font-size: 3.5em">รับงาน</label>\n\n    </button>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\New folder\TraineeProject\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["s" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["t" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular_navigation_view_controller__["a" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["q" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["p" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* Events */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_0__providers_http_http__["a" /* HttpProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["w" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["r" /* ModalController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 789:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SN2_2; });
var SN2_2 = (function () {
    function SN2_2() {
    }
    return SN2_2;
}());

//# sourceMappingURL=SN2_2.js.map

/***/ }),

/***/ 790:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SN1P1; });
var SN1P1 = (function () {
    function SN1P1() {
    }
    return SN1P1;
}());

//# sourceMappingURL=SN1P1.js.map

/***/ }),

/***/ 791:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SN2_2P0; });
var SN2_2P0 = (function () {
    function SN2_2P0() {
    }
    return SN2_2P0;
}());

//# sourceMappingURL=SN2_2P0.js.map

/***/ })

});
//# sourceMappingURL=3.js.map