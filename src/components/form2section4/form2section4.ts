import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Input } from '@angular/core';
import { SN2_1P4 } from '../../models/SN2_1/SN2_1P4';
import { WaterConsumeData } from '../../models/WaterConsumeData';
import { Events, AlertController } from 'ionic-angular';
import { EX_SERVICE_LIST} from '../../models/SN2_1/organization'

/**
 * Generated class for the Form2section4Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'form2section4',
  templateUrl: 'form2section4.html'
})
export class Form2section4Component {
  @Input() a8: any;
  @Input() N1: any;
  @Input() N0: any;
  @Input() H4: any;
  //private date;
  private valid;
  notValid = false;
  validator: any = {'A4_7_8_1' : true};
  roomLiveCount = this.N1 - this.N0;
  Form2Section4: FormGroup;
  new_data:string[] = [];
  selected_ser:string;
  // isSelected:boolean;
  @Input() section4: SN2_1P4;
  @Input() waterData: WaterConsumeData;
  titleName=null;
  FirstName=null;
  LastName=null;
  // BUG !!! A4_5 is undefined
  constructor(public formBuilder: FormBuilder, private events: Events, private alertCtrl: AlertController) {
    //console.log('Hello Form2Section4Component Component');
    this.Form2Section4 = this.formBuilder.group({
      'A4_1': ['', Validators.required],
      'A4_2_1': ['', Validators.compose([Validators.required, Validators.pattern("([0-9-]*)?(\\++[0-9-]*)?"), Validators.maxLength(10)])],
      'A4_2_2': ['', Validators.compose([Validators.pattern("([0-9-]*)?(\\++[0-9-]*)?"), Validators.maxLength(10)])],
      'A4_2_3': ['', Validators.compose([Validators.required, Validators.pattern("^(^[a-zA-Z0-9_%+-]+\@+[a-zA-Z0-9.-]+[a-zA-Z.]{1,4})?(-)?$"),Validators.minLength(1) ,Validators.maxLength(120)])],
      'A4_2_4': ['', Validators.compose([Validators.required, Validators.pattern("([a-zA-Z0-9:.\\\/\=]*)?(-)?"),Validators.minLength(1), Validators.maxLength(100)])],
      'A4_3_1': ['', Validators.compose([Validators.pattern("[a-zA-Z0-9ก-๙+\\.+\\s+\\-]*"), Validators.maxLength(120)])],
      'A4_3_2': [null, Validators.compose([Validators.required, Validators.pattern("[a-zA-Z0-9ก-๙+\\.+\\s+\\-]*"), Validators.maxLength(60)])],
      'A4_4': [null, Validators.compose([Validators.required, Validators.pattern("[a-zA-Z0-9ก-๙+\\.+\\s+\\-]*"), Validators.maxLength(300)])],
      'A4_5': [null],
      'A4_6_6_1': [null],
      'A4_7_1': [false],//not require
      'A4_7_2': [false],//not require
      'A4_7_3': [false],//not require
      'A4_7_4': [false],//not require
      'A4_7_5': [false],//not require
      'A4_7_6': [false],//not require
      'A4_7_7': [false],//not require
      'A4_7_8': [false],//not require
      'A4_7_8_1': [''],
      'A4_6_1_1_1': [null],
      'A4_6_1_2_1': [null],
      'A4_6_1_1_2': [null],
      'A4_6_1_2_2': [null],
      'A4_6_1_1_3': [null],
      'A4_6_1_2_3': [null],
      'A4_6_1_1_4': [null],
      'A4_6_1_2_4': [null],
      'A4_6_1_1_5': [null],
      'A4_6_1_2_5': null,
      'A4_6_1_1_6': [null],
      'A4_6_1_2_6': [null],
      'A4_6_1_3': [null],
      'A4_6_2_1': [null],
      'A4_6_2_2': [null],
      'A4_6_3_1': [null],
      'A4_6_3_2': [null],
      'A4_6_4_1': [null],
      'A4_6_4_2': [null],
      'A4_6_4_3': [null],
      'A4_6_5_1': [null],
      'N1': [null],
      'roomLiveCount': [null],
      'F': ['', Validators.required],
      'L': ['', Validators.required],
      'T': ['', Validators.required],
    });
    for(let i=0;i<EX_SERVICE_LIST.length;i++){
      this.new_data.push(EX_SERVICE_LIST[i].id.substr(1) + '.' + EX_SERVICE_LIST[i].detail)
    }

  }
  nameInput(){
    if(this.titleName)
      this.section4.A4_3_1=this.titleName+this.FirstName+" "+this.LastName;
    else
    this.section4.A4_3_1=this.FirstName+" "+this.LastName;
      this.Form2Section4.controls.A4_3_1.updateValueAndValidity();
  }
  range(min, max, step) {
    step = step || 1;
    let input = [];
    for (let i = min; i <= max; i += step) {
      input.push(i);
    }
    return input;
  }

  selectSerChange(){
    let idx = this.new_data.indexOf(this.selected_ser);
    this.section4.A4_5 = EX_SERVICE_LIST[idx].id;
  }

  tapWaterChange() {
    if (this.section4.A4_7_1) {
      this.waterData.addTapWater();
    }
    else {
      this.waterData.rmTapWater();
    }
  }
  groundWaterChange() {
    if (this.section4.A4_7_2) {
      this.waterData.addGroundWater();
    }
    else {
      this.waterData.rmGroundWater();
    }
  }
  poolWaterChange(){
    if(this.section4.A4_7_3){
      this.waterData.addPoolWater();
    }else{
      this.waterData.rmPoolWater();
    }
  }
  riverWaterChange() {
    if (this.section4.A4_7_4) {
      this.waterData.addRiverWater();
    }
    else {
      this.waterData.rmRiverWater();
    }
  }

  chonWaterChange() {
    if (this.section4.A4_7_5) {
      this.waterData.addChonWater();
    }
    else {
      this.waterData.rmChonWater();
    }
  }
  rainWaterChange() {
    if (this.section4.A4_7_6) {
      this.waterData.addRainWater();
    }
    else {
      this.waterData.rmRainWater();
    }
  }
  buyWaterChange() {
    if (this.section4.A4_7_7) {
      this.waterData.addBuyWater();
    }
    else {
      this.waterData.rmBuyWater();
    }
  }
  hasvalue(obj : any, value : any){
    if(obj == null)
      return false
    let t = Object.keys(obj)
    for(let i = 0; i < t.length ; i++){
      let k = t[i]
      //console.log("----------------------a------------------")
      //console.log(typeof(obj[k]));
      //console.log(obj[k]);
      //console.log(Object.keys(obj[k]))
      if(typeof(obj[k]) == 'object'  && Object.keys(obj[k]).length > 0){
        if(this.hasvalue(obj[k], value))
          return true
        //console.log(a)
      }else if(typeof(obj[k]) == 'object' && Object.keys(obj[k]).length == 0){
        // return false
      }else if(obj[k] === value){
        return true
      }
    }
    return false
  }

  validate() {
    //console.log(this.section4);
    //console.log("validate form2section4")
    //console.log("this.a8 = " + this.a8)
    let result = false;
    // if (this.section4.A4_5 == 'S36') {
      //console.log("validate form2section4 1")
      Object.assign(this.validator, this.validateA461())
    // }
    // if (this.section4.A4_5 == 'S12') {
      //console.log("validate form2section4 2")
      Object.assign(this.validator, this.validateA462())
    // }
    // if (this.section4.A4_5 == 'S37') {
      //console.log("validate form2section4 3")
      Object.assign(this.validator, this.validateA463())
    // }
    // if (this.section4.A4_5 == 'S38') {
      //console.log("validate form2section4 4")
      Object.assign(this.validator, this.validateA465())
    // }
    // if (this.section4.A4_5 == 'S47') {
      Object.assign(this.validator, this.validateA464())
    // }
    // if (this.section4.A4_5 != 'S12' && this.section4.A4_5 != 'S36' && this.section4.A4_5 != 'S37' && this.section4.A4_5 != 'S38' && this.section4.A4_5 != 'S47') {
      //console.log("validate form2section4 5")
      Object.assign(this.validator, this.validateA466())
      result = this.validator.A466
    // }
    this.validator['A4_7_8_1'] = Number(this.section4.A4_7_1) == 1 || Number(this.section4.A4_7_2) == 1 || Number(this.section4.A4_7_3) == 1 || Number(this.section4.A4_7_4) == 1
      || Number(this.section4.A4_7_5) == 1 || Number(this.section4.A4_7_6) == 1 || Number(this.section4.A4_7_7) == 1 || (Number(this.section4.A4_7_8) == 1 && !(this.section4.A4_7_8_1 == undefined))
    //console.log("wtfffffffff")
    //console.log(this.help())
    //console.log((this.section4.A4_7_1 || this.section4.A4_7_2 || this.section4.A4_7_3 || this.section4.A4_7_4 || this.section4.A4_7_5 || this.section4.A4_7_6 || this.section4.A4_7_7))
    //console.log(this.validator['A4_7_8_1']) 
    //console.log("result of 2-4 form is :" + this.Form2Section4.valid)
    //console.log(this.validator)
    this.valid = result && this.Form2Section4.valid
    return this.Form2Section4.valid && !this.hasvalue(this.validator, false)
  }
  help(){
    let a = this.section4.A4_7_1 == undefined ? false :  Number(this.section4.A4_7_1) == 1
    let b = this.section4.A4_7_2 == undefined ? false :  Number(this.section4.A4_7_2) == 1
    let c = this.section4.A4_7_3 == undefined ? false :  Number(this.section4.A4_7_3) == 1
    let d = this.section4.A4_7_4 == undefined ? false :  Number(this.section4.A4_7_4) == 1
    let e = this.section4.A4_7_5 == undefined ? false :  Number(this.section4.A4_7_5) == 1
    let f = this.section4.A4_7_6 == undefined ? false :  Number(this.section4.A4_7_6) == 1
    let g = this.section4.A4_7_7 == undefined ? false :  Number(this.section4.A4_7_7) == 1
    return a || b || c || d || e || f || g
  }
  helpValidateA461(a:any, b:any){
    if(a){
      if(!isNaN(b) && b > 0){
        return true;
      }else{
        return false;
      }
    }
    return true
  }
  validateA461() {
    let obj = {}
    let c = this.section4.A4_5 != 'S36'
    let d = this.section4.A4_6_1_1_1 || this.section4.A4_6_1_1_2 || this.section4.A4_6_1_1_3
            || this.section4.A4_6_1_1_4 || this.section4.A4_6_1_1_5 || this.section4.A4_6_1_1_6
    obj['A4_6_1_2_1'] = d === true && this.helpValidateA461(this.section4.A4_6_1_1_1, this.section4.A4_6_1_2_1) || c
    obj['A4_6_1_2_2'] = d === true && this.helpValidateA461(this.section4.A4_6_1_1_2, this.section4.A4_6_1_2_2) || c
    obj['A4_6_1_2_3'] = d === true && this.helpValidateA461(this.section4.A4_6_1_1_3, this.section4.A4_6_1_2_3) || c
    obj['A4_6_1_2_4'] = d === true && this.helpValidateA461(this.section4.A4_6_1_1_4, this.section4.A4_6_1_2_4) || c
    obj['A4_6_1_2_5'] = d === true && this.helpValidateA461(this.section4.A4_6_1_1_5, this.section4.A4_6_1_2_5) || c
    obj['A4_6_1_2_6'] = d === true && this.helpValidateA461(this.section4.A4_6_1_1_6, this.section4.A4_6_1_2_6) || c
    obj['A4_6_1_3'] = !isNaN(this.section4.A4_6_1_3) || c
    return obj
  }
  validateA462() {
    let obj = {}
    let c = this.section4.A4_5 != 'S12'
    obj['A4_6_2_1'] = !isNaN(this.section4.A4_6_2_1) || c 
    obj['A4_6_2_2'] = !isNaN(this.section4.A4_6_2_2) || c
    return obj
  }
  validateA463() {
    let obj = {}
    let c = this.section4.A4_5 != 'S37'
    obj['A4_6_3_1'] = !isNaN(this.section4.A4_6_3_1) || c
    obj['A4_6_3_2'] = !isNaN(this.section4.A4_6_3_2) || c
    return obj
  }
  validateA464() {
    let obj = {}
    let c = this.section4.A4_5 != 'S38'
    obj['A4_6_4_1'] = !isNaN(this.section4.A4_6_4_1) || c
    obj['A4_6_4_2'] = !isNaN(this.section4.A4_6_4_2) || c
    obj['A4_6_4_3'] = !isNaN(this.section4.A4_6_4_3) || c
    return obj
  }
  validateA465() {
    let obj = {}
    let c = this.section4.A4_5 != 'S47'
    obj['A4_6_5_1'] =  !isNaN(this.section4.A4_6_5_1) || c
    return obj
  }
  validateA466() {
    let obj = {}
    let c = this.section4.A4_5 != 'S12' && this.section4.A4_5 != 'S36' && this.section4.A4_5 != 'S37' && this.section4.A4_5 != 'S38' && this.section4.A4_5 != 'S47'
    obj['A4_6_6_1'] = !isNaN(this.section4.A4_6_6_1) || !c
    return obj
  }


  ionViewWillEnter() {

  }

  ionViewDidLoad() {
    //console.log("View did load 4");

  }
  ngOnInit() {
    // this.parts is initial set!
    if (!this.section4) {
      this.section4 = {
        status:0,
        A4_1: '',
        A4_2_1: '',
        A4_2_2: '',
        A4_2_3: '',
        A4_2_4: '',
        A4_3_1: '',
        A4_3_2: null,
        A4_4: null,
        A4_5: '',
        A4_6_6_1: null,
        A4_7_1: true,
        A4_7_2: false,
        A4_7_3: false,
        A4_7_4: false,
        A4_7_5: false,
        A4_7_6: false,
        A4_7_7: false,
        A4_7_8: false,
        A4_7_8_1: '',
        A4_6_1_1_1: false,
        A4_6_1_2_1: null,
        A4_6_1_1_2: false,
        A4_6_1_2_2: null,
        A4_6_1_1_3: false,
        A4_6_1_2_3: null,
        A4_6_1_1_4: false,
        A4_6_1_2_4: null,
        A4_6_1_1_5: false,
        A4_6_1_2_5: null,
        A4_6_1_1_6: false,
        A4_6_1_2_6: null,
        A4_6_1_3: null,
        A4_6_2_1: null,
        A4_6_2_2: null,
        A4_6_3_1: null,
        A4_6_3_2: null,
        A4_6_4_3: null,
        A4_6_5_1: null
      };

    } else {
      //console.log(this.section4);
      // if(this.a8){
      //   this.isSelected = (this.a8 === '4' || this.a8 === '6' || this.a8 === '7' || this.a8 === '8' || this.a8 === '10' || this.a8 === '11' || this.a8 === '12');
      //   if(this.a8 === '4'){
      //     this.section4.A4_5 = 'S38';
      //   } 
      //   else if(this.a8 === '6'){
      //     this.section4.A4_5 = 'S12';
      //   }
      //   else if(this.a8 === '7' || this.a8 === '8'){
      //     this.section4.A4_5 = 'S37';
      //   }
      //   else if(this.a8 === '10'){
      //     this.section4.A4_5 = 'S47';
      //   }
      //   else if(this.a8 === '11' || this.a8 === '12'){
      //     this.section4.A4_5 = 'S36'
      //   }           
      // }
      if(this.section4.A4_5){
        let idx = EX_SERVICE_LIST.map(d => d.id).indexOf(this.section4.A4_5);
        this.selected_ser = this.new_data[idx];
      }
    }
    if(this.section4.A4_3_1){
      try{
        let l =this.section4.A4_3_1.split(" ");
        let index = this.section4.A4_3_1.indexOf("นาย")
        if(index != 0){
          index = this.section4.A4_3_1.indexOf("นางสาว")
          if(index != 0){
            index = this.section4.A4_3_1.indexOf("นาง")
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
  }
  save() {
    //console.log('save')
    //console.log(this.validator)
    let valid = this.validate()
    if (valid) {
      this.notValid = false
      this.section4.status = 4;
      this.events.publish("saveSN21", 4);
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
