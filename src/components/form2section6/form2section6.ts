import { AlertController, Events } from 'ionic-angular';
import { Component, Input } from '@angular/core';
import { SN2_1P6 } from '../../models/SN2_1/SN2_1P6';
import { Validate21P6 } from '../../models/SN2_1/Validate21P6';

/**
 * Generated class for the Form2section6Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'form2section6',
  templateUrl: 'form2section6.html'
})
export class Form2section6Component {

  notValid = false;
  @Input() section6: SN2_1P6 = {
    status: 0,
    A6_1: null,
    A6_2_1_1: null,
    A6_2_1_2: null,
    A6_2_1_3: null,
    A6_2_1_4: null,
    A6_2_2_1: null,
    A6_2_2_2: null,
    A6_2_2_3: null,
    A6_2_2_4: null,
    A6_2_3_1: null,
    A6_2_3_2: null,
    A6_2_3_3: null,
    A6_2_3_4: null,
    A6_2_4_1: null,
    A6_2_4_2: null,
    A6_2_4_3: null,
    A6_2_4_4: null,
    A6_2_5_1: null,
    A6_2_5_2: null,
    A6_2_5_3: null,
    A6_2_5_4: null
  }

  validate21p6: Validate21P6 = {
    A6_1: false,
    A6_2_1_1: false,
    A6_2_1_2: false,
    A6_2_1_3: false,
    A6_2_1_4: false,
    A6_2_2_1: false,
    A6_2_2_2: false,
    A6_2_2_3: false,
    A6_2_2_4: false,
    A6_2_3_1: false,
    A6_2_3_2: false,
    A6_2_3_3: false,
    A6_2_3_4: false,
    A6_2_4_1: false,
    A6_2_4_2: false,
    A6_2_4_3: false,
    A6_2_4_4: false,
    A6_2_5_1: false,
    A6_2_5_2: false,
    A6_2_5_3: false,
    A6_2_5_4: false
  }

  constructor(private alertCtrl: AlertController, private events: Events) {
    //console.log('Hello Form2Section6Component Component');
  }

  validateData() {
    this.validate21p6.A6_1 = (typeof (this.section6.A6_1) === 'boolean');
    this.inRange(1)
    this.inRange(2)
    this.inRange(3)
    this.inRange(4)
    this.inRange(5)
    if(isNaN(this.section6.A6_2_1_1) && isNaN(this.section6.A6_2_2_1) && isNaN(this.section6.A6_2_3_1)
      && isNaN(this.section6.A6_2_4_1) && isNaN(this.section6.A6_2_5_1) && this.section6.A6_1 !== false){
        this.validate21p6['A6_2_1_1'] = false;
        this.validate21p6['A6_2_2_1'] = false;
        this.validate21p6['A6_2_3_1'] = false;
        this.validate21p6['A6_2_4_1'] = false;
        this.validate21p6['A6_2_5_1'] = false;
    }
    //console.log(this.validate21p6)
  }

  inRange(index: number) {
    let sub_index = 1
    let k = 'A6_2_' + index + '_' + sub_index
    //console.log("a6_1 =" + this.section6['A6_1'])
    if (this.section6['A6_1'] == false) {
      this.validate21p6[k] = true
      for (let i = 0; i < 3; i++) {
        sub_index = sub_index + 1;
        k = 'A6_2_' + index + '_' + sub_index
        this.validate21p6[k] = true
      }
    }else if(this.section6[k] > 0 && this.section6[k] < 100) {
      this.validate21p6[k] = true
      for (let i = 0; i < 3; i++) {
        sub_index = sub_index + 1;
        k = 'A6_2_' + index + '_' + sub_index
        if (i == 0)
          this.validate21p6[k] = this.section6[k] >= 0 && this.section6[k] <= 366;
        if (i == 1)
          this.validate21p6[k] = this.section6[k] >= 0 && this.section6[k] <= 23;
        if (i == 2)
          this.validate21p6[k] = this.section6[k] >= 0 && this.section6[k] <= 1000;
      }
    }else if(this.section6[k] === 0 || this.section6[k] === '0') {
      this.validate21p6[k] = true
      for (let i = 0; i < 3; i++) {
        sub_index = sub_index + 1;
        k = 'A6_2_' + index + '_' + sub_index
        this.validate21p6[k] = this.section6[k] == 0
      }
    }else if(isNaN(Number(this.section6[k])) || this.section6[k] === ''){
      this.validate21p6[k] = true
      for(let i = 0; i < 3; i++){
        sub_index = sub_index + 1
        k = 'A6_2_' + index + '_' + sub_index
        this.validate21p6[k] = isNaN(Number(this.section6))
      }
    }
  }

  onValidateClick() {
    let valid = Object.keys(this.validate21p6).filter(k => this.validate21p6[k] == false).length > 0 ? false : true
    if (valid) {
      this.notValid = false;
    } else {
      this.notValid = true;
    }
    return valid;
  }
  save() {
    //console.log(Object.keys(this.validate21p6).filter(k => !this.validate21p6[k]))
    if (this.onValidateClick()) {
      this.section6.status = 4;
      this.events.publish("saveSN21", 0);
    }
    else {
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
}
