import { HttpProvider } from './../../providers/http/http';
import { SN2_2 } from './../../models/SN2_2/SN2_2';
import { SN1P2 } from './../../models/SN1/SN1P2';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, LoadingController, Events, AlertController, Platform, ModalController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { Storage } from '@ionic/storage';
import { SN1 } from '../../models/SN1/SN1';
import { SN1P1 } from '../../models/SN1/SN1P1';
import { User } from '../../models/user';
import { SN2_2P0 } from '../../models/SN2_2/SN2_2P0';


/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'home'
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  user: User;
  rootPage: any;
  deleting: boolean;
  EAList: any = [];
  isenabled = false;
  haveData: boolean;
  sn1: SN1;
  sn22: Array<SN2_2>;
  page: string = '1';
  searchTerm: string="";
  searchDisplay = [];
  countStatus = 0;
  countPause = 0;
  countEdit = 0;
  countJob = 0;
  data = "1"
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public geolocation: Geolocation,
    public viewCtrl: ViewController,
    private storage: Storage,
    public menuCtrl: MenuController,
    private loadingController: LoadingController,
    private events: Events,
    private alertCtrl: AlertController,
    private httpProvider: HttpProvider,
    private platform: Platform,
    private modalCtrl: ModalController) {
    //this.rootPage = HomePage;
    this.haveData = false;
    this.deleting = false;
  }

  toggleMenu() {
    this.navCtrl.push('menu', { sn1: this.sn1, sn22: this.sn22,user:this.user }, { animate: false });
    // this.menuCtrl.toggle();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    this.viewCtrl.showBackButton(false);
  }

  ionViewWillEnter() {
    this.events.subscribe('noSave', () => {
      this.storage.get('sn1').then((sn1) => { this.sn1 = sn1; });
    })
    this.events.subscribe('noSave2', () => {
      this.storage.get('sn22').then((sn22) => { this.sn22 = sn22; });
    })
  }
  refresh() {

    let loading = this.loadingController.create({
      content: "กำลังเชื่อมต่อข้อมูลกับระบบ กรุณารอสักครู่...",
    });
    loading.present();
    this.httpProvider.downloadSN1(this.user.USERID).timeout(60000).subscribe((newSn1) => {
      console.log("New SN1");
      console.log(newSn1)
      //console.log(newSn1.json());
      setTimeout(() => {
        loading.dismiss();
      }, 1000)
      for (let i in newSn1.json()) {
        let newSN = new SN1();
        newSN = newSn1.json()[i];
        console.log(newSN)
        console.log(this.sn1)
        if (newSN != null) {
          if (this.sn1 == null || this.sn1.SN1P2.length == 0) {
            console.log('1');
            if (newSN.SN1_ID == "" + this.EAList[0].REG + this.EAList[0].CWT + this.EAList[0].AMP + this.EAList[0].TAM + this.EAList[0].DISTRICT + this.EAList[0].EA) {
              console.log('2');
              this.sn1 = newSN;
              // this.sn1.SN1P2 = newSN.SN1P2.filter(sn => sn.status == 6 || sn.status == 10)
              this.countFinish();
              this.setFilteredItems();
            }
          }
          else {
            if (newSN.SN1_ID == this.sn1.SN1_ID) {

              this.sn1.status_approve = newSN.status_approve;
              // console.log('3');
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
                this.setFilteredItems();
              // for (let index in this.sn1.SN1P2) {
              //   let sn = newSN.SN1P2.filter(sn => (sn.A1 == this.sn1.SN1P2[index].A1) && (sn.status == 6 || sn.status == 10));
              //   console.log(sn);
              //   if (sn.length == 1) {
              //     if (this.sn1.SN1P2[index].Modify_DATE) {
              //       if (this.sn1.SN1P2[index].Modify_DATE.length <= sn[0].Modify_DATE.length)
              //         this.sn1.SN1P2[index] = sn[0];
              //     } else
              //       this.sn1.SN1P2[index] = sn[0];
              //   }
              // }
              // for (let index in newSN.SN1P2) {
              //   let sn = this.sn1.SN1P2.filter(sn => (sn.A1 == newSN.SN1P2[index].A1));
              //   console.log(sn);
              //   if (sn.length == 1) {

              //   } else {
              //     this.sn1.SN1P2.push(newSN.SN1P2[index]);
              //   }
              // }
            }

          }

          this.storage.set('sn1', this.sn1);
          
        }
      }
    }, (error) => {
      loading.dismiss();
    });
    this.httpProvider.downloadSN22(this.user.USERID).timeout(60000).subscribe((newSn1) => {
      console.log("New SN22");
      console.log(newSn1.json());

      let newSN = Array<SN2_2>();
      newSN = newSn1.json();
      if (newSN != null) {
        let ea = this.EAList[0];
        if (this.sn22 == null || this.sn22.length == 0) {
          console.log('11');
          this.sn22=[]
          for(let i of newSN){
            console.log("------------i------------")
            console.log(i)
            if(i.SN2_2_ID.substring(0, 11)== "" + ea.REG + ea.CWT + ea.AMP + ea.TAM + ea.DISTRICT + ea.EA)
              this.sn22.push(i)
          }
          this.countFinish();
        }
        else {
          for(let i of newSN){
            if(i.SN2_2_ID.substring(0, 11)== "" + ea.REG + ea.CWT + ea.AMP + ea.TAM + ea.DISTRICT + ea.EA)
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
updateEdit(user){
  if (this.platform.is('cordova')) {
    this.httpProvider.downloadSN1(user).subscribe((newSn1) => {
      console.log("New SN1");
      //console.log(newSn1.json());
      let newSN = new SN1();
      newSN = newSn1.json()[0];
      if (newSN != null) {
        if (newSN.SN1_ID == this.sn1.SN1_ID) {
          console.log(newSN);
          if (this.sn1.SN1P2.length > 0) {
            this.sn1.status_approve = newSN.status_approve;
            for (let sn in this.sn1.SN1P2) {
              if (this.sn1.SN1P2[sn].A1 == newSN.SN1P2[sn].A1) {
                if (this.sn1.SN1P2[sn].status == 6) {
                  if (newSN.SN1P2[sn].status == 10) {
                    this.sn1.SN1P2[sn] = newSN.SN1P2[sn];
                  }
                }
              }
            }
            this.countFinish();
          }
        }
      }
    });
  }
}
init() {
  this.storage.get('EA').then((val) => {
    if (val != null) {
      this.storage.get('userInfo').then((user) => {
        this.user = user;
        
          this.EAList = val;
          this.haveData = true;
          let ea = this.EAList[0];
          this.storage.get('sn1').then((sn1) => {
            if (sn1) {
              this.sn1 = sn1;
              this.countFinish();
              this.setFilteredItems();
              //this.updateEdit(user.USERID);
            } else {
              this.sn1 = new SN1();
              console.log("สร้าง SNใหม่")
            }
            if (!this.sn1.SN1P1) {
              this.sn1.SN1P1 = new SN1P1();
              this.sn1.SN1P1.FI_DATE = new Date();
              console.log(this.sn1.SN1P1.FI_DATE);
              this.sn1.SN1P1.FI_ID = user.USERID;
              this.sn1.SN1P1.FS_ID = ea.FS;
              this.sn1.SN1P1.REG = ea.REG;
              this.sn1.SN1P1.REG_NAME = ea.REG_NAME;
              this.sn1.SN1P1.CWT = ea.CWT;
              this.sn1.SN1P1.CWT_NAME = ea.CWT_NAME;
              this.storage.set("CWT", ea.CWT_NAME);
              this.sn1.SN1P1.AMP = ea.AMP;
              this.sn1.SN1P1.AMP_NAME = ea.AMP_NAME;
              this.storage.set("AMP", ea.AMP_NAME);
              this.sn1.SN1P1.TAM = ea.TAM;
              this.sn1.SN1P1.TAM_NAME = ea.TAM_NAME;
              this.storage.set("TAM", ea.TAM_NAME);
              this.sn1.SN1P1.DISTRICT = ea.DISTRICT;
              this.sn1.SN1P1.MUN = ea.MUN;
              this.sn1.SN1P1.MUN_NAME = ea.MUN_NAME;
              this.sn1.SN1P1.TAO = ea.TAO;
              this.sn1.SN1P1.TAO_NAME = ea.TAO_NAME;
              this.sn1.SN1P1.VIL = ea.VIL;
              this.sn1.SN1P1.VIL_NAME = ea.VIL_NAME;
              this.sn1.SN1P1.EA = ea.EA;
              this.sn1.status_data = 0;
              this.sn1.status_approve = 0;
              this.sn1.SN1P2 = [];
              this.sn1.SN1_ID = "" + ea.REG + ea.CWT + ea.AMP + ea.TAM + ea.DISTRICT + ea.EA;
              console.log("ID: " + this.sn1.SN1_ID);
            }else{
              this.sn1.SN1P1.FI_ID = user.USERID;
            }
            console.log(this.sn1);
          });
          this.storage.get('sn22').then((sn22) => {
            if (sn22) {
              for(let s of sn22){
                s.B0.FI_ID = user
              }
              this.sn22 = sn22;
              this.countFinish();
              this.setFilteredItems();
            } else {
              this.sn22 = [];
            }
          });

        
        // else {
        //   this.haveData = false;

        // }

      });

      //alert(JSON.stringify(val));
    } else {
      this.haveData = false;
    }
  });
}
ionViewDidEnter() {
  if (this.sn1)
    this.storage.set('sn1', this.sn1).then(() => {
      if (this.sn22)
        this.storage.set('sn22', this.sn22).then(() => this.init())
      else
        this.init()
    });
  else this.init();
  this.events.subscribe('delete', (sn, id) => {
    this.events.unsubscribe('delete');
    if (!this.deleting) {
      this.deleteFormWithoutConfirm(sn, id);
    }
  })

}
seeMsg(sn){
  let profileModal = this.modalCtrl.create('MessagePage', { SN: sn });
  profileModal.present();
}
countFinish() {
  this.countStatus = 0;
  this.countJob = 0;
  this.countEdit = 0;
  this.countPause = 0;
  if (this.sn1)
    for (let sn of this.sn1.SN1P2) {
      if (sn.status == 4) {
        this.countStatus = this.countStatus + 1;
      } else if (sn.status == 3) {
        this.countPause = this.countPause + 1;
      } else if (sn.status == 10) {
        this.countEdit = this.countEdit + 1;
      }
      this.countJob = this.countJob + 1;
    }
  if (this.sn22)
    for (let sn of this.sn22) {
      if (sn.status == 4) {
        this.countStatus = this.countStatus + 1;
      }
      this.countJob = this.countJob + 1;
    }
}
navigate(page: string) {
  this.navCtrl.push(page, {}, { animate: false });
}
upload() {
  this.navCtrl.push('upload', { sn1: this.sn1, sn22: this.sn22 }, { animate: false });
}
uploadAll(){
  this.sn1.status_approve = 1;
  this.navCtrl.push('upload', { sn1: this.sn1, sn22: this.sn22 }, { animate: false });
}
uploadAll2(){
  this.navCtrl.push('upload', { sn1: this.sn1, sn22: this.sn22 }, { animate: false });
}
deleteFormWithoutConfirm(sn, id) {
  let loading = this.loadingController.create({
    content: "กำลังลบแบบฟอร์ม กรุณารอสักครู่...",
  });
  loading.present();
  this.deleting = true;
  if (id == 2) {
    let index = this.sn22.findIndex(sn1 => sn1 === sn);
    this.sn22.splice(index, 1);
    this.storage.set('sn22', this.sn22);
  } else {
    let index = this.sn1.SN1P2.findIndex(sn1_2 => sn1_2.A1 === sn.A1);
    this.sn1.SN1P2.splice(index, 1);
    for (let i = 0; i < this.sn1.SN1P2.length; i++) {
      this.sn1.SN1P2[i].A1 = i + 1;
    }
    this.storage.set('sn1', this.sn1);
  }
  setTimeout(() => {
    this.deleting = false;
    loading.dismiss();
    this.countFinish();
  }, 500)

}

createForm(ea) {
  let loading = this.loadingController.create({
    content: "กำลังสร้างแบบฟอร์ม กรุณารอสักครู่...",
  });
  loading.present();
  let sn1p2 = new SN1P2();
  sn1p2.A1 = this.sn1.SN1P2.length + 1;
  sn1p2.status = 0;
  sn1p2.current_page = '1';
  sn1p2.Create_DATE = new Date();
  sn1p2.Modify_DATE = [];
  sn1p2.Modify_DATE.push(new Date());
  sn1p2.current_page="1";
  if (this.sn1.SN1P2.length > 0) {
    sn1p2.A2 = this.sn1.SN1P2[this.sn1.SN1P2.length - 1].A2;
    sn1p2.A3 = this.sn1.SN1P2[this.sn1.SN1P2.length - 1].A3;
    sn1p2.A4 = this.sn1.SN1P2[this.sn1.SN1P2.length - 1].A4;
  }
  this.sn1.SN1P2.push(sn1p2);
  // this.storage.set('sn1', this.sn1);

  this.navCtrl.push('collectionform', { 'sn1p2': sn1p2 }, { animate: false }).then(v => loading.dismissAll()).catch(err => loading.dismissAll());
}

editForm(sn12) {
  let loading = this.loadingController.create({
    content: "กำลังโหลดแบบฟอร์ม กรุณารอสักครู่...",
  });
  if (sn12.status == 3) {
    sn12.status = 0;
  }
  console.log("edit Form!!");
  loading.present();
  this.navCtrl.push('collectionform', { 'sn1p2': sn12 }, { animate: false }).then(v => loading.dismissAll()).catch(err => { console.log(err); loading.dismissAll(); });
  loading.dismissAll();
  console.log("edit Form success!!");
}

deleteForm(sn12) {
  const alert = this.alertCtrl.create({
    title: 'ต้องการจะลบใช่หรือไม่',
    buttons: [{
      text: 'ยืนยัน',
      handler: () => {
        console.log('ยืนยันการลบ');
        let index = this.sn1.SN1P2.findIndex(sn1_2 => sn1_2.A1 === sn12.A1);
        this.sn1.SN1P2.splice(index, 1);
        for (let i = 0; i < this.sn1.SN1P2.length; i++) {
          this.sn1.SN1P2[i].A1 = i + 1;
        }
        this.storage.set('sn1', this.sn1);
        this.countFinish();
        this.setFilteredItems();
      }
    }, {
      text: 'ยกเลิก',
      role: 'cancel',
      handler: () => {
        console.log('Application exit prevented!');
      }
    }]
  });
  alert.present();
}

createForm22(ea) {
  let loading = this.loadingController.create({
    content: "กำลังสร้างแบบฟอร์ม กรุณารอสักครู่...",
  });
  loading.present();
  let sn2_2 = new SN2_2();
  let user: User;
  
  //PorPor this.storage.get('userInfo').then((val) => {
  //   user = val;
  //   sn2_2.B0.FI_ID = this.user.USERID;
  // });
  
  sn2_2.STATUS = 0;
  sn2_2.status = 0;
  sn2_2.SN2_2_ID = ea.REG + ea.CWT + ea.AMP + ea.TAM + ea.DISTRICT + ea.EA + this.sn22.length;
  sn2_2.B0 = new SN2_2P0();
  sn2_2.B0.FI_ID = this.user.USERID;
  sn2_2.B0.REG = ea.REG;
  sn2_2.B0.REG_NAME = ea.REG_NAME;
  sn2_2.B0.CWT = ea.CWT;
  sn2_2.B0.CWT_NAME = ea.CWT_NAME;
  sn2_2.B0.AMP = ea.AMP;
  sn2_2.B0.AMP_NAME = ea.AMP_NAME;
  sn2_2.B0.TAM = ea.TAM;
  sn2_2.B0.TAM_NAME = ea.TAM_NAME;
  sn2_2.B0.DISTRICT = ea.DISTRICT;
  sn2_2.B0.MUN = ea.MUN;
  sn2_2.B0.MUN_NAME = ea.MUN_NAME;
  sn2_2.B0.TAO = ea.TAO;
  sn2_2.B0.TAO_NAME = ea.TAO_NAME;
  sn2_2.B0.EA = ea.EA;
  sn2_2.B0.VIL = ea.VIL;
  sn2_2.B0.VIL_NAME = ea.VIL_NAME;
  sn2_2.B0.FS_ID = ea.FS;
  // sn2_2.B0.FI_ID = user.USERID;

  sn2_2.B1_1 = null;
  sn2_2.Create_DATE = new Date();
  sn2_2.Modify_DATE = [];
  this.sn22.push(sn2_2);
  // this.storage.set('sn22', this.sn22);

  this.navCtrl.push('form2-2', { 'sn2_2': sn2_2 }, { animate: false }).then(v => loading.dismissAll()).catch(err => loading.dismissAll());
}

editForm22(sn2_2) {
  let loading = this.loadingController.create({
    content: "กำลังโหลดแบบฟอร์ม กรุณารอสักครู่...",
  });
  if (sn2_2.status == 3) {
    sn2_2.status = 0;
  }
  console.log("edit Form!!");
  loading.present();
  this.navCtrl.push('form2-2', { 'sn2_2': sn2_2 }, { animate: false }).then(v => loading.dismissAll()).catch(err => { console.log(err); loading.dismissAll(); });
  loading.dismissAll();
  console.log("edit Form success!!");
}

deleteForm22(sn) {
  const alert = this.alertCtrl.create({
    title: 'ต้องการจะลบใช่หรือไม่',
    buttons: [{
      text: 'ยืนยัน',
      handler: () => {
        console.log('ยืนยันการลบ');
        let index = this.sn22.findIndex(sn1 => sn1 === sn);
        this.sn22.splice(index, 1);
        for (let i = 0; i < this.sn22.length; i++) {
          this.sn22[i].SN2_2_ID = this.sn22[i].SN2_2_ID.slice(0, 11) + i;
        }
        this.storage.set('sn22', this.sn22);
        this.countFinish();
        this.setFilteredItems();
      }
    }, {
      text: 'ยกเลิก',
      role: 'cancel',
      handler: () => {
        console.log('Application exit prevented!');
      }
    }]
  });
  alert.present();
}
navToForm2_2(ea) {
  this.navCtrl.push('form2-2', { 'ea': ea }, { animate: false });
}

loadMap() {

  this.geolocation.getCurrentPosition().then((position) => {
    // resp.coords.latitude
    // resp.coords.longitude
    alert("Longtitude: " + position.coords.longitude + "\nLatitude: " + position.coords.latitude + "\n" + position.coords.speed);


  }, (err) => {
    console.log(err);
  });

}

setFilteredItems() {
  this.searchDisplay = this.sn1.SN1P2.filter((sn12) => {
    let temp = '' + sn12.A1 + sn12.A2 + sn12.A3 + sn12.A4 + sn12.A5;
    return temp.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
  });
}
search(){
  this.setFilteredItems();
}

}
