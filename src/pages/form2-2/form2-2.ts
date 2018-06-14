import { Component, OnInit } from '@angular/core';
import { SN2_2 } from '../../models/SN2_2/SN2_2';
import { SN2_2P1_3 } from '../../models/SN2_2/SN2_2P1_3';
import { IonicPage, NavController, NavParams, AlertController, Events } from 'ionic-angular';
import { SN2_2P1_5 } from '../../models/SN2_2/SN2_2P1_5';
import { SN2_2P2_12 } from '../../models/SN2_2/SN2_2P2';
import { ValidateSN2_2 } from '../../models/SN2_2/ValidateSN2_2';
import { ValidateSN2_2B1_3 } from '../../models/SN2_2/ValidateSN2_2B1_3';
import { ValidateSN2_2B1_5 } from '../../models/SN2_2/ValidateSN2_2B1_5';
import { ValidateSN2_2B2_12 } from '../../models/SN2_2/ValidateSN2_2B2_12';
import { Area } from '../../models/area';

import { HttpProvider } from '../../providers/http/http';
import { ValidateSN2_2P0 } from '../../models/SN2_2/ValidateSN2_2B0';
/**
 * Generated class for the Form2_2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'form2-2'
})
@Component({
  selector: 'page-form2-2',
  templateUrl: 'form2-2.html',
})
export class Form2_2Page implements OnInit {

  ea: Area;
  sn2_2: SN2_2;
  sn2_2B1_3: SN2_2P1_3[] = [];
  sn2_2B1_5: SN2_2P1_5[] = [];
  sn2_2B2_12: SN2_2P2_12[] = [];
  page = '1';
  disable1=true;
  disable2=true;
  notValid = false;
  validate: ValidateSN2_2 = new ValidateSN2_2();
  validateB0: ValidateSN2_2P0 = new ValidateSN2_2P0();
  validateB1_3: ValidateSN2_2B1_3[] = [];
  validateB1_5: ValidateSN2_2B1_5[] = [];
  validateB2_12: ValidateSN2_2B2_12[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public httpProvider: HttpProvider, private alertCtrl: AlertController, private events: Events) {
    
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
  newValidate() {
    for (let i in this.sn2_2B1_3) {
      //console.log(i);
      this.validateB1_3.push(new ValidateSN2_2B1_3());
    }
    for (let i in this.sn2_2B1_5) {
      //console.log(i);
      this.validateB1_5.push(new ValidateSN2_2B1_5());
    }
    for (let i in this.sn2_2B2_12) {
      //console.log(i);
      this.validateB2_12.push(new ValidateSN2_2B2_12());
    }
  }
  ngOnInit(): void {
    // this.validateForm();
  }

  validateSN2_2P0() {
    this.validateB0.VIL_NAME = typeof (this.sn2_2.B0.VIL_NAME) === 'string' && this.sn2_2.B0.VIL_NAME.length > 0;
    this.validateB0.BASIN = this.sn2_2.B0.BASIN != null;
  }

  validateForm(): any {

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
  }

  validateFormB1_3(i) {
    this.validateB1_3[i].B1_3_1 = !this.sn2_2.B1_1 || ((typeof (this.sn2_2B1_3[i].B1_3_1) === 'string') && this.sn2_2B1_3[i].B1_3_1.length > 0);
    this.validateB1_3[i].B1_3_2 = !this.sn2_2.B1_1 || Boolean(this.sn2_2B1_3[i].B1_3_2_1 || this.sn2_2B1_3[i].B1_3_2_2 || this.sn2_2B1_3[i].B1_3_2_3 || this.sn2_2B1_3[i].B1_3_2_4 || this.sn2_2B1_3[i].B1_3_2_5);
    this.validateB1_3[i].B1_3_2_5_1 = !this.sn2_2.B1_1 || (!this.sn2_2B1_3[i].B1_3_2_5 || (typeof (this.sn2_2B1_3[i].B1_3_2_5_1) === 'string') && (this.sn2_2B1_3[i].B1_3_2_5_1.length > 0));
    this.validateB1_3[i].B1_3_3 = !this.sn2_2.B1_1 || (typeof (this.sn2_2B1_3[i].B1_3_3) === 'string' && (this.sn2_2B1_3[i].B1_3_3 === '1' || this.sn2_2B1_3[i].B1_3_3 === '2' || this.sn2_2B1_3[i].B1_3_3 === '3.1' || this.sn2_2B1_3[i].B1_3_3 === '3.2'));
    this.validateB1_3[i].B1_3_3_1 = !this.sn2_2.B1_1 || (this.sn2_2B1_3[i].B1_3_3 != '1' || (this.sn2_2B1_3[i].B1_3_3 == '1' && this.sn2_2B1_3[i].B1_3_3_1 > 0 && this.sn2_2B1_3[i].B1_3_3_1 < 100000));
    this.validateB1_3[i].B1_3_3_2_1 = !this.sn2_2.B1_1 || (this.sn2_2B1_3[i].B1_3_3 != '2' || (this.sn2_2B1_3[i].B1_3_3_2_1 >= 0 && this.sn2_2B1_3[i].B1_3_3_2_1 < 1000));
    this.validateB1_3[i].B1_3_3_2_2 = !this.sn2_2.B1_1 || (this.sn2_2B1_3[i].B1_3_3 != '2' || (this.sn2_2B1_3[i].B1_3_3_2_2 >= 0 && this.sn2_2B1_3[i].B1_3_3_2_2 < 4 ));
    this.validateB1_3[i].B1_3_3_2_3 = !this.sn2_2.B1_1 || (this.sn2_2B1_3[i].B1_3_3 != '2' || (this.sn2_2B1_3[i].B1_3_3_2_3 >= 0 && this.sn2_2B1_3[i].B1_3_3_2_3 < 100));
    this.validateB1_3[i].B1_3_3_2_4 = !this.sn2_2.B1_1 || (this.sn2_2B1_3[i].B1_3_3 != '2' || (this.sn2_2B1_3[i].B1_3_3_2_4 > 0 && this.sn2_2B1_3[i].B1_3_3_2_4 < 100));
    this.validateB1_3[i].B1_3_3_2 = !this.sn2_2.B1_1 || (this.sn2_2B1_3[i].B1_3_3 != '2' || (this.sn2_2B1_3[i].B1_3_3_2_1 != 0 || this.sn2_2B1_3[i].B1_3_3_2_2 != 0 || this.sn2_2B1_3[i].B1_3_3_2_3 != 0));
    this.validateB1_3[i].B1_3_3_3_1_1 = !this.sn2_2.B1_1 || (this.sn2_2B1_3[i].B1_3_3 != '3.1' || (this.sn2_2B1_3[i].B1_3_3_3_1_1 > 0 && this.sn2_2B1_3[i].B1_3_3_3_1_1 < 1000));
    this.validateB1_3[i].B1_3_3_3_1_2 = !this.sn2_2.B1_1 || (this.sn2_2B1_3[i].B1_3_3 != '3.1' || (this.sn2_2B1_3[i].B1_3_3_3_1_2 > 0 && this.sn2_2B1_3[i].B1_3_3_3_1_2 < 1000));
    this.validateB1_3[i].B1_3_3_3_1_3 = !this.sn2_2.B1_1 || (this.sn2_2B1_3[i].B1_3_3 != '3.1' || (this.sn2_2B1_3[i].B1_3_3_3_1_3 > 0 && this.sn2_2B1_3[i].B1_3_3_3_1_3 < 1000));
    this.validateB1_3[i].B1_3_3_3_2_1 = !this.sn2_2.B1_1 || (this.sn2_2B1_3[i].B1_3_3 != '3.2' || (this.sn2_2B1_3[i].B1_3_3_3_2_1 > 0 && this.sn2_2B1_3[i].B1_3_3_3_2_1 < 1000));
    this.validateB1_3[i].B1_3_3_3_2_2 = !this.sn2_2.B1_1 || (this.sn2_2B1_3[i].B1_3_3 != '3.2' || (this.sn2_2B1_3[i].B1_3_3_3_2_2 > 0 && this.sn2_2B1_3[i].B1_3_3_3_2_2 < 1000));
  }

  validateFormB1_5(i) {
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
  }

  validateFormB2_12_1(i) {
    this.validateB2_12[i].B2_12_1_1 = Boolean(this.sn2_2B2_12[i].B2_12_1_1 && this.sn2_2B2_12[i].B2_12_1_1.length > 0);
    this.validateB2_12[i].B2_13_1 = (this.sn2_2B2_12[i].B2_13_1 >= 0 && this.sn2_2B2_12[i].B2_13_1 < 1000000);
    this.validateB2_12[i].B2_13_2 = (this.sn2_2B2_12[i].B2_13_2 >= 0 && this.sn2_2B2_12[i].B2_13_2 < 4);
    this.validateB2_12[i].B2_13_3 = (this.sn2_2B2_12[i].B2_13_3 >= 0 && this.sn2_2B2_12[i].B2_13_3 < 100);
    this.validateB2_12[i].B2_13 = (this.sn2_2B2_12[i].B2_13_1 != 0 || this.sn2_2B2_12[i].B2_13_2 != 0 || this.sn2_2B2_12[i].B2_13_3 != 0 );
    this.validateB2_12[i].B2_14 = (this.sn2_2B2_12[i].B2_14 > 0 && this.sn2_2B2_12[i].B2_14 < 10000);
    this.validateB2_12[i].B2_15 = (this.sn2_2B2_12[i].B2_15 > 0 && this.sn2_2B2_12[i].B2_15 < 100000000);
    this.validateB2_12[i].B2_16 = (this.sn2_2B2_12[i].B2_16 >= 0 && this.sn2_2B2_12[i].B2_16 < 100);
    this.validateB2_12[i].B2_17 = this.sn2_2B2_12[i].B2_16==0||(this.sn2_2B2_12[i].B2_17 > 0 && this.sn2_2B2_12[i].B2_17 < 100000000);
  }

  validate_section1() {
    let validate_B0 = (Object.keys(this.validateB0).filter(v => !this.validateB0[v]).length === 0);
    return validate_B0;
  }
  validate_section2() {
    let validate_2 =  this.validate.B1_1 && this.validate.B1_2 && this.validate.B1_4_1 &&  this.validate.B1_4_2 && this.validate.B1_4_3 && this.validate.B1_5_1 &&  this.validate.B1_5_2 && this.validate.B1_9 && this.validate.B1_10 && this.validate.B1_10_1 && this.validate.B1_11 && this.validate.B1_11_1 && this.validate.B1_11_4_1;
    let validate_B1_3 = !this.sn2_2.B1_1 ||(this.validateB1_3.map(v1_3 => Object.keys(v1_3).filter(v => !v1_3[v])).filter(v1_3 => v1_3.length > 0).length === 0);
    let validate_B1_5 = !this.sn2_2.B1_4_3||!this.sn2_2.B1_5_1||(this.validateB1_5.map(v1_5 => Object.keys(v1_5).filter(v => !v1_5[v])).filter(v1_5 => v1_5.length > 0).length === 0);
    return validate_2 && validate_B1_3 && validate_B1_5;
  }
  validate_section3() {
    let validate_B2_12 = (this.validateB2_12.map(v2_12 => Object.keys(v2_12).filter(v => !v2_12[v])).filter(v2_12 => v2_12.length > 0).length === 0);
    return this.validate.B2_12 && this.validate.B2_12_1 && validate_B2_12;
  }
  validateAllData() {
    this.validateSN2_2P0();
    this.validateForm();
    let validate_B0 = (Object.keys(this.validateB0).filter(v => !this.validateB0[v]).length === 0);
    let validate_B = (Object.keys(this.validate).filter(v => !this.validate[v]).length === 0);
    let validate_B1_3 = (this.validateB1_3.map(v1_3 => Object.keys(v1_3).filter(v => !v1_3[v])).filter(v1_3 => v1_3.length > 0).length === 0);
    let validate_B1_5 = (this.validateB1_5.map(v1_5 => Object.keys(v1_5).filter(v => !v1_5[v])).filter(v1_5 => v1_5.length > 0).length === 0);
    let validate_B2_12 = (this.validateB2_12.map(v2_12 => Object.keys(v2_12).filter(v => !v2_12[v])).filter(v2_12 => v2_12.length > 0).length === 0);

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
  }

  saveData() {
    // //console.log('save data')
    //console.log(this.validate_section1());
    //console.log(this.validate_section2());
    //console.log(this.validate_section3());
    // //console.log(this.validateB2_12)
    this.sn2_2B1_3.map(sn => {
      if (!sn.B1_3_2_5) {
        delete sn.B1_3_2_5_1
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

    this.sn2_2B1_5.map(sn => {
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
    } else {
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
      if(this.sn2_2.version){
        this.sn2_2.version=this.sn2_2.saveVersion+1;
      }else{
        this.sn2_2.saveVersion=0;
        this.sn2_2.version=this.sn2_2.saveVersion+1;
      }
      this.navCtrl.popToRoot();
    } else {
      this.notValid = true;
      const alert = this.alertCtrl.create({
        title: 'กรุณากรอกข้อมูลให้ถูกต้อง',
        buttons: [{
          text: 'ยืนยัน',
          handler: () => {
          }
        }]
      });
      alert.present();
    }

  }
  save1(){
    if (this.validate_section1()) {
      this.notValid = false;
      this.disable1=false;
      this.page='2';
    } else {
      this.notValid = true;
      const alert = this.alertCtrl.create({
        title: 'กรุณากรอกข้อมูลให้ถูกต้อง',
        buttons: [{
          text: 'ยืนยัน',
          handler: () => {
          }
        }]
      });
      alert.present();
    }
  }
  save2(){
    if (this.validate_section2()) {
      this.notValid = false;
      this.disable2=false;
      this.page='3';
    } else {
      this.notValid = true;
      const alert = this.alertCtrl.create({
        title: 'กรุณากรอกข้อมูลให้ถูกต้อง',
        buttons: [{
          text: 'ยืนยัน',
          handler: () => {
          }
        }]
      });
      alert.present();
    }
  }

  B1_2Change() {

    if (this.sn2_2.B1_2 <= 20) {
      if (this.sn2_2B1_3.length < this.sn2_2.B1_2) {
        for (let i = this.sn2_2B1_3.length; i < this.sn2_2.B1_2; i += 1) {
          this.sn2_2B1_3.push(new SN2_2P1_3());
          this.sn2_2B1_3[this.sn2_2B1_3.length - 1].B1_3_3 = '0';
          this.validateB1_3.push(new ValidateSN2_2B1_3());
        }
      } else {
        for (let i = this.sn2_2B1_3.length; i > this.sn2_2.B1_2; i -= 1) {
          this.sn2_2B1_3.pop();
          this.validateB1_3.pop();
        }
      }
      this.sn2_2.B1_3 = this.sn2_2B1_3;
    }
  }

  B1_5_2Change() {
    if (this.sn2_2.B1_5_2 <= 5) {
      if (this.sn2_2B1_5.length < this.sn2_2.B1_5_2) {
        for (let i = this.sn2_2B1_5.length; i < this.sn2_2.B1_5_2; i += 1) {
          this.sn2_2B1_5.push(new SN2_2P1_5());
          this.validateB1_5.push(new ValidateSN2_2B1_5());
        }
      } else {
        for (let i = this.sn2_2B1_5.length; i > this.sn2_2.B1_5_2; i -= 1) {
          this.sn2_2B1_5.pop();
          this.validateB1_5.pop();
        }
      }
      this.sn2_2.B1_5 = this.sn2_2B1_5;
    }
  }

  B2_12_1Change() {
    if (this.sn2_2.B2_12_1 <= 5) {
      if (this.sn2_2B2_12.length < this.sn2_2.B2_12_1) {
        for (let i = this.sn2_2B2_12.length; i < this.sn2_2.B2_12_1; i += 1) {
          this.sn2_2B2_12.push(new SN2_2P2_12());
          this.validateB2_12.push(new ValidateSN2_2B2_12());
          this.validateFormB2_12_1(i);
        }
      } else {
        for (let i = this.sn2_2B2_12.length; i > this.sn2_2.B2_12_1; i -= 1) {
          this.sn2_2B2_12.pop();
          this.validateB2_12.pop();
        }
      }
      this.sn2_2.B2_12_1_1 = this.sn2_2B2_12;
    }
  }


  choose1(){
    if(this.sn2_2.B1_4_1){
      this.sn2_2.B1_4_2 = false
    }
  }
  choose2(){
    if(this.sn2_2.B1_4_2){
      this.sn2_2.B1_4_1 = false
      
    }
  }
  // choose3(){
  //   if(this.sn2_2.B1_4_3){
  //     this.sn2_2.B1_4_1 = false
  //     this.sn2_2.B1_4_2 = false
  //   }
  // }


  range(min, max, step) {
    step = step || 1;
    let input = [];
    for (let i = min; i <= max; i += step) {
      input.push(i);
    }
    return input;
  }
  pauseEa() {
    this.sn2_2.status = 3;
    this.sn2_2.Modify_DATE.push(new Date());
    this.navCtrl.popToRoot();
  }
  deleteEa() {
    const alert = this.alertCtrl.create({
      title: 'ต้องการจะลบใช่หรือไม่',
      buttons: [{
        text: 'ยืนยัน',
        handler: () => {
          this.events.publish("delete", this.sn2_2, 2);
          this.navCtrl.popToRoot();
        }
      }, {
        text: 'ยกเลิก',
        role: 'cancel',
        handler: () => {
          //console.log('Application exit prevented!');
        }
      }]
    });
    alert.present();
  }
  navigateToHome() {
    const alert = this.alertCtrl.create({
      title: 'ต้องการบันทึกก่อนกลับสู่หน้าแรกหรือไม่?',
      buttons: [{
        text: 'บันทึก',
        handler: () => {
          this.pauseEa();
        }
      }, {
        text: 'ไม่บันทึก',
        handler: () => {
          //console.log('ไม่บันทึก');
          this.events.publish('noSave2');
          this.navCtrl.popToRoot();
        }
      }, {
        text: 'ยกเลิก',
        role: 'cancel',
        handler: () => {
          //console.log('Application exit prevented!');
        }
      }]
    });
    alert.present();
  }
  ionViewDidLoad() {
    //console.log('ionViewDidLoad Form2_2Page');
  }
  navigate(page: string) {
    this.navCtrl.push(page, {}, { animate: false });
  }

}
