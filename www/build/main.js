webpackJsonp([18],{

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreloginPage; });
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
 * Generated class for the PreloginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PreloginPage = (function () {
    function PreloginPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PreloginPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad PreloginPage');
    };
    PreloginPage.prototype.navigate = function (page) {
        this.navCtrl.push(page, {}, { animate: false });
    };
    PreloginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-prelogin',template:/*ion-inline-start:"D:\New folder\TraineeProject\src\pages\prelogin\prelogin.html"*/'<div class="container-center">\n\n  <h1 class="title text-center">ระบบการจัดเก็บข้อมูลในครัวเรือน ครัวเรือนเกษตร</h1>\n\n  <h1 class="title text-center" >สถานประกอบการ และพื้นที่ย่อย</h1>\n\n  <br /><br />\n\n  <div class="container text-center">\n\n      <button  ion-button  class="btn button-full-size btn-lg btn-success" (click)="navigate(\'scanqr\')" round>เปิดใช้งาน Tablet</button><br />\n\n      <button ion-button  color="light" class="btn button-full-size btn-lg btn-default" (click)="navigate(\'login\')" round>เข้าสู่ระบบ</button>\n\n  </div>\n\n</div>\n\n'/*ion-inline-end:"D:\New folder\TraineeProject\src\pages\prelogin\prelogin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */]])
    ], PreloginPage);
    return PreloginPage;
}());

//# sourceMappingURL=prelogin.js.map

/***/ }),

/***/ 169:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 169;

/***/ }),

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/collectionform/collectionform.module": [
		697,
		1
	],
	"../pages/confirmuser/confirmuser.module": [
		698,
		16
	],
	"../pages/converter/converter.module": [
		699,
		15
	],
	"../pages/createpassword/createpassword.module": [
		700,
		14
	],
	"../pages/download/download.module": [
		701,
		13
	],
	"../pages/form2-2/form2-2.module": [
		702,
		2
	],
	"../pages/form2section/form2section.module": [
		703,
		0
	],
	"../pages/home/home.module": [
		704,
		3
	],
	"../pages/login/login.module": [
		705,
		12
	],
	"../pages/map/map.module": [
		706,
		4
	],
	"../pages/menu/menu.module": [
		707,
		11
	],
	"../pages/message/message.module": [
		708,
		6
	],
	"../pages/prelogin/prelogin.module": [
		709,
		17
	],
	"../pages/pump-water-img/pump-water-img.module": [
		710,
		10
	],
	"../pages/scanqr/scanqr.module": [
		711,
		9
	],
	"../pages/search-dropdown/search-dropdown.module": [
		712,
		5
	],
	"../pages/selectea/selectea.module": [
		713,
		8
	],
	"../pages/upload/upload.module": [
		714,
		7
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 216;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the HttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var HttpProvider = (function () {
    //35.231.173.183:8080
    function HttpProvider(http, storage) {
        this.http = http;
        this.storage = storage;
        this.url = '35.231.173.183:8080';
        //console.log('Hello HttpProvider Provider');
    }
    // 35.227.94.29:5000
    HttpProvider.prototype.downloadEA = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].fromPromise(this.storage.get('userInfo')).mergeMap(function (val) {
            _this.userInfo = val;
            //console.log(JSON.stringify(val));
            return _this.http.get('http://' + _this.url + '/ea_fi?FI=' + _this.userInfo.USERID).map(function (res) { return res.json(); }).timeout(60000);
            ;
        });
    };
    // /update_user
    HttpProvider.prototype.login = function (id, password) {
        return this.http.post('http://' + this.url + '/user_id_pwd', { "USERID": id, "PASSWORD": password }).timeout(30000);
    };
    HttpProvider.prototype.updateuser = function (userinfo) {
        return this.http.post('http://' + this.url + '/user_id_pwd', userinfo).timeout(30000);
    };
    HttpProvider.prototype.saveSN2_2 = function (sn2_2Data) {
        return this.http.put('http://' + this.url + '/insert_sn22', sn2_2Data).timeout(60000);
    };
    HttpProvider.prototype.saveSN1 = function (sn1Data) {
        return this.http.put('http://' + this.url + '/insert_sn1', sn1Data).timeout(60000);
    };
    HttpProvider.prototype.updateUserinfo = function (user) {
        return this.http.post('http://' + this.url + '/update_user', user).timeout(30000);
    };
    HttpProvider.prototype.updateTablet = function (info) {
        return this.http.post('http://' + this.url + '/update_tablet', info).timeout(30000);
    };
    HttpProvider.prototype.downloadSN1 = function (user) {
        return this.http.get('http://' + this.url + '/sn1_fi?FI_ID=' + user).timeout(30000);
    };
    HttpProvider.prototype.downloadSN22 = function (user) {
        return this.http.get('http://' + this.url + '/sn22_fi?FI_ID=' + user).timeout(30000);
    };
    HttpProvider.prototype.loadImage = function () {
    };
    HttpProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_0__ionic_storage__["b" /* Storage */]])
    ], HttpProvider);
    return HttpProvider;
}());

