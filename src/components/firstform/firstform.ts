import { FormControl } from '@angular/forms';
import { Component, Input, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Geolocation } from '@ionic-native/geolocation';
import { Events, AlertController } from 'ionic-angular';
import { SN1P2 } from '../../models/SN1/SN1P2';


/**
 * Generated class for the FirstformComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'firstform',
  templateUrl: 'firstform.html'
})
export class FirstformComponent {
  WaterCensus1Form: FormGroup;
  isenabled: boolean = false;
  private date;
  notValid: boolean = false;
  @Input() sn1p2: SN1P2 =
    {
      status: 0,
      A1: null,
      H1_4: null,
      A2: '',
      A3: '',
      A4: '',
      A5: '',
      A7: 0,
      A6: 0,
      A8: '',
      A8_1: null,
      H1_1: null,
      H1_2: null,
      H1_3: null,
      N1: null,
      N0: null,
      A9: null,
      A10: null,
      N: null,
      A11: '',
      H3: null,
      Create_DATE:null,
      Modify_DATE:[],
      current_page:'1'
    };
  constructor(public formBuilder: FormBuilder, public geolocation: Geolocation, public events: Events, private cdRef: ChangeDetectorRef,private alertCtrl:AlertController) {
    //console.log('Hello FirstformComponent Component');
    this.WaterCensus1Form = formBuilder.group({
      // 'status': ['', Validators.required],
      'A2': ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Zก-๙0-9\\-\\s\\/\\,\\(\\)]*')])],
      'A3': ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Zก-๙0-9\\-\\s\\/\\,\\(\\)]*')])],
      'A4': ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Zก-๙0-9\\-\\s\\/\\,\\(\\)]*')])],
      'A5': ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Zก-๙0-9\\-\\s\\/\\,\\(\\)]*')])],
      'A8': ['', Validators.required],
      'A8_1': ['', this.otherValidate.bind(this)],
      'H1': [null, Validators.required],
      'H1_2': [null, this.h12Validate.bind(this)],
      'H1_3': [null, this.h13Validate.bind(this)],
      'A9': ['', this.emptyHouseValidate.bind(this)],
      'A10': ['', this.wasteHouseValidate.bind(this)],
      'A11': ['']
    });
    this.sn1p2.A6 = 0;
    this.sn1p2.A7 = 0;

  }

  otherValidate(control : FormControl) : {[s: string]: boolean}{
    if (this.sn1p2.A8 == '16') {
      if (control.value == '') {
        return { missingValue: true };
      }
    }
    return null;

  }

  notEmptyHouseValidate(control: FormControl): { [s: string]: boolean } {
    if (this.sn1p2.H1_1 != 2 && this.sn1p2.H1_1 != 3 && this.sn1p2.H1_1 != 5) {
      if (control.value == '') {
        return { missingValue: true };
      }
    }
    return null;
  }
  highBuildingValidate(control: FormControl): { [s: string]: boolean } {
    if (this.sn1p2.A8 == '4' || this.sn1p2.A8 == '5') {
      if (control.value == '') {
        return { missingValue: true };
      }
    }
    return null;
  }
  emptyHouseValidate(control: FormControl): { [s: string]: boolean } {
    // this.WaterCensus1Form.updateValueAndValidity();
    //console.log('control.value1')
    //console.log(control.value)
    if(((this.sn1p2.H1_1 == 4)|| (this.sn1p2.H1_2 == 4 && this.sn1p2.H1_1!=null)||(this.sn1p2.H1_2 != null && this.sn1p2.H1_3 == 4 ))) {
        //console.log('control.value2')
        //console.log(control.value)
        if (control.value == null || control.value == '' || control.value == undefined) {
          return { missingValue: true };
        }
      }
    
    return null;
  }
  h12Validate(control: FormControl): { [s: string]: boolean } {
    if (this.sn1p2.H1_1 == 2 || this.sn1p2.H1_1 == 3) {
      if (control.value == null) {
        return { missingValue: true };
      }
    }
    return null;
  }
  h13Validate(control: FormControl): { [s: string]: boolean } {
    if (this.sn1p2.H1_1 == 2 || this.sn1p2.H1_1 == 3) {
      if (this.sn1p2.H1_2 == 2 || this.sn1p2.H1_2 == 3) {
        if (control.value == null) {
          return { missingValue: true };
        }
      }
    }
    return null;
  }
  wasteHouseValidate(control: FormControl): { [s: string]: boolean } {
    if (this.sn1p2.H1_1 == 5) {
      if (control.value == null) {
        return { missingValue: true };
      }
    }
    return null;
  }

  noH1_4Validate(control: FormControl): { [s: string]: boolean } {

    return null;
  }
  H1Change(){
    this.WaterCensus1Form.controls.H1.updateValueAndValidity();
    this.WaterCensus1Form.updateValueAndValidity();
    this.WaterCensus1Form.controls.A9.updateValueAndValidity();
  }
  loadMap() {
    let options = {
      enableHighAccuracy: true
  };
    this.geolocation.getCurrentPosition(options).then((position) => {
      //console.log(position);
      this.sn1p2.A7 = position.coords.longitude
      this.sn1p2.A6 = position.coords.latitude;
    }, (err) => {
      
      const alert = this.alertCtrl.create({
        title: err,
        buttons: [{
          text: 'ยืนยัน',
          handler: () => {
            
          }
        }]
      });
      alert.present();
    });
  }

  saveData() {
    this.date = new Date();
    if (this.WaterCensus1Form.valid) {
      //console.log('send');
      this.notValid = false;
      if (this.sn1p2.H1_1 == 4 || this.sn1p2.H1_1 == 5 || this.sn1p2.H1_2 == 4 || this.sn1p2.H1_2 == 5 || this.sn1p2.H1_3 == 4 || this.sn1p2.H1_3 == 5) {
        this.sn1p2.status = 4;
        this.events.publish("DataSubmited", this.sn1p2, this.date);
      } else if ((this.sn1p2.H1_3 == 2 || this.sn1p2.H1_3 == 3) && (this.sn1p2.status == 2 || this.sn1p2.status == 0 || this.sn1p2.status == 4)) {
        this.sn1p2.status = 4;
        this.events.publish("FirstformSubmited-1", this.sn1p2, this.date);
      }
      else if ((this.sn1p2.H1_2 == 2 || this.sn1p2.H1_2 == 3) && (this.sn1p2.status == 1 || this.sn1p2.status == 0)) {
        this.sn1p2.status = 2;
        this.events.publish("FirstformSubmited-1", this.sn1p2, this.date);

      } else if ((this.sn1p2.H1_1 == 2 || this.sn1p2.H1_1 == 3) && this.sn1p2.status == 0) {
        this.sn1p2.status = 1;
        this.events.publish("FirstformSubmited-1", this.sn1p2, this.date);
      }
      else {
        this.events.publish("FirstformDataSubmited", this.sn1p2, this.date);
      }
    }
    else {
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

  public ngDoCheck() {
    this.cdRef.detectChanges();
  }
}
