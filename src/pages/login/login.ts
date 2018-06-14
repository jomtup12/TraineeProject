import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";
import { Storage } from '@ionic/storage';
import { User } from '../../models/user';



@IonicPage({
  name: 'login'
}
)
@Component({
  selector: 'login',
  templateUrl: './login.html'
})
export class LoginPage implements OnInit {
  myForm: FormGroup;
  userInfo: { name: string, password: string } = { name: '', password: '' };
  saveUser: User;
  valiadUsername: boolean = true;
  valiadPassword: boolean = true;

  constructor(public formBuilder: FormBuilder, public navCtrl: NavController, public navParams: NavParams,  private loadingController: LoadingController, private storage: Storage, private alertCtrl: AlertController) {

  }
  ionViewDidEnter() {
    this.storage.get("userInfo").then((userInfo) => {
      if (this.userInfo){
        this.saveUser = userInfo;
        this.userInfo.name=this.saveUser.USERID;
      }
      else
        this.alertNo();
    });
  }
  alertNo() {
    const alert = this.alertCtrl.create({
      title: "กรุณากดเปิดใช้งาน Tablet ครั้งแรกก่อนใช้งาน",
      buttons: [{
        text: 'ยืนยัน',
        handler: () => {
          this.navCtrl.push('scanqr', {}, { animate: false });
        }
      }]
    });
    alert.present();
  }
  ngOnInit(): any {
    this.myForm = this.formBuilder.group({
      'name': ['', this.nameValidator.bind(this)],
      'password': ['', [Validators.required, this.passwordValidator.bind(this)]]
    });
  }

  onSubmit() {
    //console.log('submitting form');
    let loading = this.loadingController.create({
      content: "กำลังเข้าสู่ระบบ กรุณารอสักครู่...",
    });
    loading.present();
    this.valiadUsername = true;
    this.valiadPassword = true;
    if (this.saveUser) {
      //console.log(this.saveUser);
      //console.log(this.userInfo)
      if (!this.userInfo.name) {
        this.valiadUsername = false;

      }
      if (!this.userInfo.password) {
        this.valiadPassword = false;
      }
      if (this.userInfo.name == this.saveUser.USERID) {
        if (this.userInfo.password == this.saveUser.PASSWORD) {
          loading.dismiss();
          this.valiadUsername = true;
          this.valiadPassword = true;
          this.navCtrl.push('confirmuser', { 'userInfo': this.saveUser }, { animate: false });
        } else {
          loading.dismiss();
          this.alertPR("กรุณากรอกรหัสผ่านให้ถูกต้อง");
          this.valiadPassword = false;
        }
      } else {
        loading.dismiss();
        this.alertPR("กรุณากรอกรหัสพนักงานให้ถูกต้อง");
        this.valiadUsername = false;
      }
    } else {
      loading.dismiss();
      this.alertNo();
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


  passwordValidator(control: FormControl): { [s: string]: boolean } {
    if (control.value !== '') {
      return { invalidPassword: true };
    }
  }
  goBack(value: any) {
    this.navCtrl.pop({ animate: false });
  }
}
