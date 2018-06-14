import { ModalController, Events, AlertController, Slides } from 'ionic-angular';
import { SN2_1P2_9_4 } from './../../models/SN2_1/SN2_1P2_9_4';
import { SN2_1P2_9_3 } from './../../models/SN2_1/SN2_1P2_9_3';
import { Pool } from './../../models/SN2_1/pool';
import { Storage } from '@ionic/storage';

import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { SN2_1P2_1 } from '../../models/SN2_1/SN2_1P2_1';
import { SN2_1P2_2 } from '../../models/SN2_1/SN2_1P2_2';
import { SN2_1P2_3 } from '../../models/SN2_1/SN2_1P2_3';
import { SN2_1P2_4 } from '../../models/SN2_1/SN2_1P2_4';
import { SN2_1P2_5 } from '../../models/SN2_1/SN2_1P2_5';
import { SN2_1P2_6 } from '../../models/SN2_1/SN2_1P2_6';
import { SN2_1P2_7 } from '../../models/SN2_1/SN2_1P2_7';
import { SN2_1P2 } from '../../models/SN2_1/SN2_1P2';
import { SN2_1P2_9_1 } from '../../models/SN2_1/SN2_1P2_9_1';
import { Tree, EX_TREERAI_LIST, EX_TREETON_LIST, EX_TREEVET_LIST, EX_TREEDOK_LIST } from '../../models/SN2_1/tree';
import { ValidatorSection2 } from './validatorsection2';
import { WaterConsumeData } from '../../models/WaterConsumeData';
import { EX_EA } from '../../models/EAData';
// import { FormGroup, FormBuilder} from '@angular/forms';

