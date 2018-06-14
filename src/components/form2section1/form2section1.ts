import { Events, AlertController } from 'ionic-angular';
import { Component, ChangeDetectorRef, Input, OnInit } from '@angular/core';
import { SN2_1P1 } from '../../models/SN2_1/SN2_1P1';
import { Validate21P1 } from '../../models/SN2_1/validate21P1';
import { WaterConsumeData } from '../../models/WaterConsumeData';

/**
 * Generated class for the Form2section1Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'form2section1',
  templateUrl: 'form2section1.html'
})
export class Form2section1Component  implements OnInit  {

  allCount: number;
  womenCount: number;
  menCount: number;
  @Input() section1: SN2_1P1;
  @Input() waterData: WaterConsumeData;
  validate:Validate21P1 = new Validate21P1();
  notValid:boolean=false;
  titleName=null;
  FirstName=null;
  LastName=null;

  constructor( private cdRef: ChangeDetectorRef,private events: Events,private alertCtrl:AlertController) {
    //console.log('Hello Form2section1Component Component');
    this.events.subscribe('resetSection1',()=>{
      this.section1 = new SN2_1P1();
      this.section1 = {
        status:0,
        A1_1: '',
        A1_2: null,
        A1_2_1: null,
        A1_2_2: null,
        A1_2_3: null,
        A1_2_4: null,
        A1_2_5: null,
        A1_2_6: null,
        A1_2_7: null,
        A1_2_8: null,
        A1_2_9: null,
        A1_3: null,
        A1_4_1: false,
        A1_4_2: false,
        A1_4_3: false,
        A1_4_4: false,
        A1_4_5: false,
        A1_4_6: false,
        A1_4_7: false,
        A1_4_8: false,
        A1_4_8_1: ''
      };
    });
  }

  nameInput(){
    if(this.titleName)
      this.section1.A1_1=this.titleName+this.FirstName+" "+this.LastName;
    else
      this.section1.A1_1=this.FirstName+" "+this.LastName;
    this.validateData();
  }
  validateAllData(){
    return Object.keys(this.validate).filter(v => !this.validate[v]);
  }

  countChange() {
    this.section1.A1_2_2 = this.section1.A1_2_2 ? this.section1.A1_2_2 : 0;
    this.section1.A1_2_2 = this.section1.A1_2_2 > 0 ? this.section1.A1_2_2 : 0;
    this.section1.A1_2_5 = this.section1.A1_2_5 ? this.section1.A1_2_5 : 0;
    this.section1.A1_2_5 = this.section1.A1_2_5 > 0 ? this.section1.A1_2_5 : 0;
    this.section1.A1_2_8 = this.section1.A1_2_8 ? this.section1.A1_2_8 : 0;
    this.section1.A1_2_8 = this.section1.A1_2_8 > 0 ? this.section1.A1_2_8 : 0;

    this.section1.A1_2_3 = this.section1.A1_2_3 ? this.section1.A1_2_3 : 0;
    this.section1.A1_2_3 = this.section1.A1_2_3 > 0 ? this.section1.A1_2_3 : 0;
    this.section1.A1_2_6 = this.section1.A1_2_6 ? this.section1.A1_2_6 : 0;
    this.section1.A1_2_6 = this.section1.A1_2_6 > 0 ? this.section1.A1_2_6 : 0;
    this.section1.A1_2_9 = this.section1.A1_2_9 ? this.section1.A1_2_9 : 0;
    this.section1.A1_2_9 = this.section1.A1_2_9 > 0 ? this.section1.A1_2_9 : 0;

    this.section1.A1_2_1 = this.section1.A1_2_1 ? this.section1.A1_2_1 : 0;
    this.section1.A1_2_1 = this.section1.A1_2_1 > 0 ? this.section1.A1_2_1 : 0;
    this.section1.A1_2_4 = this.section1.A1_2_4 ? this.section1.A1_2_4 : 0;
    this.section1.A1_2_4 = this.section1.A1_2_4 > 0 ? this.section1.A1_2_4 : 0;
    this.section1.A1_2_7 = this.section1.A1_2_7 ? this.section1.A1_2_7 : 0;
    this.section1.A1_2_7 = this.section1.A1_2_7 > 0 ? this.section1.A1_2_7 : 0;

    this.section1.A1_2_1 = parseInt(this.section1.A1_2_1.toString());
    this.section1.A1_2_2 = parseInt(this.section1.A1_2_2.toString());
    this.section1.A1_2_3 = parseInt(this.section1.A1_2_3.toString());
    this.section1.A1_2_4 = parseInt(this.section1.A1_2_4.toString());
    this.section1.A1_2_5 = parseInt(this.section1.A1_2_5.toString());
    this.section1.A1_2_6 = parseInt(this.section1.A1_2_6.toString());
    this.section1.A1_2_7 = parseInt(this.section1.A1_2_7.toString());
    this.section1.A1_2_8 = parseInt(this.section1.A1_2_8.toString());
    this.section1.A1_2_9 = parseInt(this.section1.A1_2_9.toString());

    this.menCount = parseInt(this.section1.A1_2_2.toString()) + parseInt(this.section1.A1_2_5.toString()) + parseInt(this.section1.A1_2_8.toString());
    this.womenCount = parseInt(this.section1.A1_2_3.toString()) + parseInt(this.section1.A1_2_6.toString()) + parseInt(this.section1.A1_2_9.toString());
    this.allCount = parseInt(this.section1.A1_2_1.toString()) + parseInt(this.section1.A1_2_4.toString()) + parseInt(this.section1.A1_2_7.toString());
  }

  a1_2_2change() {
    if(this.section1.A1_2_1 == null)
      this.section1.A1_2_1=this.section1.A1_2_2;
    else
    this.section1.A1_2_1=this.section1.A1_2_2+this.section1.A1_2_3;
    // else if(this.section1.A1_2_2!=null)
    //   this.section1.A1_2_3 = this.section1.A1_2_1 - this.section1.A1_2_2;
    this.countChange();
  }
  a1_2_3change() {
    if(this.section1.A1_2_1 == null)
      this.section1.A1_2_1=this.section1.A1_2_3;
    else
    this.section1.A1_2_1=this.section1.A1_2_2+this.section1.A1_2_3;
   
    this.countChange();
  }
  a1_2_5change() {
    if(this.section1.A1_2_4 == null)
      this.section1.A1_2_4=this.section1.A1_2_5;
    else
    this.section1.A1_2_4=this.section1.A1_2_5+this.section1.A1_2_6;
    
    this.countChange();
  }
  a1_2_6change() {
    if(this.section1.A1_2_4 == null)
      this.section1.A1_2_4=this.section1.A1_2_6;
    else
    this.section1.A1_2_4=this.section1.A1_2_5+this.section1.A1_2_6;
    this.countChange();
  }
  a1_2_8change() {
    if(this.section1.A1_2_7 == null)
      this.section1.A1_2_7=this.section1.A1_2_8;
    else
    this.section1.A1_2_7=this.section1.A1_2_8+this.section1.A1_2_9;
    
    this.countChange();
  }
  a1_2_9change() {
    if(this.section1.A1_2_7 == null)
      this.section1.A1_2_7=this.section1.A1_2_9;
    else
    this.section1.A1_2_7=this.section1.A1_2_8+this.section1.A1_2_9;

    this.countChange();
  }

  a1_3Change(){
    this.waterData.G_asai = this.section1.A1_3;
  }

  tapWaterChange() {
    if (this.section1.A1_4_1) {
      this.waterData.addTapWater();
    }
    else {
      this.waterData.rmTapWater();
    }
  }
  groundWaterChange() {
    if (this.section1.A1_4_2) {
      this.waterData.addGroundWater();
    }
    else {
      this.waterData.rmGroundWater();
    }
  }
  riverWaterChange() {
    if (this.section1.A1_4_3) {
      this.waterData.addRiverWater();
    }
    else {
      this.waterData.rmRiverWater();
    }
  }
  poolWaterChange(){
    if(this.section1.A1_4_4){
      this.waterData.addPoolWater();
    }else{
      this.waterData.rmPoolWater();
    }
  }
  chonWaterChange() {
    if (this.section1.A1_4_5) {
      this.waterData.addChonWater();
    }
    else {
      this.waterData.rmChonWater();
    }
  }
  rainWaterChange() {
    if (this.section1.A1_4_6) {
      this.waterData.addRainWater();
    }
    else {
      this.waterData.rmRainWater();
    }
  }
  buyWaterChange() {
    if (this.section1.A1_4_7) {
      this.waterData.addBuyWater();
    }
    else {
      this.waterData.rmBuyWater();
    }
    //console.log(this.validate);
    //console.log(this.validateAllData());
  }


  validateData(){
    this.validate.A1_1 = (typeof(this.section1.A1_1 === 'string') && this.section1.A1_1.length > 0);
    this.validate.A1_2_1 = (typeof(this.section1.A1_2_1) === 'number' && typeof(this.section1.A1_2_2) === 'number' && typeof(this.section1.A1_2_3) === 'number') && ( this.section1.A1_2_1 >= 0 && this.section1.A1_2_1 <=20) && (this.section1.A1_2_1 === parseInt(this.section1.A1_2_2.toString()) + parseInt(this.section1.A1_2_3.toString()));
    this.validate.A1_2_2 = typeof(this.section1.A1_2_2)  === 'number' && (this.section1.A1_2_2 >= 0 && this.section1.A1_2_2 <=20) && (this.section1.A1_2_1 === this.section1.A1_2_2 + this.section1.A1_2_3);
    this.validate.A1_2_3 = typeof(this.section1.A1_2_3)  === 'number' && (this.section1.A1_2_3 >= 0 && this.section1.A1_2_3 <=20) && (this.section1.A1_2_1 === this.section1.A1_2_2 + this.section1.A1_2_3);
    this.validate.A1_2_4 = (typeof(this.section1.A1_2_4) === 'number' && typeof(this.section1.A1_2_5) === 'number' && typeof(this.section1.A1_2_6) === 'number') && ( this.section1.A1_2_4 >= 0 && this.section1.A1_2_4 <=20) && (this.section1.A1_2_4 === parseInt(this.section1.A1_2_5.toString()) + parseInt(this.section1.A1_2_6.toString()));
    this.validate.A1_2_5 = typeof(this.section1.A1_2_5)  === 'number' && (this.section1.A1_2_5 >= 0 && this.section1.A1_2_5 <=20) &&  (this.section1.A1_2_4 === this.section1.A1_2_5 + this.section1.A1_2_6);
    this.validate.A1_2_6 = typeof(this.section1.A1_2_6)  === 'number' && (this.section1.A1_2_6 >= 0 && this.section1.A1_2_6 <=20) &&  (this.section1.A1_2_4 === this.section1.A1_2_5 + this.section1.A1_2_6);
    this.validate.A1_2_7 = (typeof(this.section1.A1_2_7) === 'number' && typeof(this.section1.A1_2_8) === 'number' && typeof(this.section1.A1_2_9) === 'number') && ( this.section1.A1_2_7 >= 0 && this.section1.A1_2_7 <=20) && (this.section1.A1_2_7 === parseInt(this.section1.A1_2_8.toString()) + parseInt(this.section1.A1_2_9.toString()));
    this.validate.A1_2_8 = typeof(this.section1.A1_2_8)  === 'number' && (this.section1.A1_2_8 >= 0 && this.section1.A1_2_8 <=20) && (this.section1.A1_2_7 === this.section1.A1_2_8 + this.section1.A1_2_9);
    this.validate.A1_2_9 = typeof(this.section1.A1_2_9)  === 'number' && (this.section1.A1_2_9 >= 0 && this.section1.A1_2_9 <=20) && (this.section1.A1_2_7 === this.section1.A1_2_8 + this.section1.A1_2_9);
    //this.validate.A1_2 =  typeof(this.section1.A1_2) === 'string' && this.allCount && (parseInt(this.section1.A1_2) >= 0 && parseInt(this.section1.A1_2) <=20) && (parseInt(this.section1.A1_2) === parseInt(this.allCount.toString()));
    this.validate.A1_3 = typeof(this.section1.A1_3) === 'boolean';
    this.validate.A1_4 = Boolean(this.section1.A1_4_1 || this.section1.A1_4_2 || this.section1.A1_4_3 || this.section1.A1_4_4 || this.section1.A1_4_5 || this.section1.A1_4_6 || this.section1.A1_4_7 || this.section1.A1_4_8);
    this.validate.A1_4_8_1 = !this.section1.A1_4_8 || typeof(this.section1.A1_4_8_1) === "string" && this.section1.A1_4_8_1.length > 0; 
  }

  public ngDoCheck() {
    this.cdRef.detectChanges();
  }

  ngOnInit(): void {
    if(!this.section1)
    this.section1 = {
      status:0,
      A1_1: '',
      A1_2: null,
      A1_2_1: 0,
      A1_2_2: 0,
      A1_2_3: 0,
      A1_2_4: 0,
      A1_2_5: 0,
      A1_2_6: 0,
      A1_2_7: 0,
      A1_2_8: 0,
      A1_2_9: 0,
      A1_3: null,
      A1_4_1: false,
      A1_4_2: false,
      A1_4_3: false,
      A1_4_4: false,
      A1_4_5: false,
      A1_4_6: false,
      A1_4_7: false,
      A1_4_8: false,
      A1_4_8_1: ''
    }
    if(this.section1.A1_1){
      try{
        let l =this.section1.A1_1.split(" ");
        let index = this.section1.A1_1.indexOf("นาย")
        if(index != 0){
          index = this.section1.A1_1.indexOf("นางสาว")
          if(index != 0){
            index = this.section1.A1_1.indexOf("นาง")
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
    //console.log(this.section1);
    //console.log(this.validate);
  }
  
  save(){
    if(this.validateAllData().length==0){
      this.notValid=false;
      this.section1.status=4;
      this.events.publish("saveSN21",1);
    }else{
      this.notValid=true;
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
