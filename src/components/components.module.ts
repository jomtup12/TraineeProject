import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular'
import { FirstformComponent } from './firstform/firstform';
import { SecondformComponent } from './secondform/secondform';
import { Form2section1Component } from './form2section1/form2section1';
import { Form2section2Component } from './form2section2/form2section2';
import { Form2section3Component } from './form2section3/form2section3';
import { Form2section4Component } from './form2section4/form2section4';
import { Form2section5Component } from './form2section5/form2section5';
import { Form2section6Component } from './form2section6/form2section6';
import { FirstForm_2Component } from './first-form-2/first-form-2';

@NgModule({
    declarations: [
        FirstformComponent,
        SecondformComponent,
    Form2section1Component,
    Form2section2Component,
    Form2section3Component,
    Form2section4Component,
    Form2section5Component,
    Form2section6Component,
    FirstForm_2Component],
    imports: [IonicModule],
    exports: [
        FirstformComponent,
        SecondformComponent,
    Form2section1Component,
    Form2section2Component,
    Form2section3Component,
    Form2section4Component,
    Form2section5Component,
    Form2section6Component,
    FirstForm_2Component]
})
export class ComponentsModule { }
