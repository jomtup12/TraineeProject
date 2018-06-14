import { HttpProvider } from './../../providers/http/http';
import { SN1 } from './../../models/SN1/SN1';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, Events, AlertController } from 'ionic-angular';
import { SN2_2 } from '../../models/SN2_2/SN2_2';
import { Storage } from '@ionic/storage';
import { User } from '../../models/user';

/**
 * Generated class for the UploadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'upload'
})
@Component({
  selector: 'page-upload',
  templateUrl: 'upload.html',
})
export class UploadPage {
  sn1: SN1;
  sn22: Array<SN2_2>;
  flag1: boolean;
  flag2: boolean;
  noUpload: boolean = true;
  user:User;
  EAList;
  constructor(public navCtrl: NavController, public navParams: NavParams, private loadingController: LoadingController, private httpProvider: HttpProvider, private toastCtrl: ToastController, private storage: Storage, private events: Events,private alertCtrl:AlertController) {
    this.sn1 = this.navParams.get("sn1");
    this.sn22 = this.navParams.get("sn22");
    this.user = this.navParams.get("User");
    this.EAList = this.navParams.get("EaList");
  }
  home() {
    this.storage.set("sn1", this.sn1).then(() => {
      this.events.publish('noSave');
      this.storage.set("sn22", this.sn22).then(() => {
        this.events.publish('noSave2');
        this.navCtrl.pop();
      });
    });


  }
  ionViewDidLoad() {
    //console.log('ionViewDidLoad UploadPage');
    this.checkStatus();
    this.noUpload = true;
  }
  checkStatus() {
    this.flag1 = this.sn1.SN1P2.filter(sn => sn.status == 4).length != 0
    this.flag2 = this.sn22.filter(sn => sn.status == 4).length != 0
    //console.log(this.sn22)
  }
  upload() {
    let loading = this.loadingController.create({
      content: "กำลังส่งแบบฟอร์ม กรุณารอสักครู่...",
    });
    loading.present();
    let date = new Date();
    if (this.sn1) {
      for (let i in this.sn1.SN1P2) {
        if (this.sn1.SN1P2[i].status == 4) {
          this.sn1.SN1P2[i].status = 6
          try{
          if (this.sn1.SN1P2[i].H3)
            if (this.sn1.SN1P2[i].H3.length > 0)
              this.sn1.SN1P2[i].H3.map(l => {
                l.submit_date = date
                if (!l.G1) {
                  l.SN2_1.A1 = null;
                  l.SN2_1.A6 = null;
                }
                if (!l.G2)
                  l.SN2_1.A2 = null;
                if (!l.G3)
                  l.SN2_1.A3 = null;
                if (!l.G4)
                  l.SN2_1.A4 = null;
              });
          }catch(e){
            
          }
        }
      }
      this.sn1.submit_date = date;
      let sn1 = this.sn1;


      if (sn1.SN1P2.length != 0) {

        this.httpProvider.saveSN1(sn1).subscribe((result) => {
          //console.log(result);
          this.checkStatus();
          this.presentToast('งาน');
        }, (error) => {
          console.log("error: "+error);
          const alert = this.alertCtrl.create({
            title: 'เกิดปัญหาขณะส่งข้อมูล',
            subTitle: 'รหัสข้อผิดพลาด: '+error,
            buttons: [{
              text: 'ยืนยัน',
              handler: () => {
    
              }
            }]
          });
          alert.present();
          if (this.sn1) {
            for (let i in this.sn1.SN1P2) {
              if (this.sn1.SN1P2[i].status == 6) {
                this.sn1.SN1P2[i].status = 4
              }
            }
          }

        })
      }
    }
    if (this.sn22) {
      for (let i in this.sn22) {
        if (this.sn22[i].status == 4) {
          this.sn22[i].status = 6
          this.sn22[i].submit_date = date;
        }
      }
      let sn2_2 = this.sn22;


      if (sn2_2.length != 0) {
        for (let s of sn2_2) {
          this.httpProvider.saveSN2_2(s).subscribe((result) => {
            //console.log(result);
            this.checkStatus();
            this.presentToast('งาน');
          }, (error:Response) => {
            console.log(error.status);
            const alert = this.alertCtrl.create({
              title: 'เกิดปัญหาขณะส่งข้อมูล',
              subTitle: 'รหัสข้อผิดพลาด: '+error,
              buttons: [{
                text: 'ยืนยัน',
                handler: () => {
      
                }
              }]
            });
            alert.present();
          })
        }

      }
    }
    this.noUpload = false;
    loading.dismiss();
  }
  refresh() {
    this.httpProvider.downloadSN1(this.user.USERID).timeout(60000).subscribe((newSn1) => {
      //console.log("New SN1");
      //console.log(newSn1.json());
      
      for (let i in newSn1) {
        let newSN = new SN1();
        newSN = newSn1.json()[i];
        //console.log(newSN)
        //console.log(this.sn1)
        if (newSN != null) {
          if (this.sn1 == null || this.sn1.SN1P2.length == 0) {
            //console.log('1');
            if (newSN.SN1_ID == this.sn1.SN1_ID) {
              //console.log('2');
              this.sn1 = newSN;
              this.sn1.SN1P2 = newSN.SN1P2.filter(sn => sn.status == 6 || sn.status == 10)
              
            }
          }
          else {
            if (newSN.SN1_ID == this.sn1.SN1_ID) {

              this.sn1.status_approve = newSN.status_approve;
              // //console.log('3');
              for (let index in this.sn1.SN1P2) {
                  let sn = newSN.SN1P2.filter(sn => (sn.A1 == this.sn1.SN1P2[index].A1) && (sn.status == 6 || sn.status == 10));
                  if(sn.length == 1){
                    if(this.sn1.SN1P2[index].version){
                      if(sn[0].version){
                        if (this.sn1.SN1P2[index].version < sn[0].version)
                          this.sn1.SN1P2[index] = sn[0];
                      }else
                        this.sn1.SN1P2[index] = sn[0];
                      
                    }
                  }
                }
            }

          }

          this.storage.set('sn1', this.sn1);
        }
      }
    }, (error) => {
      
    });
    this.httpProvider.downloadSN22(this.user.USERID).timeout(60000).subscribe((newSn1) => {
      //console.log("New SN22");
      //console.log(newSn1.json());

      let newSN = Array<SN2_2>();
      newSN = newSn1.json();
      if (newSN != null) {
        let ea = this.EAList[0];
        if (this.sn22 == null || this.sn22.length == 0) {
          //console.log('11');
          this.sn22=[]
          for(let i of newSN){
            //console.log("------------i------------")
            //console.log(i)
            if(i.SN2_2_ID.substring(0, i.SN2_2_ID.length - 1)== "" + ea.REG + ea.CWT + ea.AMP + ea.TAM + ea.DISTRICT + ea.EA)
              this.sn22.push(i)
          }
          
        }
        else {
          for(let i of newSN){
            if(i.SN2_2_ID.substring(0, i.SN2_2_ID.length - 1)== "" + ea.REG + ea.CWT + ea.AMP + ea.TAM + ea.DISTRICT + ea.EA)
            {
                let flag =true;
                for(let sn in this.sn22){
                  if(this.sn22[sn].SN2_2_ID == i.SN2_2_ID){
                    if(this.sn22[sn].version < i.version)
                    this.sn22[sn]=i;
                    flag =false;
                  }
                }
                if(flag){
                  this.sn22.push(i);
                }
                
              }
              
          }
          
        }
        this.storage.set('sn22', this.sn22);
      }
    }, (error) => {

    });
   
  }
  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: 'ส่ง' + msg + 'เรียบร้อย',
      duration: 3000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      //console.log('Dismissed toast');
    });

    toast.present();
  }

}
