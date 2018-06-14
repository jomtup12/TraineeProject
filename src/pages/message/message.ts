import { ViewController } from 'ionic-angular/navigation/view-controller';
import { SN1P3 } from './../../models/SN1/SN1P3';
import { SN1P2 } from './../../models/SN1/SN1P2';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})
export class MessagePage {
  sn:SN1P2;
  messages:{
    H4:string;
    date:Date;
    message:string;
  }[]=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,private viewCtrl:ViewController) {
    this.sn=this.navParams.get('SN');
    //console.log("Msg");
    //console.log(this.sn);
    this.messages=[];
    
    //console.log(this.messages);
  }

  ionViewDidEnter(){
  
    //console.log('ionViewDidLoad MessagePage');
    for (let i of this.sn.H3) {
      //console.log("Msg1");
      let h3=new SN1P3();
      h3 = i;
      //console.log(h3);
      if (h3.messages != null) {
        //console.log("Msg2");
        for (let msg of i.messages) {
          //console.log("Msg3");
          if (i.H4)
            this.messages.push({ H4: i.H4, date: msg.date, message: msg.message });
          else {
            this.messages.push({ H4: null, date: msg.date, message: msg.message });
          }
        }
      }
    }
  }
  close() {
    this.viewCtrl.dismiss();
  }

}
