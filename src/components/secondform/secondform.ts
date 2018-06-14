import { Storage } from '@ionic/storage';
import { ModalController, NavController, Events, AlertController, LoadingController } from 'ionic-angular';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SN1P3 } from '../../models/SN1/SN1P3';
import { ValidateSN1P3 } from '../../models/SN1/validateSN1P3';
import { WaterConsumeData } from '../../models/WaterConsumeData';

/**
 * Generated class for the SecondformComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'secondform',
  templateUrl: 'secondform.html',
})
export class SecondformComponent implements OnInit {
  @Input() sn1p2: any;
  // familyInfo: Array<any>;
  validaters: Array<ValidateSN1P3> = [];
  canPass: boolean = false;
  constructor(public storage: Storage, public formBuilder: FormBuilder, public modalCtrl: ModalController, public navCtrl: NavController, private events: Events, private alertCtrl: AlertController, private loadingController: LoadingController) {
    //console.log('Hello SecondformComponent Component');
    this.events.subscribe("family", (family) => {
      this.sn1p2.H3[family.H3 - 1] = family;
    })

  }

  centerPart(family) {
    if (family.H4_0) {
      family.H4 = "ส่วนกลาง"
    }
    else {
      if (family.H4 == "ส่วนกลาง") {
        family.H4 = null;
      }
    }
  }

  validate() {
    //console.log(this.validaters);
    for (let i in this.validaters) {
      this.validaters[i].G1 = typeof (this.sn1p2.H3[i].G1) === 'boolean' || (this.sn1p2.H3[i].status == 0 && this.sn1p2.H3[i].H5_1 != 1) || (this.sn1p2.H3[i].status == 1 && this.sn1p2.H3[i].H5_2 != 1) || (this.sn1p2.H3[i].status == 2 && this.sn1p2.H3[i].H5_3 != 1) || (this.sn1p2.H3[i].status == 4 && this.sn1p2.H3[i].H5_3 != 1);
      this.validaters[i].G2 = typeof (this.sn1p2.H3[i].G2) === 'boolean' || (this.sn1p2.H3[i].status == 0 && this.sn1p2.H3[i].H5_1 != 1) || (this.sn1p2.H3[i].status == 1 && this.sn1p2.H3[i].H5_2 != 1) || (this.sn1p2.H3[i].status == 2 && this.sn1p2.H3[i].H5_3 != 1) || (this.sn1p2.H3[i].status == 4 && this.sn1p2.H3[i].H5_3 != 1);
      this.validaters[i].G3 = typeof (this.sn1p2.H3[i].G3) === 'boolean' || (this.sn1p2.H3[i].status == 0 && this.sn1p2.H3[i].H5_1 != 1) || (this.sn1p2.H3[i].status == 1 && this.sn1p2.H3[i].H5_2 != 1) || (this.sn1p2.H3[i].status == 2 && this.sn1p2.H3[i].H5_3 != 1) || (this.sn1p2.H3[i].status == 4 && this.sn1p2.H3[i].H5_3 != 1);
      this.validaters[i].G4 = typeof (this.sn1p2.H3[i].G4) === 'boolean' || (this.sn1p2.H3[i].status == 0 && this.sn1p2.H3[i].H5_1 != 1) || (this.sn1p2.H3[i].status == 1 && this.sn1p2.H3[i].H5_2 != 1) || (this.sn1p2.H3[i].status == 2 && this.sn1p2.H3[i].H5_3 != 1) || (this.sn1p2.H3[i].status == 4 && this.sn1p2.H3[i].H5_3 != 1);
      // //console.log("status : " + this.sn1p2.H3[i].status)
      this.validaters[i].H4 = this.sn1p2.N == 1 || (this.sn1p2.H3[i].H4 != null);
      this.validaters[i].H5_1 = this.sn1p2.N == 1 || (this.sn1p2.H3[i].H5_1 >= 1 && this.sn1p2.H3[i].H5_1 <= 5);
      this.validaters[i].H5_2 = this.sn1p2.N == 1 || this.sn1p2.H3[i].status == 0 || this.sn1p2.H3[i].status == 4 || (this.sn1p2.H3[i].status == 1 && this.sn1p2.H3[i].H5_2 >= 1 && this.sn1p2.H3[i].H5_2 <= 5) || (this.sn1p2.H3[i].status == 2 && this.sn1p2.H3[i].H5_2 >= 2 && this.sn1p2.H3[i].H5_2 <= 3);
      this.validaters[i].H5_3 = this.sn1p2.N == 1 || this.sn1p2.H3[i].status == 0 || this.sn1p2.H3[i].status == 1 || this.sn1p2.H3[i].status == 4 || (this.sn1p2.H3[i].status == 2 && this.sn1p2.H3[i].H5_3 >= 1 && this.sn1p2.H3[i].H5_3 <= 5);
      this.validaters[i].P1 = this.sn1p2.N == 1 || (this.sn1p2.H3[i].P1 != null) || (this.sn1p2.H3[i].status == 0 && this.sn1p2.H3[i].H5_1 != 1) || (this.sn1p2.H3[i].status == 1 && this.sn1p2.H3[i].H5_2 != 1) || (this.sn1p2.H3[i].status == 2 && this.sn1p2.H3[i].H5_3 != 1) || (this.sn1p2.H3[i].status == 4 && this.sn1p2.H3[i].H5_3 != 1);
      this.validaters[i].P2 = this.sn1p2.N == 1 || (this.sn1p2.H3[i].P2 != null) || (this.sn1p2.H3[i].status == 0 && this.sn1p2.H3[i].H5_1 != 1) || (this.sn1p2.H3[i].status == 1 && this.sn1p2.H3[i].H5_2 != 1) || (this.sn1p2.H3[i].status == 2 && this.sn1p2.H3[i].H5_3 != 1) || (this.sn1p2.H3[i].status == 4 && this.sn1p2.H3[i].H5_3 != 1);
      this.validaters[i].P3 = this.sn1p2.N == 1 || (this.sn1p2.H3[i].P3 != null) || (this.sn1p2.H3[i].status == 0 && this.sn1p2.H3[i].H5_1 != 1) || (this.sn1p2.H3[i].status == 1 && this.sn1p2.H3[i].H5_2 != 1) || (this.sn1p2.H3[i].status == 2 && this.sn1p2.H3[i].H5_3 != 1) || (this.sn1p2.H3[i].status == 4 && this.sn1p2.H3[i].H5_3 != 1);
      this.validaters[i].P4 = this.sn1p2.N == 1 || (this.sn1p2.H3[i].P4 != null) || (this.sn1p2.H3[i].status == 0 && this.sn1p2.H3[i].H5_1 != 1) || (this.sn1p2.H3[i].status == 1 && this.sn1p2.H3[i].H5_2 != 1) || (this.sn1p2.H3[i].status == 2 && this.sn1p2.H3[i].H5_3 != 1) || (this.sn1p2.H3[i].status == 4 && this.sn1p2.H3[i].H5_3 != 1);
      // //console.log("index : " + i)
      // //console.log(this.validaters[i]);
    }

  }

  ngOnInit() {
    this.familyChange();
    this.sn1p2.Ncount = Number(this.sn1p2.N) - Number(this.sn1p2.H3.filter(h3=>h3.status==4).length);
  }

  addFamily() {
    
    if (this.sn1p2.N == 1) {
      if (this.sn1p2.H3[0].G1 != null || this.sn1p2.H3[0].G2 != null || this.sn1p2.H3[0].G3 != null || this.sn1p2.H3[0].G4 != null)
        this.sn1p2.H3[0].H5_1 = 1;
    }
    this.sn1p2.N = parseInt(this.sn1p2.N) + 1;
    this.familyChange();
    this.validate();
  }

  removeFamily() {
    const alert = this.alertCtrl.create({
      title: 'ต้องการจะลบใช่หรือไม่',
      buttons: [{
        text: 'ยืนยัน',
        handler: () => {
          //console.log('ยืนยันการลบ');
          this.sn1p2.N = parseInt(this.sn1p2.N) - 1;
          this.familyChange();
          this.validate();
          
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

  familyChange() {
    
    if (!this.sn1p2.H3) {
      this.sn1p2.H3 = [];
    }

    if (this.sn1p2.H1_4 != 2) {
      let i;
      if (this.sn1p2.H3.length < this.sn1p2.N) {
        for (i = this.sn1p2.H3.length; i < this.sn1p2.N; i++) {
          this.addNewFamily(i + 1);
        }
      } else {
        for (i = this.sn1p2.H3.length; i > this.sn1p2.N; i--) {
          this.sn1p2.H3.pop();
        }
      }

      if (this.validaters.length < this.sn1p2.N) {
        for (i = this.validaters.length; i < this.sn1p2.N; i++) {
          let v = new ValidateSN1P3();
          this.validaters.push(v);
          //console.log(this.sn1p2.A8);
          if (i == 0 && (this.sn1p2.A8 == '4' || this.sn1p2.A8 == '6' || this.sn1p2.A8 == '7' || this.sn1p2.A8 == '8' || this.sn1p2.A8 == '9' || this.sn1p2.A8 == '10' || this.sn1p2.A8 == '11' || this.sn1p2.A8 == '12')) {
            //console.log('ส่วนกลาง')
            this.sn1p2.H3[0].H4_0 = true;
            this.sn1p2.H3[0].H4 = "ส่วนกลาง"
          }
          else
            this.sn1p2.H3[0].H4_0 = false;
          //console.log("add validater");
        }
      } else {
        for (i = this.validaters.length; i > this.sn1p2.N; i--) {
          this.validaters.pop();
        }
      }
    }
    if(this.sn1p2.N<2){
      this.sn1p2.H3[0].mergeTapWater=false;
      
      this.sn1p2.H3[0].mergeGroundWater=false;
    }

  }

  addNewFamily(index) {
    let sn1P3 = new SN1P3()
    sn1P3.H3 = index;
    sn1P3.A1 =this.sn1p2.A1;
    sn1P3.status = 0;
    sn1P3.G1 = null;
    sn1P3.G2 = null;
    sn1P3.G3 = null;
    sn1P3.G4 = null;
    sn1P3.P1 = null;
    sn1P3.P2 = null;
    sn1P3.P3 = null;
    sn1P3.P4 = null;
    sn1P3.mergeTapWater=false;
    sn1P3.mergeGroundWater=false;
    sn1P3.status_approve = 0;
    sn1P3.WaterData = new WaterConsumeData();
    sn1P3.WaterData.tapWater = false;
    sn1P3.WaterData.groundWater = false;
    sn1P3.WaterData.riverWater = false;
    sn1P3.WaterData.poolWater = false;
    sn1P3.WaterData.chonWater = false;
    sn1P3.WaterData.rainWater = false;
    sn1P3.WaterData.buyWater = false;
    sn1P3.WaterData.tapWaterCount = 0;
    sn1P3.WaterData.groundWaterCount = 0;
    sn1P3.WaterData.riverWaterCount = 0;
    sn1P3.WaterData.poolWaterCount = 0;
    sn1P3.WaterData.chonWaterCount = 0;
    sn1P3.WaterData.rainWaterCount = 0;
    sn1P3.WaterData.buyWaterCount = 0;
    this.sn1p2.H3.push(sn1P3);

  }
  openFormSection(family) {
    // let profileModal = this.modalCtrl.create('form2section', { familyInfo: family, a8: this.sn1p2.A8 });
    // profileModal.present();
    //, N1: this.sn1p2.N1, N0: this.sn1p2.N0
    //console.log("openFormSection")
    //console.log(this.validaters)
    let waterData = new WaterConsumeData();
    waterData.G1 = family.WaterData.G1;
    waterData.G2 = family.WaterData.G2;
    waterData.G3 = family.WaterData.G3;
    waterData.G4 = family.WaterData.G4;
    waterData.G_na = family.WaterData.G_na;
    waterData.G_asai = family.WaterData.G_asai;
    waterData.tapWater = family.WaterData.tapWater;
    waterData.groundWater = family.WaterData.groundWater;
    waterData.riverWater = family.WaterData.riverWater;
    waterData.poolWater = family.WaterData.poolWater;
    waterData.chonWater = family.WaterData.chonWater;
    waterData.rainWater = family.WaterData.rainWater;
    waterData.buyWater = family.WaterData.buyWater;
    waterData.tapWaterCount = family.WaterData.tapWaterCount;
    waterData.groundWaterCount = family.WaterData.groundWaterCount;
    waterData.riverWaterCount = family.WaterData.riverWaterCount;
    waterData.poolWaterCount = family.WaterData.poolWaterCount;
    waterData.chonWaterCount = family.WaterData.chonWaterCount;
    waterData.rainWaterCount = family.WaterData.rainWaterCount;
    waterData.buyWaterCount = family.WaterData.buyWaterCount;
    family.WaterData = waterData;
    let valid = true;
    for (let i in this.validaters[family.H3]) {
      valid = valid && this.validaters[family.H3 - 1][i]
    }
    if (valid) {
      let loading = this.loadingController.create({
        content: "กำลังโหลดแบบฟอร์ม กรุณารอสักครู่...",
      });
      loading.present();
      let index;
      if(this.sn1p2.current_page == "3"){
        if (family.G1)
          index = '1'
        else if (family.G2)
          index = '2'
        else if (family.G3)
          index = '3'
        else if (family.G4)
          index = '4'
        else
          index ='5'
      }
      this.sn1p2.current_page=""+family.H3+index;
      this.navCtrl.push('form2section', { familyInfo: family, a8: this.sn1p2.A8, sn1p2: this.sn1p2 }).then(() => loading.dismiss());
    }else{
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
  checkStatus() {
    let flag = true;
    for (let i in this.validaters) {
      //console.log("index : " + i)
      //console.log("status : " + this.sn1p2.H3[i].status)
      if (this.sn1p2.H3[i].status == 0) {

        if (this.sn1p2.H3[i].H5_1 == 2 || this.sn1p2.H3[i].H5_1 == 3) {
          this.sn1p2.H3[i].status = 1;
          flag = false;

        }
      } else if (this.sn1p2.H3[i].status == 1) {
        if (this.sn1p2.H3[i].H5_2 == 2 || this.sn1p2.H3[i].H5_2 == 3) {
          this.sn1p2.H3[i].status = 2;
          flag = false;
        }
      } else if (this.sn1p2.H3[i].status == 2) {
        if (this.sn1p2.H3[i].H5_3 == 2 || this.sn1p2.H3[i].H5_3 == 3) {
          this.sn1p2.H3[i].status = 4;
        }
      }
    }
    if(flag){
      this.sn1p2.H3.map(h3=>{
        if(h3.status != 4){
          h3.status = 5;
        }
      })
    }
    this.sn1p2.Ncount = Number(this.sn1p2.N) - Number(this.sn1p2.H3.filter(h3=>h3.status==4).length)
    return flag;
  }
  checkSN21() {
    let flag = true;
    for (let i in this.validaters) {
      if (this.sn1p2.H3[i].status == 5) {
        if (this.sn1p2.H3[i].SN2_1) {
          if (this.sn1p2.H3[i].SN2_1.status == 4) {
            this.sn1p2.H3[i].status = 4;
          } else {
            flag = false;
          }
        } else {
          flag = false;
        }
      }
    }
    this.sn1p2.Ncount = Number(this.sn1p2.N) - Number(this.sn1p2.H3.filter(h3=>h3.status==4).length)
    return flag;
  }
  save() {
    if (this.validaters.filter(v => Object.keys(v).filter(k => !v[k]).length > 0).length === 0) {
      if (this.checkStatus()) {
        if (this.checkSN21()) {
          this.sn1p2.status = 4;
          this.sn1p2.current_page="1";
          this.sn1p2.Modify_DATE.push(new Date());
          if(this.sn1p2.version){
            this.sn1p2.version=this.sn1p2.saveVersion+1;
          }else{
            this.sn1p2.saveVersion=0;
            this.sn1p2.version=this.sn1p2.saveVersion+1;
          }
          this.events.publish("saveData");
        } else {
          this.sn1p2.status = 5;
          const alert = this.alertCtrl.create({
            title: 'กรุณากรอกข้อมูลสน.2-1ให้ครบถ้วน',
            buttons: [{
              text: 'ยืนยัน',
              handler: () => {
                
              }
            }]
          });
          alert.present();
        }
      } else {
        this.sn1p2.status = 5;
        this.events.publish("saveData");
      }
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
  merge(family){
    if(family.N<2){
      family.mergeTapWater=false;
      family.mergeGroundWater=false;
    }
    if(family.P1 == false){
      family.P2 = false;
    }
    if(family.P3 == false){
      family.P4 = false;
    }
    if(family.P2 == true){
      family.mergeTapWater=false;
    }else{
      family.mergeTapWater=true;
    }
    if(family.P4 == true){
      family.mergeGroundWater=false;
    }else{
      family.mergeGroundWater=true;
    }
  }
}
