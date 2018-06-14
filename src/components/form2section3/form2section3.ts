import { FormControl } from '@angular/forms';
import { WaterConsumeData } from './../../models/WaterConsumeData';
import { Events, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { SN2_1P3 } from '../../models/SN2_1/SN2_1P3';
import { EX_PRODUCT_LIST, Organization } from '../../models/SN2_1/organization'

/**
 * Generated class for the Form2section3Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'form2section3',
  templateUrl: 'form2section3.html'
})
export class Form2section3Component implements OnInit {
  @Input() a8: string;
  Form2Section3: FormGroup;
  @Input() section3: SN2_1P3;
  isVisible: boolean = true;
  validate_3_8: boolean;
  notValid = false;
  data : Organization[] = EX_PRODUCT_LIST
  new_data = []
  selected_org:string;
  @Input() waterData: WaterConsumeData;
  titleName=null;
  FirstName=null;
  LastName=null;
  
  constructor(public formBuilder: FormBuilder, private events: Events, private alertCtrl: AlertController) {
    //console.log('Hello Form2Section3Component Component');
    for(let i=0;i<this.data.length;i++){
      this.new_data.push(this.data[i].id.substr(1) + '.' + this.data[i].detail)
    }
    //console.log(this.new_data)
    this.Form2Section3 = formBuilder.group({
      'A3_1': [this.a8, Validators.required],
      'A3_2_1': ['', Validators.compose([Validators.required, Validators.pattern("([0-9-]*)?(\\++[0-9-]*)?"), Validators.maxLength(12)])],
      'A3_2_2': ['', Validators.compose([ Validators.pattern("([0-9-]*)?(\\++[0-9-]*)?"), Validators.maxLength(12)])],
      'A3_2_3': ['', Validators.compose([ Validators.required,Validators.pattern("^(^[a-zA-Z0-9_%+-]+\@+[a-zA-Z0-9.-]+[a-zA-Z.]{1,4})?(-)?$"),,Validators.minLength(1), Validators.maxLength(120)])],
      'A3_2_4': ['', Validators.compose([ Validators.required,Validators.pattern("([a-zA-Z0-9:.\\\/\=]*)?(-)?"),Validators.minLength(1), Validators.maxLength(100)])],
      'A3_3_1': ['', Validators.compose([ Validators.pattern("[a-zA-Z0-9ก-๙+\\.+\\s+\\-]*"), Validators.maxLength(120)])],
      'A3_3_2': ['', Validators.compose([Validators.required, Validators.pattern("[a-zA-Z0-9ก-๙+\\.+\\s+\\-]*"), Validators.maxLength(60)])],
      'A3_4': ['', Validators.compose([Validators.required, Validators.pattern("[a-zA-Z0-9ก-๙+\\.+\\s+\\-]*"), Validators.maxLength(300)])],
      'A3_5':['', Validators.required],
      'A3_6': ['', Validators.compose([Validators.required, Validators.pattern("[1-9]+[0-9]*"), Validators.maxLength(5)])],
      'A3_7': ['', Validators.required],
      'A3_9': ['', Validators.required],
      'A3_10': ['', this.waterValidate.bind(this)],
      'A3_8_1': [''],
      'A3_8_2': [''],
      'A3_8_3': [''],
      'A3_8_4': [''],
      'A3_8_5': [''],
      'A3_8_6': [''],
      'A3_8_7': [''],
      'A3_8_8': [''],
      'A3_8_8_1': [''],
      'A3_11': ['', Validators.required],
      'F': ['', Validators.required],
      'L': ['', Validators.required],
      'T': ['', Validators.required],
    });


    // Bug !!!! section.A3_5 is undefined
  }
  waterValidate(control: FormControl): { [s: string]: boolean } {
    console.log('waterValidate')
    if (this.section3){
      console.log('this.section3.A3_9')
      console.log(this.section3.A3_9)
      console.log(control.value)
      if (this.section3.A3_9 === true) {
        if (control.value == null || control.value === '') {
          return { missingValue: true };
        }
      }
    }
    return null;
  }
  selectOrgChange(){
    let idx = this.new_data.indexOf(this.selected_org);
    this.section3.A3_5 = this.data[idx].id;
    //this.section3.A3_5 
  }
  waterChange() {
    if (this.section3.A3_9 == true) {
      this.isVisible = true;
    } else {
      this.isVisible = false;
    }
  }
  tapWaterChange() {
    if (this.section3.A3_8_1) {
      this.waterData.addTapWater();
    }
    else {
      this.waterData.rmTapWater();
    }
  }
  groundWaterChange() {
    if (this.section3.A3_8_2) {
      this.waterData.addGroundWater();
    }
    else {
      this.waterData.rmGroundWater();
    }
  }
  riverWaterChange() {
    if (this.section3.A3_8_3) {
      this.waterData.addRiverWater();
    }
    else {
      this.waterData.rmRiverWater();
    }
  }
  poolWaterChange(){
    if(this.section3.A3_8_4){
      this.waterData.addPoolWater();
    }else{
      this.waterData.rmPoolWater();
    }
  }
  chonWaterChange() {
    if (this.section3.A3_8_5) {
      this.waterData.addChonWater();
    }
    else {
      this.waterData.rmChonWater();
    }
  }
  rainWaterChange() {
    if (this.section3.A3_8_6) {
      this.waterData.addRainWater();
    }
    else {
      this.waterData.rmRainWater();
    }
  }
  buyWaterChange() {
    if (this.section3.A3_8_7) {
      this.waterData.addBuyWater();
    }
    else {
      this.waterData.rmBuyWater();
    }
  }
  validateP38() {
    console.log('validateP38')
    if(this.section3){
      console.log(this.section3.A3_8_1)
      console.log(this.section3.A3_8_2)
      console.log(this.section3.A3_8_3)
      console.log(this.section3.A3_8_4)
      console.log(this.section3.A3_8_5)
      console.log(this.section3.A3_8_6)
      console.log(this.section3.A3_8_7)
      console.log(this.section3.A3_8_8)
      console.log(this.section3.A3_8_8_1)
      this.validate_3_8 = (this.section3.A3_8_1 || this.section3.A3_8_2 || this.section3.A3_8_3 || this.section3.A3_8_4 || this.section3.A3_8_5 || this.section3.A3_8_6 || this.section3.A3_8_7) || (this.section3.A3_8_8 && (this.section3.A3_8_8_1 !== undefined && this.section3.A3_8_8_1 !== null && this.section3.A3_8_8_1 !== ''));
    }

  }
  ionChangeA39(){
    this.Form2Section3.controls.A3_10.updateValueAndValidity()
  }
  ionChangeA3881(){
    this.Form2Section3.controls.A3_8_8_1.updateValueAndValidity()
  }
  validate() {
    //console.log(this.section3);
    
  }
  range(min, max, step) {
    step = step || 1;
    let input = [];
    for (let i = min; i <= max; i += step) {
      input.push(i);
    }
    return input;
  }
  ngOnInit() {
    // this.parts is initial set!
    if (!this.section3) {
      this.section3 = {
        status:0,
        A3_1: '',
        A3_2_1: '',
        A3_2_2: '',
        A3_2_3: '',
        A3_2_4: '',
        A3_3_1: '',
        A3_3_2: null,
        A3_4: null,
        A3_5: this.a8,
        A3_7: false,
        A3_6: null,
        A3_9: null,
        A3_10: null,
        A3_8_1: false,
        A3_8_2: false,
        A3_8_3: false,
        A3_8_4: false,
        A3_8_5: false,
        A3_8_6: false,
        A3_8_7: false,
        A3_8_8: false,
        A3_8_8_1: '',
        A3_11: null
      };

    }

    this.section3.A3_8_1 = typeof (this.section3.A3_8_1) === 'boolean' ? this.section3.A3_8_1 : false;
    this.section3.A3_8_2 = typeof (this.section3.A3_8_2) === 'boolean' ? this.section3.A3_8_2 : false;
    this.section3.A3_8_3 = typeof (this.section3.A3_8_3) === 'boolean' ? this.section3.A3_8_3 : false;
    this.section3.A3_8_4 = typeof (this.section3.A3_8_4) === 'boolean' ? this.section3.A3_8_4 : false;
    this.section3.A3_8_5 = typeof (this.section3.A3_8_5) === 'boolean' ? this.section3.A3_8_5 : false;
    this.section3.A3_8_6 = typeof (this.section3.A3_8_6) === 'boolean' ? this.section3.A3_8_6 : false;
    this.section3.A3_8_7 = typeof (this.section3.A3_8_7) === 'boolean' ? this.section3.A3_8_7 : false;
    this.section3.A3_8_8 = typeof (this.section3.A3_8_8) === 'boolean' ? this.section3.A3_8_8 : false;
    if(this.section3.A3_5){
      let idx = this.data.map(d => d.id).indexOf(this.section3.A3_5);
      this.selected_org = this.new_data[idx];
    }
    if(this.section3.A3_3_1){
      try{
        let l =this.section3.A3_3_1.split(" ");
        let index = this.section3.A3_3_1.indexOf("นาย")
        if(index != 0){
          index = this.section3.A3_3_1.indexOf("นางสาว")
          if(index != 0){
            index = this.section3.A3_3_1.indexOf("นาง")
            if(index!=0){
              index=0;
            }else{
              index=3
              this.titleName="นาง";
            }
          }else{
            index=6;
            this.titleName="นางสาว";
          }
        }else{
          index=3
          this.titleName="นาย";
        }
        this.LastName = l[1];
        this.FirstName = l[0].substring(index);
      }catch(e){
        //console.log(e);
      }
    }
    this.validateP38();
  }
  nameInput(){
    if(this.titleName)
      this.section3.A3_3_1=this.titleName+this.FirstName+" "+this.LastName;
    else
    this.section3.A3_3_1=this.FirstName+" "+this.LastName;
    this.Form2Section3.controls.A3_3_1.updateValueAndValidity();
  }
  save() {
    //console.log('initiallll')
      //console.log(this.section3.A3_5)
    let new_data = []
    this.validateP38();
    //console.log(new_data)
    if (this.Form2Section3.valid && this.validate_3_8) {
      this.notValid = false;
      this.section3.status=4;
      this.events.publish("saveSN21", 3);
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

}



