webpackJsonp([4],{

/***/ 706:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapPageModule", function() { return MapPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map__ = __webpack_require__(793);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic2_zoom_area__ = __webpack_require__(794);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var MapPageModule = (function () {
    function MapPageModule() {
    }
    MapPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__map__["a" /* MapPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__map__["a" /* MapPage */]),
                __WEBPACK_IMPORTED_MODULE_6_ionic2_zoom_area__["a" /* ZoomAreaModule */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicErrorHandler */] }
            ]
        })
    ], MapPageModule);
    return MapPageModule;
}());

//# sourceMappingURL=map.module.js.map

/***/ }),

/***/ 770:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZoomAreaProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);


var ZoomAreaProvider = /** @class */ (function () {
    function ZoomAreaProvider() {
        this.SCROLL_STATE = {
            NORMAL: 'scrollNormal',
            COLAPSED: 'scrollColapsed'
        };
        this._onScroll = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Subject"]();
        this.onScroll$ = this._onScroll.asObservable();
        this._scrollState = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Subject"]();
        this.scrollState$ = this._scrollState.asObservable();
        this._centerChanged = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Subject"]();
        this.centerChanged$ = this._centerChanged.asObservable();
    }
    ZoomAreaProvider.prototype.notifyScroll = function (data) {
        this._onScroll.next(data);
    };
    ZoomAreaProvider.prototype.notifyScrollState = function (data) {
        this._scrollState.next(data);
    };
    ZoomAreaProvider.prototype.setCenter = function (x, y) {
        this._centerChanged.next({ x: x, y: y });
    };
    ZoomAreaProvider.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */] },
    ];
    /** @nocollapse */
    ZoomAreaProvider.ctorParameters = function () { return []; };
    return ZoomAreaProvider;
}());

//# sourceMappingURL=zoom-area.provider.js.map

/***/ }),

/***/ 771:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZoomAreaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__zoom_area_provider__ = __webpack_require__(770);




