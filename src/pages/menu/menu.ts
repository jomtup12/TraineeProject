import { User } from './../../models/user';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SN1 } from '../../models/SN1/SN1';
import { SN2_2 } from '../../models/SN2_2/SN2_2';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'menu'
})
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  countStatus = 0;
  countPause = 0;
  countEdit = 0;
  countJob = 0;
  sn1:SN1;
  sn22: Array<SN2_2>;
  user:User;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.sn1 = this.navParams.get('sn1');
    this.sn22 = this.navParams.get('sn22');
    this.user = this.navParams.get('user');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }
  navigate(page: string) {
    this.navCtrl.push(page, {}, { animate: false });
  }
  upload() {
    this.navCtrl.push('upload', { sn1: this.sn1, sn22: this.sn22 }, { animate: false });
  }

}
