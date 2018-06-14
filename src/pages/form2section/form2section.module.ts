import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Form2sectionPage } from './form2section';


@NgModule({
  declarations: [
    Form2sectionPage,
  ],
  imports: [ComponentsModule,
    IonicPageModule.forChild(Form2sectionPage),
  ],
})
export class Form2sectionPageModule { }
