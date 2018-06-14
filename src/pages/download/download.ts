import { HttpProvider } from './../../providers/http/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';





@IonicPage({
  name: 'download'
})
@Component({
  selector: 'page-download',
  templateUrl: 'download.html',
})
export class DownloadPage {
  id = "4060001";
  downloadedEA:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private httpProvider: HttpProvider,private storage: Storage,private loadingController:LoadingController) {
  }

  downloadEA() {
    let loading = this.loadingController.create({
      content: "กำลังสร้างแบบฟอร์ม กรุณารอสักครู่...",
    });
    loading.present();
    this.httpProvider.downloadEA().subscribe(
      (result) => {
          this.downloadedEA=result;
          //console.log(this.downloadedEA);
          loading.dismiss();
      },
      (err) => {
        loading.dismiss();
      });
  }
  saveDownload(){
    this.storage.set('EA',this.downloadedEA).then(()=>{
      if(this.downloadedEA.length==1)
        this.navCtrl.pop();
      else if(this.downloadedEA.length>1){
        //console.log("Hello ea")
        this.storage.remove('saveEA');
        this.navCtrl.push('selectea');
      }
    });
  }
  home(){
    this.navCtrl.pop();
  }
  ionViewDidLoad() {
    this.downloadEA();
  }

}
