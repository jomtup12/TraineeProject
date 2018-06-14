webpackJsonp([15],{

/***/ 699:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConverterPageModule", function() { return ConverterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__converter__ = __webpack_require__(774);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ConverterPageModule = (function () {
    function ConverterPageModule() {
    }
    ConverterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__converter__["a" /* ConverterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__converter__["a" /* ConverterPage */]),
            ],
        })
    ], ConverterPageModule);
    return ConverterPageModule;
}());

//# sourceMappingURL=converter.module.js.map

/***/ }),

/***/ 774:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConverterPage; });
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
 * Generated class for the ConverterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConverterPage = (function () {
    function ConverterPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.table1 = {
            'name': 'หน่วยของความยาวหรือความกว้าง',
            'source': [
                '1 เซนติเมตร',
                '1 เมตร',
                '1 กิโลเมตร',
                '1 นิ้ว',
                '1 นิ้ว',
                '1 นิ้ว'
            ],
            'dest': [
                '10 มิลลิเมตร',
                '100 เซนติเมตร',
                '1,000 เมตร',
                '0.0254 เมตร',
                '2.54 เซนติเมตร',
                '25.4 มิลลิเมตร'
            ]
        };
        this.table2 = {
            'name': 'หน่วยของพื้นที่',
            'source': [
                '1 งาน',
                '1 ไร่',
                '1 ไร่',
                '1 ไร่',
                '1 ไร่',
                '1 ตาราเมตร',
                '1 งาน',
                '1 ตารางวา'
            ],
            'dest': [
                '100 ตารางวา',
                '4 งาน',
                '400 ตารางวา',
                '1600 ตารางเมตร',
                '0.0016 ตารางกิโลเมตร',
                '10,000 ตารางเซนติเมตร',
                '400 ตารางเมตร',
                '4 ตารางเมตร'
            ]
        };
        this.table3 = {
            'name': 'หน่วยของปริมาตรน้ำ',
            'source': [
                '1 มิลลิลิตร',
                '1 ลิตร',
                '1 ลิตร',
                '1 ลิตร',
                '1 ลิตร',
                '1 ลิตร',
                '1 ลูกบาศก์เมตร',
                '1 ลูกบาศก์เมตร',
                '1 ลูกบาศก์เมตร'
            ],
            'dest': [
                '1 ลูกบาศก์เซนติเมตร หรือ ซีซี (cc)',
                '1,000 มิลลิเมตร',
                '1,000,000 ลูกบาศก์มิลลิเมตร',
                '1,000 ลูกบาซก์เซนติเมตร',
                '0.001 ลูกบาศก์เมตร',
                '1 กิโลกรัม',
                '1,000 ลิตร = 1 คิว',
                '1,000 กิโลกรัม ช 1 ตัน',
                '1,000,000 ลูกบาสก์เซนติเมตร'
            ]
        };
        this.table4 = {
            'name': 'หน่วยของเวลา',
            'source': [
                '1 นาที',
                '1 ชั่วโมง',
                '1 วัน',
                '1 สัปดาห์',
                '1 สัปดาห์',
                '1 สัปดาห์',
                '1 เดือน',
                '1 เดือน',
                '1 ปี',
                '1 ปี',
                '1 ปี'
            ],
            'dest': [
                '60 วินาที',
                '60 นาที',
                '24 ชั่วโมง',
                '7 วัน',
                '168 ชั่วโมง',
                '1,080 นาที',
                'ประมาณ 30 วัน',
                'ประมาณ 4 สัปดาห์',
                '52 สัปดาห์',
                '12 เดือน',
                '365 วัน'
            ]
        };
        this.table5 = {
            'name': 'ตารางเรียกหุน',
            'source': ['1 เซนติเมตร',
                '1 เมตร',
                '1 นิ้ว',
                '1 หุน',
                '2 หุน',
                '3 หุน',
                '4 หุน',
                '5 หุน',
                '6 หุน',
                '7 หุน',
                '8 หุน',
                '8 หุน',
                '8 หุน'],
            'dest': [
                '10 มิลลิเมตร',
                '100 เซนติเมตร',
                '2.54 เซนติเมตร',
                '1/8 นิ้ว',
                '2/8 นิ้ว หรือ 1/4 นื้ว',
                '3/8 นิ้ว',
                '4/8 นิ้ว หรือ 1/2 นิ้ว',
                '5/8 นิ้ว',
                ' 6/8 นิ้ว หรือ 3/4 นิ้ว',
                '7/8 นิ้ว ',
                '1 นิ้ว',
                '25.4 มิลลิเมตร',
                '2.54 เซนติเมตร'
            ],
        };
        this.table6 = {
            'name': 'หน่วยของกำลังเครื่องสูบน้ำ',
            'source': ['1 แรงม้า',
                '2 แรงม้า',
                '3 แรงม้า',
                '4 แรงม้า',
                '5 แรงม้า',
                '6 แรงม้า',
                '7 แรงม้า',
                '8 แรงม้า',
                '9 แรงม้า',
                '10 แรงม้า'],
            'dest': ['745.7 วัตต์',
                '1,491.4 วัตต์',
                '2,237.1 วัตต์',
                '2,982.8 วัตต์',
                '3,728.5 วัตต์',
                '4,474.2 วัตต์',
                '5,219.9 วัตต์',
                '5,965.6 วัตต์',
                '6,711.3 วัตต์',
                '7,457 วัตต์'
            ]
        };
        this.table7 = {
            'name': 'หน่วยปริมาตรน้ำต่อเวลา',
            'source': ['1 ลิตร/นาที',
                '1 ลิตร/นาที',
                '1 ลูกบาศก์เมตร/นาที',
                '1 ลูกบาศก์เมตร/นาที',
                '1 ลูกบาศก์เมตร/ชั่วโมง',
                '1 ลูกบาศก์เมตร/ชั่วโมง',
                '1 ลูกบาศก์เมตร/ชั่วโมง',
                '1 ลูกบาศก์เมตร/ชั่วโมง',],
            'dest': ['0.017 ลิตร/ชั่วโมง',
                '0.000017 ลูกบาศก์เมตร/ชั่วโมง',
                '1,000 ลิตร/นาที',
                '60 ลูกบาศก์เมตร/ชั่วโมง',
                '24 ลูกบาศก์เมตร/วัน',
                '168.46 ลูกบาศก์เมตร/สัปดาห์',
                '730 ลูกบาศก์เมตร/เดือน',
                ' 8,760 ลูกบาศก์เมตร/ปี'
            ],
        };
        //console.log("xxxxxx")
        //console.log(this.table1.source)
        //console.log(this.range(this.table1.source))
    }
    ConverterPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad ConverterPage');
    };
    ConverterPage.prototype.home = function () {
        this.navCtrl.pop();
    };
    ConverterPage.prototype.range = function (l) {
        var result = [];
        for (var i = 0; i < l.length; i++) {
            result.push(i);
        }
        return result;
    };
    ConverterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-converter',template:/*ion-inline-start:"/Users/pomgade/Desktop/NSOWaterMGTSystem21/src/pages/converter/converter.html"*/'<!--\n  Generated template for the ConverterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content padding>\n  <h1  class="text-center">ตารางมาตราวัด</h1>\n      <hr id="hr-line">    \n      <ion-list no-lines style="text-align: center">    \n      <ion-item>\n          <label>\n            <h1 class="title text-center"  style="margin-top: 5px">{{table1.name}}</h1>\n          </label>\n          <div class="row" *ngFor="let i of range(table1.source)">\n            <div class="col text-center" style="border-right : none;max-width: 220px;">{{table1.source[i]}}</div>\n            <div class="col text-center" style="border-left : none;max-width: 30px;border-right : none">\n              <label>เท่ากับ</label>\n            </div>\n            <div class="col text-center" style="border-left : none;max-width: 350px;">{{table1.dest[i]}}</div>\n          </div>\n      </ion-item>\n\n      <ion-item>\n          <label>\n            <h1 class="title text-center"  style="margin-top: 5px">{{table2.name}}</h1>\n          </label>\n          <div class="row" *ngFor="let i of range(table2.source)">\n            <div class="col text-center" style="border-right : none;max-width: 220px;">{{table2.source[i]}}</div>\n            <div class="col text-center" style="border-left : none;max-width: 30px;border-right : none">\n              <label>เท่ากับ</label>\n            </div>\n            <div class="col text-center" style="border-left : none;max-width: 350px;">{{table2.dest[i]}}</div>\n          </div>\n      </ion-item>\n\n      <ion-item>\n          <label>\n            <h1 class="title text-center"  style="margin-top: 5px">{{table3.name}}</h1>\n          </label>\n          <div class="row" *ngFor="let i of range(table3.source)">\n            <div class="col text-center" style="border-right : none;max-width: 220px;">{{table3.source[i]}}</div>\n            <div class="col text-center" style="border-left : none;max-width: 30px;border-right : none">\n              <label>เท่ากับ</label>\n            </div>\n            <div class="col text-center" style="border-left : none;max-width: 350px;">{{table3.dest[i]}}</div>\n          </div>\n      </ion-item>\n\n      <ion-item>\n        <label>\n          <h1 class="title text-center"  style="margin-top: 5px">{{table4.name}}</h1>\n        </label>\n        <div class="row" *ngFor="let i of range(table4.source)">\n          <div class="col text-center" style="border-right : none;max-width: 220px;">{{table4.source[i]}}</div>\n          <div class="col text-center" style="border-left : none;max-width: 30px;border-right : none">\n            <label>เท่ากับ</label>\n          </div>\n          <div class="col text-center" style="border-left : none;max-width: 350px;">{{table4.dest[i]}}</div>\n        </div>\n      </ion-item>\n      \n      <ion-item>\n          <label>\n            <h1 class="title text-center"  style="margin-top: 5px">{{table5.name}}</h1>\n          </label>\n          <div class="row" *ngFor="let i of range(table5.source)">\n            <div class="col text-center" style="border-right : none;max-width: 220px;">{{table5.source[i]}}</div>\n            <div class="col text-center" style="border-left : none;max-width: 30px;border-right : none">\n              <label>เท่ากับ</label>\n            </div>\n            <div class="col text-center" style="border-left : none;max-width: 350px;">{{table5.dest[i]}}</div>\n          </div>\n      </ion-item>\n\n      <ion-item>\n          <label>\n            <h1 class="title text-center"  style="margin-top: 5px">{{table6.name}}</h1>\n          </label>\n          <div class="row" *ngFor="let i of range(table6.source)">\n            <div class="col text-center" style="border-right : none;max-width: 220px;">{{table6.source[i]}}</div>\n            <div class="col text-center" style="border-left : none;max-width: 30px;border-right : none">\n              <label>เท่ากับ</label>\n            </div>\n            <div class="col text-center" style="border-left : none;max-width: 350px;">{{table6.dest[i]}}</div>\n          </div>\n      </ion-item>\n\n      <ion-item>\n          <label>\n            <h1 class="title text-center"  style="margin-top: 5px">{{table7.name}}</h1>\n          </label>\n          <div class="row" *ngFor="let i of range(table7.source)">\n            <div class="col text-center" style="border-right : none;max-width: 220px;">{{table7.source[i]}}</div>\n            <div class="col text-center" style="border-left : none;max-width: 30px;border-right : none">\n              <label>เท่ากับ</label>\n            </div>\n            <div class="col text-center" style="border-left : none;max-width: 350px;">{{table7.dest[i]}}</div>\n          </div>\n      </ion-item>\n    \n      </ion-list>\n  </ion-content>\n  <ion-footer class="applyFooter">\n    <ion-grid>  \n      <ion-col col-3 style="border : none">\n        <button ion-button (click)="home()" color="light">ย้อนกลับ</button>\n      </ion-col>\n    </ion-grid>\n  </ion-footer>\n\n'/*ion-inline-end:"/Users/pomgade/Desktop/NSOWaterMGTSystem21/src/pages/converter/converter.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */]])
    ], ConverterPage);
    return ConverterPage;
}());

//# sourceMappingURL=converter.js.map

/***/ })

});
//# sourceMappingURL=15.js.map