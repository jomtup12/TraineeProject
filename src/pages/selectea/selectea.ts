import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage({
  name: 'selectea'
})
@Component({
  selector: 'page-selectea',
  templateUrl: 'selectea.html',
})
export class SelecteaPage {
  EA: Array<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, private events: Events) {
  }
  ionViewDidEnter() {
    this.storage.get('saveEA').then((ea) => {
      if (ea) {
        this.EA = ea;
      } else {
        this.storage.get('EA').then((ea0) => {
          this.storage.set('saveEA', ea0);
          this.EA = ea0;
        })
      }
    });
      this.storage.get('sn1').then((sn) => {
        if(sn){
        this.storage.get('saveSN1').then((saveSn) => {
          //console.log("ข้อมูลsave")
          //console.log(saveSn);
          if (saveSn && saveSn.length > 0) {
            let save = []
            try {
              save = saveSn.filter(sn1 => sn.SN1_ID != sn1.SN1_ID)
            }
            catch (e) {

            }
            if (save.length == 0)
              save = [];
            save.push(sn);
            this.storage.set('saveSN1', save);
            //console.log(save.length);
            //console.log(sn);
          } else {
            let save = [];
            if (sn)
              save.push(sn);
            this.storage.set('saveSN1', save);
            //console.log(save.length);
          }
        });
        }
      });
      this.storage.get('sn22').then((sn) => {
        if(sn){
        this.storage.get('saveSN22').then((saveSn) => {
          console.log("ข้อมูลsave")
          console.log("-------------saveSN22------------------")
          console.log(saveSn)
          console.log("---------------------------------------")
          if (saveSn && saveSn.length > 0) {
            let save = []
            try {
              console.log(sn[0].SN2_2_ID.slice(0, 11));
              console.log(saveSn[0].SN2_2_ID.slice(0, 11))

              save = saveSn.filter(sn22 => sn[0].SN2_2_ID.slice(0, 11) != sn22.SN2_2_ID.slice(0, 11))
              console.log("-------------save------------------")
              console.log(sn[0].SN2_2_ID.slice(0, 11));
              console.log(saveSn[0].SN2_2_ID.slice(0, 11))
              console.log(save)
              console.log("---------------------------------------")
            }
            catch (e) {

            }
            if (save.length == 0 && saveSn.length == 0) {

              console.log(save.length);
              console.log(sn);
            } else if (save.length > 0 &&sn.length>0) {
              for (let s of sn) {
                save.push(s);
              }
              console.log('save2');
              console.log(save);
              this.storage.set('saveSN22', save);
            }
          } else {
            let save = [];
            if (sn){
              for(let s of sn)
                save.push(s);
            }
            //console.log('save');
           // console.log(save);
            this.storage.set('saveSN22', save);
            //console.log(save.length);
          }
        });
        }
        
      });
      
  }
  selectEA(ea) {
    let e = this.EA.filter(ea0 => ea0 == ea)

    this.storage.get('EA').then((ea0) => {
      //console.log("Eaใหม่: " + e[0].EA);
      //console.log("Eaเก่า: " + ea0[0].EA);
      if (e[0].EA != ea0[0].EA) {
        //console.log("EAใหม่")
        this.storage.get("saveSN1").then((save) => {
          let newSN = [];
          try {
            if (save.length > 0)
              newSN = save.filter(s => ("" + e[0].REG + e[0].CWT + e[0].AMP + e[0].TAM + e[0].DISTRICT + e[0].EA) == s.SN1_ID)
          } catch (e) { };
          //console.log(newSN.length);
          //console.log(newSN)
          //console.log("" + e[0].REG + e[0].CWT + e[0].AMP + e[0].TAM + e[0].DISTRICT + e[0].EA)
          if(newSN.length==1){
            //console.log("EAใหม่1")
            this.storage.set('sn1',newSN[0]).then(()=>{
              this.events.publish('noSave');
              this.storage.set('EA', e).then(() => {
                this.navCtrl.popToRoot();

              })
            });
          }
          else{
          //console.log("EAใหม่2")
          this.storage.set('sn1', null).then(() => {
            this.events.publish('noSave');
            this.storage.set('EA', e).then(() => {
              this.navCtrl.popToRoot();

            })
          });
          }
        });
        this.storage.get("saveSN22").then((save) => {
          let newSN = [];
          //console.log("save3")
         // console.log(save)
          try {
            if (save.length > 0)
              newSN = save.filter(s => ("" + e[0].REG + e[0].CWT + e[0].AMP + e[0].TAM + e[0].DISTRICT + e[0].EA) == s.SN2_2_ID.slice(0, 11))
              console.log("test----------------------")
              console.log("" + e[0].REG + e[0].CWT + e[0].AMP + e[0].TAM + e[0].DISTRICT + e[0].EA)
              console.log(save[0].SN2_2_ID.slice(0, 11))
              console.log("--------------------------")
            } catch (e) { };
          //console.log(newSN.length);ea.REG + ea.CWT + ea.AMP + ea.TAM + ea.DISTRICT + ea.EA
          //console.log(newSN)
          //console.log("" + e[0].REG + e[0].CWT + e[0].AMP + e[0].TAM + e[0].DISTRICT + e[0].EA)
         // console.log('----------------sn22--------');
          //console.log(newSN)
            this.storage.set('sn22',newSN).then(()=>{
              this.events.publish('noSave2');
              this.storage.set('EA', e).then(() => {
                this.navCtrl.popToRoot();

              })
            });
          
          //console.log("EAใหม่2")
         
          
        });
      } else {
        //console.log("EAเก่า")
        this.storage.set('EA', e).then(() => {
          this.navCtrl.popToRoot();

        });
      }
    });

  }
  ionViewDidLoad() {
    //console.log('ionViewDidLoad SelecteaPage');
  }
  home() {
    this.navCtrl.popToRoot();
  }

}
