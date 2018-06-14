import { HttpProvider } from './../../providers/http/http';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl} from "@angular/forms";
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { User } from '../../models/user';
import { Storage } from '@ionic/storage';


/**
 * Generated class for the CreatepasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'createpassword'
})
@Component({
  selector: 'page-createpassword',
  templateUrl: 'createpassword.html',
})
export class CreatepasswordPage implements OnInit {
  myForm: FormGroup;
  userInfo: User;
  USERID: string = null;
  savePassword: string = null;
  oldPassword: string = null;
  newPassword: string = null;
  newPassword2: string = null;
  notValid: boolean;
  saveUser: User;

  constructor(public formBuilder: FormBuilder, public navCtrl: NavController, public navParams: NavParams, private storage: Storage, private httpProvider: HttpProvider, private loadingController: LoadingController, private alertCtrl: AlertController) {
    let u= navParams.get('userInfo');
    this.userInfo =u[0];
    this.USERID = this.userInfo.USERID;
    //console.log(this.USERID);
    this.storage.get("userInfo").then((userInfo) => {
      this.saveUser = userInfo;
    });

    this.notValid = false;
    // this.savePassword = navParams.get('password');
    // this.http.login(this.userInfo.USERID, this.savePassword).subscribe(result => {
    //   let info = result.json();
    //   this.userInfo = info;
    // });
  }

  ngOnInit(): any {

  }

  onSubmit() {
    //console.log('submitting form');
    //console.log(this.USERID);
    //console.log(this.oldPassword);
    //console.log(this.newPassword);
    //console.log(this.newPassword2);
    //console.log(this.saveUser)
    //console.log((!this.USERID || !this.oldPassword || !this.newPassword || !this.newPassword2));
    if(!this.USERID){
      this.alertPR("กรุณากรอกข้อมูลให้ถูกต้อง");
      this.notValid = true;
    }else if(!this.oldPassword){
      this.alertPR("กรุณากรอกข้อมูลให้ถูกต้อง");
      this.notValid = true;
    }
    else if(!this.newPassword){
      this.alertPR("กรุณากรอกข้อมูลให้ถูกต้อง");
      this.notValid = true;
    }
    else if(!this.newPassword2){
      this.alertPR("กรุณากรอกข้อมูลให้ถูกต้อง");
      this.notValid = true;
    }
    else if (this.USERID == this.saveUser.USERID) {
      if (this.oldPassword == this.saveUser.PASSWORD) {
        if (this.newPassword == this.newPassword2) {
          let loading = this.loadingController.create({
            content: "กำลังเชื่อมต่อกับระบบ กรุณารอสักครู่...",
          });
          loading.present();
          this.saveUser.PASSWORD = this.newPassword;
          this.httpProvider.updateUserinfo(this.saveUser).subscribe((result) => {
            loading.dismiss();
            this.storage.set("userInfo",this.saveUser).then(()=>{
              this.navCtrl.push('confirmuser', { 'userInfo': this.saveUser }, { animate: false });
            }) 

          }, (err) => {
            loading.dismiss();
          })

        } else {
          this.alertPR("กรุณากรอกข้อมูล รหัสผ่านให้ตรงกัน");
        }
      } else {
        this.alertPR("กรุณากรอกข้อมูล รหัสผ่านให้ถูกต้อง");
      }
    } else {
      this.alertPR("กรุณากรอกข้อมูล รหัสพนักงานให้ถูกต้อง");
    }
  
      


  }
alertPR(msg) {
  const alert = this.alertCtrl.create({
    title: msg,
    buttons: [{
      text: 'ยืนยัน',
      handler: () => {

      }
    }]
  });
  alert.present();
}
isValid(field: string) {
  // let formField = this.myForm.find(field);
  // return formField.valid || formField.pristine;
}

nameValidator(control: FormControl): { [s: string]: boolean } {
  if (control.value !== '') {
    if (control.value.match("^\d{7}$")) {
      return { invalidName: true };
    }
  }
}


// passwordValidator(control: FormControl): { [s: string]: boolean } {
//   if (control.value == this.savePassword) {
//     return { invalidPassword: true };
//   }
// }
goBack(value: any) {
  this.navCtrl.pop({ animate: false });
}
}