/**
 * Generated class for the Form2section2Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'form2section2',
  templateUrl: 'form2section2.html'
})

export class Form2section2Component implements OnInit{
  //declare
    @ViewChild(Slides) slides: Slides;
    //Dropdown Lists
    TREERAI_LIST: Tree[] = EX_TREERAI_LIST;
    TREETON_LIST: Tree[] = EX_TREETON_LIST;
    TREEVET_LIST: Tree[] = EX_TREEVET_LIST;
    TREEDOK_LIST: Tree[] = EX_TREEDOK_LIST;

    MONTH_LIST: string[] = ['1.มกราคม', '2.กุมภาพันธ์', '3.มีนาคม', '4.เมษายน', '5.พฤษภาคม'
    , '6.มิถุนายน', '7.กรกฎาคม', '8.สิงหาคม', '9.กันยายน', '10.ตุลาคม'
    , '11.พฤศจิกายน', '12.ธันวาคม'];

    // Form2Section2: FormGroup;
    // RiceForm: FormGroup;
    validator: ValidatorSection2 = new ValidatorSection2();
    riceInfo: SN2_1P2_1[] = [];
    notValid:boolean=false;
  
    riceInfoTime = [];
    treeRaiInfo: SN2_1P2_2[] = [];
    yangInfo: SN2_1P2_3[] = [];
    treeTonInfo: SN2_1P2_4[] = [];
    treeVetInfo: SN2_1P2_5[] = [];
    treePadInfo: SN2_1P2_6[] = [];
    mushroomInfo: SN2_1P2_7[] = [];
    fishArea: Pool[] = [];
    fishInfo: SN2_1P2_9_1 = {
      A2_E9_1_1_1_1: false,
      A2_E9_1_1_1_2: false,
      A2_E9_1_1_1_3: false,
      A2_E9_1_1_1_4: false,
      A2_E9_1_1_1_5: false,
      A2_E9_1_1_1_5_1: '',
      A2_E9_1_1_2: null,
      A2_E9_1_1_2_1: null,
      A2_E9_1_1_2_2: this.fishArea,
      A2_E9_1_1_3: null,
      A2_E9_1_1_4_1: null,
      A2_E9_1_1_4_2: null,
      A2_E9_1_1_4_3: null,
      A2_E9_1_1_4_4: null,
      A2_E9_1_1_4_5: null,
      A2_E9_1_1_4_6: null,
      A2_E9_1_1_4_7: null,
      A2_E9_1_1_4_8: null,
      A2_E9_1_1_4_9: null,
      A2_E9_1_1_4_9_1: '',
    };
    kungArea: Pool[] = [];
    kungInfo: SN2_1P2_9_1 = {
      A2_E9_1_1_1_1: false,
      A2_E9_1_1_1_2: false,
      A2_E9_1_1_1_3: false,
      A2_E9_1_1_1_4: false,
      A2_E9_1_1_1_5: false,
      A2_E9_1_1_1_5_1: '',
      A2_E9_1_1_2: null,
      A2_E9_1_1_2_1: null,
      A2_E9_1_1_2_2: this.kungArea,
      A2_E9_1_1_3: null,
      A2_E9_1_1_4_1: null,
      A2_E9_1_1_4_2: null,
      A2_E9_1_1_4_3: null,
      A2_E9_1_1_4_4: null,
      A2_E9_1_1_4_5: null,
      A2_E9_1_1_4_6: null,
      A2_E9_1_1_4_7: null,
      A2_E9_1_1_4_8: null,
      A2_E9_1_1_4_9: null,
      A2_E9_1_1_4_9_1: '',
    };
    crabArea: Pool[] = [];
    crabInfo: SN2_1P2_9_1 = {
      A2_E9_1_1_1_1: false,
      A2_E9_1_1_1_2: false,
      A2_E9_1_1_1_3: false,
      A2_E9_1_1_1_4: false,
      A2_E9_1_1_1_5: false,
      A2_E9_1_1_1_5_1: '',
      A2_E9_1_1_2: null,
      A2_E9_1_1_2_1: null,
      A2_E9_1_1_2_2: this.crabArea,
      A2_E9_1_1_3: null,
      A2_E9_1_1_4_1: null,
      A2_E9_1_1_4_2: null,
      A2_E9_1_1_4_3: null,
      A2_E9_1_1_4_4: null,
      A2_E9_1_1_4_5: null,
      A2_E9_1_1_4_6: null,
      A2_E9_1_1_4_7: null,
      A2_E9_1_1_4_8: null,
      A2_E9_1_1_4_9: null,
      A2_E9_1_1_4_9_1: '',
    };
    shellArea: Pool[] = [];
    shellInfo: SN2_1P2_9_1 = {
      A2_E9_1_1_1_1: false,
      A2_E9_1_1_1_2: false,
      A2_E9_1_1_1_3: false,
      A2_E9_1_1_1_4: false,
      A2_E9_1_1_1_5: false,
      A2_E9_1_1_1_5_1: '',
      A2_E9_1_1_2: null,
      A2_E9_1_1_2_1: null,
      A2_E9_1_1_2_2: this.shellArea,
      A2_E9_1_1_3: null,
      A2_E9_1_1_4_1: null,
      A2_E9_1_1_4_2: null,
      A2_E9_1_1_4_3: null,
      A2_E9_1_1_4_4: null,
      A2_E9_1_1_4_5: null,
      A2_E9_1_1_4_6: null,
      A2_E9_1_1_4_7: null,
      A2_E9_1_1_4_8: null,
      A2_E9_1_1_4_9: null,
      A2_E9_1_1_4_9_1: '',
    };
    frogArea: Pool[] = [];
    frogInfo: SN2_1P2_9_3 = {
      A2_E9_1_3_1_1: false,
      A2_E9_1_3_1_2: false,
      A2_E9_1_3_1_3: false,
      A2_E9_1_3_1_3_1: '',
      A2_E9_1_3_2: null,
      A2_E9_1_3_2_1: null,
      A2_E9_1_3_2_2: this.frogArea,
      A2_E9_1_3_3: null,
      A2_E9_1_3_4_1: null,
      A2_E9_1_3_4_2: null,
      A2_E9_1_3_4_3: null,
      A2_E9_1_3_4_4: null,
      A2_E9_1_3_4_5: null,
      A2_E9_1_3_4_6: null,
      A2_E9_1_3_4_7: null,
      A2_E9_1_3_4_8: null,
      A2_E9_1_3_4_9: null,
      A2_E9_1_3_4_9_1: '',
    };
    raiArea: Pool[] = [];
    raiInfo: SN2_1P2_9_1 = {
      A2_E9_1_1_1_1: false,
      A2_E9_1_1_1_2: false,
      A2_E9_1_1_1_3: false,
      A2_E9_1_1_1_4: false,
      A2_E9_1_1_1_5: false,
      A2_E9_1_1_1_5_1: '',
      A2_E9_1_1_2: null,
      A2_E9_1_1_2_1: null,
      A2_E9_1_1_2_2: this.raiArea,
      A2_E9_1_1_3: null,
      A2_E9_1_1_4_1: null,
      A2_E9_1_1_4_2: null,
      A2_E9_1_1_4_3: null,
      A2_E9_1_1_4_4: null,
      A2_E9_1_1_4_5: null,
      A2_E9_1_1_4_6: null,
      A2_E9_1_1_4_7: null,
      A2_E9_1_1_4_8: null,
      A2_E9_1_1_4_9: null,
      A2_E9_1_1_4_9_1: '',
    };
    crocArea: Pool[] = [];
    crocInfo: SN2_1P2_9_4 = {
      A2_E9_1_4_1_1: false,
      A2_E9_1_4_1_2: false,
      A2_E9_1_4_1_2_1: '',
      A2_E9_1_4_2: null,
      A2_E9_1_4_2_1: null,
      A2_E9_1_4_2_2: this.crocArea,
      A2_E9_1_4_3: null,
      A2_E9_1_4_4_1: null,
      A2_E9_1_4_4_2: null,
      A2_E9_1_4_4_3: null,
      A2_E9_1_4_4_4: null,
      A2_E9_1_4_4_5: null,
      A2_E9_1_4_4_6: null,
      A2_E9_1_4_4_7: null,
      A2_E9_1_4_4_8: null,
      A2_E9_1_4_4_9: null,
      A2_E9_1_4_4_9_1: ''
    };
    softTurtleArea: Pool[] = [];
    softTurtleInfo: SN2_1P2_9_4 = {
      A2_E9_1_4_1_1: false,
      A2_E9_1_4_1_2: false,
      A2_E9_1_4_1_2_1: '',
      A2_E9_1_4_2: null,
      A2_E9_1_4_2_1: null,
      A2_E9_1_4_2_2: this.softTurtleArea,
      A2_E9_1_4_3: null,
      A2_E9_1_4_4_1: null,
      A2_E9_1_4_4_2: null,
      A2_E9_1_4_4_3: null,
      A2_E9_1_4_4_4: null,
      A2_E9_1_4_4_5: null,
      A2_E9_1_4_4_6: null,
      A2_E9_1_4_4_7: null,
      A2_E9_1_4_4_8: null,
      A2_E9_1_4_4_9: null,
      A2_E9_1_4_4_9_1: ''
    };
    turtleArea: Pool[] = [];
    turtleInfo: SN2_1P2_9_4 = {
      A2_E9_1_4_1_1: false,
      A2_E9_1_4_1_2: false,
      A2_E9_1_4_1_2_1: '',
      A2_E9_1_4_2: null,
      A2_E9_1_4_2_1: null,
      A2_E9_1_4_2_2: this.turtleArea,
      A2_E9_1_4_3: null,
      A2_E9_1_4_4_1: null,
      A2_E9_1_4_4_2: null,
      A2_E9_1_4_4_3: null,
      A2_E9_1_4_4_4: null,
      A2_E9_1_4_4_5: null,
      A2_E9_1_4_4_6: null,
      A2_E9_1_4_4_7: null,
      A2_E9_1_4_4_8: null,
      A2_E9_1_4_4_9: null,
      A2_E9_1_4_4_9_1: ''
    };
    Arr = Array;
    visible = false;

    inputDisable: boolean[] = [];
    inputDisable2: boolean[] = [];
    inputVisible1: boolean[] = [];
    inputVisible2: boolean[] = [];
    inputVisible3: boolean[] = [];
    inputVisible4: boolean[] = [];

    @Input() section2: SN2_1P2 = {
      status: 0,
      A2_E1_1: null,
      A2_E1_2: null,
      A2_E1: this.riceInfo,
      A2_E2_1: null,
      A2_E2_2: null,
      A2_E2: this.treeRaiInfo,
      A2_E3_1: null,
      A2_E3_2: null,
      A2_E3: this.yangInfo,
      A2_E4_1: null,
      A2_E4_2: null,
      A2_E4: this.treeTonInfo,
      A2_E5_1: null,
      A2_E5_2: null,
      A2_E5: this.treeVetInfo,
      A2_E6_1: null,
      A2_E6_2: null,
      A2_E6: this.treePadInfo,
      A2_E7_1: null,
      A2_E7_2: null,
      A2_E7: this.mushroomInfo,
      A2_E8_1: null,
      A2_E8_2_1_0: null,
      A2_E8_2_2_0: null,
      A2_E8_2_3_0: null,
      A2_E8_2_4_0: null,
      A2_E8_2_5_0: null,
      A2_E8_2_6_0: null,
      A2_E8_2_7_0: null,
      A2_E8_2_8_0: null,
      A2_E8_2_9_0: null,
      A2_E8_2_10_0: null,
      A2_E8_2_1: null,
      A2_E8_2_2: null,
      A2_E8_2_3: null,
      A2_E8_2_4: null,
      A2_E8_2_5: null,
      A2_E8_2_6: null,
      A2_E8_2_7: null,
      A2_E8_2_8: null,
      A2_E8_2_9: null,
      A2_E8_2_10: null,
      A2_E8_2_10_1: null,
      A2_E8_3_1: false,
      A2_E8_3_2: false,
      A2_E8_3_3: false,
      A2_E8_3_4: false,
      A2_E8_3_5: false,
      A2_E8_3_6: false,
      A2_E8_3_7: false,
      A2_E8_3_8: false,
      A2_E8_3_9: false,
      A2_E8_3_9_1: '',
      A2_E9_1: false,
      A2_E9_1_1: false,
      A2_E9_1_2: false,
      A2_E9_1_3: false,
      A2_E9_1_4: false,
      A2_E9_1_5: false,
      A2_E9_1_6: false,
      A2_E9_1_7: false,
      A2_E9_1_8: false,
      A2_E9_1_9: false,
      A2_E9_1_1_1: this.fishInfo,
      A2_E9_1_1_2: this.kungInfo,
      A2_E9_1_1_3: this.frogInfo,
      A2_E9_1_1_4: this.crocInfo,
      A2_E9_1_1_5: this.softTurtleInfo,
      A2_E9_1_1_6: this.crabInfo,
      A2_E9_1_1_7: this.shellInfo,
      A2_E9_1_1_8: this.turtleInfo,
      A2_E9_1_1_9: this.raiInfo,
      current_page:null
    }
    
    @Input() waterData: WaterConsumeData;
    cwt_amp_tam = [];
    rice_cwt = [];
    rice_amp = [];
    rice_tam = [];
    rai_cwt = [];
    rai_amp = [];
    rai_tam = [];
    yang_cwt = [];
    yang_amp = [];
    yang_tam = [];
    ton_cwt = [];
    ton_amp = [];
    ton_tam = [];
    veg_cwt = [];
    veg_amp = [];
    veg_tam = [];
    pad_cwt = [];
    pad_amp = [];
    pad_tam = [];
    mush_cwt = [];
    mush_amp = [];
    mush_tam = [];
    section="section1";
    area1=0;
    area2=0;
    area3=0;
    area4=0;
    area5=0;
    area6=0;
    area7=0;
    area9=0;
    defaultCwt="";
    defaultAmp="";
    defaultTam="";
    disable2:boolean=true;
    disable3:boolean=true;
    disable4:boolean=true;
    disable5:boolean=true;
    disable6:boolean=true;
    disable7:boolean=true;
    disable8:boolean=true;
    disable9:boolean=true;
  

  constructor(private modalCtrl: ModalController, private events: Events, private alertCtrl: AlertController,private storage:Storage) {
    //console.log('Hello Form2section2Component Component');
  }
  ngOnInit(){
    //console.log("onChanges");
    //console.log(this.section2);
    this.storage.get('CWT').then((cwt)=>{
      this.defaultCwt =cwt;
    });
    this.storage.get('AMP').then((amp)=>{
      this.defaultAmp =amp;
    });
    this.storage.get('TAM').then((tam)=>{
      this.defaultTam =tam;
    });
    if (this.section2) {
      if (this.section2.A2_E1){
        this.riceInfo = this.section2.A2_E1;
        //console.log(this.riceInfo);
        this.riceCountChange();
      }
      if (this.section2.A2_E2){
        this.treeRaiInfo = this.section2.A2_E2
        this.treeRaiCountChange();
      }
      if (this.section2.A2_E3){
        this.yangInfo = this.section2.A2_E3
        this.yangCountChange();
      }
      if (this.section2.A2_E4){
        this.treeTonInfo = this.section2.A2_E4
        this.treeTonCountChange();
      }
      if (this.section2.A2_E5){
        this.treeVetInfo = this.section2.A2_E5
        this.treeVetCountChange();
      }
      if (this.section2.A2_E6){
        this.treePadInfo = this.section2.A2_E6
        this.treePadCountChange();
      }
      if (this.section2.A2_E7){
        this.mushroomInfo = this.section2.A2_E7
        this.mushroomCountChange()
      }
      if (this.section2.A2_E9_1_1_1){
        this.fishInfo = this.section2.A2_E9_1_1_1
        if (this.fishInfo.A2_E9_1_1_2_2)
        this.fishArea = this.fishInfo.A2_E9_1_1_2_2;
      }
      if (this.section2.A2_E9_1_1_2){
        this.kungInfo = this.section2.A2_E9_1_1_2
        if (this.kungInfo.A2_E9_1_1_2_2)
        this.kungArea = this.kungInfo.A2_E9_1_1_2_2;
      }
      if (this.section2.A2_E9_1_1_3){
        this.frogInfo = this.section2.A2_E9_1_1_3
        if (this.frogInfo.A2_E9_1_3_2_2)
        this.frogArea = this.frogInfo.A2_E9_1_3_2_2;
      }
      if (this.section2.A2_E9_1_1_4){
        this.crocInfo = this.section2.A2_E9_1_1_4
        if (this.crocInfo.A2_E9_1_4_2_2)
        this.crocArea = this.crocInfo.A2_E9_1_4_2_2
      }
      if (this.section2.A2_E9_1_1_5){
        this.softTurtleInfo = this.section2.A2_E9_1_1_5
        if (this.softTurtleInfo.A2_E9_1_4_2_2)
        this.softTurtleArea = this.softTurtleInfo.A2_E9_1_4_2_2
      }
      if (this.section2.A2_E9_1_1_6){
        this.crabInfo = this.section2.A2_E9_1_1_6
        if (this.crabInfo.A2_E9_1_1_2_2)
        this.crabArea = this.crabInfo.A2_E9_1_1_2_2;
      }
      if (this.section2.A2_E9_1_1_7){
        this.shellInfo = this.section2.A2_E9_1_1_7
        if (this.shellInfo.A2_E9_1_1_2_2)
        this.shellArea = this.shellInfo.A2_E9_1_1_2_2;
      }
      if (this.section2.A2_E9_1_1_8){
        this.turtleInfo = this.section2.A2_E9_1_1_8
        if (this.turtleInfo.A2_E9_1_4_2_2)
        this.turtleArea = this.turtleInfo.A2_E9_1_4_2_2
      }
      if (this.section2.A2_E9_1_1_9){
        this.raiInfo = this.section2.A2_E9_1_1_9
        if (this.raiInfo.A2_E9_1_1_2_2)
        this.raiArea = this.raiInfo.A2_E9_1_1_2_2
      }
      
    }
    
    if (this.section2.current_page != undefined) {
      if (this.section2.current_page == null) {
        this.section2.current_page = "1";
        this.section = "section1"
      } else{
        this.section = "section" + this.section2.current_page;
        let N=Number(this.section2.current_page);
        if(N>=2){
          this.disable2=false;
        }
        if(N>=3){
          this.disable3=false;
        }
        if(N>=4){
          this.disable4=false;
        }
        if(N>=5){
          this.disable5=false;
        }
        if(N>=6){
          this.disable6=false;
        }
        if(N>=7){
          this.disable7=false;
        }
        if(N>=8){
          this.disable8=false;
        }
        if(N>=9){
          this.disable9=false;
        }
      }

    }
    this.validator = new ValidatorSection2();
    this.validate();
    this.slides.lockSwipes(true);
  }
  //แปลง
    scrollToTop() {
      this.events.publish("scroll");
    }
    changeMenus1(index:number)
    {
      this.area1=index;
    }

    nextArea1(i){
      if((i+1)<this.riceInfo.length){
          try {
            this.validate()
          } catch (e) {
            //console.log(e)
          }
          if(!this.validator.hasvalue(this.validator.validator.A2_E1[i], false)){
            this.area1=i+1;
            this.notValid = false;
            this.scrollToTop();
          }else{
            this.notValid = true;
            this.scrollToTop();
          }
      }else{
        this.saveSection1();
      }
    }
    changeMenus2(index:number)
    {
      this.area2=index;
    }

    nextArea2(i){
      if((i+1)<this.treeRaiInfo.length){
        try{
          this.validate()
        }catch(e){
          //console.log(e)
        }
        if(!this.validator.hasvalue(this.validator.validator.A2_E2[i], false)){
          this.area2=i+1;
          this.notValid = false;
          this.scrollToTop();
        }else{
          this.notValid = true;
          this.scrollToTop();
        }
      }else{
        this.saveSection2();
      }
    }

    changeMenus3(index:number)
    {
      this.area3=index;
    }

    nextArea3(i){
      if((i+1)<this.yangInfo.length){
        try{
          this.validate()
        }catch(e){
          //console.log(e)
        }
        if(!this.validator.hasvalue(this.validator.validator.A2_E3[i], false)){
          this.area3=i+1;
          this.notValid = false;
          this.scrollToTop();
        }else{
          this.notValid = true;
          this.scrollToTop();
        }
      }else{
        this.saveSection3();
      }
    }
    changeMenus4(index:number)
    {
      this.area4=index;
    }

    nextArea4(i){
      if((i+1)<this.treeTonInfo.length){
        try{
          this.validate()
        }catch (e){
          //console.log(e)
        }
        if(!this.validator.hasvalue(this.validator.validator.A2_E4[i], false)){
          this.area4=i+1;
          this.notValid = false;
          this.scrollToTop();
        }else{
          this.notValid = true;
          this.scrollToTop();
        }
      }
      else{
        this.saveSection4();
      }
    }
    changeMenus5(index:number)
    {
      this.area5=index;
    }

    nextArea5(i){
      //console.log('nextArea5')
      //console.log(i)
      if((i+1)<this.treeVetInfo.length){
        try{
          this.validate()
        }catch(e){
          //console.log(e)
        }
        //console.log(this.validator.validator.A2_E5)
        if(!this.validator.hasvalue(this.validator.validator.A2_E5[i],false)){
          this.area5=i+1;
          this.notValid = false;
          this.scrollToTop();
        }else{
          this.notValid = true;
          this.scrollToTop();
        }
      }else{
        this.saveSection5();
      }
    }
    changeMenus6(index:number)
    {
      this.area6=index;
    }

    nextArea6(i){
      if((i+1)<this.treePadInfo.length){
        try{
          this.validate()
        }catch (e){
          //console.log(e)
        }
        if(!this.validator.hasvalue(this.validator.validator.A2_E6[i], false)){
          this.area6=i+1;
          this.notValid = false;
          this.scrollToTop();
        }else{
          this.notValid = true;
          this.scrollToTop();
        }
      }
      else{
        this.saveSection6();
      }
    }
    changeMenus7(index:number)
    {
      this.area7=index;
    }

    nextArea7(i){
      if((i+1)<this.mushroomInfo.length){
        try{
          this.validate()
        }catch(e){
          //console.log(e)
        }
        if(!this.validator.hasvalue(this.validator.validator.A2_E7[i], false)){
          this.area7=i+1;
          this.notValid = false;
          this.scrollToTop();
        }else{
          this.scrollToTop();
          this.notValid = true;
        }
      }
      else{
        this.saveSection7();
      }
    }

  onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }
  //rice
  a2_e1_1Change() {
    this.waterData.G_na = this.section2.A2_E1_1;
  }
  tapWaterChange(water) {
    //console.log("tapwaterChange")
    //console.log(this.waterData)
    if (water) {
      this.waterData.addTapWater();
    }
    else {
      this.waterData.rmTapWater();
    }
  }
  groundWaterChange(water) {
    //console.log("tapwaterChange")
    //console.log(this.waterData)
    if (water) {
      this.waterData.addGroundWater();
    }
    else {
      this.waterData.rmGroundWater();
    }
  }
  riverWaterChange(water) {
    if (water) {
      this.waterData.addRiverWater();
    }
    else {
      this.waterData.rmRiverWater();
    }
  }
  poolWaterChange(water){
    if(water){
      this.waterData.addPoolWater();
    }else{
      this.waterData.rmPoolWater();
    }
  }
  chonWaterChange(water) {
    if (water) {
      this.waterData.addChonWater();
    }
    else {
      this.waterData.rmChonWater();
    }
  }
  rainWaterChange(water) {
    if (water) {
      this.waterData.addRainWater();
    }
    else {
      this.waterData.rmRainWater();
    }
  }
  buyWaterChange(water) {
    if (water) {
      this.waterData.addBuyWater();
    }
    else {
      this.waterData.rmBuyWater();
    }
  }
  riceCountChange() {
    // alert("change");
    this.area1=0;
    if(this.riceInfo.length>this.rice_cwt.length){
      for (let i = this.rice_cwt.length; i < this.section2.A2_E1_2; i++) {
        this.rice_cwt.push(EX_EA.map(c => c['CHANGWAT_T']).filter(this.onlyUnique));
        this.rice_amp.push([]);
        this.cwtRiceSelected(i);
        this.rice_tam.push([]);
        this.ampRiceSelected(i);
        this.A2_E1_2_4OnChange(i);
        this.doTimeOnChange(i);
      }
    }
    if (this.riceInfo.length < this.section2.A2_E1_2) {
      for (let i = this.riceInfo.length; i < (this.section2.A2_E1_2 > 20 ? 20 : this.section2.A2_E1_2) ; i++) {
        this.addNewA2_E1_2();
        this.rice_cwt.push(EX_EA.map(c => c['CHANGWAT_T']).filter(this.onlyUnique));
        this.rice_amp.push([]);
        this.cwtRiceSelected(i);
        this.rice_tam.push([]);
        this.ampRiceSelected(i);
      }
    } else {
      for (let i = this.riceInfo.length; i > this.section2.A2_E1_2; i--) {
        this.riceInfo.pop();
        this.rice_cwt.pop();
        this.rice_amp.pop();
        this.rice_tam.pop();
      }
    }
  }

  cwtRiceSelected(index) {
    this.defaultCwt=this.riceInfo[index].A2_E1_2_1_CWT;
    this.rice_amp[index] = EX_EA.filter(c => c['CHANGWAT_T'] === this.riceInfo[index].A2_E1_2_1_CWT).map(a => a['AMPHOE_T']).filter(this.onlyUnique);
  }
  ampRiceSelected(index) {
    this.defaultAmp=this.riceInfo[index].A2_E1_2_1_AMP;
    this.rice_tam[index] = EX_EA.filter(c => c['CHANGWAT_T'] === this.riceInfo[index].A2_E1_2_1_CWT && c['AMPHOE_T'] === this.riceInfo[index].A2_E1_2_1_AMP).map(t => t['TAMBON_T']).filter(this.onlyUnique);
  }

  addNewA2_E1_2() {
    let rice = new SN2_1P2_1();
    rice.A2_E1_2_1_CWT = this.defaultCwt;
    rice.A2_E1_2_1_AMP = this.defaultAmp;
    rice.A2_E1_2_1_TMB = this.defaultTam;
    rice.A2_E1_2_2_1 = null;
    rice.A2_E1_2_2_2 = null;
    rice.A2_E1_2_2_3 = null;
    rice.A2_E1_2_3 = null;
    rice.A2_E1_2_4 = null;
    rice.A2_E1_2_4_2_3 = null;
    rice.A2_E1_2_4_2_2 = null;
    rice.A2_E1_2_4_2_1 = null;
    rice.A2_E1_2_4_3_1_3 = null;
    rice.A2_E1_2_4_3_1_1 = null;
    rice.A2_E1_2_4_3_2_3 = null;
    rice.A2_E1_2_4_3_2_1 = null;
    rice.A2_E1_2_4_3_3_3 = null;
    rice.A2_E1_2_4_3_3_1 = null;
    rice.A2_E1_2_4_3_4_3 = null;
    rice.A2_E1_2_4_3_4_1 = null;
    rice.A2_E1_2_5_1_1 = null;
    rice.A2_E1_2_5_1_2 = null;
    rice.A2_E1_2_6_1 = null;
    rice.A2_E1_2_7_1 = null;
    rice.A2_E1_2_5_2_1 = null;
    rice.A2_E1_2_5_2_2 = null;
    rice.A2_E1_2_6_2 = null;
    rice.A2_E1_2_7_2 = null;
    rice.A2_E1_2_5_3_1 = null;
    rice.A2_E1_2_5_3_2 = null;
    rice.A2_E1_2_6_3 = null;
    rice.A2_E1_2_7_3 = null;
    rice.A2_E1_2_5_4_1 = null;
    rice.A2_E1_2_5_4_2 = null;
    rice.A2_E1_2_6_4 = null;
    rice.A2_E1_2_7_4 = null;
    rice.A2_E1_2_8 = null;
    rice.A2_E1_2_9_1 = false;
    rice.A2_E1_2_9_2 = false;
    rice.A2_E1_2_9_3 = false;
    rice.A2_E1_2_9_4 = false;
    rice.A2_E1_2_9_5 = false;
    rice.A2_E1_2_9_6 = false;
    rice.A2_E1_2_9_7 = false;
    rice.A2_E1_2_9_8 = false;
    rice.A2_E1_2_9_8_1 = '';
    this.riceInfo.push(rice);
    this.inputDisable.push(true);
    this.inputDisable2.push(true);
    this.inputVisible1.push(false);
    this.inputVisible2.push(false);
    this.inputVisible3.push(false);
    this.inputVisible4.push(false);
  }

  A2_E1_2_4OnChange(index) {
    if (this.riceInfo[index].A2_E1_2_4 == 2) {
      this.inputDisable[index] = false;
    } else
      this.inputDisable[index] = true;
    if (this.riceInfo[index].A2_E1_2_4 == 3) {
      this.inputDisable2[index] = false;
    } else
      this.inputDisable2[index] = true;
  }

  doTimeOnChange(index) {
    if (this.riceInfo[index].A2_E1_2_3 >= 1 && this.riceInfo[index].A2_E1_2_3 <= 4) {
      this.inputVisible1[index] = true;
    } else
      this.inputVisible1[index] = false;
    if (this.riceInfo[index].A2_E1_2_3 >= 2 && this.riceInfo[index].A2_E1_2_3 <= 4) {
      this.inputVisible2[index] = true;
    } else
      this.inputVisible2[index] = false;
    if (this.riceInfo[index].A2_E1_2_3 >= 3 && this.riceInfo[index].A2_E1_2_3 <= 4) {
      this.inputVisible3[index] = true;
    } else
      this.inputVisible3[index] = false;
    if (this.riceInfo[index].A2_E1_2_3 == 4) {
      this.inputVisible4[index] = true;
    } else
      this.inputVisible4[index] = false;
  }

  //พืชไร่
  treeRaiCountChange() {
    this.area2=0;
    if(this.treeRaiInfo.length>this.rai_cwt.length){
      for (let i = this.rai_cwt.length; i < this.section2.A2_E2_2; i++) {
        this.rai_cwt.push(EX_EA.map(c => c['CHANGWAT_T']).filter(this.onlyUnique));
        this.rai_amp.push([]);
        this.cwtRaiSelected(i);
        this.rai_tam.push([]);
        this.ampRaiSelected(i);
      }
    }
    if (this.treeRaiInfo.length < this.section2.A2_E2_2) {
      for (let i = this.treeRaiInfo.length; i < (this.section2.A2_E2_2 > 20 ? 20 : this.section2.A2_E2_2); i++) {
        this.addNewA2_E2_2();
        this.rai_cwt.push(EX_EA.map(c => c['CHANGWAT_T']).filter(this.onlyUnique));
        this.rai_amp.push([]);
        this.cwtRaiSelected(i);
        this.rai_tam.push([]);
        this.ampRaiSelected(i);
      }
    } else {
      for (let i = this.treeRaiInfo.length; i > this.section2.A2_E2_2; i--) {
        this.treeRaiInfo.pop();
        this.rai_cwt.pop();
        this.rai_amp.pop();
        this.rai_tam.pop();
      }
    }
  }

  cwtRaiSelected(index) {
    this.defaultCwt=this.treeRaiInfo[index].A2_E2_2_1_CWT;
    this.rai_amp[index] = EX_EA.filter(c => c['CHANGWAT_T'] === this.treeRaiInfo[index].A2_E2_2_1_CWT).map(a => a['AMPHOE_T']).filter(this.onlyUnique);
  }
  ampRaiSelected(index) {
    this.defaultAmp=this.treeRaiInfo[index].A2_E2_2_1_AMP;
    this.rai_tam[index] = EX_EA.filter(c => c['CHANGWAT_T'] === this.treeRaiInfo[index].A2_E2_2_1_CWT && c['AMPHOE_T'] === this.treeRaiInfo[index].A2_E2_2_1_AMP).map(t => t['TAMBON_T']).filter(this.onlyUnique);
  }

  print() {
    //console.log(this.riceInfo);
    //console.log(this.treeRaiInfo);
    //console.log(this.yangInfo);
    //console.log(this.treeTonInfo);
    //console.log(this.treeVetInfo);
    //console.log(this.treePadInfo);
    //console.log(this.mushroomInfo);
  }

  addNewA2_E2_2() {
    this.treeRaiInfo.push({
      A2_E2_2_1_CWT: this.defaultCwt,
      A2_E2_2_1_AMP: this.defaultAmp,
      A2_E2_2_1_TMB: this.defaultTam,
      A2_E2_2_2_1: null,
      A2_E2_2_2_2: null,
      A2_E2_2_2_3: null,
      A2_E2_2_3: null,
      A2_E2_2_4: null,
      A2_E2_2_5_1: false,
      A2_E2_2_5_2: false,
      A2_E2_2_5_3: false,
      A2_E2_2_5_4: false,
      A2_E2_2_5_5: false,
      A2_E2_2_5_6: false,
      A2_E2_2_5_7: false,
      A2_E2_2_5_8: false,
      A2_E2_2_5_9: false,
      A2_E2_2_5_9_1: null
    });
  }
  //ยางพารา
  yangCountChange() {
    this.area3=0;
    if(this.yangInfo.length>this.yang_cwt.length){
      for (let i = this.yang_cwt.length; i < this.section2.A2_E3_2; i++) {
        this.yang_cwt.push(EX_EA.map(c => c['CHANGWAT_T']).filter(this.onlyUnique));
        this.yang_amp.push([]);
        this.cwtYangSelected(i);
        this.yang_tam.push([]);
        this.ampYangSelected(i);
      }
    }
    if (this.yangInfo.length < this.section2.A2_E3_2) {
      for (let i = this.yangInfo.length; i < (this.section2.A2_E3_2 > 20 ? 20 : this.section2.A2_E3_2); i++) {
        this.addNewA2_E3_2();
        this.yang_cwt.push(EX_EA.map(c => c['CHANGWAT_T']).filter(this.onlyUnique));
        this.yang_amp.push([]);
        this.cwtYangSelected(i);
        this.yang_tam.push([]);
        this.ampYangSelected(i);
      }
    } else {
      for (let i = this.yangInfo.length; i > this.section2.A2_E3_2; i--) {
        this.yangInfo.pop();
        this.yang_cwt.pop();
        this.yang_amp.pop();
        this.yang_tam.pop();
      }
    }
  }

  cwtYangSelected(index) {
    this.defaultCwt=this.yangInfo[index].A2_E3_2_1_CWT;
    this.yang_amp[index] = EX_EA.filter(c => c['CHANGWAT_T'] === this.yangInfo[index].A2_E3_2_1_CWT).map(a => a['AMPHOE_T']).filter(this.onlyUnique);
  }
  ampYangSelected(index) {
    this.defaultAmp=this.yangInfo[index].A2_E3_2_1_AMP;
    this.yang_tam[index] = EX_EA.filter(c => c['CHANGWAT_T'] === this.yangInfo[index].A2_E3_2_1_CWT && c['AMPHOE_T'] === this.yangInfo[index].A2_E3_2_1_AMP).map(t => t['TAMBON_T']).filter(this.onlyUnique);
  }

  addNewA2_E3_2() {
    this.yangInfo.push({
      A2_E3_2_1_CWT: this.defaultCwt,
      A2_E3_2_1_AMP: this.defaultAmp,
      A2_E3_2_1_TMB: this.defaultTam,
      A2_E3_2_2_1: null,
      A2_E3_2_2_2: null,
      A2_E3_2_2_3: null,
      A2_E3_2_3: null,
      A2_E3_2_4_1: false,
      A2_E3_2_4_2: false,
      A2_E3_2_4_3: false,
      A2_E3_2_4_4: false,
      A2_E3_2_4_5: false,
      A2_E3_2_4_6: false,
      A2_E3_2_4_7: false,
      A2_E3_2_4_8: false,
      A2_E3_2_4_9: false,
      A2_E3_2_4_9_1: ''
    });
    //console.log(this.yangInfo);
  }
  //พืชต้น
  treeTonCountChange() {
    this.area4=0;
    if(this.treeTonInfo.length>this.ton_cwt.length){
      for (let i = this.ton_cwt.length; i < this.section2.A2_E4_2; i++) {
        this.ton_cwt.push(EX_EA.map(c => c['CHANGWAT_T']).filter(this.onlyUnique));
        this.ton_amp.push([]);
        this.cwtTonSelected(i);
        this.ton_tam.push([]);
        this.ampTonSelected(i);
      }
    }
    if (this.treeTonInfo.length < this.section2.A2_E4_2) {
      for (let i = this.treeTonInfo.length; i < (this.section2.A2_E4_2 > 20 ? 20 : this.section2.A2_E4_2); i++) {
        this.addNewA2_E4_2();
        this.ton_cwt.push(EX_EA.map(c => c['CHANGWAT_T']).filter(this.onlyUnique));
        this.ton_amp.push([]);
        this.cwtTonSelected(i);
        this.ton_tam.push([]);
        this.ampTonSelected(i);
      }
    } else {
      for (let i = this.treeTonInfo.length; i > this.section2.A2_E4_2; i--) {
        this.treeTonInfo.pop();
        this.ton_cwt.pop();
        this.ton_amp.pop();
        this.ton_tam.pop();
      }
    }
  }

  cwtTonSelected(index) {
    this.defaultCwt=this.treeTonInfo[index].A2_E4_2_1_CWT;
    this.ton_amp[index] = EX_EA.filter(c => c['CHANGWAT_T'] === this.treeTonInfo[index].A2_E4_2_1_CWT).map(a => a['AMPHOE_T']).filter(this.onlyUnique);
  }
  ampTonSelected(index) {
    this.defaultAmp=this.treeTonInfo[index].A2_E4_2_1_AMP;
    this.ton_tam[index] = EX_EA.filter(c => c['CHANGWAT_T'] === this.treeTonInfo[index].A2_E4_2_1_CWT && c['AMPHOE_T'] === this.treeTonInfo[index].A2_E4_2_1_AMP).map(t => t['TAMBON_T']).filter(this.onlyUnique);
  }

  addNewA2_E4_2() {
    this.treeTonInfo.push({
      A2_E4_2_1_CWT: this.defaultCwt,
      A2_E4_2_1_AMP: this.defaultAmp,
      A2_E4_2_1_TMB: this.defaultTam,
      A2_E4_2_2_1: null,
      A2_E4_2_2_2: null,
      A2_E4_2_2_3: null,
      A2_E4_2_3: null,
      A2_E4_2_4: null,
      A2_E4_2_5_1: false,
      A2_E4_2_5_2: false,
      A2_E4_2_5_3: false,
      A2_E4_2_5_4: false,
      A2_E4_2_5_5: false,
      A2_E4_2_5_6: false,
      A2_E4_2_5_7: false,
      A2_E4_2_5_8: false,
      A2_E4_2_5_9: false,
      A2_E4_2_5_9_1: null
    });
  }
  //พืชผัก
  treeVetCountChange() {
    this.area5=0;
    if(this.treeVetInfo.length>this.veg_cwt.length){
      for (let i = this.veg_cwt.length; i < this.section2.A2_E5_2; i++) {
        this.veg_cwt.push(EX_EA.map(c => c['CHANGWAT_T']).filter(this.onlyUnique));
        this.veg_amp.push([]);
        this.cwtVegSelected(i);
        this.veg_tam.push([]);
        this.ampVegSelected(i);
      }
    }
    if (this.treeVetInfo.length < this.section2.A2_E5_2) {
      for (let i = this.treeVetInfo.length; i < (this.section2.A2_E5_2 > 20 ? 20 : this.section2.A2_E5_2); i++) {
        this.addNewA2_E5_2();
        this.veg_cwt.push(EX_EA.map(c => c['CHANGWAT_T']).filter(this.onlyUnique));
        this.veg_amp.push([]);
        this.cwtVegSelected(i);
        this.veg_tam.push([]);
        this.ampVegSelected(i);
      }
    } else {
      for (let i = this.treeVetInfo.length; i > this.section2.A2_E5_2; i--) {
        this.treeVetInfo.pop();
        this.veg_cwt.pop();
        this.veg_amp.pop();
        this.veg_tam.pop();
      }
    }
  }

  cwtVegSelected(index) {
    this.defaultCwt=this.treeVetInfo[index].A2_E5_2_1_CWT;
    this.veg_amp[index] = EX_EA.filter(c => c['CHANGWAT_T'] === this.treeVetInfo[index].A2_E5_2_1_CWT).map(a => a['AMPHOE_T']).filter(this.onlyUnique);
  }
  ampVegSelected(index) {
    this.defaultAmp=this.treeVetInfo[index].A2_E5_2_1_AMP;
    this.veg_tam[index] = EX_EA.filter(c => c['CHANGWAT_T'] === this.treeVetInfo[index].A2_E5_2_1_CWT && c['AMPHOE_T'] === this.treeVetInfo[index].A2_E5_2_1_AMP).map(t => t['TAMBON_T']).filter(this.onlyUnique);
  }

  addNewA2_E5_2() {
    this.treeVetInfo.push({
      A2_E5_2_1_CWT: this.defaultCwt,
      A2_E5_2_1_AMP: this.defaultAmp,
      A2_E5_2_1_TMB: this.defaultTam,
      A2_E5_2_2_1: null,
      A2_E5_2_2_2: null,
      A2_E5_2_2_3: null,
      A2_E5_2_3: null,
      A2_E5_2_4: null,
      A2_E5_2_5: null,
      A2_E5_2_5_2: '',
      A2_E5_2_6_1: false,
      A2_E5_2_6_2: false,
      A2_E5_2_6_3: false,
      A2_E5_2_6_4: false,
      A2_E5_2_6_5: false,
      A2_E5_2_6_6: false,
      A2_E5_2_6_7: false,
      A2_E5_2_6_8: false,
      A2_E5_2_6_9: false,
      A2_E5_2_6_9_1: null
    });
  }
  //พืชไม่ประดับ
  treePadCountChange() {
    this.area6=0;
    if(this.treePadInfo.length>this.pad_cwt.length){
      for (let i = this.pad_cwt.length; i < this.section2.A2_E6_2; i++) {
        this.pad_cwt.push(EX_EA.map(c => c['CHANGWAT_T']).filter(this.onlyUnique));
        this.pad_amp.push([]);
        this.cwtPadSelected(i);
        this.pad_tam.push([]);
        this.ampPadSelected(i);
      }
    }
    if (this.treePadInfo.length < this.section2.A2_E6_2) {
      for (let i = this.treePadInfo.length; i < (this.section2.A2_E6_2 > 20 ? 20 : this.section2.A2_E6_2); i++) {
        this.addNewA2_E6_2();
        this.pad_cwt.push(EX_EA.map(c => c['CHANGWAT_T']).filter(this.onlyUnique));
        this.pad_amp.push([]);
        this.cwtPadSelected(i);
        this.pad_tam.push([]);
        this.ampPadSelected(i);
      }
    } else {
      for (let i = this.treePadInfo.length; i > this.section2.A2_E6_2; i--) {
        this.treePadInfo.pop();
        this.pad_cwt.pop();
        this.pad_amp.pop();
        this.pad_tam.pop();
      }
    }
  }

  cwtPadSelected(index) {
    this.defaultCwt=this.treePadInfo[index].A2_E6_2_1_CWT;
    this.pad_amp[index] = EX_EA.filter(c => c['CHANGWAT_T'] === this.treePadInfo[index].A2_E6_2_1_CWT).map(a => a['AMPHOE_T']).filter(this.onlyUnique);
  }
  ampPadSelected(index) {
    this.defaultAmp=this.treePadInfo[index].A2_E6_2_1_AMP;
    this.pad_tam[index] = EX_EA.filter(c => c['CHANGWAT_T'] === this.treePadInfo[index].A2_E6_2_1_CWT && c['AMPHOE_T'] === this.treePadInfo[index].A2_E6_2_1_AMP).map(t => t['TAMBON_T']).filter(this.onlyUnique);
  }

  addNewA2_E6_2() {
    this.treePadInfo.push({
      A2_E6_2_1_CWT: this.defaultCwt,
      A2_E6_2_1_AMP: this.defaultAmp,
      A2_E6_2_1_TMB: this.defaultTam,
      A2_E6_2_2_1: null,
      A2_E6_2_2_2: null,
      A2_E6_2_2_3: null,
      A2_E6_2_3: null,
      A2_E6_2_4: null,
      A2_E6_2_5: null,
      A2_E6_2_5_2: '',
      A2_E6_2_6_1: false,
      A2_E6_2_6_2: false,
      A2_E6_2_6_3: false,
      A2_E6_2_6_4: false,
      A2_E6_2_6_5: false,
      A2_E6_2_6_6: false,
      A2_E6_2_6_7: false,
      A2_E6_2_6_8: false,
      A2_E6_2_6_9: false,
      A2_E6_2_6_9_1: null
    });
  }
  //เพาะเห็ด
  mushroomCountChange() {
    this.area7=0;
    if(this.mushroomInfo.length>this.mush_cwt.length){
      for (let i = this.mush_cwt.length; i < this.section2.A2_E7_2; i++) {
        this.mush_cwt.push(EX_EA.map(c => c['CHANGWAT_T']).filter(this.onlyUnique));
        this.mush_amp.push([]);
        this.cwtMushSelected(i);
        this.mush_tam.push([]);
        this.ampMushSelected(i);
      }
    }
    if (this.mushroomInfo.length < this.section2.A2_E7_2) {
      for (let i = this.mushroomInfo.length; i < (this.section2.A2_E7_2 > 20 ? 20 : this.section2.A2_E7_2); i++) {
        this.addNewA2_E7_2();
        this.mush_cwt.push(EX_EA.map(c => c['CHANGWAT_T']).filter(this.onlyUnique));
        this.mush_amp.push([]);
        this.cwtMushSelected(i);
        this.mush_tam.push([]);
        this.ampMushSelected(i);
      }
    } else {
      for (let i = this.mushroomInfo.length; i > this.section2.A2_E7_2; i--) {
        this.mushroomInfo.pop();
        this.mush_cwt.pop();
        this.mush_amp.pop();
        this.mush_tam.pop();
      }
    }
  }

  cwtMushSelected(index) {
    this.defaultCwt=this.mushroomInfo[index].A2_E7_2_1_CWT;
    this.mush_amp[index] = EX_EA.filter(c => c['CHANGWAT_T'] === this.mushroomInfo[index].A2_E7_2_1_CWT).map(a => a['AMPHOE_T']).filter(this.onlyUnique);
  }
  ampMushSelected(index) {
    this.defaultAmp=this.mushroomInfo[index].A2_E7_2_1_AMP;
    this.mush_tam[index] = EX_EA.filter(c => c['CHANGWAT_T'] === this.mushroomInfo[index].A2_E7_2_1_CWT && c['AMPHOE_T'] === this.mushroomInfo[index].A2_E7_2_1_AMP).map(t => t['TAMBON_T']).filter(this.onlyUnique);
  }

  addNewA2_E7_2() {
    this.mushroomInfo.push({
      A2_E7_2_1_CWT: this.defaultCwt,
      A2_E7_2_1_AMP: this.defaultAmp,
      A2_E7_2_1_TMB: this.defaultTam,
      A2_E7_2_2: null,
      A2_E7_2_3: null,
      A2_E7_2_4_1: false,
      A2_E7_2_4_2: false,
      A2_E7_2_4_3: false,
      A2_E7_2_4_4: false,
      A2_E7_2_4_5: false,
      A2_E7_2_4_6: false,
      A2_E7_2_4_7: false,
      A2_E7_2_4_8: false,
      A2_E7_2_4_9: false,
      A2_E7_2_4_9_1: null
    });
  }
  //ปลา
  fish() {
    if (this.section2.A2_E9_1_1) {
      if (this.section2.A2_E9_1_1_1 == null) {
        this.section2.A2_E9_1_1_1 = this.fishInfo;
      }
    } else {
      this.section2.A2_E9_1_1_1 = null;
    }
  }
  fishCountChange() {
    if(this.fishInfo.A2_E9_1_1_2 == 1){
      this.fishInfo.A2_E9_1_1_2_1 =true;
    }
    if (this.fishInfo.A2_E9_1_1_2_1 != null) {
      if (!this.fishInfo.A2_E9_1_1_2_1 && this.fishInfo.A2_E9_1_1_2 != null) {
        if (this.fishArea.length < this.fishInfo.A2_E9_1_1_2) {
          for (let i = this.fishArea.length; i < this.fishInfo.A2_E9_1_1_2; i++) {
            this.addNewFishArea();
          }
        } else {
          for (let i = this.fishArea.length; i > this.fishInfo.A2_E9_1_1_2; i--) {
            this.fishArea.pop();
          }
        }
      }
      else if (this.fishInfo.A2_E9_1_1_2_1 && this.fishInfo.A2_E9_1_1_2 != null) {
        if (this.fishArea.length < 1) {
          for (let i = this.fishArea.length; i < 1; i++) {
            this.addNewFishArea();
          }
        } else {
          for (let i = this.fishArea.length; i > 1; i--) {
            this.fishArea.pop();
          }
        }
      }
    }
  }

  addNewFishArea() {
    this.fishArea.push(new Pool());
  }
  //กุ้ง
  kung() {
    if (this.section2.A2_E9_1_2) {
      if (this.section2.A2_E9_1_1_2 == null) {
        this.section2.A2_E9_1_1_2 = this.kungInfo;
      }
    } else {
      this.section2.A2_E9_1_1_2 = null;
    }
  }
  kungCountChange() {
    if(this.kungInfo.A2_E9_1_1_2 == 1){
      this.kungInfo.A2_E9_1_1_2_1 = true;
    }
    if (this.kungInfo.A2_E9_1_1_2_1 != null) {
      if (!this.kungInfo.A2_E9_1_1_2_1 && this.kungInfo.A2_E9_1_1_2 != null) {
        if (this.kungArea.length < this.kungInfo.A2_E9_1_1_2) {
          for (let i = this.kungArea.length; i < this.kungInfo.A2_E9_1_1_2; i++) {
            this.addNewKungArea();
          }
        } else {
          for (let i = this.kungArea.length; i > this.kungInfo.A2_E9_1_1_2; i--) {
            this.kungArea.pop();
          }
        }
      }
      else if (this.kungInfo.A2_E9_1_1_2_1 && this.kungInfo.A2_E9_1_1_2 != null) {
        if (this.kungArea.length < 1) {
          for (let i = this.kungArea.length; i < 1; i++) {
            this.addNewKungArea();
          }
        } else {
          for (let i = this.kungArea.length; i > 1; i--) {
            this.kungArea.pop();
          }
        }
      }
    }
  }

  addNewKungArea() {
    this.kungArea.push(new Pool());
  }
  //ปู
  crab() {
    if (this.section2.A2_E9_1_6) {
      if (this.section2.A2_E9_1_1_6 == null) {
        this.section2.A2_E9_1_1_6 = this.crabInfo;
      }
    } else {
      this.section2.A2_E9_1_1_6 = null;
    }
  }
  crabCountChange() {
    if(this.crabInfo.A2_E9_1_1_2 == 1){
      this.crabInfo.A2_E9_1_1_2_1 = true;
    }
    if (this.crabInfo.A2_E9_1_1_2_1 != null) {
      if (!this.crabInfo.A2_E9_1_1_2_1 && this.crabInfo.A2_E9_1_1_2 != null) {
        if (this.crabArea.length < this.crabInfo.A2_E9_1_1_2) {
          for (let i = this.crabArea.length; i < this.crabInfo.A2_E9_1_1_2; i++) {
            this.addNewCrabArea();
          }
        } else {
          for (let i = this.crabArea.length; i > this.crabInfo.A2_E9_1_1_2; i--) {
            this.crabArea.pop();
          }
        }
      }
      else if (this.crabInfo.A2_E9_1_1_2_1 && this.crabInfo.A2_E9_1_1_2 != null) {
        if (this.crabArea.length < 1) {
          for (let i = this.crabArea.length; i < 1; i++) {
            this.addNewCrabArea();
          }
        } else {
          for (let i = this.crabArea.length; i > 1; i--) {
            this.crabArea.pop();
          }
        }
      }
    }
  }
  addNewCrabArea() {
    this.crabArea.push(new Pool());
  }
  //หอย
  shell() {
    if (this.section2.A2_E9_1_7) {
      if (this.section2.A2_E9_1_1_7 == null) {
        this.section2.A2_E9_1_1_7 = this.shellInfo;
      }
    } else {
      this.section2.A2_E9_1_1_7 = null;
    }
  }
  shellCountChange() {
    if(this.shellInfo.A2_E9_1_1_2 == 1){
      this.shellInfo.A2_E9_1_1_2_1=true;
    }
    if (this.shellInfo.A2_E9_1_1_2_1 != null) {
      if (!this.shellInfo.A2_E9_1_1_2_1 && this.shellInfo.A2_E9_1_1_2 != null) {
        if (this.shellArea.length < this.shellInfo.A2_E9_1_1_2) {
          for (let i = this.shellArea.length; i < this.shellInfo.A2_E9_1_1_2; i++) {
            this.addNewShellArea();
          }
        } else {
          for (let i = this.shellArea.length; i > this.shellInfo.A2_E9_1_1_2; i--) {
            this.shellArea.pop();
          }
        }
      }
      else if (this.shellInfo.A2_E9_1_1_2_1 && this.shellInfo.A2_E9_1_1_2 != null) {
        if (this.shellArea.length < 1) {
          for (let i = this.shellArea.length; i < 1; i++) {
            this.addNewShellArea();
          }
        } else {
          for (let i = this.shellArea.length; i > 1; i--) {
            this.shellArea.pop();
          }
        }
      }
    }
  }
  addNewShellArea() {
    this.shellArea.push(new Pool());
  }
  //กบ
  frog() {
    if (this.section2.A2_E9_1_3) {
      if (this.section2.A2_E9_1_1_3 == null) {
        this.section2.A2_E9_1_1_3 = this.frogInfo;
      }
    } else {
      this.section2.A2_E9_1_1_3 = null;
    }
  }
  frogCountChange() {
    if (this.frogInfo.A2_E9_1_3_2 != null) {
      if (!this.frogInfo.A2_E9_1_3_2_1 && this.frogInfo.A2_E9_1_3_2 != null) {
        if (this.frogArea.length < this.frogInfo.A2_E9_1_3_2) {
          for (let i = this.frogArea.length; i < this.frogInfo.A2_E9_1_3_2; i++) {
            this.addNewFrogArea();
          }
        } else {
          for (let i = this.frogArea.length; i > this.frogInfo.A2_E9_1_3_2; i--) {
            this.frogArea.pop();
          }
        }
      }
      else if (this.frogInfo.A2_E9_1_3_2_1 && this.frogInfo.A2_E9_1_3_2 != null) {
        if (this.frogArea.length < 1) {
          for (let i = this.frogArea.length; i < 1; i++) {
            this.addNewFrogArea();
          }
        } else {
          for (let i = this.frogArea.length; i > 1; i--) {
            this.frogArea.pop();
          }
        }
      }
    }
  }
  addNewFrogArea() {
    this.frogArea.push(new Pool());
  }
  //ไรแดง
  rai() {
    if (this.section2.A2_E9_1_9) {
      if (this.section2.A2_E9_1_1_9 == null) {
        this.section2.A2_E9_1_1_9 = this.raiInfo;
      }
    } else {
      this.section2.A2_E9_1_1_9 = null;
    }
  }
  raiCountChange() {
    if(this.raiInfo.A2_E9_1_1_2 == 1){
      this.raiInfo.A2_E9_1_1_2_1 =true;
    }
    if (this.raiInfo.A2_E9_1_1_2_1 != null) {
      if (!this.raiInfo.A2_E9_1_1_2_1 && this.raiInfo.A2_E9_1_1_2 != null) {
        if (this.raiArea.length < this.raiInfo.A2_E9_1_1_2) {
          for (let i = this.raiArea.length; i < this.raiInfo.A2_E9_1_1_2; i++) {
            this.addNewRaiArea();
          }
        } else {
          for (let i = this.raiArea.length; i > this.raiInfo.A2_E9_1_1_2; i--) {
            this.raiArea.pop();
          }
        }
      }
      else if (this.raiInfo.A2_E9_1_1_2_1 && this.raiInfo.A2_E9_1_1_2 != null) {
        if (this.raiArea.length < 1) {
          for (let i = this.raiArea.length; i < 1; i++) {
            this.addNewRaiArea();
          }
        } else {
          for (let i = this.raiArea.length; i > 1; i--) {
            this.raiArea.pop();
          }
        }
      }
    }
  }
  addNewRaiArea() {
    this.raiArea.push(new Pool());
  }
  //จระเข้
  croc() {
    if (this.section2.A2_E9_1_4) {
      if (this.section2.A2_E9_1_1_4 == null) {
        this.section2.A2_E9_1_1_4 = this.crocInfo;
      }
    } else {
      this.section2.A2_E9_1_1_4 = null;
    }
  }
  crocCountChange() {
    if(this.crocInfo.A2_E9_1_4_2 == 1){
      this.crocInfo.A2_E9_1_4_2_1 = true;
    }
    if (this.crocInfo.A2_E9_1_4_2 != null) {
      if (!this.crocInfo.A2_E9_1_4_2_1 && this.crocInfo.A2_E9_1_4_2_1 != null) {
        if (this.crocArea.length < this.crocInfo.A2_E9_1_4_2) {
          for (let i = this.crocArea.length; i < this.crocInfo.A2_E9_1_4_2; i++) {
            this.addNewCrocArea();
          }
        } else {
          for (let i = this.crocArea.length; i > this.crocInfo.A2_E9_1_4_2; i--) {
            this.crocArea.pop();
          }
        }
      }
      else if (this.crocInfo.A2_E9_1_4_2_1 && this.crocInfo.A2_E9_1_4_2_1 != null) {
        if (this.crocArea.length < 1) {
          for (let i = this.crocArea.length; i < 1; i++) {
            this.addNewCrocArea();
          }
        } else {
          for (let i = this.crocArea.length; i > 1; i--) {
            this.crocArea.pop();
          }
        }
      }
    }
  }
  addNewCrocArea() {
    this.crocArea.push(new Pool());
  }
  //ตะพาบน้ำ
  softTurtle() {
    if (this.section2.A2_E9_1_5) {
      if (this.section2.A2_E9_1_1_5 == null) {
        this.section2.A2_E9_1_1_5 = this.softTurtleInfo;
      }
    } else {
      this.section2.A2_E9_1_1_5 = null;
    }
  }
  softTurtleCountChange() {
    if(this.softTurtleInfo.A2_E9_1_4_2 == 1){
      this.softTurtleInfo.A2_E9_1_4_2_1=true;
    }
    if (this.softTurtleInfo.A2_E9_1_4_2 != null) {
      if (!this.softTurtleInfo.A2_E9_1_4_2_1 && this.softTurtleInfo.A2_E9_1_4_2_1 != null) {
        if (this.softTurtleArea.length < this.softTurtleInfo.A2_E9_1_4_2) {
          for (let i = this.softTurtleArea.length; i < this.softTurtleInfo.A2_E9_1_4_2; i++) {
            this.addNewSoftTurtleArea();
          }
        } else {
          for (let i = this.softTurtleArea.length; i > this.softTurtleInfo.A2_E9_1_4_2; i--) {
            this.softTurtleArea.pop();
          }
        }
      }
      else if (this.softTurtleInfo.A2_E9_1_4_2_1 && this.softTurtleInfo.A2_E9_1_4_2_1 != null) {
        if (this.softTurtleArea.length < 1) {
          for (let i = this.softTurtleArea.length; i < 1; i++) {
            this.addNewSoftTurtleArea();
          }
        } else {
          for (let i = this.softTurtleArea.length; i > 1; i--) {
            this.softTurtleArea.pop();
          }
        }
      }
    }
  }
  addNewSoftTurtleArea() {
    this.softTurtleArea.push(new Pool());
  }
  //เต่า
  turtle() {
    if (this.section2.A2_E9_1_8) {
      if (this.section2.A2_E9_1_1_8 == null) {
        this.section2.A2_E9_1_1_8 = this.turtleInfo;
      }
    } else {
      this.section2.A2_E9_1_1_8 = null;
    }
  }
  turtleCountChange() {
    if(this.turtleInfo.A2_E9_1_4_2 == 1){
      this.turtleInfo.A2_E9_1_4_2_1=true;
    }
    if (this.turtleInfo.A2_E9_1_4_2 != null) {
      if (!this.turtleInfo.A2_E9_1_4_2_1 && this.turtleInfo.A2_E9_1_4_2_1 != null) {
        if (this.turtleArea.length < this.turtleInfo.A2_E9_1_4_2) {
          for (let i = this.turtleArea.length; i < this.turtleInfo.A2_E9_1_4_2; i++) {
            this.addNewTurtleArea();
          }
        } else {
          for (let i = this.turtleArea.length; i > this.turtleInfo.A2_E9_1_4_2; i--) {
            this.turtleArea.pop();
          }
        }
      }
      else if (this.turtleInfo.A2_E9_1_4_2_1 && this.turtleInfo.A2_E9_1_4_2_1 != null) {
        if (this.turtleArea.length < 1) {
          for (let i = this.turtleArea.length; i < 1; i++) {
            this.addNewTurtleArea();
          }
        } else {
          for (let i = this.turtleArea.length; i > 1; i--) {
            this.turtleArea.pop();
          }
        }
      }
    }
  }
  addNewTurtleArea() {
    this.turtleArea.push(new Pool());
  }
  customTrackBy(index: number, obj: any): any {
    return index;
  }

  range(min, max, step) {
    step = step || 1;
    let input = [];
    for (let i = min; i < max; i += step) {
      input.push(i);
    }
    return input;
  }

  onSelectTreeRaiInfo(index) {
    while (5 < this.treeRaiInfo[index].A2_E2_2_4.length) {
      this.treeRaiInfo[index].A2_E2_2_4.pop();
      alert('สามารถเลือกได้สูงสุด 5 ชนิด');
    }
  }

  onSelectTreeTonInfo(index) {
    while (5 < this.treeTonInfo[index].A2_E4_2_4.length) {
      this.treeTonInfo[index].A2_E4_2_4.pop();
      alert('สามารถเลือกได้สูงสุด 5 ชนิด');
    }
  }

  onSelectTreeVetInfo(index) {
    while (5 < this.treeVetInfo[index].A2_E5_2_4.length) {
      this.treeVetInfo[index].A2_E5_2_4.pop();
      alert('สามารถเลือกได้สูงสุด 5 ชนิด');
    }
  }

  onSelectTreeDokInfo(index) {
    while (5 < this.treePadInfo[index].A2_E6_2_4.length) {
      this.treePadInfo[index].A2_E6_2_4.pop();
      alert('สามารถเลือกได้สูงสุด 5 ชนิด');
    }
  }

  validate() {
    //console.log("validator")
    //console.log(this.validator)
    //console.log("section2")
    //console.log(this.section2)
    this.fishInfo.A2_E9_1_1_2_2 = this.fishArea
    this.kungInfo.A2_E9_1_1_2_2 = this.kungArea
    this.crabInfo.A2_E9_1_1_2_2 = this.crabArea
    this.shellInfo.A2_E9_1_1_2_2 = this.shellArea
    this.frogInfo.A2_E9_1_3_2_2 = this.frogArea
    this.raiInfo.A2_E9_1_1_2_2 = this.raiArea
    this.crocInfo.A2_E9_1_4_2_2 = this.crocArea
    this.softTurtleInfo.A2_E9_1_4_2_2 = this.softTurtleArea
    this.turtleInfo.A2_E9_1_4_2_2 = this.turtleArea
    if (this.section2.A2_E1_1)
      this.section2.A2_E1 = this.riceInfo
    else {
      this.section2.A2_E1 = []
    }
    if (this.section2.A2_E2_1)
      this.section2.A2_E2 = this.treeRaiInfo
    else {
      this.section2.A2_E2 = [];
    }
    if (this.section2.A2_E3_1)
      this.section2.A2_E3 = this.yangInfo;
    else
      this.section2.A2_E3 = []
    if (this.section2.A2_E4_1)
      this.section2.A2_E4 = this.treeTonInfo;
    else
      this.section2.A2_E4 = [];
    if (this.section2.A2_E5_1)
      this.section2.A2_E5 = this.treeVetInfo
    else
      this.section2.A2_E5 = [];
    if (this.section2.A2_E6_1)
      this.section2.A2_E6 = this.treePadInfo
    else
      this.section2.A2_E6 = []
    if (this.section2.A2_E7_1)
      this.section2.A2_E7 = this.mushroomInfo
    else
      this.section2.A2_E7 = []
    if (this.section2.A2_E9_1_1)
      this.section2.A2_E9_1_1_1 = this.fishInfo
    else
      this.section2.A2_E9_1_1_1 = null;
    this.section2.A2_E9_1_1_2 = this.kungInfo
    this.section2.A2_E9_1_1_3 = this.frogInfo
    this.section2.A2_E9_1_1_4 = this.crocInfo
    this.section2.A2_E9_1_1_5 = this.softTurtleInfo
    this.section2.A2_E9_1_1_6 = this.crabInfo
    this.section2.A2_E9_1_1_7 = this.shellInfo
    this.section2.A2_E9_1_1_8 = this.turtleInfo
    this.section2.A2_E9_1_1_9 = this.raiInfo
    this.validator.validate(this.section2)
    //console.log("result of validate")
    //console.log(this.validator.validator)
    //console.log("result")
  }

  presentChoice(type, model, index) {
    let arr = [];
    if (model == null) {
      model = [];
    } else if (type == "TREEDOK2" || type == "TREEVET2") {
      if (model) {
        //console.log("เข้าตัดsplit")
        //console.log(typeof(model))
        let sp=model;
        model = []
        model.push(sp);
      }
    }
    if (type == "TREEDOK2" || type == "TREEVET2") {
      if (this.section2.A2_E1_1) {
        arr.push({ id: 441, name: "ข้าว" });
      }

      if (this.treeRaiInfo)
        for (let e2 of this.treeRaiInfo) {
          if (e2.A2_E2_2_4)
            for (let s of e2.A2_E2_2_4) {
              let tree = s.split('.');
              arr.push({ id: tree[0], name: tree[1] })
            }
        }
      if (this.section2.A2_E3_1) {
        arr.push({ id: 442, name: "ยางพารา" });
      }
      if(this.treeTonInfo)
      for (let e2 of this.treeTonInfo) {
        if(e2.A2_E4_2_4)
        for (let s of e2.A2_E4_2_4) {
          let tree = s.split('.');
          arr.push({ id: tree[0], name: tree[1] })
        }
      }
    }
    let profileModal = this.modalCtrl.create('SearchDropdownPage', { type: type, model: model, list: arr });
    profileModal.onDidDismiss((data) => {
      //console.log(data);
      if (type == 'TREERAI') {
        this.treeRaiInfo[index].A2_E2_2_4 = model
      }
      else if (type == 'TREETON') {
        this.treeTonInfo[index].A2_E4_2_4 = model
      }
      else if (type == 'TREEVET') {
        this.treeVetInfo[index].A2_E5_2_4 = model
      }
      else if (type == 'TREEDOK') {
        this.treePadInfo[index].A2_E6_2_4 = model
      }
      else if (type == 'TREEDOK2') {
        this.treePadInfo[index].A2_E6_2_5_2 = data;
      }
      else if (type == 'TREEVET2') {
        this.treeVetInfo[index].A2_E5_2_5_2 = data;
      }
      this.validate();
    });
    profileModal.present();
  }
  debug() {
    //console.log("debugg")
    //console.log(this.riceInfo)
  }
  showAlert(msg){
    const alert = this.alertCtrl.create({
      title: 'กรุณากรอกข้อมูล'+msg+'ให้ถูกต้อง',
      buttons: [{
        text: 'ยืนยัน',
        handler: () => {

        }
      }]
    });
    alert.present();
  }
  saveSection1(){
    try {
      this.validate()
    } catch (e) {
      //console.log(e)
    }
    if ((!this.validator.hasvalue(this.validator.validator.A2_E1, false)||(!this.section2.A2_E1_1))&&this.validator.validator.A2_E1_1&&this.validator.validator.A2_E1_2) {
      this.notValid=false;
      this.section = "section2";
      this.section2.current_page="2";
      this.disable2=false;
      
      this.scrollToTop();
    } else {
      this.notValid=true;
      this.showAlert("");
      this.scrollToTop();
    }
  }
  saveSection2(){
    try {
      this.validate()
    } catch (e) {
      //console.log(e)
    }
    if ((!this.validator.hasvalue(this.validator.validator.A2_E2, false)||(!this.section2.A2_E2_1))&&this.validator.validator.A2_E2_1&&this.validator.validator.A2_E2_2) {
      this.notValid=false;
      this.section = "section3";
      this.section2.current_page="3";
      this.disable3=false;
    } else {
      this.notValid=true;
      this.showAlert("");
    }
  }
  saveSection3(){
    try {
      this.validate()
    } catch (e) {
      //console.log(e)
    }
    if ((!this.validator.hasvalue(this.validator.validator.A2_E3, false)||(!this.section2.A2_E3_1))&&this.validator.validator.A2_E3_1&&this.validator.validator.A2_E3_2) {
      this.notValid=false;
      this.section = "section4";
      this.section2.current_page="4";
      this.disable4=false;
    } else {
      this.notValid=true;
      this.showAlert("");
    }
  }
  saveSection4(){
    try {
      this.validate()
    } catch (e) {
      //console.log(e)
    }
    if ((!this.validator.hasvalue(this.validator.validator.A2_E4, false)||(!this.section2.A2_E4_1))
        &&this.validator.validator.A2_E4_1&&this.validator.validator.A2_E4_2) {
      this.notValid=false;
      this.section = "section5";
      this.section2.current_page="5";
      this.disable5=false;
    } else {
      this.notValid=true;
      this.showAlert("");
    }
  }
  saveSection5(){
    try {
      this.validate()
    } catch (e) {
      //console.log(e)
    }
    if ((!this.validator.hasvalue(this.validator.validator.A2_E5, false)||(!this.section2.A2_E5_1))
        &&this.validator.validator.A2_E5_1&&this.validator.validator.A2_E5_2) {
      this.notValid=false;
      this.section = "section6";
      this.section2.current_page="6";
      this.disable6=false;
    } else {
      this.notValid=true;
      this.showAlert("");
    }
  }
  saveSection6(){
    try {
      this.validate()
    } catch (e) {
      //console.log(e)
    }
    if ((!this.validator.hasvalue(this.validator.validator.A2_E6, false)||(!this.section2.A2_E6_1))&&this.validator.validator.A2_E6_1&&this.validator.validator.A2_E6_2) {
      this.notValid=false;
      this.section = "section7";
      this.section2.current_page="7";
      this.disable7=false;
    } else {
      this.notValid=true;
      this.showAlert("");
    }
  }
  saveSection7(){
    try {
      this.validate()
    } catch (e) {
      //console.log(e)
    }
    if ((!this.validator.hasvalue(this.validator.validator.A2_E7, false)||(!this.section2.A2_E7_1))&&this.validator.validator.A2_E7_1&&this.validator.validator.A2_E7_2) {
      this.notValid=false;
      this.section = "section8";
      this.section2.current_page="8";
      this.disable8=false;
    } else {
      this.notValid=true;
      this.showAlert("");
    }
  }
  saveSection8(){
    try {
      this.validate()
    } catch (e) {
      //console.log(e)
    }
    if (!this.validator.hasvalue(this.validator.validator.A2_E8, false)) {
      this.notValid = false;
      this.section = "section9";
      this.section2.current_page="9";
      this.disable9=false;
    } else {
      this.notValid = true;
      this.showAlert("");
    }
  }
  save() {
    try {
      this.validate()
    } catch (e) {
      //console.log(e)
    }
    //check valid
    //console.log("check valid")
    try{
      //console.log(this.validator.hasvalue(this.validator.validator, false))
    }catch(e){
      //console.log(e)
    }
    if (!this.validator.hasvalue(this.validator.validator, false)) {
      this.notValid=false;
      this.section2.status = 4
      this.events.publish("saveSN21", 2);
    } else {
      if (!this.validator.validator.HAS_ONCE) {
        this.notValid = true;
        const alert = this.alertCtrl.create({
          title: 'กรุณาเลือกการทำการเกษตรอย่างน้อย 1 อย่าง',
          buttons: [{
            text: 'ยืนยัน',
            handler: () => {

            }
          }]
        });
        alert.present();
      } else {
        this.notValid = true;
        const alert = this.alertCtrl.create({
          title: 'กรุณากรอกข้อมูลให้ถูกต้อง',
          buttons: [{
            text: 'ยืนยัน',
            handler: () => {

            }
          }]
        });
        alert.present();
      }
    }
  }
  
}
