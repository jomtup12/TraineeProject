import { Storage } from '@ionic/storage';
import { HttpProvider } from './../../providers/http/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Platform } from 'ionic-angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { Device } from '@ionic-native/device';


/**
 * Generated class for the ScanqrPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
    name: 'scanqr'
})
@Component({
    selector: 'page-scanqr',
    templateUrl: 'scanqr.html',
})
export class ScanqrPage {



    scanData: string;
    constructor(public navCtrl: NavController, public navParams: NavParams, private qrScanner: QRScanner, private http: HttpProvider, private loadingController: LoadingController, private storage: Storage, private device: Device, private platform: Platform) {
    }

    Scan() {
        if (this.platform.is('cordova')) {
            this.qrScanner.prepare()
                .then((status: QRScannerStatus) => {
                    if (status.authorized) {
                        // camera permission was granted
                        let ionApp = <HTMLElement>document.getElementsByTagName("ion-app")[0];

                        // start scanning
                        let scanSub = this.qrScanner.scan().timeout(60000).subscribe((text: string) => {
                            //alert(text);
                            let loading = this.loadingController.create({
                                content: "กำลังเชื่อมต่อกับระบบ กรุณารอสักครู่...",
                            });
                            loading.present();

                            this.scanData = text;
                            let userID = this.scanData.slice(0, 7);
                            let password = this.scanData.slice(7);

                            this.storage.get('userInfo').then((user) => {
                                if (user.USERID != userID) {

                                    this.storage.remove('EA');
                                    this.storage.remove('userInfo');
                                    this.storage.remove('sn1');
                                    this.storage.remove('sn22');

                                }
                            });


                            this.qrScanner.hide(); // hide camera preview
                            scanSub.unsubscribe(); // stop scanning
                            ionApp.style.display = "block";
                            // this.navCtrl.push('createpassword', { 'userID': userID, 'password': password }, { animate: false });

                            this.http.login(userID, password).subscribe(result => {
                                //console.log(JSON.stringify(result.json()));
                                loading.dismiss();

                                if (JSON.stringify(result.json()) == '[]') {
                                    alert('รหัสพนักงาน หรือ รหัสผ่าน ไม่ถูกต้อง');
                                }
                                else {
                                    let u = result.json();
                                    let info = {
                                        tablet_sn: this.device.serial,
                                        user_id: userID
                                    }
                                    //console.log(info);
                                    this.http.updateTablet(info).subscribe(result => {
                                        //console.log(result)
                                    });
                                    this.storage.set("userInfo", u[0]).then(() => this.navCtrl.push('createpassword', { 'userInfo': result.json() }, { animate: false }));


                                }
                            });
                        });

                        // show camera preview
                        ionApp.style.display = "none";
                        this.qrScanner.show();
                        // setTimeout(() => {
                        //     ionApp.style.display = "block";
                        //     scanSub.unsubscribe(); // stop scanning
                        //     this.qrScanner.hide();
                        //   }, 5000);
                        // wait for user to scan something, then the observable callback will be called

                    } else if (status.denied) {
                        // camera permission was permanently denied
                        // you must use QRScanner.openSettings() method to guide the user to the settings page
                        // then they can grant the permission from there
                    } else {
                        // permission was denied, but not permanently. You can ask for permission again at a later time.
                    }
                })
                .catch((e: any) => console.log('Error is', e));


        } else {
            this.http.login("1050001", "1234").subscribe(result => {
                //console.log(JSON.stringify(result.json()));
                this.storage.remove('EA');
                this.storage.remove('userInfo');
                this.storage.remove('sn1');
                this.storage.remove('sn22');

                if (JSON.stringify(result.json()) == '[]') {
                    alert('รหัสพนักงาน หรือ รหัสผ่าน ไม่ถูกต้อง');
                }
                else {
                    let u = result.json();
                    this.storage.set("userInfo", u[0]).then(() => this.navCtrl.push('createpassword', { 'userInfo': result.json() }, { animate: false }));


                }
            });
        }
    }
    Back() {
        this.navCtrl.popToRoot();
    }

}