//# sourceMappingURL=http.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(362);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_sim__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_device__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(686);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_prelogin_prelogin__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_storage__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_http_http__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_water_data_water_data__ = __webpack_require__(687);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_qr_scanner__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_keyboard__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ionic_img_viewer__ = __webpack_require__(688);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_platform_browser_animations__ = __webpack_require__(695);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










//import { BarcodeScanner } from '@ionic-native/barcode-scanner';








var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_prelogin_prelogin__["a" /* PreloginPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["n" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/collectionform/collectionform.module#CollectionformPageModule', name: 'collectionform', segment: 'collectionform', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/confirmuser/confirmuser.module#ConfirmuserPageModule', name: 'confirmuser', segment: 'confirmuser', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/converter/converter.module#ConverterPageModule', name: 'converter', segment: 'converter', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/createpassword/createpassword.module#CreatepasswordPageModule', name: 'createpassword', segment: 'createpassword', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/download/download.module#DownloadPageModule', name: 'download', segment: 'download', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/form2-2/form2-2.module#Form2_2PageModule', name: 'form2-2', segment: 'form2-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/form2section/form2section.module#Form2sectionPageModule', name: 'form2section', segment: 'form2section', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'home', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'login', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/map/map.module#MapPageModule', name: 'map', segment: 'map', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'menu', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/message/message.module#MessagePageModule', name: 'MessagePage', segment: 'message', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/prelogin/prelogin.module#PreloginPageModule', name: 'PreloginPage', segment: 'prelogin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pump-water-img/pump-water-img.module#PumpWaterImgPageModule', name: 'pumpWaterImgPage', segment: 'pump-water-img', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/scanqr/scanqr.module#ScanqrPageModule', name: 'scanqr', segment: 'scanqr', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search-dropdown/search-dropdown.module#SearchDropdownPageModule', name: 'SearchDropdownPage', segment: 'search-dropdown', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/selectea/selectea.module#SelecteaPageModule', name: 'selectea', segment: 'selectea', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/upload/upload.module#UploadPageModule', name: 'upload', segment: 'upload', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_10__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_17__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_16_ionic_img_viewer__["a" /* IonicImageViewerModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["l" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_prelogin_prelogin__["a" /* PreloginPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_qr_scanner__["a" /* QRScanner */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_1__ionic_native_device__["a" /* Device */],
                __WEBPACK_IMPORTED_MODULE_0__ionic_native_sim__["a" /* Sim */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_keyboard__["a" /* Keyboard */],
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["m" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__providers_http_http__["a" /* HttpProvider */],
                __WEBPACK_IMPORTED_MODULE_13__providers_water_data_water_data__["a" /* WaterDataProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 686:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_prelogin_prelogin__ = __webpack_require__(156);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, app, alertCtrl) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_prelogin_prelogin__["a" /* PreloginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            platform.registerBackButtonAction(function () {
                var nav = app.getActiveNav();
                if (!nav.canGoBack()) {
                    try {
                        console.log(app.getActiveNavs()[0].parent._views[app.getActiveNavs()[0].parent._views.length - 1].name);
                        if (app.getActiveNavs()[0].parent._views[app.getActiveNavs()[0].parent._views.length - 1].name == "HomePage") {
                            var alert_1 = alertCtrl.create({
                                title: 'App termination',
                                message: 'ต้องการออกจากแอปพลิเคชั่นใช่หรือไม่?',
                                buttons: [{
                                        text: 'ยกเลิก',
                                        role: 'cancel',
                                        handler: function () {
                                            //console.log('Application exit prevented!');
                                        }
                                    }, {
                                        text: 'ออกจากโปรแกรม',
                                        handler: function () {
                                            platform.exitApp(); // Close this application
                                        }
                                    }]
                            });
                            alert_1.present();
                        }
                        else if (app.getActiveNavs()[0].parent._views[app.getActiveNavs()[0].parent._views.length - 1].name == "CollectionformPage") {
                        }
                        else {
                            // nav.popToRoot();
                        }
                    }
                    catch (e) {
                        var alert_2 = alertCtrl.create({
                            title: 'App termination',
                            message: 'ต้องการออกจากแอปพลิเคชั่นใช่หรือไม่?',
                            buttons: [{
                                    text: 'ยกเลิก',
                                    role: 'cancel',
                                    handler: function () {
                                        //console.log('Application exit prevented!');
                                    }
                                }, {
                                    text: 'ออกจากโปรแกรม',
                                    handler: function () {
                                        platform.exitApp(); // Close this application
                                    }
                                }]
                        });
                        alert_2.present();
                    }
                }
                else {
                    nav.pop();
                }
            });
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\New folder\TraineeProject\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"D:\New folder\TraineeProject\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 687:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WaterDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the WaterDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var WaterDataProvider = (function () {
    function WaterDataProvider(http) {
        this.http = http;
        this.tapWaterCount = 0;
        this.groundWaterCount = 0;
        this.riverWaterCount = 0;
        this.poolWaterCount = 0;
        this.chonWaterCount = 0;
        this.rainWaterCount = 0;
        this.buyWaterCount = 0;
        //console.log('Hello WaterDataProvider Provider');
        this.tapWater = false;
        this.groundWater = false;
        this.riverWater = false;
        this.chonWater = false;
        this.rainWater = false;
        this.buyWater = false;
    }
    WaterDataProvider.prototype.addTapWater = function () {
        this.tapWaterCount = this.tapWaterCount + 1;
        if (this.tapWaterCount > 0) {
            this.tapWater = true;
        }
    };
    WaterDataProvider.prototype.rmTapWater = function () {
        this.tapWaterCount = this.tapWaterCount - 1;
        if (this.tapWaterCount > 0) {
            this.tapWater = true;
        }
        else {
            this.tapWater = false;
        }
    };
    WaterDataProvider.prototype.addGroundWater = function () {
        this.groundWaterCount = this.groundWaterCount + 1;
        if (this.groundWaterCount > 0) {
            this.groundWater = true;
        }
    };
    WaterDataProvider.prototype.rmGroundWater = function () {
        this.groundWaterCount = this.groundWaterCount - 1;
        if (this.groundWaterCount > 0) {
            this.groundWater = true;
        }
        else {
            this.groundWater = false;
        }
    };
    WaterDataProvider.prototype.addRiverWater = function () {
        this.riverWaterCount = this.riverWaterCount + 1;
        if (this.riverWaterCount > 0) {
            this.riverWater = true;
        }
    };
    WaterDataProvider.prototype.rmRiverWater = function () {
        this.riverWaterCount = this.riverWaterCount - 1;
        if (this.riverWaterCount > 0) {
            this.riverWater = true;
        }
        else {
            this.riverWater = false;
        }
    };
    WaterDataProvider.prototype.addPoolWater = function () {
        this.poolWaterCount = this.poolWaterCount + 1;
        if (this.poolWaterCount > 0) {
            this.poolWater = true;
        }
    };
    WaterDataProvider.prototype.rmPoolWater = function () {
        this.poolWaterCount = this.poolWaterCount - 1;
        if (this.poolWaterCount > 0) {
            this.poolWater = true;
        }
        else {
            this.poolWater = false;
        }
    };
    WaterDataProvider.prototype.addChonWater = function () {
        this.chonWaterCount = this.chonWaterCount + 1;
        if (this.chonWaterCount > 0) {
            this.chonWater = true;
        }
    };
    WaterDataProvider.prototype.rmChonWater = function () {
        this.chonWaterCount = this.chonWaterCount - 1;
        if (this.chonWaterCount > 0) {
            this.chonWater = true;
        }
        else {
            this.chonWater = false;
        }
    };
    WaterDataProvider.prototype.addRainWater = function () {
        this.rainWaterCount = this.rainWaterCount + 1;
        if (this.rainWaterCount > 0) {
            this.rainWater = true;
        }
    };
    WaterDataProvider.prototype.rmRainWater = function () {
        this.rainWaterCount = this.rainWaterCount - 1;
        if (this.rainWaterCount > 0) {
            this.rainWater = true;
        }
        else {
            this.rainWater = false;
        }
    };
    WaterDataProvider.prototype.addBuyWater = function () {
        this.buyWaterCount = this.buyWaterCount + 1;
        if (this.buyWaterCount > 0) {
            this.buyWater = true;
        }
    };
    WaterDataProvider.prototype.rmBuyWater = function () {
        this.buyWaterCount = this.buyWaterCount - 1;
        if (this.buyWaterCount > 0) {
            this.buyWater = true;
        }
        else {
            this.buyWater = false;
        }
    };
    WaterDataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */]])
    ], WaterDataProvider);
    return WaterDataProvider;
}());

//# sourceMappingURL=water-data.js.map

/***/ })

},[357]);
//# sourceMappingURL=main.js.map