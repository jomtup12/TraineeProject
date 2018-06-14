import { Sim } from '@ionic-native/sim';
import { Device } from '@ionic-native/device';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Geolocation } from '@ionic-native/geolocation';

import { MyApp } from './app.component';
import { PreloginPage } from '../pages/prelogin/prelogin';

//import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';
import { HttpProvider } from '../providers/http/http';
import { WaterDataProvider } from '../providers/water-data/water-data';
import { QRScanner } from '@ionic-native/qr-scanner';

import { Keyboard } from '@ionic-native/keyboard';

import { IonicImageViewerModule } from 'ionic-img-viewer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';






@NgModule({
  declarations: [
    MyApp,
    PreloginPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    BrowserAnimationsModule,
    IonicImageViewerModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PreloginPage
    
  ],

  providers: [
    StatusBar,
    SplashScreen,
    QRScanner,
    Geolocation,
    Device,
    Sim,
    Keyboard,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpProvider,
    WaterDataProvider
  ]
})
export class AppModule {}