var ZoomAreaComponent = /** @class */ (function () {
    function ZoomAreaComponent(zoomAreaProvider) {
        this.zoomAreaProvider = zoomAreaProvider;
        this.afterZoomIn = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.afterZoomOut = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.controlsChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.scaleChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.zoomConfig = {
            ow: 0,
            oh: 0,
            original_x: 0,
            original_y: 0,
            max_x: 0,
            max_y: 0,
            min_x: 0,
            min_y: 0,
            x: 0,
            y: 0,
            last_x: 0,
            last_y: 0,
            scale: 1,
            base: 1,
        };
        this.zoomControlsState = 'hidden';
    }
    ZoomAreaComponent.prototype.ngOnChanges = function (changes) {
        if ('controls' in changes) {
            var showControls = changes['controls'];
            if (showControls && showControls.currentValue) {
                this.zoomControlsState = 'shown';
            }
            else {
                this.zoomControlsState = 'hidden';
            }
        }
        if ('scale' in changes) {
            var scaleValue = changes['scale'];
            if (scaleValue && scaleValue.currentValue && scaleValue.currentValue === 1) {
                this.zoomReset();
            }
        }
    };
    ZoomAreaComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.content.ionScroll.subscribe(function (data) {
            _this.zoomAreaProvider.notifyScroll(data);
        });
        this._pinchZoom(this.zoom.nativeElement, this.content);
        // Watch for user setCenter call
        var self = this;
        this.zoomAreaProvider.centerChanged$.subscribe(function (coords) {
            if (self.zoomConfig.scale === 1) {
                return;
            }
            self.setCoor(coords.x, coords.y);
            self.transform(coords.x, coords.y);
        });
    };
    ZoomAreaComponent.prototype.toggleZoomControls = function () {
        this.zoomControlsState = this.zoomControlsState === 'shown' ? 'hidden' : 'shown';
    };
    ZoomAreaComponent.prototype.zoomIn = function () {
        this.zoomConfig.scale += 1;
        if (this.zoomConfig.scale > 1) {
            this.zoomAreaProvider.notifyScrollState(this.zoomAreaProvider.SCROLL_STATE.COLAPSED);
        }
        if (this.zoomConfig.scale > 4) {
            this.zoomConfig.scale = 4;
        }
        this.transform();
        this.afterZoomIn.emit();
    };
    ZoomAreaComponent.prototype.zoomOut = function (reset) {
        if (!this.zoomRootElement) {
            return;
        }
        this.zoomConfig.scale -= 1;
        if (this.zoomConfig.scale < 1) {
            this.zoomConfig.scale = 1;
        }
        if (this.zoomConfig.scale === 1) {
            reset = true;
            this.zoomAreaProvider.notifyScrollState(this.zoomAreaProvider.SCROLL_STATE.NORMAL);
        }
        reset ? this.transform(0.1, 0.1) : this.transform();
        this.afterZoomOut.emit();
    };
    ZoomAreaComponent.prototype.zoomReset = function () {
        this.zoomConfig.scale = 1;
        if (this.content && this.content.scrollTop) {
            this.content.scrollTop = 0;
        }
        this.zoomOut(true);
    };
    ZoomAreaComponent.prototype._pinchZoom = function (elm, content) {
        this.zoomRootElement = elm;
        this.gesture = new __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* Gesture */](this.zoomRootElement);
        for (var i = 0; i < elm.children.length; i++) {
            var c = elm.children.item(i);
            this.zoomConfig.ow = c.offsetWidth;
            this.zoomConfig.oh += c.offsetHeight;
        }
        this.zoomConfig.original_x = content.contentWidth - this.zoomConfig.ow;
        this.zoomConfig.original_y = content.contentHeight - this.zoomConfig.oh;
        this.zoomConfig.max_x = this.zoomConfig.original_x;
        this.zoomConfig.max_y = this.zoomConfig.original_y;
        this.zoomConfig.base = this.zoomConfig.scale;
        this.gesture.listen();
        this.gesture.on('pan', this.onPan.bind(this));
        this.gesture.on('panend', this.onPanend.bind(this));
        this.gesture.on('pancancel', this.onPanend.bind(this));
        this.gesture.on('tap', this.onTap.bind(this));
        this.gesture.on('pinch', this.onPinch.bind(this));
        this.gesture.on('pinchend', this.onPinchend.bind(this));
        this.gesture.on('pinchcancel', this.onPinchend.bind(this));
    };
    ZoomAreaComponent.prototype.onPan = function (ev) {
        if (this.zoomConfig.scale === 1) {
            return;
        }
        this.setCoor(ev.deltaX, ev.deltaY);
        this.transform();
    };
    ZoomAreaComponent.prototype.onPanend = function () {
        this.zoomConfig.last_x = this.zoomConfig.x;
        this.zoomConfig.last_y = this.zoomConfig.y;
    };
    ZoomAreaComponent.prototype.onTap = function (ev) {
        if (ev && ev.tapCount > 1) {
            var reset = false;
            this.zoomConfig.scale += .5;
            if (this.zoomConfig.scale > 2) {
                this.zoomConfig.scale = 1;
                reset = true;
            }
            this.setBounds();
            reset ? this.transform(this.zoomConfig.max_x / 2, this.zoomConfig.max_y / 2) : this.transform();
        }
    };
    ZoomAreaComponent.prototype.onPinch = function (ev) {
        this.zoomConfig.scale = this.zoomConfig.base + (ev.scale * this.zoomConfig.scale - this.zoomConfig.scale) / this.zoomConfig.scale;
        this.setBounds();
        this.transform();
    };
    ZoomAreaComponent.prototype.onPinchend = function (ev) {
        if (this.zoomConfig.scale > 4) {
            this.zoomConfig.scale = 4;
        }
        if (this.zoomConfig.scale < 1) {
            this.zoomConfig.scale = 1;
        }
        this.zoomConfig.base = this.zoomConfig.scale;
        this.setBounds();
        this.transform();
    };
    ZoomAreaComponent.prototype.setBounds = function () {
        var scaled_x = Math.ceil((this.zoomRootElement.offsetWidth * this.zoomConfig.scale - this.zoomRootElement.offsetWidth) / 2);
        var scaled_y = Math.ceil((this.zoomRootElement.offsetHeight * this.zoomConfig.scale - this.zoomRootElement.offsetHeight) / 2);
        var overflow_x = Math.ceil(this.zoomConfig.original_x * this.zoomConfig.scale - this.zoomConfig.original_x);
        var overflow_y = Math.ceil(this.zoomConfig.oh * this.zoomConfig.scale - this.zoomConfig.oh);
        this.zoomConfig.max_x = this.zoomConfig.original_x - scaled_x + overflow_x;
        this.zoomConfig.min_x = 0 + scaled_x;
        this.zoomConfig.max_y = this.zoomConfig.original_y + scaled_y - overflow_y;
        this.zoomConfig.min_y = 0 + scaled_y;
        this.setCoor(-scaled_x, scaled_y);
    };
    ZoomAreaComponent.prototype.setCoor = function (xx, yy) {
        var compensation = this.zoomConfig.scale === 2 ? 1.05 : (this.zoomConfig.scale / 1.25);
        this.zoomConfig.x = Math.min(Math.max((this.zoomConfig.last_x + xx), this.zoomConfig.max_x * compensation), this.zoomConfig.min_x * compensation);
        this.zoomConfig.y = Math.min(Math.max((this.zoomConfig.last_y + yy), this.zoomConfig.max_y * compensation), this.zoomConfig.min_y * compensation);
    };
    ZoomAreaComponent.prototype.transform = function (xx, yy) {
        this.zoomRootElement.style.transform = "translate3d(" + (xx || this.zoomConfig.x) + "px, " + (yy || this.zoomConfig.y) + "px, 0) scale3d(" + this.zoomConfig.scale + ", " + this.zoomConfig.scale + ", 1)";
    };
    ZoomAreaComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */], args: [{
                    selector: 'zoom-area',
                    template: "\n    <ion-content>\n      <div #zoomAreaRoot class=\"zoom\" (click)=\"toggleZoomControls()\">\n        <div class=\"fit\">\n          <ng-content></ng-content>\n        </div>\n      </div>\n\n      <ion-fab right top [@visibilityChanged]=\"zoomControlsState\">\n        <button (click)=\"zoomIn()\" ion-fab color=\"primary\" class=\"btn-zoom\">\n            <ion-icon name=\"add-circle\"></ion-icon>\n        </button>\n\n        <button (click)=\"zoomOut()\" ion-fab color=\"primary\" class=\"btn-zoom\">\n            <ion-icon name=\"remove-circle\"></ion-icon>\n        </button>\n\n        <button (click)=\"zoomReset()\" ion-fab color=\"primary\" class=\"btn-zoom\">\n            <ion-icon name=\"md-contract\"></ion-icon>\n        </button>\n      </ion-fab>\n    </ion-content>\n",
                    animations: [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* trigger */])('visibilityChanged', [
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('shown', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ opacity: 1, display: 'block' })),
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('hidden', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ opacity: 0, display: 'none' })),
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('shown => hidden', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('300ms')),
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('hidden => shown', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('300ms')),
                        ])
                    ]
                },] },
    ];
    /** @nocollapse */
    ZoomAreaComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_3__zoom_area_provider__["a" /* ZoomAreaProvider */], },
    ]; };
    ZoomAreaComponent.propDecorators = {
        "zoom": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */], args: ['zoomAreaRoot',] },],
        "content": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */], args: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* Content */],] },],
        "afterZoomIn": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */] },],
        "afterZoomOut": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */] },],
        "controls": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
        "controlsChanged": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */] },],
        "scale": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
        "scaleChanged": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */] },],
    };
    return ZoomAreaComponent;
}());

