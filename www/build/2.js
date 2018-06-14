webpackJsonp([2],{

/***/ 702:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Form2_2PageModule", function() { return Form2_2PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__form2_2__ = __webpack_require__(777);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Form2_2PageModule = (function () {
    function Form2_2PageModule() {
    }
    Form2_2PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__form2_2__["a" /* Form2_2Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__form2_2__["a" /* Form2_2Page */]),
            ],
        })
    ], Form2_2PageModule);
    return Form2_2PageModule;
}());

//# sourceMappingURL=form2-2.module.js.map

/***/ }),

/***/ 777:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Form2_2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_SN2_2_SN2_2P1_3__ = __webpack_require__(778);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_SN2_2_SN2_2P1_5__ = __webpack_require__(779);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_SN2_2_SN2_2P2__ = __webpack_require__(780);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_SN2_2_ValidateSN2_2__ = __webpack_require__(781);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_SN2_2_ValidateSN2_2B1_3__ = __webpack_require__(782);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_SN2_2_ValidateSN2_2B1_5__ = __webpack_require__(783);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_SN2_2_ValidateSN2_2B2_12__ = __webpack_require__(784);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_http_http__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__models_SN2_2_ValidateSN2_2B0__ = __webpack_require__(785);
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
 * Generated class for the Form2_2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Form2_2Page = (function () {
    function Form2_2Page(navCtrl, navParams, httpProvider, alertCtrl, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpProvider = httpProvider;
        this.alertCtrl = alertCtrl;
        this.events = events;
        this.sn2_2B1_3 = [];
        this.sn2_2B1_5 = [];
        this.sn2_2B2_12 = [];
        this.page = '1';
        this.disable1 = true;
        this.disable2 = true;
        this.notValid = false;
        this.validate = new __WEBPACK_IMPORTED_MODULE_5__models_SN2_2_ValidateSN2_2__["a" /* ValidateSN2_2 */]();
        this.validateB0 = new __WEBPACK_IMPORTED_MODULE_10__models_SN2_2_ValidateSN2_2B0__["a" /* ValidateSN2_2P0 */]();
        this.validateB1_3 = [];
        this.validateB1_5 = [];
        this.validateB2_12 = [];
        this.sn2_2 = navParams.get('sn2_2');
        //console.log(this.sn2_2);
        if (this.sn2_2.B1_3)
            this.sn2_2B1_3 = this.sn2_2.B1_3;
        if (this.sn2_2.B1_5)
            this.sn2_2B1_5 = this.sn2_2.B1_5;
        if (this.sn2_2.B2_12)
            this.sn2_2B2_12 = this.sn2_2.B2_12_1_1;
        this.newValidate();
    }
    Form2_2Page.prototype.newValidate = function () {
        for (var i in this.sn2_2B1_3) {
            //console.log(i);
            this.validateB1_3.push(new __WEBPACK_IMPORTED_MODULE_6__models_SN2_2_ValidateSN2_2B1_3__["a" /* ValidateSN2_2B1_3 */]());
        }
        for (var i in this.sn2_2B1_5) {
            //console.log(i);
            this.validateB1_5.push(new __WEBPACK_IMPORTED_MODULE_7__models_SN2_2_ValidateSN2_2B1_5__["a" /* ValidateSN2_2B1_5 */]());
        }
        for (var i in this.sn2_2B2_12) {
            //console.log(i);
            this.validateB2_12.push(new __WEBPACK_IMPORTED_MODULE_8__models_SN2_2_ValidateSN2_2B2_12__["a" /* ValidateSN2_2B2_12 */]());
        }
    };
    Form2_2Page.prototype.ngOnInit = function () {
        // this.validateForm();
    };
    Form2_2Page.prototype.validateSN2_2P0 = function () {
        this.validateB0.VIL_NAME = typeof (this.sn2_2.B0.VIL_NAME) === 'string' && this.sn2_2.B0.VIL_NAME.length > 0;
        this.validateB0.BASIN = this.sn2_2.B0.BASIN != null;
    };
    Form2_2Page.prototype.validateForm = function () {
        this.validate.B1_1 = (typeof (this.sn2_2.B1_1) == "boolean");
        this.validate.B1_2 = (!this.sn2_2.B1_1 || (this.sn2_2.B1_2 > 0 && this.sn2_2.B1_2 <= 20)) || !this.sn2_2.B1_1;
        this.validate.B1_4_1 = (typeof (this.sn2_2.B1_4_1) == "boolean") || !this.sn2_2.B1_1 || !this.sn2_2.B1_4_3;
        this.validate.B1_4_2 = (typeof (this.sn2_2.B1_4_2) == "boolean") || !this.sn2_2.B1_1 || !this.sn2_2.B1_4_3;
        this.validate.B1_4_3 = (typeof (this.sn2_2.B1_4_3) == "boolean") || !this.sn2_2.B1_1 || !this.sn2_2.B1_4_3;
        this.validate.B1_5_1 = (!this.sn2_2.B1_4_3 || (typeof (this.sn2_2.B1_5_1) == "boolean"));
        this.validate.B1_5_2 = (!this.sn2_2.B1_4_3 || (!this.sn2_2.B1_5_1 || (this.sn2_2.B1_5_2 > 0 && this.sn2_2.B1_5_2 < 21)));
        this.validate.B1_9 = (typeof (this.sn2_2.B1_9) == "boolean");
        this.validate.B1_10 = (typeof (this.sn2_2.B1_10) == "boolean");
        this.validate.B1_10_1 = Boolean(!this.sn2_2.B1_10 || (this.sn2_2.B1_10_1 || this.sn2_2.B1_10_2 || this.sn2_2.B1_10_3 || this.sn2_2.B1_10_4 || this.sn2_2.B1_10_5 || this.sn2_2.B1_10_6 || this.sn2_2.B1_10_7 || this.sn2_2.B1_10_8 || this.sn2_2.B1_10_9 || this.sn2_2.B1_10_10));
        this.validate.B1_11 = (typeof (this.sn2_2.B1_11) == "boolean");
        this.validate.B1_11_1 = Boolean(!this.sn2_2.B1_11 || (this.sn2_2.B1_11_1 || this.sn2_2.B1_11_2 || this.sn2_2.B1_11_3 || this.sn2_2.B1_11_4));
        this.validate.B1_11_4_1 = (!this.sn2_2.B1_11_4 || (typeof (this.sn2_2.B1_11_4_1) === 'string' && this.sn2_2.B1_11_4_1.length > 0));
        this.validate.B2_12 = (typeof (this.sn2_2.B2_12) === "boolean");
        this.validate.B2_12_1 = (!this.sn2_2.B2_12 || (this.sn2_2.B2_12_1 > 0 && this.sn2_2.B2_12_1 < 6));
    };
    Form2_2Page.prototype.validateFormB1_3 = function (i) {
        this.validateB1_3[i].B1_3_1 = !this.sn2_2.B1_1 || ((typeof (this.sn2_2B1_3[i].B1_3_1) === 'string') && this.sn2_2B1_3[i].B1_3_1.length > 0);
        this.validateB1_3[i].B1_3_2 = !this.sn2_2.B1_1 || Boolean(this.sn2_2B1_3[i].B1_3_2_1 || this.sn2_2B1_3[i].B1_3_2_2 || this.sn2_2B1_3[i].B1_3_2_3 || this.sn2_2B1_3[i].B1_3_2_4 || this.sn2_2B1_3[i].B1_3_2_5);
        this.validateB1_3[i].B1_3_2_5_1 = !this.sn2_2.B1_1 || (!this.sn2_2B1_3[i].B1_3_2_5 || (typeof (this.sn2_2B1_3[i].B1_3_2_5_1) === 'string') && (this.sn2_2B1_3[i].B1_3_2_5_1.length > 0));
        this.validateB1_3[i].B1_3_3 = !this.sn2_2.B1_1 || (typeof (this.sn2_2B1_3[i].B1_3_3) === 'string' && (this.sn2_2B1_3[i].B1_3_3 === '1' || this.sn2_2B1_3[i].B1_3_3 === '2' || this.sn2_2B1_3[i].B1_3_3 === '3.1' || this.sn2_2B1_3[i].B1_3_3 === '3.2'));
        this.validateB1_3[i].B1_3_3_1 = !this.sn2_2.B1_1 || (this.sn2_2B1_3[i].B1_3_3 != '1' || (this.sn2_2B1_3[i].B1_3_3 == '1' && this.sn2_2B1_3[i].B1_3_3_1 > 0 && this.sn2_2B1_3[i].B1_3_3_1 < 100000));
        this.validateB1_3[i].B1_3_3_2_1 = !this.sn2_2.B1_1 || (this.sn2_2B1_3[i].B1_3_3 != '2' || (this.sn2_2B1_3[i].B1_3_3_2_1 >= 0 && this.sn2_2B1_3[i].B1_3_3_2_1 < 1000));
        this.validateB1_3[i].B1_3_3_2_2 = !this.sn2_2.B1_1 || (this.sn2_2B1_3[i].B1_3_3 != '2' || (this.sn2_2B1_3[i].B1_3_3_2_2 >= 0 && this.sn2_2B1_3[i].B1_3_3_2_2 < 4));
        this.validateB1_3[i].B1_3_3_2_3 = !this.sn2_2.B1_1 || (this.sn2_2B1_3[i].B1_3_3 != '2' || (this.sn2_2B1_3[i].B1_3_3_2_3 >= 0 && this.sn2_2B1_3[i].B1_3_3_2_3 < 100));
        this.validateB1_3[i].B1_3_3_2_4 = !this.sn2_2.B1_1 || (this.sn2_2B1_3[i].B1_3_3 != '2' || (this.sn2_2B1_3[i].B1_3_3_2_4 > 0 && this.sn2_2B1_3[i].B1_3_3_2_4 < 100));
        this.validateB1_3[i].B1_3_3_2 = !this.sn2_2.B1_1 || (this.sn2_2B1_3[i].B1_3_3 != '2' || (this.sn2_2B1_3[i].B1_3_3_2_1 != 0 || this.sn2_2B1_3[i].B1_3_3_2_2 != 0 || this.sn2_2B1_3[i].B1_3_3_2_3 != 0));
        this.validateB1_3[i].B1_3_3_3_1_1 = !this.sn2_2.B1_1 || (this.sn2_2B1_3[i].B1_3_3 != '3.1' || (this.sn2_2B1_3[i].B1_3_3_3_1_1 > 0 && this.sn2_2B1_3[i].B1_3_3_3_1_1 < 1000));
        this.validateB1_3[i].B1_3_3_3_1_2 = !this.sn2_2.B1_1 || (this.sn2_2B1_3[i].B1_3_3 != '3.1' || (this.sn2_2B1_3[i].B1_3_3_3_1_2 > 0 && this.sn2_2B1_3[i].B1_3_3_3_1_2 < 1000));
        this.validateB1_3[i].B1_3_3_3_1_3 = !this.sn2_2.B1_1 || (this.sn2_2B1_3[i].B1_3_3 != '3.1' || (this.sn2_2B1_3[i].B1_3_3_3_1_3 > 0 && this.sn2_2B1_3[i].B1_3_3_3_1_3 < 1000));
        this.validateB1_3[i].B1_3_3_3_2_1 = !this.sn2_2.B1_1 || (this.sn2_2B1_3[i].B1_3_3 != '3.2' || (this.sn2_2B1_3[i].B1_3_3_3_2_1 > 0 && this.sn2_2B1_3[i].B1_3_3_3_2_1 < 1000));
        this.validateB1_3[i].B1_3_3_3_2_2 = !this.sn2_2.B1_1 || (this.sn2_2B1_3[i].B1_3_3 != '3.2' || (this.sn2_2B1_3[i].B1_3_3_3_2_2 > 0 && this.sn2_2B1_3[i].B1_3_3_3_2_2 < 1000));
    };
    Form2_2Page.prototype.validateFormB1_5 = function (i) {
        this.validateB1_5[i].B1_5_2_1 = (typeof (this.sn2_2B1_5[i].B1_5_2_1) === 'string' && this.sn2_2B1_5[i].B1_5_2_1.length > 0);
        this.validateB1_5[i].B1_5_2_1_1 = (typeof (this.sn2_2B1_5[i].B1_5_2_1_1) === 'boolean');
        this.validateB1_5[i].B1_5_2_1_2 = (!this.sn2_2B1_5[i].B1_5_2_1_1 || (this.sn2_2B1_5[i].B1_5_2_1_2 > 0 && this.sn2_2B1_5[i].B1_5_2_1_2 < 1000000));
        this.validateB1_5[i].B1_5_2_1_3 = (typeof (this.sn2_2B1_5[i].B1_5_2_1_3) === 'boolean');
        this.validateB1_5[i].B1_5_2_1_4 = (!this.sn2_2B1_5[i].B1_5_2_1_3 || (this.sn2_2B1_5[i].B1_5_2_1_4 > 0 && this.sn2_2B1_5[i].B1_5_2_1_4 < 21));
        this.validateB1_5[i].B1_5_2_1_5 = (!this.sn2_2B1_5[i].B1_5_2_1_3 || (this.sn2_2B1_5[i].B1_5_2_1_5 > 0 && this.sn2_2B1_5[i].B1_5_2_1_5 < 1000000));
        this.validateB1_5[i].B1_6 = (this.sn2_2B1_5[i].B1_6 > 0 && this.sn2_2B1_5[i].B1_6 < 100);
        this.validateB1_5[i].B1_7 = (this.sn2_2B1_5[i].B1_7 > 0 && this.sn2_2B1_5[i].B1_7 < 100);
        this.validateB1_5[i].B1_8 = (this.sn2_2B1_5[i].B1_8 === 1 || this.sn2_2B1_5[i].B1_8 === 2 || this.sn2_2B1_5[i].B1_8 === 3);
        this.validateB1_5[i].B1_8_2 = (this.sn2_2B1_5[i].B1_8 !== 2 || (typeof (this.sn2_2B1_5[i].B1_8_2) === 'string' && this.sn2_2B1_5[i].B1_8_2.length > 0));
    };
    Form2_2Page.prototype.validateFormB2_12_1 = function (i) {
        this.validateB2_12[i].B2_12_1_1 = Boolean(this.sn2_2B2_12[i].B2_12_1_1 && this.sn2_2B2_12[i].B2_12_1_1.length > 0);
        this.validateB2_12[i].B2_13_1 = (this.sn2_2B2_12[i].B2_13_1 >= 0 && this.sn2_2B2_12[i].B2_13_1 < 1000000);
        this.validateB2_12[i].B2_13_2 = (this.sn2_2B2_12[i].B2_13_2 >= 0 && this.sn2_2B2_12[i].B2_13_2 < 4);
        this.validateB2_12[i].B2_13_3 = (this.sn2_2B2_12[i].B2_13_3 >= 0 && this.sn2_2B2_12[i].B2_13_3 < 100);
        this.validateB2_12[i].B2_13 = (this.sn2_2B2_12[i].B2_13_1 != 0 || this.sn2_2B2_12[i].B2_13_2 != 0 || this.sn2_2B2_12[i].B2_13_3 != 0);
        this.validateB2_12[i].B2_14 = (this.sn2_2B2_12[i].B2_14 > 0 && this.sn2_2B2_12[i].B2_14 < 10000);
        this.validateB2_12[i].B2_15 = (this.sn2_2B2_12[i].B2_15 > 0 && this.sn2_2B2_12[i].B2_15 < 100000000);
        this.validateB2_12[i].B2_16 = (this.sn2_2B2_12[i].B2_16 >= 0 && this.sn2_2B2_12[i].B2_16 < 100);
        this.validateB2_12[i].B2_17 = this.sn2_2B2_12[i].B2_16 == 0 || (this.sn2_2B2_12[i].B2_17 > 0 && this.sn2_2B2_12[i].B2_17 < 100000000);
    };
    Form2_2Page.prototype.validate_section1 = function () {
        var _this = this;
        var validate_B0 = (Object.keys(this.validateB0).filter(function (v) { return !_this.validateB0[v]; }).length === 0);
        return validate_B0;
    };
    Form2_2Page.prototype.validate_section2 = function () {
        var validate_2 = this.validate.B1_1 && this.validate.B1_2 && this.validate.B1_4_1 && this.validate.B1_4_2 && this.validate.B1_4_3 && this.validate.B1_5_1 && this.validate.B1_5_2 && this.validate.B1_9 && this.validate.B1_10 && this.validate.B1_10_1 && this.validate.B1_11 && this.validate.B1_11_1 && this.validate.B1_11_4_1;
        var validate_B1_3 = !this.sn2_2.B1_1 || (this.validateB1_3.map(function (v1_3) { return Object.keys(v1_3).filter(function (v) { return !v1_3[v]; }); }).filter(function (v1_3) { return v1_3.length > 0; }).length === 0);
        var validate_B1_5 = !this.sn2_2.B1_4_3 || !this.sn2_2.B1_5_1 || (this.validateB1_5.map(function (v1_5) { return Object.keys(v1_5).filter(function (v) { return !v1_5[v]; }); }).filter(function (v1_5) { return v1_5.length > 0; }).length === 0);
        return validate_2 && validate_B1_3 && validate_B1_5;
    };
    Form2_2Page.prototype.validate_section3 = function () {
        var validate_B2_12 = (this.validateB2_12.map(function (v2_12) { return Object.keys(v2_12).filter(function (v) { return !v2_12[v]; }); }).filter(function (v2_12) { return v2_12.length > 0; }).length === 0);
        return this.validate.B2_12 && this.validate.B2_12_1 && validate_B2_12;
    };
    Form2_2Page.prototype.validateAllData = function () {
        var _this = this;
        this.validateSN2_2P0();
        this.validateForm();
        var validate_B0 = (Object.keys(this.validateB0).filter(function (v) { return !_this.validateB0[v]; }).length === 0);
        var validate_B = (Object.keys(this.validate).filter(function (v) { return !_this.validate[v]; }).length === 0);
        var validate_B1_3 = (this.validateB1_3.map(function (v1_3) { return Object.keys(v1_3).filter(function (v) { return !v1_3[v]; }); }).filter(function (v1_3) { return v1_3.length > 0; }).length === 0);
        var validate_B1_5 = (this.validateB1_5.map(function (v1_5) { return Object.keys(v1_5).filter(function (v) { return !v1_5[v]; }); }).filter(function (v1_5) { return v1_5.length > 0; }).length === 0);
        var validate_B2_12 = (this.validateB2_12.map(function (v2_12) { return Object.keys(v2_12).filter(function (v) { return !v2_12[v]; }); }).filter(function (v2_12) { return v2_12.length > 0; }).length === 0);
        if (!this.sn2_2.B1_1) {
            validate_B1_3 = true;
        }
        if (!this.sn2_2.B1_4_3) {
            validate_B1_5 = true;
        }
        if (!this.sn2_2.B1_5_1) {
            validate_B1_5 = true;
        }
        if (!this.sn2_2.B2_12) {
            validate_B2_12 = true;
        }
        return (validate_B0 && validate_B && validate_B1_3 && validate_B1_5 && validate_B2_12);
    };
    Form2_2Page.prototype.saveData = function () {
        // //console.log('save data')
        //console.log(this.validate_section1());
        //console.log(this.validate_section2());
        //console.log(this.validate_section3());
        // //console.log(this.validateB2_12)
        this.sn2_2B1_3.map(function (sn) {
            if (!sn.B1_3_2_5) {
                delete sn.B1_3_2_5_1;
            }
            if (sn.B1_3_3 !== '1') {
                delete sn.B1_3_3_1;
            }
            if (sn.B1_3_3 !== '2') {
                delete sn.B1_3_3_2_1;
                delete sn.B1_3_3_2_2;
                delete sn.B1_3_3_2_3;
                delete sn.B1_3_3_2_4;
            }
            if (sn.B1_3_3 !== '3.1') {
                delete sn.B1_3_3_3_1_1;
                delete sn.B1_3_3_3_1_2;
                delete sn.B1_3_3_3_1_3;
            }
            if (sn.B1_3_3 !== '3.2') {
                delete sn.B1_3_3_3_2_1;
                delete sn.B1_3_3_3_2_2;
            }
            return sn;
        });
        if (!this.sn2_2.B1_1) {
            delete this.sn2_2.B1_3;
        }
        this.sn2_2B1_5.map(function (sn) {
            if (!sn.B1_5_2_1_1) {
                delete sn.B1_5_2_1_2;
            }
            if (!sn.B1_5_2_1_3) {
                delete sn.B1_5_2_1_4;
                delete sn.B1_5_2_1_5;
            }
            if (sn.B1_8 != 2) {
                delete sn.B1_8_2;
            }
        });
        if (!this.sn2_2.B1_4_3) {
            delete this.sn2_2.B1_5_1;
            delete this.sn2_2.B1_5_2;
            delete this.sn2_2.B1_5;
        }
        if (!this.sn2_2.B1_5_1) {
            delete this.sn2_2.B1_5;
        }
        if (!this.sn2_2.B1_10) {
            delete this.sn2_2.B1_10_1;
            delete this.sn2_2.B1_10_2;
            delete this.sn2_2.B1_10_3;
            delete this.sn2_2.B1_10_4;
            delete this.sn2_2.B1_10_5;
            delete this.sn2_2.B1_10_6;
            delete this.sn2_2.B1_10_7;
            delete this.sn2_2.B1_10_8;
            delete this.sn2_2.B1_10_9;
            delete this.sn2_2.B1_10_10;
        }
        if (!this.sn2_2.B1_11) {
            delete this.sn2_2.B1_11_1;
            delete this.sn2_2.B1_11_2;
            delete this.sn2_2.B1_11_3;
            delete this.sn2_2.B1_11_4;
            delete this.sn2_2.B1_11_4_1;
        }
        else {
            if (!this.sn2_2.B1_11_4) {
                delete this.sn2_2.B1_11_4_1;
            }
        }
        if (!this.sn2_2.B2_12) {
            delete this.sn2_2.B2_12_1;
            delete this.sn2_2.B2_12_1_1;
        }
        if (this.validateAllData()) {
            this.notValid = false;
            this.sn2_2.status = 4;
            this.sn2_2.Modify_DATE.push(new Date());
            if (this.sn2_2.version) {
                this.sn2_2.version = this.sn2_2.saveVersion + 1;
            }
            else {
                this.sn2_2.saveVersion = 0;
                this.sn2_2.version = this.sn2_2.saveVersion + 1;
            }
            this.navCtrl.popToRoot();
        }
        else {
            this.notValid = true;
            var alert_1 = this.alertCtrl.create({
                title: 'กรุณากรอกข้อมูลให้ถูกต้อง',
                buttons: [{
                        text: 'ยืนยัน',
                        handler: function () {
                        }
                    }]
            });
            alert_1.present();
        }
    };
    Form2_2Page.prototype.save1 = function () {
        if (this.validate_section1()) {
            this.notValid = false;
            this.disable1 = false;
            this.page = '2';
        }
        else {
            this.notValid = true;
            var alert_2 = this.alertCtrl.create({
                title: 'กรุณากรอกข้อมูลให้ถูกต้อง',
                buttons: [{
                        text: 'ยืนยัน',
                        handler: function () {
                        }
                    }]
            });
            alert_2.present();
        }
    };
    Form2_2Page.prototype.save2 = function () {
        if (this.validate_section2()) {
            this.notValid = false;
            this.disable2 = false;
            this.page = '3';
        }
        else {
            this.notValid = true;
            var alert_3 = this.alertCtrl.create({
                title: 'กรุณากรอกข้อมูลให้ถูกต้อง',
                buttons: [{
                        text: 'ยืนยัน',
                        handler: function () {
                        }
                    }]
            });
            alert_3.present();
        }
    };
    Form2_2Page.prototype.B1_2Change = function () {
        if (this.sn2_2.B1_2 <= 20) {
            if (this.sn2_2B1_3.length < this.sn2_2.B1_2) {
                for (var i = this.sn2_2B1_3.length; i < this.sn2_2.B1_2; i += 1) {
                    this.sn2_2B1_3.push(new __WEBPACK_IMPORTED_MODULE_1__models_SN2_2_SN2_2P1_3__["a" /* SN2_2P1_3 */]());
                    this.sn2_2B1_3[this.sn2_2B1_3.length - 1].B1_3_3 = '0';
                    this.validateB1_3.push(new __WEBPACK_IMPORTED_MODULE_6__models_SN2_2_ValidateSN2_2B1_3__["a" /* ValidateSN2_2B1_3 */]());
                }
            }
            else {
                for (var i = this.sn2_2B1_3.length; i > this.sn2_2.B1_2; i -= 1) {
                    this.sn2_2B1_3.pop();
                    this.validateB1_3.pop();
                }
            }
            this.sn2_2.B1_3 = this.sn2_2B1_3;
        }
    };
    Form2_2Page.prototype.B1_5_2Change = function () {
        if (this.sn2_2.B1_5_2 <= 5) {
            if (this.sn2_2B1_5.length < this.sn2_2.B1_5_2) {
                for (var i = this.sn2_2B1_5.length; i < this.sn2_2.B1_5_2; i += 1) {
                    this.sn2_2B1_5.push(new __WEBPACK_IMPORTED_MODULE_3__models_SN2_2_SN2_2P1_5__["a" /* SN2_2P1_5 */]());
                    this.validateB1_5.push(new __WEBPACK_IMPORTED_MODULE_7__models_SN2_2_ValidateSN2_2B1_5__["a" /* ValidateSN2_2B1_5 */]());
                }
            }
            else {
                for (var i = this.sn2_2B1_5.length; i > this.sn2_2.B1_5_2; i -= 1) {
                    this.sn2_2B1_5.pop();
                    this.validateB1_5.pop();
                }
            }
            this.sn2_2.B1_5 = this.sn2_2B1_5;
        }
    };
    Form2_2Page.prototype.B2_12_1Change = function () {
        if (this.sn2_2.B2_12_1 <= 5) {
            if (this.sn2_2B2_12.length < this.sn2_2.B2_12_1) {
                for (var i = this.sn2_2B2_12.length; i < this.sn2_2.B2_12_1; i += 1) {
                    this.sn2_2B2_12.push(new __WEBPACK_IMPORTED_MODULE_4__models_SN2_2_SN2_2P2__["a" /* SN2_2P2_12 */]());
                    this.validateB2_12.push(new __WEBPACK_IMPORTED_MODULE_8__models_SN2_2_ValidateSN2_2B2_12__["a" /* ValidateSN2_2B2_12 */]());
                    this.validateFormB2_12_1(i);
                }
            }
            else {
                for (var i = this.sn2_2B2_12.length; i > this.sn2_2.B2_12_1; i -= 1) {
                    this.sn2_2B2_12.pop();
                    this.validateB2_12.pop();
                }
            }
            this.sn2_2.B2_12_1_1 = this.sn2_2B2_12;
        }
    };
    Form2_2Page.prototype.choose1 = function () {
        if (this.sn2_2.B1_4_1) {
            this.sn2_2.B1_4_2 = false;
        }
    };
    Form2_2Page.prototype.choose2 = function () {
        if (this.sn2_2.B1_4_2) {
            this.sn2_2.B1_4_1 = false;
        }
    };
    // choose3(){
    //   if(this.sn2_2.B1_4_3){
    //     this.sn2_2.B1_4_1 = false
    //     this.sn2_2.B1_4_2 = false
    //   }
    // }
    Form2_2Page.prototype.range = function (min, max, step) {
        step = step || 1;
        var input = [];
        for (var i = min; i <= max; i += step) {
            input.push(i);
        }
        return input;
    };
    Form2_2Page.prototype.pauseEa = function () {
        this.sn2_2.status = 3;
        this.sn2_2.Modify_DATE.push(new Date());
        this.navCtrl.popToRoot();
    };
    Form2_2Page.prototype.deleteEa = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'ต้องการจะลบใช่หรือไม่',
            buttons: [{
                    text: 'ยืนยัน',
                    handler: function () {
                        _this.events.publish("delete", _this.sn2_2, 2);
                        _this.navCtrl.popToRoot();
                    }
                }, {
                    text: 'ยกเลิก',
                    role: 'cancel',
                    handler: function () {
                        //console.log('Application exit prevented!');
                    }
                }]
        });
        alert.present();
    };
    Form2_2Page.prototype.navigateToHome = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'ต้องการบันทึกก่อนกลับสู่หน้าแรกหรือไม่?',
            buttons: [{
                    text: 'บันทึก',
                    handler: function () {
                        _this.pauseEa();
                    }
                }, {
                    text: 'ไม่บันทึก',
                    handler: function () {
                        //console.log('ไม่บันทึก');
                        _this.events.publish('noSave2');
                        _this.navCtrl.popToRoot();
                    }
                }, {
                    text: 'ยกเลิก',
                    role: 'cancel',
                    handler: function () {
                        //console.log('Application exit prevented!');
                    }
                }]
        });
        alert.present();
    };
    Form2_2Page.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad Form2_2Page');
    };
    Form2_2Page.prototype.navigate = function (page) {
        this.navCtrl.push(page, {}, { animate: false });
    };
    Form2_2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-form2-2',template:/*ion-inline-start:"/Users/pomgade/Desktop/NSOWaterMGTSystem21/src/pages/form2-2/form2-2.html"*/'<!--\n  Generated template for the Form2_2Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content>\n  <h1 class="text-center">แบบแจงนับ สน.2-2 พื้นที่ย่อย</h1>\n  <hr id="hr-line">\n  <ion-segment [(ngModel)]="page">\n    <ion-segment-button value="1" style="font-family:Arial; font-size: 25px; background-color: #75d8ff; color: black">\n      ข้อมูลพื้นที่ย่อย\n    </ion-segment-button>\n    <ion-segment-button value="2" style="font-family:Arial; font-size: 25px; background-color: #75d8ff; color: black" [disabled]="disable1">\n      ตอนที่ 1\n    </ion-segment-button>\n    <ion-segment-button value="3" style="font-family:Arial; font-size: 25px; background-color: #75d8ff; color: black" [disabled]="disable2">\n      ตอนที่ 2\n    </ion-segment-button>\n  </ion-segment>\n  <div [ngSwitch]="page">\n    <ion-slides #slider>\n      <ion-slide *ngSwitchCase="\'1\'">\n        <ion-list no-lines id="container">\n          <ion-item>\n            <ion-label >สถานะ</ion-label>\n          </ion-item>\n          <ion-grid style="margin-top:-15px;">\n          <ion-row radio-group [(ngModel)]="sn2_2.STATUS" [disabled]=\'!isenabled\'>\n            <ion-col col-6>\n              <ion-item>\n                <ion-radio style="margin:0px;" item-left [value]=0></ion-radio>\n                <ion-label style="margin:5px;">กำลังสำรวจ</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-6>\n              <ion-item>\n                <ion-radio style="margin:0px;" item-left [value]=1></ion-radio>\n                <ion-label style="margin:5px;">สำรวจครบแล้ว</ion-label>\n              </ion-item>\n            </ion-col>\n            </ion-row><ion-row style="margin-top:-15px;">\n            <ion-col col-6>\n              <ion-item>\n                <ion-radio style="margin:0px;" item-left [value]=2></ion-radio>\n                <ion-label text-wrap style="margin:5px;">ตรวจสอบแล้ว</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-6>\n              <ion-item>\n                <ion-radio style="margin:0px;" item-left [value]=3></ion-radio>\n                <ion-label text-wrap style="margin:5px;">อนุมัติแล้ว</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          </ion-grid>\n          <ion-row style="margin-top:-15px;">\n            <ion-col>\n              <ion-row>\n                <ion-col col-6>\n                  <ion-label>ก) ภาค</ion-label>\n                </ion-col>\n                <ion-col col-6>\n                  <ion-label text-wrap style="font-size: 0.8em">{{sn2_2.B0.REG_NAME}}</ion-label>\n                </ion-col>\n              </ion-row>\n            </ion-col>\n            <ion-col>\n              <ion-row>\n                <ion-col col-6>\n                  <ion-label>จังหวัด</ion-label>\n                </ion-col>\n                <ion-col col-6>\n                  <ion-label style="font-size: 0.8em">{{sn2_2.B0.CWT_NAME}}</ion-label>\n                </ion-col>\n              </ion-row>\n            </ion-col>\n          </ion-row>\n          <ion-row style="margin-top:-15px;">\n            <ion-col>\n              <ion-row>\n                <ion-col col-6>\n                  <ion-label>อำเภอ</ion-label>\n                </ion-col>\n                <ion-col col-6>\n                  <ion-label style="font-size: 0.8em">{{sn2_2.B0.AMP_NAME}}</ion-label>\n                </ion-col>\n              </ion-row>\n            </ion-col>\n            <ion-col>\n              <ion-row>\n                <ion-col col-6>\n                  <ion-label>ตำบล</ion-label>\n                </ion-col>\n                <ion-col col-6>\n                  <ion-label style="font-size: 0.8em">{{sn2_2.B0.TAM_NAME}}</ion-label>\n                </ion-col>\n              </ion-row>\n            </ion-col>\n          </ion-row>\n          <ion-row style="margin-top:-15px;">\n            <ion-col>\n              <ion-row>\n                <ion-col col-6>\n                  <ion-label text-wrap>ข) เขตการปกครอง</ion-label>\n                </ion-col>\n                <ion-col col-6>\n                  <ion-label style="font-size: 0.8em">{{sn2_2.B0.DISTRICT}}</ion-label>\n                </ion-col>\n              </ion-row>\n            </ion-col>\n            <ion-col>\n              <ion-row>\n                <ion-col col-6>\n                  <ion-label text-wrap>ค) รหัสเขตแจงนับ</ion-label>\n                </ion-col>\n                <ion-col col-6>\n                  <ion-label style="font-size: 0.8em">{{sn2_2.B0.EA}}</ion-label>\n                </ion-col>\n              </ion-row>\n            </ion-col>\n          </ion-row>\n          <ion-item>\n            <ion-label stacked id="fontsize">หมู่ที่</ion-label>\n            \n          </ion-item>\n          <ion-input [(ngModel)]="sn2_2.B0.VIL" type="number" placeholder="หมู่ที่"></ion-input>\n          <ion-item>\n            <ion-label stacked id="fontsize">ชื่อหมู่บ้าน/ชุมชน</ion-label>\n            </ion-item>\n            <ion-input [(ngModel)]="sn2_2.B0.VIL_NAME" (ionChange)="validateSN2_2P0();" placeholder="ชื่อหมู่บ้าน/ชุมชน"></ion-input>\n          \n          <p id="error2" *ngIf="!validateB0.VIL_NAME && notValid" danger padding-left>กรุณาป้อนชื่อหมู่บ้าน/ชุมชน</p>\n          <ion-item>\n            <ion-label>จ) เขตชลประทาน</ion-label>\n          </ion-item>\n          <ion-row radio-group (ionChange)="validateSN2_2P0();" [(ngModel)]="sn2_2.B0.BASIN">\n            <ion-col>\n              <ion-item>\n                <ion-radio item-left [value]=1></ion-radio>\n                <ion-label>1. ในเขตชลประทาน</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-radio item-left [value]=2></ion-radio>\n                <ion-label>2. นอกเขตชลประทาน</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <p id="error2" *ngIf="!validateB0.BASIN && notValid" danger padding-left>กรุณาเลือก อยู่ในเขตชลประทาน หรือ นอกเขตชลประทาน</p>\n        </ion-list>\n        <button ion-button (click)="save1()">ถัดไป</button>\n      </ion-slide>\n      <ion-slide *ngSwitchCase="\'2\'">\n        <ion-list no-lines id="container">\n          <ion-item>\n            <ion-label stacked id="fontsize" text-wrap>\n              <label id="bold">1.</label> ในหมู่บ้าน/ชุมชนแห่งนี้มีแหล่งน้ำสาธารณะ (สระ, หนอง, บึง, อ่างเก็บน้ำ) หรือไม่</ion-label>\n          </ion-item>\n          <ion-row radio-group (ionChange)="validateForm();B1_2Change()" [(ngModel)]="sn2_2.B1_1">\n            <ion-col>\n              <ion-item>\n                <ion-radio item-left [value]=true></ion-radio>\n                <ion-label>1. มี</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-radio item-left [value]=false></ion-radio>\n                <ion-label>2. ไม่มี</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <div *ngIf="sn2_2.B1_1 == true">\n            <ion-item *ngIf="sn2_2.B1_1 == true">\n              <ion-label stacked id="fontsize">2.หาก "มี" มีจำนวนกี่แหล่ง</ion-label>\n              <ion-input [(ngModel)]="sn2_2.B1_2" type="number" (ionChange)="B1_2Change(); validateForm();" placeholder="จำนวนแหล่งน้ำ"></ion-input>\n            </ion-item>\n            <p id="error2" *ngIf="!sn2_2.B1_2 && notValid" danger padding-left>กรุณาป้อนจำนวนแหล่งน้ำ</p>\n            <p id="error2" *ngIf="!validate.B1_2 && notValid" danger padding-left>จำนวนแหล่งน้ำ 1-20 เท่านั้น</p>\n            <div *ngIf="this.validate.B1_2">\n              <div *ngFor="let w of range(1,sn2_2.B1_2,1);" id="border-div">\n                <label>3.ข้อมูลแหล่งน้ำที่ {{w}} ({{w}}/{{sn2_2.B1_2}})</label>\n                <ion-item>\n                  <ion-label stacked id="fontsize">\n                    <label id="bold">3.1 </label> ชื่ออะไร</ion-label>\n                  <ion-input [(ngModel)]="sn2_2B1_3[w-1].B1_3_1" (ionChange)="validateFormB1_3(w-1)" type="text" placeholder="ชื่อสระน้ำ"></ion-input>\n                </ion-item>\n                <p id="error2" *ngIf="!sn2_2B1_3[w-1].B1_3_1 && notValid" danger padding-left>กรุณาป้อนชื่อสระน้ำ</p>\n                <ion-item>\n                  <ion-label stacked id="fontsize"> 3.2 แหล่งน้ำนี้ใช้ทำประโยชน์อะไรบ้าง </ion-label>\n                </ion-item>\n                <ion-item>\n                  <ion-label> 1. ใช้ทำน้ำประปา</ion-label>\n                  <ion-checkbox (ionChange)="validateFormB1_3(w-1)" [(ngModel)]="sn2_2B1_3[w-1].B1_3_2_1"></ion-checkbox>\n                </ion-item>\n                <ion-item>\n                  <ion-label> 2. ใช้ในการผลิต/อุตสาหกรรมอื่น ๆ </ion-label>\n                  <ion-checkbox (ionChange)="validateFormB1_3(w-1)" [(ngModel)]="sn2_2B1_3[w-1].B1_3_2_2"></ion-checkbox>\n                </ion-item>\n                <ion-item>\n                  <ion-label> 3. ใช้เพื่อการเกษตร </ion-label>\n                  <ion-checkbox (ionChange)="validateFormB1_3(w-1)" [(ngModel)]="sn2_2B1_3[w-1].B1_3_2_3"></ion-checkbox>\n                </ion-item>\n                <ion-item>\n                  <ion-label> 4. ใช้เพื่อการบริการ </ion-label>\n                  <ion-checkbox (ionChange)="validateFormB1_3(w-1)" [(ngModel)]="sn2_2B1_3[w-1].B1_3_2_4"></ion-checkbox>\n                </ion-item>\n                <ion-item>\n                  <ion-label> 5. อื่นๆ</ion-label>\n                  <ion-checkbox (ionChange)="validateFormB1_3(w-1)" [(ngModel)]="sn2_2B1_3[w-1].B1_3_2_5"></ion-checkbox>\n                </ion-item>\n                <p id="error2" *ngIf="!validateB1_3[w-1].B1_3_2 && notValid" danger padding-left>กรุณาเลือกการใช้ประโยชน์จากแหล่งน้ำ</p>\n                <ion-item *ngIf="sn2_2B1_3[w-1].B1_3_2_5">\n                  <ion-label stacked id="fontsize">โปรดระบุ</ion-label>\n                  <ion-input (ionChange)="validateFormB1_3(w-1)" [(ngModel)]="sn2_2B1_3[w-1].B1_3_2_5_1"></ion-input>\n                </ion-item>\n                <p id="error2" *ngIf="!validateB1_3[w-1].B1_3_2_5_1 && notValid" danger padding-left>กรุณาป้อนการใช้ประโยชน์จากแหล่งน้ำ</p>\n                <div id="border-div">\n                  <ion-col radio-group (ionChange)="validateFormB1_3(w-1)" [(ngModel)]="sn2_2B1_3[w-1].B1_3_3">\n                    <ion-row>\n                      <label>3.3 (ถามขนาดของแหล่งน้ำ)</label>\n                    </ion-row>\n                    <ion-row>\n                      <ion-col col-4>\n                        <ion-row style="margin-top:10px">\n                          <ion-radio style="margin-top:5px" item-left value="1"></ion-radio>\n                          <label style="margin-left:10px"> 1). ปริมาตรเท่าไร </label>\n                        </ion-row>\n                      </ion-col>\n                      <ion-col style="margin-top:10px" col-8>\n                        <ion-row *ngIf="sn2_2B1_3[w-1].B1_3_3 == \'1\'">\n                          <label style="margin-left:10px">1. ปริมาตร</label>\n                          <ion-input style="margin-left:10px" (ionChange)="validateFormB1_3(w-1)" [(ngModel)]="sn2_2B1_3[w-1].B1_3_3_1" type="number"\n                            placeholder=""></ion-input>\n                          <label style="margin-left:10px">ลูกบาศก์เมตร</label>\n                        </ion-row>\n                        <p id="error2" *ngIf="!validateB1_3[w-1].B1_3_3_1 && notValid" danger padding-left>กรุณาป้อนปริมาตร</p>\n                      </ion-col>\n                    </ion-row>\n                    <ion-row>\n                      <ion-col col-4>\n                        <ion-row>\n                          <ion-radio item-left value="2"></ion-radio>\n                          <label style="margin-top:-20px;margin-left: 10px"> 2). หากไม่ทราบ ทราบพื้นที่หรือไม่ กี่ไร่ ความลึกของแหล่งน้ำกี่เมตร </label>\n                        </ion-row>\n                      </ion-col>\n                      <ion-col col-8>\n                        <ion-row>\n                          <ion-col col-8>\n                            <ion-row *ngIf="sn2_2B1_3[w-1].B1_3_3 == \'2\'">\n                              <label style="margin-left:10px"> 2. พื้นที่</label>\n                              <ion-input style="margin-left:10px" (ionChange)="validateFormB1_3(w-1)" [(ngModel)]="sn2_2B1_3[w-1].B1_3_3_2_1" type="number"\n                                placeholder="" [disabled]="sn2_2B1_3[w-1].B1_3_3 != \'2\'"></ion-input>\n                              <label style="margin-left:10px">ไร่</label>\n                            </ion-row>\n                            <p id="error2" *ngIf="!validateB1_3[w-1].B1_3_3_2_1 && notValid" danger padding-left>กรุณาป้อนจำนวนไร่</p>\n                          </ion-col>\n                          <ion-col col-4>\n                            <ion-row *ngIf="sn2_2B1_3[w-1].B1_3_3 == \'2\'">\n                              <ion-input (ionChange)="validateFormB1_3(w-1)" [(ngModel)]="sn2_2B1_3[w-1].B1_3_3_2_2" type="number" placeholder=""></ion-input>\n                              <label style="margin-left:10px">งาน</label>\n                            </ion-row>\n                            <p id="error2" *ngIf="!validateB1_3[w-1].B1_3_3_2_2 && notValid" danger padding-left>กรุณาป้อนจำนวนงาน</p>\n                          </ion-col>\n                        </ion-row>\n                        <ion-row>\n                          <ion-col col-3>\n                          </ion-col>\n                          <ion-col col-9>\n                            <ion-row *ngIf="sn2_2B1_3[w-1].B1_3_3 == \'2\'">\n                              <ion-input style="margin-left:10px" (ionChange)="validateFormB1_3(w-1)" [(ngModel)]="sn2_2B1_3[w-1].B1_3_3_2_3" type="number"\n                                placeholder=""></ion-input>\n                              <label style="margin-left:10px">ตารางวา</label>\n                            </ion-row>\n                            <p id="error2" *ngIf="!validateB1_3[w-1].B1_3_3_2_3 && notValid" danger padding-left>กรุณาป้อนจำนวนตารางวา</p>\n                          </ion-col>\n                        </ion-row>\n                        <p id="error2" *ngIf="!validateB1_3[w-1].B1_3_3_2 && notValid" danger padding-left>กรุณาป้อนขนาดพื้นที่</p>\n                        <ion-row>\n                          <ion-col col-3>\n                          </ion-col>\n                          <ion-col col-9>\n                            <ion-row *ngIf="sn2_2B1_3[w-1].B1_3_3 == \'2\'">\n                              <label>ความลึก</label>\n                              <ion-input style="margin-left:10px" (ionChange)="validateFormB1_3(w-1)" [(ngModel)]="sn2_2B1_3[w-1].B1_3_3_2_4" type="number"\n                                placeholder=""></ion-input>\n                              <label style="margin-left:10px">เมตร</label>\n                            </ion-row>\n                            <p id="error2" *ngIf="!validateB1_3[w-1].B1_3_3_2_4 && notValid" danger padding-left>กรุณาป้อนความลึก</p>\n                          </ion-col>\n                        </ion-row>\n                      </ion-col>\n                    </ion-row>\n                    <ion-row style="margin-top:10px">\n                      <label>3). หากไม่ทราบพื้นที่ แหล่งน้ำเป็นสี่เหลี่ยมหรือวงกลม</label>\n                    </ion-row>\n                    <ion-row style="margin-top:10px">\n                      <ion-col col-4>\n                        <ion-radio item-left value="3.1"></ion-radio>\n                        <label>3.1) ถ้าแหล่งน้ำเป็นสี่เหลี่ยม กว้าง ยาว ลึกเท่าไร</label>\n                      </ion-col>\n                      <ion-col col-8>\n                        <ion-col>\n                          <ion-row *ngIf="sn2_2B1_3[w-1].B1_3_3 == \'3.1\'">\n                            <label style="margin-left:10px"> 3.1. ความกว้าง </label>\n                            <ion-input style="margin-left:10px" (ionChange)="validateFormB1_3(w-1)" [(ngModel)]="sn2_2B1_3[w-1].B1_3_3_3_1_1" type="number"\n                              placeholder=""></ion-input>\n                            <label style="margin-left:10px">ยาว</label>\n                            <ion-input style="margin-left:10px" (ionChange)="validateFormB1_3(w-1)" [(ngModel)]="sn2_2B1_3[w-1].B1_3_3_3_1_2" type="number"\n                              placeholder=""></ion-input>\n                          </ion-row>\n                          <p id="error2" *ngIf="!validateB1_3[w-1].B1_3_3_3_1_1 && notValid" danger padding-left>กรุณาป้อนความกว้าง</p>\n                          <p id="error2" *ngIf="!validateB1_3[w-1].B1_3_3_3_1_2 && notValid" danger padding-left>กรุณาป้อนความยาว</p>\n                          <ion-row *ngIf="sn2_2B1_3[w-1].B1_3_3 == \'3.1\'" style="margin-top:10px">\n                            <label style="margin-left:10px">ความลึก</label>\n                            <ion-input style="margin-left:10px" (ionChange)="validateFormB1_3(w-1)" [(ngModel)]="sn2_2B1_3[w-1].B1_3_3_3_1_3" type="number"\n                              placeholder=""></ion-input>\n                            <label style="margin-left:10px">เมตร</label>\n                          </ion-row>\n                          <p id="error2" *ngIf="!validateB1_3[w-1].B1_3_3_3_1_3 && notValid" danger padding-left>กรุณาป้อนความลึก</p>\n                        </ion-col>\n                      </ion-col>\n                    </ion-row>\n                    <ion-row>\n                      <ion-col col-4>\n                        <ion-radio item-left value="3.2"></ion-radio>\n                        <label>3.2) ถ้าแหล่งน้ำเป็นวงกลม เส้นผ่านศูนย์กลางกี่เมตร ลึกเท่าไร</label>\n                      </ion-col>\n                      <ion-col col-8>\n                        <ion-col>\n                          <ion-row *ngIf="sn2_2B1_3[w-1].B1_3_3 == \'3.2\'">\n                            <label style="margin-left:10px"> 3.2. เส้นผ่านศูนย์กลาง </label>\n                            <ion-input style="margin-left:10px" (ionChange)="validateFormB1_3(w-1)" [(ngModel)]="sn2_2B1_3[w-1].B1_3_3_3_2_1" type="number"\n                              placeholder=""></ion-input>\n                          </ion-row>\n                          <p id="error2" *ngIf="!validateB1_3[w-1].B1_3_3_3_2_1 && notValid" danger padding-left>กรุณาป้อนความเส้นผ่านศูนย์กลาง</p>\n                          <ion-row *ngIf="sn2_2B1_3[w-1].B1_3_3 == \'3.2\'" style="margin-top:10px">\n                            <label style="margin-left:10px">ความลึก</label>\n                            <ion-input style="margin-left:10px" (ionChange)="validateFormB1_3(w-1)" [(ngModel)]="sn2_2B1_3[w-1].B1_3_3_3_2_2" type="number"\n                              placeholder=""></ion-input>\n                            <label style="margin-left:10px">เมตร</label>\n                          </ion-row>\n                          <p id="error2" *ngIf="!validateB1_3[w-1].B1_3_3_3_2_2 && notValid" danger padding-left>กรุณาป้อนความลึก</p>\n                        </ion-col>\n                      </ion-col>\n                    </ion-row>\n                  </ion-col>\n                  <p id="error2" *ngIf="!validateB1_3[w-1].B1_3_3 && notValid" danger padding-left>กรุณาป้อนการใช้ประโยชน์จากแหล่งน้ำ</p>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div id="border-div">\n            <label>4.ในหมู่บ้าน/ชุมชนนี้มีระบบน้ำประปาประเภทใดบ้าง</label>\n            <ion-grid>\n              <ion-row radio-group (ionChange)="validateForm();choose1()" [(ngModel)]="sn2_2.B1_4_1">\n                <ion-col style="text-align:left">\n                  <label>4.1 น้ำประปาส่วนภูมิภาค</label>\n                </ion-col>\n                <ion-col>\n                  <ion-item>\n                    <ion-radio item-left [value]=true></ion-radio>\n                    <ion-label>1. มี</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col>\n                  <ion-item>\n                    <ion-radio item-left [value]=false></ion-radio>\n                    <ion-label>2. ไม่มี</ion-label>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n              <p id="error2" *ngIf="!validate.B1_4_1 && notValid" danger padding-left>กรุณาเลือกประเภทน้ำประปาส่วนภูมิภาค</p>\n              <ion-row radio-group (ionChange)="validateForm();choose2()" [(ngModel)]="sn2_2.B1_4_2">\n                <ion-col style="text-align:left">\n                  <label>4.2 น้ำประปานครหลวง</label>\n                </ion-col>\n                <ion-col>\n                  <ion-item>\n                    <ion-radio item-left [value]=true></ion-radio>\n                    <ion-label>1. มี</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col>\n                  <ion-item>\n                    <ion-radio item-left [value]=false></ion-radio>\n                    <ion-label>2. ไม่มี</ion-label>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n              <p id="error2" *ngIf="!validate.B1_4_2 && notValid" danger padding-left>กรุณาเลือกประเภทน้ำประปานครหลวง</p>\n              <ion-row radio-group (ionChange)="validateForm();" [(ngModel)]="sn2_2.B1_4_3">\n                <ion-col style="text-align:left">\n                  <label>4.3 น้ำประปาอื่น ๆ (หมู่บ้าน, อบต., เทศบาล, ชุมชน, นิคม, ภูเขา ฯลฯ)</label>\n                </ion-col>\n                <ion-col>\n                  <ion-item>\n                    <ion-radio item-left [value]=true></ion-radio>\n                    <ion-label>1. มี</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col>\n                  <ion-item>\n                    <ion-radio item-left [value]=false></ion-radio>\n                    <ion-label>2. ไม่มี</ion-label>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n              <p id="error2" *ngIf="!validate.B1_4_3 && notValid" danger padding-left>กรุณาเลือกประเภทน้ำประปา อื่น ๆ</p>\n            </ion-grid>\n          </div>\n          <div id="border-div" *ngIf="sn2_2.B1_4_3 == true">\n            <label>5. ในหมู่บ้าน/ชุมชน เป็นที่ตั้งของแหล่งผลิตน้ำประปาอื่นๆ (หมู่บ้าน, อบต., เทศบาล, ชุมชน, นิคม, ภูเขา ฯลฯ) ใช่หรือไม่</label>\n            <ion-row radio-group (ionChange)="validateForm();B1_5_2Change()" [(ngModel)]="sn2_2.B1_5_1">\n              <ion-col>\n                <ion-item>\n                  <ion-radio item-left [value]=true></ion-radio>\n                  <ion-label>1. ใช่</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col>\n                <ion-item>\n                  <ion-radio item-left [value]=false></ion-radio>\n                  <ion-label>2. ไม่ใช่</ion-label>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <p id="error2" *ngIf="!validate.B1_5_1 && notValid" danger padding-left>กรุณาเลือกแหล่งผลิตน้ำประปาอื่น ๆ ใช่หรือไม่</p>\n            <div *ngIf="sn2_2.B1_5_1">\n              <label text-wrap>5.1 หาก "มี" ในหมู่บ้าน/ชุมชน มีหน่วยงานที่ใช้แหล่งน้ำในหมู่บ้าน/ชุมชน ในการผลิตมีประปาอื่นๆ กี่หน่วยงาน</label>\n              <ion-input style="margin-left:10px" (ionChange)="B1_5_2Change();validateForm()" [(ngModel)]="sn2_2.B1_5_2" type="number"\n                placeholder="จำนวน หน่วยงาน"></ion-input>\n              <p id="error2" *ngIf="!validate.B1_5_2 && notValid" danger padding-left>กรุณาป้อนจำนวนหน่วยงาน</p>\n            </div>\n            <div *ngIf="validate.B1_5_2 && sn2_2.B1_5_1">\n              <div id="border-div" *ngFor="let w of range(1,sn2_2.B1_5_2,1);">\n                <label>หน่วยงานชื่อ</label>\n                <label>({{w}}/{{sn2_2.B1_5_2}})</label>\n                <ion-row>\n                  <ion-col  col-4>\n                    <ion-item style="margin-left: -10px"  >\n                      <label  id="fontsize">5.2 ชื่อหน่วยงาน</label>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col col-8>\n                    <ion-input style="margin-left:10px" (ionChange)="validateFormB1_5(w-1)" [(ngModel)]="sn2_2B1_5[w-1].B1_5_2_1" type="text"\n                      placeholder="ชื่อ หน่วยงาน"></ion-input>\n                    <p id="error2" *ngIf="!validateB1_5[w-1].B1_5_2_1 && notValid" danger padding-left>กรุณาป้อนชื่อหน่วยงาน</p>\n                  </ion-col>\n                </ion-row>\n                <ion-grid>\n                  <ion-row radio-group (ionChange)="validateFormB1_5(w-1)" [(ngModel)]="sn2_2B1_5[w-1].B1_5_2_1_1">\n                    <ion-col style="text-align: left">\n                      <label>5.3 ใช้น้ำผิวดิน (สระน้ำ แม่น้ำ/ลำคลอง) หรือไม่</label>\n                    </ion-col>\n                    <ion-col>\n                      <ion-item>\n                        <ion-radio item-left [value]=true></ion-radio>\n                        <ion-label>1. ใช้</ion-label>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col>\n                      <ion-item>\n                        <ion-radio item-left [value]=false></ion-radio>\n                        <ion-label>2. ไม่ใช้</ion-label>\n                      </ion-item>\n                    </ion-col>\n                  </ion-row>\n                  <p id="error2" *ngIf="!validateB1_5[w-1].B1_5_2_1_1 && notValid" danger padding-left>กรุณาเลือกการใช้น้ำผิวดิน</p>\n                  <ion-row *ngIf="sn2_2B1_5[w-1].B1_5_2_1_1">\n                    <ion-col style="text-align: left">\n                      <label>ถ้า "ใช้" ใช้น้ำผิวดินผลิตประปาโดยเฉลี่ยต่อเดือนปริมาณเท่าไร </label>\n                    </ion-col>\n                    <ion-col>\n                      <ion-input style="margin-left:10px" [(ngModel)]="sn2_2B1_5[w-1].B1_5_2_1_2" (ionChange)="validateFormB1_5(w-1)" type="number"\n                        placeholder="ใช้น้ำผิวดินผลิตประปาโดยเฉลี่ยต่อเดือนปริมาณเท่าไร"></ion-input>\n                    </ion-col>\n                    <ion-col>\n                      <label style="margin-left:10px">\n                        ลบ.ม/เดือน\n                      </label>\n                    </ion-col>\n                  </ion-row>\n                  <p id="error2" *ngIf="!validateB1_5[w-1].B1_5_2_1_2 && notValid" danger padding-left>กรุณาป้อนจำนวนการใช้น้ำผิวดินผลิตประปา</p>\n                  <ion-row radio-group (ionChange)="validateFormB1_5(w-1)" [(ngModel)]="sn2_2B1_5[w-1].B1_5_2_1_3">\n                    <ion-col style="text-align: left">\n                      <label>5.4 ใช้น้ำจาก บ่อบาดาล หรือไม่</label>\n                    </ion-col>\n                    <ion-col>\n                      <ion-item>\n                        <ion-radio item-left [value]=true></ion-radio>\n                        <ion-label>1. ใช้</ion-label>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col>\n                      <ion-item>\n                        <ion-radio item-left [value]=false></ion-radio>\n                        <ion-label>2. ไม่ใช้</ion-label>\n                      </ion-item>\n                    </ion-col>\n                  </ion-row>\n                  <p id="error2" *ngIf="!validateB1_5[w-1].B1_5_2_1_3 && notValid" danger padding-left>กรุณาการใช้น้ำจากบ่อบาดาล</p>\n                  <ion-row *ngIf="sn2_2B1_5[w-1].B1_5_2_1_3">\n                    <ion-col style="text-align: left">\n                      <label>ถ้า "ใช้" ใช้น้ำจากบ่อบาดาลกี่บ่อ </label>\n                    </ion-col>\n                    <ion-col>\n                      <ion-input style="margin-left:10px" (ionChange)="validateFormB1_5(w-1)" [(ngModel)]="sn2_2B1_5[w-1].B1_5_2_1_4" type="number"\n                        placeholder="จำนวนบ่อบาดาล"></ion-input>\n                    </ion-col>\n                    <ion-col>\n                      <label style="margin-left:10px">\n                        บ่อ\n                      </label>\n                    </ion-col>\n                  </ion-row>\n                  <p id="error2" *ngIf="!validateB1_5[w-1].B1_5_2_1_4 && notValid" danger padding-left>กรุณาป้อนจำนวนบ่อบาดาล</p>\n                  <ion-row *ngIf="sn2_2B1_5[w-1].B1_5_2_1_3">\n                    <ion-col style="text-align: left">\n                      <label>ใช้น้ำจากบ่อบาดาลผลิตประปาโดยเฉลี่ยต่อเดือนปริมาณเท่าไร </label>\n                    </ion-col>\n                    <ion-col>\n                      <ion-input style="margin-left:10px" (ionChange)="validateFormB1_5(w-1)" [(ngModel)]="sn2_2B1_5[w-1].B1_5_2_1_5" type="number"\n                        placeholder="จำนวนบ่อบาดาล"></ion-input>\n                    </ion-col>\n                    <ion-col>\n                      <label style="margin-left:10px">\n                        ลบ.ม/เดือน\n                      </label>\n                    </ion-col>\n                  </ion-row>\n                  <p id="error2" *ngIf="!validateB1_5[w-1].B1_5_2_1_5 && notValid" danger padding-left>กรุณาป้อนจำนวนการใช้น้ำจากบ่อบาดาลผลิตประปา</p>\n                  <ion-row>\n                    <ion-col style="text-align: left">\n                      <label>5.5 น้ำประปาขายหน่วยละเท่าไร </label>\n                    </ion-col>\n                    <ion-col>\n                      <ion-input style="margin-left:10px" (ionChange)="validateFormB1_5(w-1)" [(ngModel)]="sn2_2B1_5[w-1].B1_6" type="number" placeholder="ราคาน้ำประปา"></ion-input>\n                    </ion-col>\n                    <ion-col>\n                      <label style="margin-left:10px">\n                        บาท/หน่วย\n                      </label>\n                    </ion-col>\n                  </ion-row>\n                  <p id="error2" *ngIf="!validateB1_5[w-1].B1_6 && notValid" danger padding-left>กรุณาป้อนราคาขายน้ำประปา</p>\n                  <ion-row>\n                    <ion-col style="text-align: left">\n                      <label>5.6 ค่าเช่ามิเตอร์คิดเดือนละเท่าไร </label>\n                    </ion-col>\n                    <ion-col>\n                      <ion-input style="margin-left:10px" (ionChange)="validateFormB1_5(w-1)" [(ngModel)]="sn2_2B1_5[w-1].B1_7" type="number" placeholder="ค่าเช่ามิเตอร์"></ion-input>\n                    </ion-col>\n                    <ion-col>\n                      <label style="margin-left:10px">\n                        บาท/เดือน\n                      </label>\n                    </ion-col>\n                  </ion-row>\n                  <p id="error2" *ngIf="!validateB1_5[w-1].B1_7 && notValid" danger padding-left>กรุณาป้อนค่าเช่ามิเตอร์คิดเดือนละเท่าไร</p>\n                  <ion-row radio-group (ionChange)="validateFormB1_5(w-1)" [(ngModel)]="sn2_2B1_5[w-1].B1_8">\n                    <ion-col style="text-align: left">\n                      <ion-row>\n                        <label>5.7 การผลิตน้ำประปา มีระบบการฆ่าเชื้อโรคหรือไม่ </label>\n                      </ion-row>\n                    </ion-col>\n                    <ion-col>\n                      <ion-row>\n                        <ion-radio style="margin-left:10px" item-left [value]=1></ion-radio>\n                        <label style="margin-left:30px;margin-top:-20px">1. มีการฆ่าเชื้อโรคโดยการใส่คลอรีน</label>\n                      </ion-row>\n                      <ion-row>\n                        <ion-radio style="margin-left:10px" item-left [value]=2></ion-radio>\n                        <label style="margin-left:10px">2. มีด้วยวิธีอื่น </label>\n                      </ion-row>\n                      <ion-row>\n                        <ion-input style="margin-left:20px" *ngIf="sn2_2B1_5[w-1].B1_8 == 2" (ionChange)="validateFormB1_5(w-1)" [(ngModel)]="sn2_2B1_5[w-1].B1_8_2"\n                          type="string" placeholder="ระบุวิธี"></ion-input>\n                      </ion-row>\n                      <p id="error2" *ngIf="!validateB1_5[w-1].B1_8_2  && notValid" danger padding-left>กรุณาป้อนวิธีฆ่าเชื้อโรค</p>\n                      <ion-row>\n                        <ion-radio style="margin-left:10px" item-left [value]=3></ion-radio>\n                        <label style="margin-left:10px">3. ไม่มีการฆ่าเชื้อโรค</label>\n                      </ion-row>\n                    </ion-col>\n                  </ion-row>\n                  <p id="error2" *ngIf="!validateB1_5[w-1].B1_8 && notValid" danger padding-left>กรุณาเลือกระบบการฆ่าเชื้อโรค</p>\n                </ion-grid>\n              </div>\n            </div>\n          </div>\n          <ion-item>\n            <ion-label stacked id="fontsize">\n              <label id="bold">6.</label>ในหมู่บ้าน/ชุมชนมีระบบบำบัดน้ำเสียหรือไม่</ion-label>\n          </ion-item>\n          <ion-row radio-group (ionChange)="validateForm()" [(ngModel)]="sn2_2.B1_9">\n            <ion-col>\n              <ion-item>\n                <ion-radio item-left [value]=true></ion-radio>\n                <ion-label>1. มี</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-radio item-left [value]=false></ion-radio>\n                <ion-label>2. ไม่มี</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <p id="error2" *ngIf="!validate.B1_9 && notValid" danger padding-left>กรุณาเลือกชุมชนมีระบบบำบัดน้ำเสียหรือไม่</p>\n          <ion-item>\n            <ion-label stacked id="fontsize" text-wrap>\n              <label id="bold">7.</label>ในช่วงเวลา 5 ปีที่ผ่านมา หมู่บ้าน/ชุมชนแห่งนี้เคยเกิดภัยธรรมชาติหรือไม่</ion-label>\n          </ion-item>\n          <ion-row radio-group (ionChange)="validateForm()" [(ngModel)]="sn2_2.B1_10">\n            <ion-col>\n              <ion-item>\n                <ion-radio item-left [value]=false></ion-radio>\n                <ion-label>1. ไม่เคย</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-radio item-left [value]=true></ion-radio>\n                <ion-label>2. เคย</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <p id="error2" *ngIf="!validate.B1_10 && notValid" danger padding-left>กรุณาเลือกในช่วงเวลา 5 ปีที่ผ่านมา หมู่บ้าน/ชุมชนแห่งนี้เคยเกิดภัยธรรมชาติหรือไม่</p>\n          <div *ngIf="sn2_2.B1_10">\n            <ion-row>\n              <label>ภัยธรรมชาติที่เกิดมีอะไรบ้าง</label>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                <ion-item>\n                  <ion-label> 2.1 ภัยจากคลื่นสึนามิ </ion-label>\n                  <ion-checkbox (ionChange)="validateForm()" [(ngModel)]="sn2_2.B1_10_1"></ion-checkbox>\n                </ion-item>\n                <ion-item>\n                  <ion-label> 2.2 อุทกภัย ดินโคลนถล่ม </ion-label>\n                  <ion-checkbox (ionChange)="validateForm()" [(ngModel)]="sn2_2.B1_10_2"></ion-checkbox>\n                </ion-item>\n                <ion-item>\n                  <ion-label> 2.3 ภัยจากแผ่นดินไหวและอาคารถล่ม </ion-label>\n                  <ion-checkbox (ionChange)="validateForm()" [(ngModel)]="sn2_2.B1_10_3"></ion-checkbox>\n                </ion-item>\n                <ion-item>\n                  <ion-label> 2.4 พายุหมุนเขตร้อน </ion-label>\n                  <ion-checkbox (ionChange)="validateForm()" [(ngModel)]="sn2_2.B1_10_4"></ion-checkbox>\n                </ion-item>\n                <ion-item>\n                  <ion-label> 2.5 ภัยจากไฟป่าและหมอกควัน </ion-label>\n                  <ion-checkbox (ionChange)="validateForm()" [(ngModel)]="sn2_2.B1_10_5"></ion-checkbox>\n                </ion-item>\n              </ion-col>\n              <ion-col>\n                <ion-item>\n                  <ion-label> 2.6 ภัยแล้ง </ion-label>\n                  <ion-checkbox (ionChange)="validateForm()" [(ngModel)]="sn2_2.B1_10_6"></ion-checkbox>\n                </ion-item>\n                <ion-item>\n                  <ion-label> 2.7 ภัยจากอากาศหนาว </ion-label>\n                  <ion-checkbox (ionChange)="validateForm()" [(ngModel)]="sn2_2.B1_10_7"></ion-checkbox>\n                </ion-item>\n                <ion-item>\n                  <ion-label> 2.8 ภัยจากโรคระบาดในมนุษย์ </ion-label>\n                  <ion-checkbox [(ngModel)]="sn2_2.B1_10_8"></ion-checkbox>\n                </ion-item>\n                <ion-item>\n                  <ion-label> 2.9 ภัยจากโรค แมลง สัตว์ ศัตรูพืชระบาด </ion-label>\n                  <ion-checkbox (ionChange)="validateForm()" [(ngModel)]="sn2_2.B1_10_9"></ion-checkbox>\n                </ion-item>\n                <ion-item>\n                  <ion-label> 2.10 ภัยจากโรคระบาดสัตว์และสัตว์น้ำ </ion-label>\n                  <ion-checkbox (ionChange)="validateForm()" [(ngModel)]="sn2_2.B1_10_10"></ion-checkbox>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <p id="error2" *ngIf="!validate.B1_10_1 && notValid" danger padding-left>กรุณาเลือกภัยธรรมชาติ ในช่วงเวลา 5 ปีที่ผ่านมา</p>\n          </div>\n          <ion-item>\n            <ion-label stacked id="fontsize" text-wrap>\n              <label id="bold">8.</label>ในหมู่บ้าน/ชุมชนแห่งนี้มีการเตือนภัยและมาตรการช่วยเหลือน้ำท่วมหรือไม่</ion-label>\n          </ion-item>\n          <ion-row radio-group (ionChange)="validateForm()" [(ngModel)]="sn2_2.B1_11">\n            <ion-col>\n              <ion-item>\n                <ion-radio item-left [value]=false></ion-radio>\n                <ion-label>1. ไม่มี</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-radio item-left [value]=true></ion-radio>\n                <ion-label>2. มี</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <p id="error2" *ngIf="!validate.B1_11 && notValid" danger padding-left>กรุณาเลือกในหมู่บ้าน/ชุมชนแห่งนี้มีการเตือนภัยและมาตรการช่วยเหลือน้ำท่วมหรือไม่</p>\n          <div *ngIf="sn2_2.B1_11">\n            <ion-row>\n              <label>มีลักษณะการดำเนินการเป็นอย่างไร</label>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                <ion-item>\n                  <ion-label> 2.1 มี ระบบเป็นไปตามระบบของทางราชการ </ion-label>\n                  <ion-checkbox (ionChange)="validateForm()" [(ngModel)]="sn2_2.B1_11_1"></ion-checkbox>\n                </ion-item>\n                <ion-item>\n                  <ion-label> 2.2 มี โดยหมู่บ้าน/ชุมชนร่วมกันวางแผนจัดการเอง </ion-label>\n                  <ion-checkbox (ionChange)="validateForm()" [(ngModel)]="sn2_2.B1_11_2"></ion-checkbox>\n                </ion-item>\n                <ion-item>\n                  <ion-label> 2.3 มี โดยมีหน่วยงานอื่นให้คำแนะนำและบริหารจัดการ </ion-label>\n                  <ion-checkbox (ionChange)="validateForm()" [(ngModel)]="sn2_2.B1_11_3"></ion-checkbox>\n                </ion-item>\n                <ion-item>\n                  <ion-label> 2.4 มี ลักษณะการดำเนินงานอื่น </ion-label>\n                  <ion-checkbox (ionChange)="validateForm()" [(ngModel)]="sn2_2.B1_11_4"></ion-checkbox>\n                </ion-item>\n                <ion-item>\n                  <ion-input *ngIf="sn2_2.B1_11_4" (ionChange)="validateForm()" [(ngModel)]="sn2_2.B1_11_4_1" type="string" placeholder="ระบุ"></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <p id="error2" *ngIf="!validate.B1_11_4_1 && notValid" danger padding-left>กรุณาป้อนลักษณะการดำเนินการ อื่นๆ</p>\n            <p id="error2" *ngIf="!validate.B1_11_1 && notValid" danger padding-left>กรุณาป้อนลักษณะการดำเนินการ การเตือนภัยและมาตรการช่วยเหลือน้ำท่วม</p>\n          </div>\n        </ion-list>\n        <button ion-button (click)="save2()">ถัดไป</button>\n      </ion-slide>\n      <ion-slide *ngSwitchCase="\'3\'">\n        <ion-list no-lines id="container">\n          <ion-item>\n            <ion-label stacked id="fontsize" text-wrap>\n              <label id="bold">9.</label>ในหมู่บ้าน/ชุมชนแห่งนี้มีโครงการจัดการน้ำเพื่อการเกษตรชุมชนหรือไม่</ion-label>\n          </ion-item>\n          <ion-row radio-group (ionChange)="validateForm()" [(ngModel)]="sn2_2.B2_12">\n            <ion-col>\n              <ion-item>\n                <ion-radio item-left [value]=true></ion-radio>\n                <ion-label>1. มี</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-radio item-left [value]=false></ion-radio>\n                <ion-label>2. ไม่มี</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <p id="error2" *ngIf="!validate.B2_12 && notValid" danger padding-left>กรุณาเลือก มีโครงการจัดการน้ำเพื่อการเกษตรชุมชนหรือไม่</p>\n          <div *ngIf="sn2_2.B2_12">\n            <ion-row>\n              <ion-item *ngIf="sn2_2.B2_12">\n                <ion-label stacked id="fontsize">10.หาก "มี" มีจำนวนกี่โครงการ</ion-label>\n                <ion-input [(ngModel)]="sn2_2.B2_12_1" type="number" (ionChange)="B2_12_1Change(); validateForm()" placeholder="จำนวนโครงการ"></ion-input>\n              </ion-item>\n            </ion-row>\n            <p id="error2" *ngIf="!validate.B2_12_1" danger padding-left>กรุณาป้อนจำนวนโครงการจัดการน้ำเพื่อการเกษตรชุมชน</p>\n            <div *ngIf="validate.B2_12_1">\n              <div id="border-div" *ngFor="let w of range(1,sn2_2.B2_12_1,1);">\n                <ion-row>\n                  <ion-col>\n                    <ion-item>\n                      <ion-label stacked id="fontsize">โครงการ ที่ {{w}}/{{sn2_2.B2_12_1}} 10.1 ชื่อโครงการ</ion-label>\n                      <ion-input (ionChange)="validateFormB2_12_1(w-1)" [(ngModel)]="sn2_2B2_12[w-1].B2_12_1_1" type="text" placeholder="ชื่อโครงการ"></ion-input>\n                    </ion-item>\n                    <p id="error2" *ngIf="!validateB2_12[w-1].B2_12_1_1 && notValid" danger padding-left>กรุณาป้อนชื่อโครงการ</p>\n                    <ion-row>\n                      <ion-col style="text-align: left" col-6>\n                        <label> 10.2 พื้นที่ของโครงการมีกี่ไร่ กี่งาน กี่ตารางวา</label>\n                        <ion-label>(หากมีหลายพื้นที่ให้รวมทุกที่) </ion-label>\n                      </ion-col>\n                      <ion-col col-6>\n                        <ion-row>\n                          <ion-col>\n                            <ion-row>\n                              <ion-input (ionChange)="validateFormB2_12_1(w-1)" [(ngModel)]="sn2_2B2_12[w-1].B2_13_1" type="number" placeholder="ไร่"></ion-input>\n                              <label style="margin-left:10px">ไร่</label>\n                            </ion-row>\n                            <p id="error2" *ngIf="!validateB2_12[w-1].B2_13_1 && notValid" danger padding-left>กรุณาป้อนจำนวนไร่</p>\n                          </ion-col>\n                          <ion-col>\n                            <ion-row>\n                              <ion-input style="margin-left:10px" (ionChange)="validateFormB2_12_1(w-1)" [(ngModel)]="sn2_2B2_12[w-1].B2_13_2" type="number"\n                                placeholder="งาน"></ion-input>\n                              <label style="margin-left:10px">งาน</label>\n                            </ion-row>\n                            <p id="error2" *ngIf="!validateB2_12[w-1].B2_13_2 && notValid" danger padding-left>กรุณาป้อนจำนวนงาน</p>\n                          </ion-col>\n                        </ion-row>\n                        <ion-col>\n                          <ion-row>\n                            <ion-input style="margin-top:10px" (ionChange)="validateFormB2_12_1(w-1)" [(ngModel)]="sn2_2B2_12[w-1].B2_13_3" type="number"\n                              placeholder="ตารางวา"></ion-input>\n                            <label style="margin-left:10px">ตารางวา</label>\n                          </ion-row>\n                          <p id="error2" *ngIf="!validateB2_12[w-1].B2_13_3 && notValid" danger padding-left>กรุณาป้อนจำนวนตารางวา</p>\n                        </ion-col>\n                      </ion-col>\n                    </ion-row>\n                    <p id="error2" *ngIf="!validateB2_12[w-1].B2_13 && notValid" danger padding-left>กรุณาป้อนขนาดพื้นที่ของโครงการ</p>\n                    <ion-row>\n                      <ion-col style="text-align: left" col-6>\n                        <label> 10.3 จำนวนครัวเรือนที่เป็นสมาชิกโครงการมีจำนวนเท่าไร</label>\n                      </ion-col>\n                      <ion-col col-6>\n                        <ion-row>\n                          <ion-input (ionChange)="validateFormB2_12_1(w-1)" [(ngModel)]="sn2_2B2_12[w-1].B2_14" type="number" placeholder="ครัวเรือน"></ion-input>\n                          <label style="margin-left:10px">ครัวเรือน</label>\n                        </ion-row>\n                        <p id="error2" *ngIf="!validateB2_12[w-1].B2_14 && notValid" danger padding-left>กรุณาป้อนจำนวนครัวเรือน</p>\n                      </ion-col>\n                    </ion-row>\n                    <ion-row>\n                      <ion-col style="text-align: left" col-6>\n                        <label> 10.4 โครงการใช้น้ำผิวดินปริมาณโดยเฉลี่ยเดือนละเท่าไร</label>\n                        <ion-label> (ให้รวมทุกพื้นที่ของโครงการ)</ion-label>\n                      </ion-col>\n                      <ion-col col-6>\n                        <ion-row>\n                          <ion-input (ionChange)="validateFormB2_12_1(w-1)" [(ngModel)]="sn2_2B2_12[w-1].B2_15" type="number" placeholder="ลบ.ม./เดือน"></ion-input>\n                          <label style="margin-left:10px">ลบ.ม./เดือน</label>\n                        </ion-row>\n                        <p id="error2" *ngIf="!validateB2_12[w-1].B2_15 && notValid" danger padding-left>กรุณาป้อนจำนวนปริมาณโดยเฉลี่ยการใช้น้ำผิวดินของโครงการ</p>\n                      </ion-col>\n                    </ion-row>\n                    <ion-row>\n                      <ion-col style="text-align: left" col-6>\n                        <label> 10.5 โครงการมีบ่อน้ำบาดาลจำนวนกี่บ่อ</label>\n                      </ion-col>\n                      <ion-col col-6>\n                        <ion-row>\n                          <ion-input (ionChange)="validateFormB2_12_1(w-1)" (ionChange)="validateFormB2_12_1(w-1)" [(ngModel)]="sn2_2B2_12[w-1].B2_16"\n                            type="number" placeholder="บ่อ"></ion-input>\n                          <label style="margin-left:10px">บ่อ</label>\n                        </ion-row>\n                        <p id="error2" *ngIf="!validateB2_12[w-1].B2_16 && notValid" danger padding-left>กรุณาป้อนจำนวนบ่อน้ำบาดาล</p>\n                      </ion-col>\n                    </ion-row>\n                    <ion-row *ngIf="sn2_2B2_12[w-1].B2_16 != 0">\n                      <ion-col style="text-align: left" col-6>\n                        <label> 10.6 โครงการใช้น้ำบาดาลปริมาณโดยเฉลี่ยเดือนละเท่าไร</label>\n                        <ion-label> (ให้รวมทุกพื้นที่ของโครงการ)</ion-label>\n                      </ion-col>\n                      <ion-col col-6>\n                        <ion-row>\n                          <ion-input (ionChange)="validateFormB2_12_1(w-1) && notValid" [(ngModel)]="sn2_2B2_12[w-1].B2_17" type="number" placeholder="ลบ.ม./เดือน"></ion-input>\n                          <label style="margin-left:10px">ลบ.ม./เดือน</label>\n                        </ion-row>\n                        <p id="error2" *ngIf="!validateB2_12[w-1].B2_17 && notValid" danger padding-left>กรุณาป้อนจำนวนปริมาณโดยเฉลี่ยการใช้น้ำบาดาลของโครงการ</p>\n                      </ion-col>\n                    </ion-row>\n                  </ion-col>\n                </ion-row>\n              </div>\n            </div>\n          </div>\n        </ion-list>\n        <button ion-button (click)="saveData()">บันทึก</button>\n      </ion-slide>\n    </ion-slides>\n  </div>\n\n</ion-content>\n<ion-footer class="applyFooter">\n  <ion-grid>\n    <ion-row no-padding no-margin>\n      <ion-col col-5>\n        <button (click)="navigateToHome()" ion-button icon-start color="light">\n          <ion-icon name="home"> Home</ion-icon>\n        </button>\n      </ion-col>\n      <ion-col col-7>\n        <button ion-button color="secondary" style="color:black;font-size:15px;" (click)="navigate(\'map\')">ดูแผนที่</button>\n        <button ion-button color="warning" style="color:black;font-size:15px;" (click)="navigate(\'converter\')">มาตราวัด</button>\n        <button ion-button color="light" (click)=\'pauseEa()\'>หยุดชั่วคราว</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer>'/*ion-inline-end:"/Users/pomgade/Desktop/NSOWaterMGTSystem21/src/pages/form2-2/form2-2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["t" /* NavParams */], __WEBPACK_IMPORTED_MODULE_9__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* Events */]])
    ], Form2_2Page);
    return Form2_2Page;
}());

