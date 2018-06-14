import { ViewController } from 'ionic-angular/navigation/view-controller';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PumpWaterImgPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name:'pumpWaterImgPage'
})
@Component({
  selector: 'page-pump-water-img',
  templateUrl: 'pump-water-img.html',
})
export class PumpWaterImgPage {
  type:any;
  model:any="";
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController) {
    this.type=this.navParams.get("type");
    this.model=this.navParams.get("model");
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad PumpWaterImgPage');
  }
  back(){
    this.viewCtrl.dismiss();
  }

}
