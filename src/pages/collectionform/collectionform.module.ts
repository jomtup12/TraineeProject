import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CollectionformPage } from './collectionform';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    CollectionformPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(CollectionformPage),
  ],
})
export class CollectionformPageModule {}
