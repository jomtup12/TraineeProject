import { NgModule, ErrorHandler  } from '@angular/core';
import { IonicPageModule,IonicErrorHandler } from 'ionic-angular';
import { MapPage } from './map';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';
import { ZoomAreaModule } from 'ionic2-zoom-area';

@NgModule({
  declarations: [
    MapPage,
  ],
  imports: [
    IonicPageModule.forChild(MapPage),
    ZoomAreaModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class MapPageModule {}
