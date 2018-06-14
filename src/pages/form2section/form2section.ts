import { SN2_1P4 } from './../../models/SN2_1/SN2_1P4';
import { SN2_1P3 } from './../../models/SN2_1/SN2_1P3';
import { SN2_1P6 } from './../../models/SN2_1/SN2_1P6';

import { Component, ViewChild, OnDestroy } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, AlertController, ToastController, Content, Slides, Navbar } from 'ionic-angular';
import { SN1P3 } from '../../models/SN1/SN1P3';
import { SN2_1 } from '../../models/SN2_1/SN2_1';
import { SN2_1P5 } from '../../models/SN2_1/SN2_1P5';
import { SN2_1P1 } from '../../models/SN2_1/SN2_1P1';
import { SN2_1P2 } from '../../models/SN2_1/SN2_1P2';
import { Keyboard } from 'ionic-angular/platform/keyboard';
import { Keyboard as NativeKeyboard} from '@ionic-native/keyboard';
// import { Observable } from 'rxjs/Rx'
/**
 * Generated class for the Form2sectionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'form2section'
})
@Component({
  selector: 'page-form2section',
  templateUrl: 'form2section.html',
})
export class Form2sectionPage implements OnDestroy{
  @ViewChild(Content) content: Content;
  @ViewChild(Slides) slides: Slides;
  family: SN1P3;
  a8: any;
  roomCount: any;
  roomEmptyCount: any;
  sn1p2: any;
  WaterCensusSection: String;
  disable1:boolean=true;
  disable2:boolean=true;
  disable3:boolean=true;
  disable4:boolean=true;
  disable5:boolean=true;
  disable6:boolean=true;
  keyboardHeight: any = 0
  nativeKeyboard: NativeKeyboard = new NativeKeyboard();
  hideFooter:boolean=false;
  @ViewChild(Navbar) navBar: Navbar;
  constructor(public navCtrl: NavController, public navParams: NavParams,public keyboard : Keyboard, private events: Events, private alertCtrl: AlertController, private toastCtrl: ToastController) {
    this.family = this.navParams.get('familyInfo');
    this.a8 = this.navParams.get('a8');
    this.sn1p2 = this.navParams.get('sn1p2');
    // Observable.merge(this.nativeKeyboard.onKeyboardShow(), this.keyboard.didShow)
    // .subscribe((e: any) => {
    //   this.keyboardHeight = e.keyboardHeight;
    //   this.hideFooter = true
    // });
    
    // Observable.merge(this.nativeKeyboard.onKeyboardHide(), this.keyboard.didHide)
    // .subscribe((e: any) => {
    //   this.keyboardHeight = e.keyboardHeight | 0;
    //   this.hideFooter = false
    // });
    this.nativeKeyboard.disableScroll(true)
    this.family.WaterData.G1 = this.family.G1;
    this.family.WaterData.G2 = this.family.G2;
    this.family.WaterData.G3 = this.family.G3;
    this.family.WaterData.G4 = this.family.G4;
    this.family.WaterData.G_na = false;
    this.family.WaterData.G_asai = false;
    this.init();
    this.events.subscribe("saveSN21", (index) => {
      if (index != 0) {
        this.next(index);
      }
      else {
        if (this.checkStatus()) {
          this.presentToast();
          this.sn1p2.current_page="3";
          this.navCtrl.pop().then(()=>{
            if(this.family.version){
              this.family.version=this.family.saveVersion+1;
            }else{
              this.family.saveVersion=0;
              this.family.version=this.family.saveVersion+1;
            }
            this.events.unsubscribe('saveSN21');
          })
          
          
        }
      }
    });
    this.events.subscribe("scroll",()=>{
      this.scrollToTop();
    })
  }
  checkStatus() {
    let flag = true;
    if (this.family.SN2_1.A5.status == 0) {
      flag = false;
    }
    if (this.family.G1) {
      if (this.family.SN2_1.A1.status == 0) {
        flag = false;
      }
      if (this.family.SN2_1.A6.status == 0) {
        flag = false;
      }
    }
    if (this.family.G2) {
      if (this.family.SN2_1.A2.status == 0) {
        flag = false;
      }
    }
    if (this.family.G3) {
      if (this.family.SN2_1.A3.status == 0) {
        flag = false;
      }
    }
    if (this.family.G4) {
      if (this.family.SN2_1.A4.status == 0) {
        flag = false;
      }
    }
    if (flag) {
      this.family.SN2_1.status = 4;
    } else {
      this.family.SN2_1.status = 0;
    }
    return flag;
  }
  init() {
    if (this.family.SN2_1 == null) {
      this.family.SN2_1 = new SN2_1();
      this.family.SN2_1.status = 0;
    }
    if (this.family.SN2_1.A5 == null) {
      this.family.SN2_1.A5 = new SN2_1P5();
      this.family.SN2_1.A5.status = 0;
    }

    if (this.family.G1) {
      if (this.family.SN2_1.A1 == null) {
        this.family.SN2_1.A1 = new SN2_1P1();
        this.family.SN2_1.A1.A1_1 = '';
        this.family.SN2_1.A1.status = 0;
      }
      if (this.family.SN2_1.A6 == null) {
        this.family.SN2_1.A6 = new SN2_1P6();
        this.family.SN2_1.A6.status = 0;
      }
    }
    if (this.family.G2) {
      if (this.family.SN2_1.A2 == null) {
        this.family.SN2_1.A2 = new SN2_1P2();
        this.family.SN2_1.A2.status = 0;
      }
    }
    if (this.family.G3) {
      if (this.family.SN2_1.A3 == null) {
        this.family.SN2_1.A3 = new SN2_1P3();
        this.family.SN2_1.A3.status = 0;
      }
    }
    if (this.family.G4) {
      if (this.family.SN2_1.A4 == null) {
        this.family.SN2_1.A4 = new SN2_1P4();
        this.family.SN2_1.A4.status = 0;
      }
    }

    if (this.family.G1) {
      this.disable1=false;
      this.WaterCensusSection = "section1";
    } else if (this.family.G2) {
      this.disable2=false;
      this.WaterCensusSection = "section2";
    } else if (this.family.G3) {
      this.disable3=false;
      this.WaterCensusSection = "section3";
    } else if (this.family.G4) {
      this.disable4=false;
      this.WaterCensusSection = "section4";
    }
  }
  ngOnDestroy(){
    this.events.unsubscribe('saveSN21');
  }
  ionViewDidLoad() {
    this.slides.lockSwipes(true);
    this.navBar.backButtonClick = (e:UIEvent)=>{
      this.sn1p2.current_page="3";
      this.navCtrl.pop();
    }
  }
  ionViewDidEnter(){
   let p = this.sn1p2.current_page.substring(1,2);
   if(p=="1"&&(!this.family.G1))
    p="2"
    if(p=="2"&&(!this.family.G2))
    p="3"
    if(p=="3"&&(!this.family.G3))
    p="4"
    if(p=="4"&&(!this.family.G4))
    p="5"
    if(p=="6"&&(!this.family.G1))
    p="5"
   this.WaterCensusSection="section"+p;
   //console.log("WaterCensus :"+this.WaterCensusSection);
   this.disable1=false;
    if (Number(p) >= 2)
      this.disable2 = false;
    if (Number(p) >= 3)
      this.disable3 = false;
    if (Number(p) >= 4)
      this.disable4 = false;
    if (Number(p) >= 5)
      this.disable5 = false;
    if (Number(p) >= 6)
      this.disable6 = false;
   
  }
  pauseEA() {
    this.events.publish('pause');
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
  save() {
    //this.events.publish('checkValid');
    this.navCtrl.popToRoot();
    this.presentToast();
  }
  deleteForm() {
    const alert = this.alertCtrl.create({
      title: 'ต้องการจะลบใช่หรือไม่',
      buttons: [{
        text: 'ยืนยัน',
        handler: () => {
          this.events.publish("delete", this.sn1p2, 1);
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
  scrollToTop() {
    try {
      if (this.content != undefined && this.content && this.content != null)
        return this.content.scrollToTop();
    } catch (e) {
      //console.log(e);
    }
  }
  next(index:number) {
      if (index == 1)
        if (this.family.G2) {
          this.disable2 = false;
          this.sn1p2.current_page=this.sn1p2.current_page.substring(0,1)+'2'
          this.WaterCensusSection = "section2";
          this.scrollToTop();
          return;
        }
      if (index >= 1 && index < 3)
        if (this.family.G3) {
          this.disable3 = false;
          this.sn1p2.current_page=this.sn1p2.current_page.substring(0,1)+'3'
          this.WaterCensusSection = "section3";
          this.scrollToTop();
          return;
        }
      if (index >= 1 && index < 4)
        if (this.family.G4) {
          this.disable4 = false;
          this.sn1p2.current_page=this.sn1p2.current_page.substring(0,1)+'4'
          this.WaterCensusSection = "section4";
          this.scrollToTop();
          return;
        }
      if (index == 5) {
        if (this.family.G1) {
          this.disable6 = false;
          this.sn1p2.current_page=this.sn1p2.current_page.substring(0,1)+'6'
          this.WaterCensusSection = "section6";
          this.scrollToTop();
          return;
        }
      }

      this.disable5 = false;
      this.sn1p2.current_page=this.sn1p2.current_page.substring(0,1)+'5'
      this.WaterCensusSection = "section5";
      this.scrollToTop();
    

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
  // getKeyboardStyle(){
  //   let style = {
  //     'top': this.keyboardHeight ? this.keyboardHeight + 'px' : '0px'
  //   }
  //   return style;
  // }

}