//# sourceMappingURL=zoom-area.component.js.map

/***/ }),

/***/ 793:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(352);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MapPage = (function () {
    function MapPage(navCtrl, navParams, geolocation) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geolocation = geolocation;
    }
    MapPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad MapPage');
        //this.loadMap();
    };
    // ionViewWillEnter() {
    //   document.querySelector('page-map').setAttribute("hidden", "");
    // }
    // ionViewWillLeave() {
    //   document.querySelector('page-map').removeAttribute("hidden");
    // }
    MapPage.prototype.addMarker = function () {
        var marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: this.map.getCenter()
        });
        var content = "<h4>Information!</h4>";
        this.addInfoWindow(marker, content);
    };
    MapPage.prototype.addInfoWindow = function (marker, content) {
        var _this = this;
        var infoWindow = new google.maps.InfoWindow({
            content: content
        });
        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.open(_this.map, marker);
        });
    };
    MapPage.prototype.loadMap = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (position) {
            var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            var mapOptions = {
                center: latLng,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            _this.map = new google.maps.Map(_this.HTMLMapElement.nativeElement, mapOptions);
        }, function (err) {
            //console.log(err)
        });
    };
    MapPage.prototype.home = function () {
        this.navCtrl.popToRoot();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], MapPage.prototype, "HTMLMapElement", void 0);
    MapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-map',template:/*ion-inline-start:"D:\New folder\TraineeProject\src\pages\map\map.html"*/'<!--\n\n  Generated template for the MapPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n\n\n\n\n<!-- <button ion-button (click)="addMarker()"><ion-icon name="add"></ion-icon>Add Marker</button> -->\n\n<ion-content padding overflow-scroll="true">\n\n  <h1 class="text-center">แผนที่</h1>\n\n  <!-- <div #map id="map"></div> -->\n\n  <zoom-area>\n\n    <img src="assets/imgs/img/ea/EA_263.jpg" alt="Zoom It"/>\n\n  </zoom-area>\n\n</ion-content>\n\n<ion-footer class="applyFooter">\n\n  <ion-grid>\n\n    <ion-col col-3 style="border : none">\n\n      <button ion-button (click)="home()" color="light">ย้อนกลับ</button>\n\n    </ion-col>\n\n  </ion-grid>\n\n</ion-footer>'/*ion-inline-end:"D:\New folder\TraineeProject\src\pages\map\map.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]])
    ], MapPage);
    return MapPage;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 794:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__zoom_area_component__ = __webpack_require__(771);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__zoom_area_provider__ = __webpack_require__(770);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__zoom_area_module__ = __webpack_require__(795);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__zoom_area_module__["a"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ 795:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZoomAreaModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__zoom_area_component__ = __webpack_require__(771);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__zoom_area_provider__ = __webpack_require__(770);




var ZoomAreaModule = /** @class */ (function () {
    function ZoomAreaModule() {
    }
    ZoomAreaModule.forRoot = function () {
        return {
            ngModule: ZoomAreaModule,
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__zoom_area_provider__["a" /* ZoomAreaProvider */]
            ]
        };
    };
    ZoomAreaModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */], args: [{
                    declarations: [
                        __WEBPACK_IMPORTED_MODULE_2__zoom_area_component__["a" /* ZoomAreaComponent */]
                    ],
                    imports: [
                        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicModule */]
                    ],
                    exports: [
                        __WEBPACK_IMPORTED_MODULE_2__zoom_area_component__["a" /* ZoomAreaComponent */]
                    ],
                    providers: [
                        __WEBPACK_IMPORTED_MODULE_3__zoom_area_provider__["a" /* ZoomAreaProvider */]
                    ]
                },] },
    ];
    /** @nocollapse */
    ZoomAreaModule.ctorParameters = function () { return []; };
    return ZoomAreaModule;
}());

//# sourceMappingURL=zoom-area.module.js.map

/***/ })

});
//# sourceMappingURL=4.js.map