//# sourceMappingURL=form2-2.js.map

/***/ }),

/***/ 778:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SN2_2P1_3; });
var SN2_2P1_3 = (function () {
    function SN2_2P1_3() {
    }
    return SN2_2P1_3;
}());

//# sourceMappingURL=SN2_2P1_3.js.map

/***/ }),

/***/ 779:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SN2_2P1_5; });
var SN2_2P1_5 = (function () {
    function SN2_2P1_5() {
    }
    return SN2_2P1_5;
}());

//# sourceMappingURL=SN2_2P1_5.js.map

/***/ }),

/***/ 780:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SN2_2P2_12; });
var SN2_2P2_12 = (function () {
    function SN2_2P2_12() {
    }
    return SN2_2P2_12;
}());

//# sourceMappingURL=SN2_2P2.js.map

/***/ }),

/***/ 781:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateSN2_2; });
var ValidateSN2_2 = (function () {
    function ValidateSN2_2() {
    }
    return ValidateSN2_2;
}());

//# sourceMappingURL=ValidateSN2_2.js.map

/***/ }),

/***/ 782:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateSN2_2B1_3; });
var ValidateSN2_2B1_3 = (function () {
    function ValidateSN2_2B1_3() {
    }
    return ValidateSN2_2B1_3;
}());

//# sourceMappingURL=ValidateSN2_2B1_3.js.map

/***/ }),

/***/ 783:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateSN2_2B1_5; });
var ValidateSN2_2B1_5 = (function () {
    function ValidateSN2_2B1_5() {
    }
    return ValidateSN2_2B1_5;
}());

//# sourceMappingURL=ValidateSN2_2B1_5.js.map

/***/ }),

/***/ 784:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateSN2_2B2_12; });
var ValidateSN2_2B2_12 = (function () {
    function ValidateSN2_2B2_12() {
    }
    return ValidateSN2_2B2_12;
}());

//# sourceMappingURL=ValidateSN2_2B2_12.js.map

/***/ }),

/***/ 785:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateSN2_2P0; });
var ValidateSN2_2P0 = (function () {
    function ValidateSN2_2P0() {
    }
    return ValidateSN2_2P0;
}());

//# sourceMappingURL=ValidateSN2_2B0.js.map

/***/ })

});
//# sourceMappingURL=2.js.map