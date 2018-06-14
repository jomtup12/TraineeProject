

import { Component } from '@angular/core';
import { App, Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { PreloginPage } from '../pages/prelogin/prelogin';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = PreloginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, app: App, alertCtrl: AlertController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      platform.registerBackButtonAction(() => {

        let nav = app.getActiveNav();


        if (!nav.canGoBack()) {
          try{
            console.log(app.getActiveNavs()[0].parent._views[app.getActiveNavs()[0].parent._views.length - 1].name);
          
            if (app.getActiveNavs()[0].parent._views[app.getActiveNavs()[0].parent._views.length - 1].name == "HomePage") {
              const alert = alertCtrl.create({
                title: 'App termination',
                message: 'ต้องการออกจากแอปพลิเคชั่นใช่หรือไม่?',
                buttons: [{
                  text: 'ยกเลิก',
                  role: 'cancel',
                  handler: () => {
                    //console.log('Application exit prevented!');
                  }
                }, {
                  text: 'ออกจากโปรแกรม',
                  handler: () => {
                    platform.exitApp(); // Close this application
                  }
                }]
              });
              alert.present();
            }else if(app.getActiveNavs()[0].parent._views[app.getActiveNavs()[0].parent._views.length - 1].name == "CollectionformPage"){

            }else{
              // nav.popToRoot();
            }
          } catch(e){
            const alert = alertCtrl.create({
              title: 'App termination',
              message: 'ต้องการออกจากแอปพลิเคชั่นใช่หรือไม่?',
              buttons: [{
                text: 'ยกเลิก',
                role: 'cancel',
                handler: () => {
                  //console.log('Application exit prevented!');
                }
              }, {
                text: 'ออกจากโปรแกรม',
                handler: () => {
                  platform.exitApp(); // Close this application
                }
              }]
            });
            alert.present();
          }
        }
        else {
          nav.pop();
        }
      });
    });
  }
}

