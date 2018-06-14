import { Storage } from '@ionic/storage';

import { Component, ViewChild, OnDestroy } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, Slides, AlertController, ToastController} from 'ionic-angular';
import { Keyboard } from 'ionic-angular/platform/keyboard';
import { Keyboard as NativeKeyboard} from '@ionic-native/keyboard';
// import { Observable } from 'rxjs/Rx'
import { SN1P2 } from '../../models/SN1/SN1P2';
import { WaterConsumeData } from '../../models/WaterConsumeData';

/**
 * Generated class for the CollectionformPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'collectionform'
})
@Component({
  selector: 'page-collectionform',
  templateUrl: 'collectionform.html',
})
export class CollectionformPage implements OnDestroy{
  @ViewChild('slider') slides: Slides;
  WaterCensus: String;
  isEnabled2 = false;
  isEnabled3 = false;
  sn1p2: SN1P2;
  familyInfo: Array<any> = [];
  date: any;
  keyboardHeight: any = 0
  nativeKeyboard: NativeKeyboard = new NativeKeyboard();

  

  public alertPresented: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public keyboard: Keyboard, private events: Events, private storage: Storage, private alertCtrl: AlertController, private toastCtrl: ToastController) {
    //console.log("consructure of collectionform");
    // Observable.merge(this.nativeKeyboard.onKeyboardShow(), this.keyboard.didShow)
    // .subscribe((e: any) => {
    //   this.keyboardHeight = e.keyboardHeight;
    // });

  // Observable.merge(this.nativeKeyboard.onKeyboardHide(), this.keyboard.didHide)
  //   .subscribe((e: any) => {
  //     this.keyboardHeight = e.keyboardHeight | 0;
  //   });
    this.WaterCensus = "WaterCensus1";
    this.sn1p2 = navParams.get('sn1p2');
    this.alertPresented = false
    this.nativeKeyboard.disableScroll(true)
    this.events.subscribe("FirstformDataSubmited", (sn1p2, date) => {
      this.isEnabled2 = true;
      this.WaterCensus = "WaterCensus2";
      this.sn1p2 = sn1p2;
      this.date = date;
      this.storage.set('sn1p2', this.sn1p2);
      this.sn1p2.current_page = '2';
      //this.storage.set('familyInfo', this.familyInfo);
    });
    this.events.subscribe("FirstformData2Submited", (sn1p2) => {
      this.isEnabled3 = true;
      this.sn1p2.current_page = '3';
      this.WaterCensus = "WaterCensus3";
      this.sn1p2 = sn1p2;
      this.storage.set('sn1p2', this.sn1p2);
    });
    this.events.subscribe("DataSubmited", (sn1p2, date) => {
      this.sn1p2 = sn1p2;
      this.date = date;
      this.sn1p2.Modify_DATE.push(new Date());
      this.navCtrl.popToRoot();
    });
    this.events.subscribe("FirstformSubmited-1", (sn1p2, date) => {
      this.sn1p2 = sn1p2;
      this.date = date;
      this.sn1p2.Modify_DATE.push(new Date());
      this.navCtrl.popToRoot();
    });
    this.events.subscribe("pause", () => {
      this.sn1p2.status = 3;
      //console.log(this.sn1p2);
      this.sn1p2.Modify_DATE.push(new Date());
      this.navCtrl.popToRoot();
    });
    this.events.subscribe("saveData", () => {
      this.presentToast();
      this.sn1p2.Modify_DATE.push(new Date());
      this.navCtrl.popToRoot();
      this.events.unsubscribe("saveData");
    });
  }
  save() {
    //this.events.publish('checkValid');
    this.sn1p2.Modify_DATE.push(new Date());
    if(this.sn1p2.version){
      this.sn1p2.version=this.sn1p2.saveVersion+1;
    }else{
      this.sn1p2.saveVersion=0;
      this.sn1p2.version=this.sn1p2.saveVersion+1;
    }
    this.navCtrl.popToRoot();
    this.presentToast();
  }
  pauseEA() {
    this.sn1p2.status = 3;
    this.sn1p2.Modify_DATE.push(new Date());
    this.navCtrl.popToRoot();
  }
  ionViewDidLoad() {
    //console.log('ionViewDidLoad CollectionformPage');
    this.slides.lockSwipes(true);
  }

  ionViewDidEnter() {
    if(this.sn1p2.current_page == '1')
      this.WaterCensus = "WaterCensus1";
    else if(this.sn1p2.current_page == '2'){
      this.isEnabled2 = true;
      this.WaterCensus = "WaterCensus2";
    }
      else if(this.sn1p2.current_page == '3'){
      this.WaterCensus = "WaterCensus3";
      this.isEnabled2 = true;
      this.isEnabled3 = true;
    }else{
      this.WaterCensus = "WaterCensus3";
      this.isEnabled2 = true;
      this.isEnabled3 = true;
      let h3=Number(this.sn1p2.current_page.substring(0,1));
      
      //console.log(h3);
      //console.log(this.sn1p2.H3[h3-1]);
      let waterData = new WaterConsumeData();
    waterData.G1 = this.sn1p2.H3[h3-1].WaterData.G1;
    waterData.G2 = this.sn1p2.H3[h3-1].WaterData.G2;
    waterData.G3 = this.sn1p2.H3[h3-1].WaterData.G3;
    waterData.G4 = this.sn1p2.H3[h3-1].WaterData.G4;
    waterData.G_na = this.sn1p2.H3[h3-1].WaterData.G_na;
    waterData.G_asai = this.sn1p2.H3[h3-1].WaterData.G_asai;
    waterData.tapWater = this.sn1p2.H3[h3-1].WaterData.tapWater;
    waterData.groundWater = this.sn1p2.H3[h3-1].WaterData.groundWater;
    waterData.riverWater = this.sn1p2.H3[h3-1].WaterData.riverWater;
    waterData.poolWater = this.sn1p2.H3[h3-1].WaterData.poolWater;
    waterData.chonWater = this.sn1p2.H3[h3-1].WaterData.chonWater;
    waterData.rainWater = this.sn1p2.H3[h3-1].WaterData.rainWater;
    waterData.buyWater = this.sn1p2.H3[h3-1].WaterData.buyWater;
    waterData.tapWaterCount = this.sn1p2.H3[h3-1].WaterData.tapWaterCount;
    waterData.groundWaterCount = this.sn1p2.H3[h3-1].WaterData.groundWaterCount;
    waterData.riverWaterCount = this.sn1p2.H3[h3-1].WaterData.riverWaterCount;
    waterData.poolWaterCount = this.sn1p2.H3[h3-1].WaterData.poolWaterCount;
    waterData.chonWaterCount = this.sn1p2.H3[h3-1].WaterData.chonWaterCount;
    waterData.rainWaterCount = this.sn1p2.H3[h3-1].WaterData.rainWaterCount;
    waterData.buyWaterCount = this.sn1p2.H3[h3-1].WaterData.buyWaterCount;
    this.sn1p2.H3[h3-1].WaterData = waterData;
      this.navCtrl.push('form2section', { familyInfo: this.sn1p2.H3[h3-1], a8: this.sn1p2.A8, sn1p2: this.sn1p2 });
    }
  }
  deleteForm() {
    if (!this.alertPresented) {
      this.alertPresented = true
      const alert = this.alertCtrl.create({
        title: 'ต้องการจะลบใช่หรือไม่',
        buttons: [{
          text: 'ยืนยัน',
          handler: () => {
            //console.log('ยืนยันการลบ');

            this.events.publish("delete", this.sn1p2, 1);
            this.navCtrl.popToRoot();
            this.alertPresented = false;
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
  }
  Navigate() {
    const alert = this.alertCtrl.create({
      title: 'ต้องการบันทึกก่อนกลับสู่หน้าแรกหรือไม่?',
      buttons: [{
        text: 'บันทึก',
        handler: () => {
          this.pauseEA();
        }
      }, {
        text: 'ไม่บันทึก',
        handler: () => {
          //console.log('ไม่บันทึก');
          this.events.publish('noSave');
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
  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'บันทึกข้อมูลเรียบร้อย',
      duration: 3000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      //console.log('Dismissed toast');
    });

    toast.present();
  }
  navigate(page: string) {
    this.navCtrl.push(page, {}, { animate: false });
  }
  ngOnDestroy(){
    this.events.unsubscribe("saveData");
  }

  // getKeyboardStyle(){
  //   let style = {
  //     'top': this.keyboardHeight ? this.keyboardHeight + 'px' : '0px'
  //   }
  //   return style;
  // }

}
