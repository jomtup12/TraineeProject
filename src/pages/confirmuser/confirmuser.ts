
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the ConfirmuserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name:'confirmuser'
})
@Component({
  selector: 'page-confirmuser',
  templateUrl: 'confirmuser.html',
})
export class ConfirmuserPage {
  userInfo:any;
  profilePic='assets/imgs/profileDefault.jpg';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.userInfo = navParams.get('userInfo');
    
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad ConfirmuserPage');
  }
  ConfirmButton(){
    this.navCtrl.push('home',{},{animate: false});
    this.navCtrl.setRoot('home',{},{animate: false});
    //this.navCtrl.push('home',{},{animate: false});
  }
  CancelButton() {
    this.navCtrl.pop({animate: false});
}

}
