import { FormControl } from '@angular/forms';
import { Events, AlertController } from 'ionic-angular';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ValidateSN1P2 } from '../../models/SN1/validateSN1P2';
/**
 * Generated class for the FirstForm_2Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'first-form-2',
  templateUrl: 'first-form-2.html'
})
export class FirstForm_2Component {

  WaterCensus1Form2: FormGroup;
  private date;
  @Input() sn1p2;
  notValid: boolean = false;
  validater:ValidateSN1P2 = new  ValidateSN1P2();
  valid: boolean = true;
  constructor(public events: Events, public formBuilder: FormBuilder,private alertCtrl:AlertController) {
    //console.log('Hello FirstForm_2Component Component');

    this.WaterCensus1Form2 = formBuilder.group({
      'H1_4': [''],
      'N1': ['0'],
      'N0': ['0'],
      'A9': [''],
      'A10': [''],
      'N': [null],
      // 'P1': [null],
      // 'P2': [null],
      // 'P3': [null],
      // 'P4': [null]
    })
  }

  //deletable
  isNumber(control: FormControl): any {
    //console.log("checking isNumber")
    let temp = this.sn1p2
    //console.log(temp)
    if (this.sn1p2) {
      if (this.sn1p2.A8 == '4' || this.sn1p2.A8 == '5') {
        if (this.sn1p2.H1_4 == 2 ) {
          if (isNaN(Number(control.value))) {
            return { "not a number": true };
          }
        }
      }
    }
    return null;
  }

  //deletable
  buildingValue(control: FormControl): any {
    if (this.sn1p2)
      if (this.sn1p2.A8 == '4' || this.sn1p2.A8 == '5') {
        if (control.value != null) {
          return { 'missing1 value': true }
        }
      }
    return null;
  }

  validate(){
    //เป็นอาหารสูงหรืออาคารสำนักงาน
    let isBigbuilding = this.sn1p2.A8 == 4 || this.sn1p2.A8 == 5

    this.validater.H1_4 = !isNaN(Number(this.sn1p2.H1_4)) && (Number(this.sn1p2.H1_4) == 1 || Number(this.sn1p2.H1_4) == 2) || !isBigbuilding
    this.validater.N = !isNaN(Number(this.sn1p2.N)) && this.sn1p2.N > 0 
    this.validater.N0 = Number(this.sn1p2.H1_4) == 1 ? true : !isNaN(Number(this.sn1p2.N0)) || !isBigbuilding 
    this.validater.N1 = Number(this.sn1p2.H1_4) == 1 ? true : !isNaN(Number(this.sn1p2.N1)) || !isBigbuilding
    // this.validater.P1 = (this.sn1p2.P1 === true || this.sn1p2.P1 === false) || !isBigbuilding
    // this.validater.P2 = (this.sn1p2.P2 === true || this.sn1p2.P2 === false) || !isBigbuilding
    // this.validater.P3 = (this.sn1p2.P3 === true || this.sn1p2.P3 === false) || !isBigbuilding
    // this.validater.P4 = (this.sn1p2.P4 === true || this.sn1p2.P4 === false) || !isBigbuilding
    //console.log("validateeeeeee")
    //console.log(this.validater)
  }

  saveData() {
    this.date = new Date();
    this.validate();
    let l = Object.keys(this.validater).filter(v => !this.validater[v])
    //console.log("l = " + l)
    if (l.length == 0) {
      // alert("save at " + this.date);
      if((this.sn1p2.A8 == 4 || this.sn1p2.A8 == 5)&&this.sn1p2.H1_4==2){
        this.sn1p2.status = 4;
        this.events.publish("DataSubmited", this.sn1p2, this.date);
      }else
        this.events.publish("FirstformData2Submited", this.sn1p2);
    } else {
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
