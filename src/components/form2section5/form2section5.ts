import { SN2_1P5_7 } from './../../models/SN2_1/SN2_1P5_7';
import { SN2_1P5_2_3 } from './../../models/SN2_1/SN2_1P5_2_3';
import { SN2_1P5_6 } from './../../models/SN2_1/SN2_1P5_6';
import { SN2_1P5_5 } from './../../models/SN2_1/SN2_1P5_5';
import { SN2_1P5_4 } from './../../models/SN2_1/SN2_1P5_4';
import { SN2_1P5_3 } from './../../models/SN2_1/SN2_1P5_3';
import { Component, Input, OnInit } from '@angular/core';
import { SN2_1P5_1 } from '../../models/SN2_1/SN2_1P5_1';
import { SN2_1P5_2 } from '../../models/SN2_1/SN2_1P5_2';
import { Pump } from '../../models/SN2_1/pump';
import { SN2_1P5_4_3 } from '../../models/SN2_1/SN2_1P5_4_3';
import { SN2_1P5_4_4 } from '../../models/SN2_1/SN2_1P5_4_4';
import { Validate2_1P5_1 } from '../../models/SN2_1/Validate21P51';
import { Validate21P52 } from '../../models/SN2_1/Validate21P52';
import { Validate21P523 } from '../../models/SN2_1/Validate21P523';
import { Validate_Pump } from '../../models/SN2_1/Validate_Pump';
import { Validate21P53 } from '../../models/SN2_1/Validate21P53';
import { Validate21P54 } from '../../models/SN2_1/Validate21P54';
import { Validate21P543 } from '../../models/SN2_1/Validate21P543';
import { Validate21P544 } from '../../models/SN2_1/Validate21P544';
import { Validate21P55 } from '../../models/SN2_1/Validate21P55';
import { Validate21P56 } from '../../models/SN2_1/Validate21P56';
import { Validate21P57 } from '../../models/SN2_1/Validate21P57';
import { WaterConsumeData } from '../../models/WaterConsumeData';
import { EX_PUMP_BADAN_LIST, EX_PUMP_GROUND_LIST } from '../../models/SN2_1/pumpData';
import { PACHANA } from '../../models/SN2_1/Pachana';
import { SN2_1P5_6_1 } from '../../models/SN2_1/SN2_1P5_6_1';
import { Validate21P561 } from '../../models/SN2_1/Validate21P561';
import { SN2_1P5 } from '../../models/SN2_1/SN2_1P5';
import { Events, AlertController, ModalController } from 'ionic-angular';
/**
 * Generated class for the Form2section5Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'form2section5',
  templateUrl: 'form2section5.html'
})
export class Form2section5Component implements OnInit {


  private_badan_pump_list = [];
  private_badan_horsepower_list = [];
  private_badan_pipe_con_list = [];
  private_badan_pipe_sen_list = [];
  public_badan_pump_list = [];
  public_badan_horsepower_list = [];
  public_badan_pipe_con_list = [];
  public_badan_pipe_sen_list = [];

  public_river_pump_list = [];
  public_river_horsepower_list = [];
  public_river_pipe_con_list = [];
  public_river_pipe_sen_list = [];

  pool_pump_list = [];
  pool_horsepower_list = [];
  pool_pipe_con_list = [];
  pool_pipe_sen_list = [];

  chon_pump_list = [];
  chon_horsepower_list = [];
  chon_pipe_con_list = [];
  chon_pipe_sen_list = [];

  pachana_list = [];

  section5_1: SN2_1P5_1;
  section5_2: SN2_1P5_2;
  section5_2_3: SN2_1P5_2_3[];
  section5_2_3public: SN2_1P5_2_3[];
  section5_3: SN2_1P5_3;
  section5_4: SN2_1P5_4;
  section5_5: SN2_1P5_5;
  section5_6: SN2_1P5_6;
  section5_7: SN2_1P5_7;
  notValid = false;
  @Input() section5: SN2_1P5;
  @Input() H4:string;
  @Input() mergeTapWater:boolean;
  @Input() mergeGroundWater:boolean;
  @Input() waterData: WaterConsumeData;
  validateSec5_1: Validate2_1P5_1 = new Validate2_1P5_1();
  validateSec5_2: Validate21P52 = new Validate21P52();
  validateSec5_2_3: Validate21P523[] = [];
  validateSec5_2_3Public: Validate21P523[] = [];
  validateSec5_3: Validate21P53 = new Validate21P53();
  validateSec5_4: Validate21P54 = new Validate21P54();
  validateSec5_5: Validate21P55 = new Validate21P55();
  validateSec5_6: Validate21P56 = new Validate21P56();
  validateSec5_7: Validate21P57 = new Validate21P57();
  section = 1;
  disable2:boolean=true;
    disable3:boolean=true;
    disable4:boolean=true;
    disable5:boolean=true;
    disable6:boolean=true;
    disable7:boolean=true;
    disable:boolean=false;
  constructor(private events: Events, private alertCtrl: AlertController, private modalCtrl: ModalController) {
    //console.logog('Hello Form2section5Component Component');
    //console.logog('EX_PUMP_BADAN_LIST');
    //console.logog(EX_PUMP_BADAN_LIST);
    //console.logog(EX_PUMP_GROUND_LIST);
    // this.section5_2.A5_2_6 = new SN2_1P5_2_3();
    // this.section5_2.A5_2_6.A5_2_3_3_1 = [];
    this.validateSec5_3.A5_3_3_1 = [];
    this.validateSec5_4.A5_4_3_1 = [];
    this.validateSec5_4.A5_4_4_1 = [];
    this.validateSec5_5.A5_5_3_1 = [];
    this.validateSec5_6.A5_6_1 = [];
  }
  next(i) {
    if (i == 1) {
      if (this.waterData.groundWater) {
        this.section = 2;
        this.section5.current_page = "2";
      } else if (this.waterData.riverWater) {
        this.section = 3;
        this.section5.current_page = "3";
      } else {
        this.section = 4;
        this.section5.current_page = "4";
      }
    } else if (i == 2) {
      if (this.waterData.riverWater) {
        this.section = 3;
        this.section5.current_page = "3";
      } else {
        this.section = 4;
        this.section5.current_page = "4";
      }
    } else if (i == 3) {
      this.section = 4;
      this.section5.current_page = "4";
    } else if (i == 4) {
      if (this.waterData.chonWater) {
        this.section = 5;
        this.section5.current_page = "5";
      } else if (this.waterData.rainWater) {
        this.section = 6;
        this.section5.current_page = "6";
      } else if (this.waterData.buyWater) {
        this.section = 7;
        this.section5.current_page = "7";
      } else {
        this.save();
      }
    } else if (i == 5) {
      if (this.waterData.rainWater) {
        this.section = 6;
        this.section5.current_page = "6";
      } else if (this.waterData.buyWater) {
        this.section = 7;
        this.section5.current_page = "7";
      } else {
        this.save();
      }
    }
    else if (i == 6) {
      if (this.waterData.buyWater) {
        this.section = 7;
      } else {
        this.save();
      }
    }else {
      this.save();
    }
  }
  range(min, max, step) {
    step = step || 1;
    let input = [];
    for (let i = min; i <= max; i += step) {
      input.push(i);
    }
    return input;
  }
  showImg(type,model) {
    let profileModal = this.modalCtrl.create('pumpWaterImgPage', { type: type ,model:model});
    profileModal.present();
  }
  validate5_1() {
    this.validateSec5_1.A5_1_1_1_1 = typeof (this.section5_1.A5_1_1_1_1) === "boolean" || this.section5_1.A5_1_1_2_1 ||this.section5_1.A5_1_1_3_1;
    this.validateSec5_1.A5_1_1_1_2_1 = !this.section5_1.A5_1_1_1_1 || (this.section5_1.A5_1_1_1_1 && typeof (this.section5_1.A5_1_1_1_2_1) === "boolean") || this.section5_1.A5_1_1_3_1;
    this.validateSec5_1.A5_1_1_1_2_2 = !this.section5_1.A5_1_1_1_1 || (this.section5_1.A5_1_1_1_1 && (!this.section5_1.A5_1_1_1_2_1 || (this.section5_1.A5_1_1_1_2_2_1 || this.section5_1.A5_1_1_1_2_2_2 || this.section5_1.A5_1_1_1_2_2_3 || this.section5_1.A5_1_1_1_2_2_4 || this.section5_1.A5_1_1_1_2_2_5 || this.section5_1.A5_1_1_1_2_2_6))) || this.section5_1.A5_1_1_3_1;
    this.validateSec5_1.A5_1_1_1_3_1 = !this.section5_1.A5_1_1_1_1 || (this.section5_1.A5_1_1_1_1 && ((this.section5_1.A5_1_1_1_3_1 && (this.section5_1.A5_1_1_1_3_1 > 0 && this.section5_1.A5_1_1_1_3_1 < 1000)) || this.section5_1.A5_1_1_1_3_2_1))  || this.section5_1.A5_1_1_3_1;
    this.validateSec5_1.A5_1_1_1_3_2 = !this.section5_1.A5_1_1_1_1 || (this.section5_1.A5_1_1_1_1 && !this.section5_1.A5_1_1_1_3_2_1 || (this.section5_1.A5_1_1_1_3_2_1 && this.section5_1.A5_1_1_1_3_2 && (this.section5_1.A5_1_1_1_3_2 > 0 && this.section5_1.A5_1_1_1_3_2 < 10000000)))  || this.section5_1.A5_1_1_3_1;

    this.validateSec5_1.A5_1_1_2_1 = typeof (this.section5_1.A5_1_1_2_1) === "boolean" || this.section5_1.A5_1_1_1_1|| this.section5_1.A5_1_1_3_1;
    this.validateSec5_1.A5_1_1_2_2_1 = !this.section5_1.A5_1_1_2_1 || (this.section5_1.A5_1_1_2_1 && typeof (this.section5_1.A5_1_1_2_2_1) === "boolean")  || this.section5_1.A5_1_1_3_1;
    this.validateSec5_1.A5_1_1_2_2_2 = !this.section5_1.A5_1_1_2_1 || (this.section5_1.A5_1_1_2_1 && (!this.section5_1.A5_1_1_2_2_1 || (this.section5_1.A5_1_1_2_2_2_1 || this.section5_1.A5_1_1_2_2_2_2 || this.section5_1.A5_1_1_2_2_2_3 || this.section5_1.A5_1_1_2_2_2_4 || this.section5_1.A5_1_1_2_2_2_5 || this.section5_1.A5_1_1_2_2_2_6)))  || this.section5_1.A5_1_1_3_1;
    this.validateSec5_1.A5_1_1_2_3_1 = !this.section5_1.A5_1_1_2_1 || (this.section5_1.A5_1_1_2_1 && ((this.section5_1.A5_1_1_2_3_1 && (this.section5_1.A5_1_1_2_3_1 > 0 && this.section5_1.A5_1_1_2_3_1 < 1000)) || this.section5_1.A5_1_1_2_3_2_1))  || this.section5_1.A5_1_1_3_1;
    this.validateSec5_1.A5_1_1_2_3_2 = !this.section5_1.A5_1_1_2_1 || (this.section5_1.A5_1_1_2_1 && !this.section5_1.A5_1_1_2_3_2_1 || (this.section5_1.A5_1_1_2_3_2 && (this.section5_1.A5_1_1_2_3_2 > 0 && this.section5_1.A5_1_1_2_3_2 < 10000000)))  || this.section5_1.A5_1_1_3_1;

    this.validateSec5_1.A5_1_1_3_1 = typeof (this.section5_1.A5_1_1_3_1) === "boolean";
    this.validateSec5_1.A5_1_1_3_2_1 = !this.section5_1.A5_1_1_3_1 || (this.section5_1.A5_1_1_3_1 && typeof (this.section5_1.A5_1_1_3_2_1) === "boolean");
    this.validateSec5_1.A5_1_1_3_2_2 = !this.section5_1.A5_1_1_3_1 || (this.section5_1.A5_1_1_3_1 && (!this.section5_1.A5_1_1_3_2_1 || (this.section5_1.A5_1_1_3_2_2_1 || this.section5_1.A5_1_1_3_2_2_2 || this.section5_1.A5_1_1_3_2_2_3 || this.section5_1.A5_1_1_3_2_2_4 || this.section5_1.A5_1_1_3_2_2_5 || this.section5_1.A5_1_1_3_2_2_6)));
    this.validateSec5_1.A5_1_1_3_3_1 = !this.section5_1.A5_1_1_3_1 || (this.section5_1.A5_1_1_3_1 && ((this.section5_1.A5_1_1_3_3_1 && (this.section5_1.A5_1_1_3_3_1 > 0 && this.section5_1.A5_1_1_3_3_1 < 1000)) || this.section5_1.A5_1_1_3_3_2_1));
    this.validateSec5_1.A5_1_1_3_3_2 = !this.section5_1.A5_1_1_3_1 || (this.section5_1.A5_1_1_3_1 && !this.section5_1.A5_1_1_3_3_2_1 || (this.section5_1.A5_1_1_3_3_2 && (this.section5_1.A5_1_1_3_3_2 > 0 && this.section5_1.A5_1_1_3_3_2 < 10000000)));

    this.section5_1.A5_1_2_1_1 = this.section5_1.A5_1_2_1_1 ? this.section5_1.A5_1_2_1_1 : 0;
    this.section5_1.A5_1_2_1_2 = this.section5_1.A5_1_2_1_2 ? this.section5_1.A5_1_2_1_2 : 0;
    this.section5_1.A5_1_2_2_1 = this.section5_1.A5_1_2_2_1 ? this.section5_1.A5_1_2_2_1 : 0;
    this.section5_1.A5_1_2_2_2 = this.section5_1.A5_1_2_2_2 ? this.section5_1.A5_1_2_2_2 : 0;
    this.section5_1.A5_1_2_3_1 = this.section5_1.A5_1_2_3_1 ? this.section5_1.A5_1_2_3_1 : 0;
    this.section5_1.A5_1_2_3_2 = this.section5_1.A5_1_2_3_2 ? this.section5_1.A5_1_2_3_2 : 0;
    this.section5_1.A5_1_2_4_1 = this.section5_1.A5_1_2_4_1 ? this.section5_1.A5_1_2_4_1 : 0;
    this.section5_1.A5_1_2_4_2 = this.section5_1.A5_1_2_4_2 ? this.section5_1.A5_1_2_4_2 : 0;
    this.section5_1.A5_1_2_5_1 = this.section5_1.A5_1_2_5_1 ? this.section5_1.A5_1_2_5_1 : 0;
    this.section5_1.A5_1_2_5_2 = this.section5_1.A5_1_2_5_2 ? this.section5_1.A5_1_2_5_2 : 0;

    this.section5_1.A5_1_2_1_1 = parseInt(this.section5_1.A5_1_2_1_1.toString());
    this.section5_1.A5_1_2_2_1 = parseInt(this.section5_1.A5_1_2_2_1.toString());
    this.section5_1.A5_1_2_3_1 = parseInt(this.section5_1.A5_1_2_3_1.toString());
    this.section5_1.A5_1_2_4_1 = parseInt(this.section5_1.A5_1_2_4_1.toString());
    this.section5_1.A5_1_2_5_1 = parseInt(this.section5_1.A5_1_2_5_1.toString());
    this.section5_1.A5_1_2_1_2 = parseInt(this.section5_1.A5_1_2_1_2.toString());
    this.section5_1.A5_1_2_2_2 = parseInt(this.section5_1.A5_1_2_2_2.toString());
    this.section5_1.A5_1_2_3_2 = parseInt(this.section5_1.A5_1_2_3_2.toString());
    this.section5_1.A5_1_2_4_2 = parseInt(this.section5_1.A5_1_2_4_2.toString());
    this.section5_1.A5_1_2_5_2 = parseInt(this.section5_1.A5_1_2_5_2.toString());

    this.section5_1.A5_1_2_6_1 = parseInt(this.section5_1.A5_1_2_1_1.toString()) + parseInt(this.section5_1.A5_1_2_2_1.toString()) + parseInt(this.section5_1.A5_1_2_3_1.toString()) + parseInt(this.section5_1.A5_1_2_4_1.toString()) + parseInt(this.section5_1.A5_1_2_5_1.toString());
    this.section5_1.A5_1_2_6_2 = parseInt(this.section5_1.A5_1_2_1_2.toString()) + parseInt(this.section5_1.A5_1_2_2_2.toString()) + parseInt(this.section5_1.A5_1_2_3_2.toString()) + parseInt(this.section5_1.A5_1_2_4_2.toString()) + parseInt(this.section5_1.A5_1_2_5_2.toString());

    this.validateSec5_1.A5_1_2_6_1 = this.section5_1.A5_1_1_3_1 || ((this.section5_1.A5_1_1_1_1 || this.section5_1.A5_1_1_2_1) && this.section5_1.A5_1_2_6_1 == 100)
    this.validateSec5_1.A5_1_2_6_2 = !this.section5_1.A5_1_1_3_1 || this.section5_1.A5_1_2_6_2 === 100;
    //console.logog('this.validateSec5_1.A5_1_2_6_2 : ' + this.validateSec5_1.A5_1_2_6_2)
    //console.logog(this.validateSec5_1)
    //console.logog(this.section5_1.A5_1_1_1_1)
    //console.logog(this.section5_1.A5_1_1_2_1)
    //console.logog(this.section5_1.A5_1_1_3_1)
    //console.logog(this.section5_1.A5_1_2_6_1)
    this.validateSec5_1.A5_1_3 = typeof (this.section5_1.A5_1_3) === "boolean";
    this.validateSec5_1.A5_1_4 = !this.section5_1.A5_1_3 || (this.section5_1.A5_1_4 > 0 && this.section5_1.A5_1_4 < 13);
  }

  validate5_2() {
    this.validateSec5_2.A5_2_1 = typeof (this.section5_2.A5_2_1) === 'boolean';
    this.validateSec5_2.A5_2_2 = !this.section5_2.A5_2_1 || (this.section5_2.A5_2_2 > 0 && this.section5_2.A5_2_2 < 100);
    this.validateSec5_2.A5_2_2_1 = !this.section5_2.A5_2_1 || (this.section5_2.A5_2_2_1 <= this.section5_2.A5_2_2 && this.section5_2.A5_2_2_1 > 0 && this.section5_2.A5_2_2_1 < 100);
    this.validateSec5_2.A5_2_4 = typeof (this.section5_2.A5_2_4) === 'boolean';
    this.validateSec5_2.A5_2_5 = !this.section5_2.A5_2_4 || (this.section5_2.A5_2_5 > 0 && this.section5_2.A5_2_5 < 100);
    this.validateSec5_2.A5_2_5_1 = !this.section5_2.A5_2_4 || (this.section5_2.A5_2_5_1 <= this.section5_2.A5_2_5 && this.section5_2.A5_2_5_1 > 0 && this.section5_2.A5_2_5_1 < 100);
  }

  validate5_2_3(index) {
    this.validateSec5_2_3[index].A5_2_3_1 = !this.section5_2.A5_2_1 || this.section5_2_3[index].A5_2_3_1_2 || this.section5_2_3[index].A5_2_3_1 > 0 && this.section5_2_3[index].A5_2_3_1 < 10000000;
    this.validateSec5_2_3[index].A5_2_3_2 = !this.section5_2.A5_2_1 || !this.section5_2_3[index].A5_2_3_1_2 || typeof (this.section5_2_3[index].A5_2_3_2) === "boolean";
    this.validateSec5_2_3[index].A5_2_3_3 = !this.section5_2.A5_2_1 || !this.section5_2_3[index].A5_2_3_1_2 || !this.section5_2_3[index].A5_2_3_2 || (this.section5_2_3[index].A5_2_3_3 > 0 && this.section5_2_3[index].A5_2_3_3 < 10);

    this.section5_2_3[index].A5_2_3_5_1 = !this.section5_2.A5_2_1 || this.section5_2_3[index].A5_2_3_5_1 ? this.section5_2_3[index].A5_2_3_5_1 : 0;
    this.section5_2_3[index].A5_2_3_5_2 = !this.section5_2.A5_2_1 || this.section5_2_3[index].A5_2_3_5_2 ? this.section5_2_3[index].A5_2_3_5_2 : 0;
    this.section5_2_3[index].A5_2_3_5_3 = !this.section5_2.A5_2_1 || this.section5_2_3[index].A5_2_3_5_3 ? this.section5_2_3[index].A5_2_3_5_3 : 0;
    this.section5_2_3[index].A5_2_3_5_4 = !this.section5_2.A5_2_1 || this.section5_2_3[index].A5_2_3_5_4 ? this.section5_2_3[index].A5_2_3_5_4 : 0;
    this.section5_2_3[index].A5_2_3_5_5 = !this.section5_2.A5_2_1 || this.section5_2_3[index].A5_2_3_5_5 ? this.section5_2_3[index].A5_2_3_5_5 : 0;
    this.section5_2_3[index].A5_2_3_5_6 = !this.section5_2.A5_2_1 || this.section5_2_3[index].A5_2_3_5_6 ? this.section5_2_3[index].A5_2_3_5_6 : 0;

    this.section5_2_3[index].A5_2_3_5_1 = parseInt(this.section5_2_3[index].A5_2_3_5_1.toString());
    this.section5_2_3[index].A5_2_3_5_2 = parseInt(this.section5_2_3[index].A5_2_3_5_2.toString());
    this.section5_2_3[index].A5_2_3_5_3 = parseInt(this.section5_2_3[index].A5_2_3_5_3.toString());
    this.section5_2_3[index].A5_2_3_5_4 = parseInt(this.section5_2_3[index].A5_2_3_5_4.toString());
    this.section5_2_3[index].A5_2_3_5_5 = parseInt(this.section5_2_3[index].A5_2_3_5_5.toString());
    this.section5_2_3[index].A5_2_3_5_6 = parseInt(this.section5_2_3[index].A5_2_3_5_6.toString());

    this.section5_2_3[index].A5_2_3_5_7 = parseInt(this.section5_2_3[index].A5_2_3_5_1.toString()) + parseInt(this.section5_2_3[index].A5_2_3_5_2.toString()) + parseInt(this.section5_2_3[index].A5_2_3_5_3.toString()) + parseInt(this.section5_2_3[index].A5_2_3_5_4.toString()) + parseInt(this.section5_2_3[index].A5_2_3_5_5.toString()) + parseInt(this.section5_2_3[index].A5_2_3_5_6.toString());

    this.validateSec5_2_3[index].A5_2_3_5 = !this.section5_2.A5_2_1 || this.section5_2_3[index].A5_2_3_5_7 === 100;
    this.validateSec5_2_3[index].A5_2_3_6_1 = !this.section5_2.A5_2_1 || typeof (this.section5_2_3[index].A5_2_3_6_1) === 'boolean';
    this.validateSec5_2_3[index].A5_2_3_6_2 = !this.section5_2.A5_2_1 || !this.section5_2_3[index].A5_2_3_6_1 || (this.section5_2_3[index].A5_2_3_6_2_1 || this.section5_2_3[index].A5_2_3_6_2_2 || this.section5_2_3[index].A5_2_3_6_2_3 || this.section5_2_3[index].A5_2_3_6_2_4 || this.section5_2_3[index].A5_2_3_6_2_5 || this.section5_2_3[index].A5_2_3_6_2_6)
  }

  validate5_2_3_Pump(i, j) {
    this.validateSec5_2_3[i].A5_2_3_3_1[j].A5_2_3_4_1_1 = !this.section5_2.A5_2_1 || !this.section5_2_3[i].A5_2_3_2 || !this.section5_2_3[i].A5_2_3_1_2 || typeof (this.section5_2_3[i].A5_2_3_3_1[j].A5_2_3_4_1_1) === 'boolean';
    this.validateSec5_2_3[i].A5_2_3_3_1[j].A5_2_3_4_1 = !this.section5_2.A5_2_1 || !this.section5_2_3[i].A5_2_3_2 || !this.section5_2_3[i].A5_2_3_1_2 || this.section5_2_3[i].A5_2_3_3_1[j].A5_2_3_4_1_1 || this.section5_2_3[i].A5_2_3_3_1[j].A5_2_3_4_1 > 0 && this.section5_2_3[i].A5_2_3_3_1[j].A5_2_3_4_1 < 100;
    this.validateSec5_2_3[i].A5_2_3_3_1[j].A5_2_3_4_2 = !this.section5_2.A5_2_1 || !this.section5_2_3[i].A5_2_3_2 || !this.section5_2_3[i].A5_2_3_1_2 || this.section5_2_3[i].A5_2_3_3_1[j].A5_2_3_4_1_1 || (this.section5_2_3[i].A5_2_3_3_1[j].A5_2_3_4_2 > 0 && this.section5_2_3[i].A5_2_3_3_1[j].A5_2_3_4_2 < 1000);
    this.validateSec5_2_3[i].A5_2_3_3_1[j].A5_2_3_4_3 = !this.section5_2.A5_2_1 || !this.section5_2_3[i].A5_2_3_2 || !this.section5_2_3[i].A5_2_3_1_2 || this.section5_2_3[i].A5_2_3_3_1[j].A5_2_3_4_1_1 || this.section5_2_3[i].A5_2_3_3_1[j].A5_2_3_4_3_1 || (this.section5_2_3[i].A5_2_3_3_1[j].A5_2_3_4_3 > 0 && this.section5_2_3[i].A5_2_3_3_1[j].A5_2_3_4_3 < 1000);
    this.validateSec5_2_3[i].A5_2_3_3_1[j].A5_2_3_4_4 = !this.section5_2.A5_2_1 || !this.section5_2_3[i].A5_2_3_2 || !this.section5_2_3[i].A5_2_3_1_2 || this.section5_2_3[i].A5_2_3_3_1[j].A5_2_3_4_1_1 || !this.section5_2_3[i].A5_2_3_3_1[j].A5_2_3_4_3_1 || (this.section5_2_3[i].A5_2_3_3_1[j].A5_2_3_4_4 > 0 && this.section5_2_3[i].A5_2_3_3_1[j].A5_2_3_4_4 < 6);
    this.validateSec5_2_3[i].A5_2_3_3_1[j].A5_2_3_4_5 = !this.section5_2.A5_2_1 || !this.section5_2_3[i].A5_2_3_2 || !this.section5_2_3[i].A5_2_3_1_2 || this.section5_2_3[i].A5_2_3_3_1[j].A5_2_3_4_1_1 || !this.section5_2_3[i].A5_2_3_3_1[j].A5_2_3_4_3_1 || (typeof (this.section5_2_3[i].A5_2_3_3_1[j].A5_2_3_4_5) === 'string');
    this.validateSec5_2_3[i].A5_2_3_3_1[j].A5_2_3_4_6 = !this.section5_2.A5_2_1 || !this.section5_2_3[i].A5_2_3_2 || !this.section5_2_3[i].A5_2_3_1_2 || this.section5_2_3[i].A5_2_3_3_1[j].A5_2_3_4_1_1 || !this.section5_2_3[i].A5_2_3_3_1[j].A5_2_3_4_3_1 || (typeof (this.section5_2_3[i].A5_2_3_3_1[j].A5_2_3_4_6) === 'string');
    this.validateSec5_2_3[i].A5_2_3_3_1[j].A5_2_3_4_7 = !this.section5_2.A5_2_1 || !this.section5_2_3[i].A5_2_3_2 || !this.section5_2_3[i].A5_2_3_1_2 || this.section5_2_3[i].A5_2_3_3_1[j].A5_2_3_4_1_1 || !this.section5_2_3[i].A5_2_3_3_1[j].A5_2_3_4_3_1 || (typeof (this.section5_2_3[i].A5_2_3_3_1[j].A5_2_3_4_7) === 'string');
    this.validateSec5_2_3[i].A5_2_3_3_1[j].A5_2_3_4_8 = !this.section5_2.A5_2_1 || !this.section5_2_3[i].A5_2_3_2 || !this.section5_2_3[i].A5_2_3_1_2 || this.section5_2_3[i].A5_2_3_3_1[j].A5_2_3_4_1_1 || !this.section5_2_3[i].A5_2_3_3_1[j].A5_2_3_4_3_1 || (typeof (this.section5_2_3[i].A5_2_3_3_1[j].A5_2_3_4_8) === 'string');

  }

  validatePublic5_2_3(index) {
    //console.logog(this.validateSec5_2_3Public[index]);
    this.validateSec5_2_3Public[index].A5_2_3_1 = !this.section5_2.A5_2_4 || this.section5_2_3public[index].A5_2_3_1_2 || this.section5_2_3public[index].A5_2_3_1 > 0 && this.section5_2_3public[index].A5_2_3_1 < 10000000;
    this.validateSec5_2_3Public[index].A5_2_3_2 = !this.section5_2.A5_2_4 || !this.section5_2_3public[index].A5_2_3_1_2 || typeof (this.section5_2_3public[index].A5_2_3_2) === "boolean";
    this.validateSec5_2_3Public[index].A5_2_3_3 = !this.section5_2.A5_2_4 || !this.section5_2_3public[index].A5_2_3_1_2 || !this.section5_2_3public[index].A5_2_3_2 || (this.section5_2_3public[index].A5_2_3_3 > 0 && this.section5_2_3public[index].A5_2_3_3 < 10);

    this.section5_2_3public[index].A5_2_3_5_1 = !this.section5_2.A5_2_4 || this.section5_2_3public[index].A5_2_3_5_1 ? this.section5_2_3public[index].A5_2_3_5_1 : 0;
    this.section5_2_3public[index].A5_2_3_5_2 = !this.section5_2.A5_2_4 || this.section5_2_3public[index].A5_2_3_5_2 ? this.section5_2_3public[index].A5_2_3_5_2 : 0;
    this.section5_2_3public[index].A5_2_3_5_3 = !this.section5_2.A5_2_4 || this.section5_2_3public[index].A5_2_3_5_3 ? this.section5_2_3public[index].A5_2_3_5_3 : 0;
    this.section5_2_3public[index].A5_2_3_5_4 = !this.section5_2.A5_2_4 || this.section5_2_3public[index].A5_2_3_5_4 ? this.section5_2_3public[index].A5_2_3_5_4 : 0;
    this.section5_2_3public[index].A5_2_3_5_5 = !this.section5_2.A5_2_4 || this.section5_2_3public[index].A5_2_3_5_5 ? this.section5_2_3public[index].A5_2_3_5_5 : 0;
    this.section5_2_3public[index].A5_2_3_5_6 = !this.section5_2.A5_2_4 || this.section5_2_3public[index].A5_2_3_5_6 ? this.section5_2_3public[index].A5_2_3_5_6 : 0;

    this.section5_2_3public[index].A5_2_3_5_1 = parseInt(this.section5_2_3public[index].A5_2_3_5_1.toString());
    this.section5_2_3public[index].A5_2_3_5_2 = parseInt(this.section5_2_3public[index].A5_2_3_5_2.toString());
    this.section5_2_3public[index].A5_2_3_5_3 = parseInt(this.section5_2_3public[index].A5_2_3_5_3.toString());
    this.section5_2_3public[index].A5_2_3_5_4 = parseInt(this.section5_2_3public[index].A5_2_3_5_4.toString());
    this.section5_2_3public[index].A5_2_3_5_5 = parseInt(this.section5_2_3public[index].A5_2_3_5_5.toString());
    this.section5_2_3public[index].A5_2_3_5_6 = parseInt(this.section5_2_3public[index].A5_2_3_5_6.toString());

    this.section5_2_3public[index].A5_2_3_5_7 = parseInt(this.section5_2_3public[index].A5_2_3_5_1.toString()) + parseInt(this.section5_2_3public[index].A5_2_3_5_2.toString()) + parseInt(this.section5_2_3public[index].A5_2_3_5_3.toString()) + parseInt(this.section5_2_3public[index].A5_2_3_5_4.toString()) + parseInt(this.section5_2_3public[index].A5_2_3_5_5.toString()) + parseInt(this.section5_2_3public[index].A5_2_3_5_6.toString());

    this.validateSec5_2_3Public[index].A5_2_3_5 = !this.section5_2.A5_2_4 || this.section5_2_3public[index].A5_2_3_5_7 === 100;
    this.validateSec5_2_3Public[index].A5_2_3_6_1 = !this.section5_2.A5_2_4 || typeof (this.section5_2_3public[index].A5_2_3_6_1) === 'boolean';
    this.validateSec5_2_3Public[index].A5_2_3_6_2 = !this.section5_2.A5_2_4 || !this.section5_2_3public[index].A5_2_3_6_1 || (this.section5_2_3public[index].A5_2_3_6_2_1 || this.section5_2_3public[index].A5_2_3_6_2_2 || this.section5_2_3public[index].A5_2_3_6_2_3 || this.section5_2_3public[index].A5_2_3_6_2_4 || this.section5_2_3public[index].A5_2_3_6_2_5 || this.section5_2_3public[index].A5_2_3_6_2_6)
  }

  validatePublicPump5_2_3(i, j) {
    this.validateSec5_2_3Public[i].A5_2_3_3_1[j].A5_2_3_4_1_1 = !this.section5_2.A5_2_4 || !this.section5_2_3public[i].A5_2_3_1_2 || !this.section5_2_3public[i].A5_2_3_2 || typeof (this.section5_2_3public[i].A5_2_3_3_1[j].A5_2_3_4_1_1) === 'boolean';
    this.validateSec5_2_3Public[i].A5_2_3_3_1[j].A5_2_3_4_1 = !this.section5_2.A5_2_4 || !this.section5_2_3public[i].A5_2_3_1_2 || !this.section5_2_3public[i].A5_2_3_2 || this.section5_2_3public[i].A5_2_3_3_1[j].A5_2_3_4_1_1 || this.section5_2_3public[i].A5_2_3_3_1[j].A5_2_3_4_1 > 0 && this.section5_2_3public[i].A5_2_3_3_1[j].A5_2_3_4_1 < 100;
    this.validateSec5_2_3Public[i].A5_2_3_3_1[j].A5_2_3_4_2 = !this.section5_2.A5_2_4 || !this.section5_2_3public[i].A5_2_3_1_2 || !this.section5_2_3public[i].A5_2_3_2 || this.section5_2_3public[i].A5_2_3_3_1[j].A5_2_3_4_1_1 || (this.section5_2_3public[i].A5_2_3_3_1[j].A5_2_3_4_2 > 0 && this.section5_2_3public[i].A5_2_3_3_1[j].A5_2_3_4_2 < 1000);
    this.validateSec5_2_3Public[i].A5_2_3_3_1[j].A5_2_3_4_3 = !this.section5_2.A5_2_4 || !this.section5_2_3public[i].A5_2_3_1_2 || !this.section5_2_3public[i].A5_2_3_2 || this.section5_2_3public[i].A5_2_3_3_1[j].A5_2_3_4_1_1 || this.section5_2_3public[i].A5_2_3_3_1[j].A5_2_3_4_3_1 || (this.section5_2_3public[i].A5_2_3_3_1[j].A5_2_3_4_3 > 0 && this.section5_2_3public[i].A5_2_3_3_1[j].A5_2_3_4_3 < 1000);
    this.validateSec5_2_3Public[i].A5_2_3_3_1[j].A5_2_3_4_4 = !this.section5_2.A5_2_4 || !this.section5_2_3public[i].A5_2_3_1_2 || !this.section5_2_3public[i].A5_2_3_2 || this.section5_2_3public[i].A5_2_3_3_1[j].A5_2_3_4_1_1 || !this.section5_2_3public[i].A5_2_3_3_1[j].A5_2_3_4_3_1 || (this.section5_2_3public[i].A5_2_3_3_1[j].A5_2_3_4_4 > 0 && this.section5_2_3public[i].A5_2_3_3_1[j].A5_2_3_4_4 < 6);
    this.validateSec5_2_3Public[i].A5_2_3_3_1[j].A5_2_3_4_5 = !this.section5_2.A5_2_4 || !this.section5_2_3public[i].A5_2_3_1_2 || !this.section5_2_3public[i].A5_2_3_2 || this.section5_2_3public[i].A5_2_3_3_1[j].A5_2_3_4_1_1 || !this.section5_2_3public[i].A5_2_3_3_1[j].A5_2_3_4_3_1 || (typeof (this.section5_2_3public[i].A5_2_3_3_1[j].A5_2_3_4_5) === 'string');
    this.validateSec5_2_3Public[i].A5_2_3_3_1[j].A5_2_3_4_6 = !this.section5_2.A5_2_4 || !this.section5_2_3public[i].A5_2_3_1_2 || !this.section5_2_3public[i].A5_2_3_2 || this.section5_2_3public[i].A5_2_3_3_1[j].A5_2_3_4_1_1 || !this.section5_2_3public[i].A5_2_3_3_1[j].A5_2_3_4_3_1 || (typeof (this.section5_2_3public[i].A5_2_3_3_1[j].A5_2_3_4_6) === 'string');
    this.validateSec5_2_3Public[i].A5_2_3_3_1[j].A5_2_3_4_7 = !this.section5_2.A5_2_4 || !this.section5_2_3public[i].A5_2_3_1_2 || !this.section5_2_3public[i].A5_2_3_2 || this.section5_2_3public[i].A5_2_3_3_1[j].A5_2_3_4_1_1 || !this.section5_2_3public[i].A5_2_3_3_1[j].A5_2_3_4_3_1 || (typeof (this.section5_2_3public[i].A5_2_3_3_1[j].A5_2_3_4_7) === 'string');
    this.validateSec5_2_3Public[i].A5_2_3_3_1[j].A5_2_3_4_8 = !this.section5_2.A5_2_4 || !this.section5_2_3public[i].A5_2_3_1_2 || !this.section5_2_3public[i].A5_2_3_2 || this.section5_2_3public[i].A5_2_3_3_1[j].A5_2_3_4_1_1 || !this.section5_2_3public[i].A5_2_3_3_1[j].A5_2_3_4_3_1 || (typeof (this.section5_2_3public[i].A5_2_3_3_1[j].A5_2_3_4_8) === 'string');
  }

  validate5_3() {
    this.validateSec5_3.A5_3_1 = this.section5_3.A5_3_1_1 || this.section5_3.A5_3_1 > 0 && this.section5_3.A5_3_1 < 100000000;
    this.validateSec5_3.A5_3_2 = !this.section5_3.A5_3_1_1 || typeof (this.section5_3.A5_3_2) === "boolean";
    this.validateSec5_3.A5_3_3 = !this.section5_3.A5_3_1_1 || !this.section5_3.A5_3_2 || (this.section5_3.A5_3_3 > 0 && this.section5_3.A5_3_3 < 10);

    this.section5_3.A5_3_4_1 = this.section5_3.A5_3_4_1 ? this.section5_3.A5_3_4_1 : 0;
    this.section5_3.A5_3_4_2 = this.section5_3.A5_3_4_2 ? this.section5_3.A5_3_4_2 : 0;
    this.section5_3.A5_3_4_3 = this.section5_3.A5_3_4_3 ? this.section5_3.A5_3_4_3 : 0;
    this.section5_3.A5_3_4_4 = this.section5_3.A5_3_4_4 ? this.section5_3.A5_3_4_4 : 0;
    this.section5_3.A5_3_4_5 = this.section5_3.A5_3_4_5 ? this.section5_3.A5_3_4_5 : 0;
    this.section5_3.A5_3_4_6 = this.section5_3.A5_3_4_6 ? this.section5_3.A5_3_4_6 : 0;
    this.section5_3.A5_3_4_1 = parseInt(this.section5_3.A5_3_4_1.toString());
    this.section5_3.A5_3_4_2 = parseInt(this.section5_3.A5_3_4_2.toString());
    this.section5_3.A5_3_4_3 = parseInt(this.section5_3.A5_3_4_3.toString());
    this.section5_3.A5_3_4_4 = parseInt(this.section5_3.A5_3_4_4.toString());
    this.section5_3.A5_3_4_5 = parseInt(this.section5_3.A5_3_4_5.toString());
    this.section5_3.A5_3_4_6 = parseInt(this.section5_3.A5_3_4_6.toString());
    this.section5_3.A5_3_4_7 = parseInt(this.section5_3.A5_3_4_1.toString()) + parseInt(this.section5_3.A5_3_4_2.toString()) + parseInt(this.section5_3.A5_3_4_3.toString()) + parseInt(this.section5_3.A5_3_4_4.toString()) + parseInt(this.section5_3.A5_3_4_5.toString()) + parseInt(this.section5_3.A5_3_4_6.toString())

    this.validateSec5_3.A5_3_4 = this.section5_3.A5_3_4_7 === 100;
    this.validateSec5_3.A5_3_5_1 = typeof (this.section5_3.A5_3_5_1) === 'boolean';
    this.validateSec5_3.A5_3_5_2 = !this.section5_3.A5_3_5_1 || (this.section5_3.A5_3_5_2_1 || this.section5_3.A5_3_5_2_2 || this.section5_3.A5_3_5_2_3 || this.section5_3.A5_3_5_2_4)
  }

  validatePump5_3(i) {
    this.validateSec5_3.A5_3_3_1[i].A5_2_3_4_1_1 = !this.section5_3.A5_3_1_1 || !this.section5_3.A5_3_2 || typeof (this.section5_3.A5_3_3_1[i].A5_2_3_4_1_1) === 'boolean';
    this.validateSec5_3.A5_3_3_1[i].A5_2_3_4_1 = !this.section5_3.A5_3_1_1 || !this.section5_3.A5_3_2 || this.section5_3.A5_3_3_1[i].A5_2_3_4_1_1 || this.section5_3.A5_3_3_1[i].A5_2_3_4_1 > 0 && this.section5_3.A5_3_3_1[i].A5_2_3_4_1 < 100;
    this.validateSec5_3.A5_3_3_1[i].A5_2_3_4_2 = !this.section5_3.A5_3_1_1 || !this.section5_3.A5_3_2 || this.section5_3.A5_3_3_1[i].A5_2_3_4_1_1 || (this.section5_3.A5_3_3_1[i].A5_2_3_4_2 > 0 && this.section5_3.A5_3_3_1[i].A5_2_3_4_2 < 1000);
    this.validateSec5_3.A5_3_3_1[i].A5_2_3_4_3 = !this.section5_3.A5_3_1_1 || !this.section5_3.A5_3_2 || this.section5_3.A5_3_3_1[i].A5_2_3_4_1_1 || this.section5_3.A5_3_3_1[i].A5_2_3_4_3_1 || (this.section5_3.A5_3_3_1[i].A5_2_3_4_3 > 0 && this.section5_3.A5_3_3_1[i].A5_2_3_4_3 < 1000);
    this.validateSec5_3.A5_3_3_1[i].A5_2_3_4_4 = !this.section5_3.A5_3_1_1 || !this.section5_3.A5_3_2 || this.section5_3.A5_3_3_1[i].A5_2_3_4_1_1 || !this.section5_3.A5_3_3_1[i].A5_2_3_4_3_1 || (this.section5_3.A5_3_3_1[i].A5_2_3_4_4 > 0 && this.section5_3.A5_3_3_1[i].A5_2_3_4_4 < 5);
    this.validateSec5_3.A5_3_3_1[i].A5_2_3_4_5 = !this.section5_3.A5_3_1_1 || !this.section5_3.A5_3_2 || this.section5_3.A5_3_3_1[i].A5_2_3_4_1_1 || !this.section5_3.A5_3_3_1[i].A5_2_3_4_3_1 || (typeof (this.section5_3.A5_3_3_1[i].A5_2_3_4_5) === 'string');
    this.validateSec5_3.A5_3_3_1[i].A5_2_3_4_6 = !this.section5_3.A5_3_1_1 || !this.section5_3.A5_3_2 || this.section5_3.A5_3_3_1[i].A5_2_3_4_1_1 || !this.section5_3.A5_3_3_1[i].A5_2_3_4_3_1 || (typeof (this.section5_3.A5_3_3_1[i].A5_2_3_4_6) === 'string');
    this.validateSec5_3.A5_3_3_1[i].A5_2_3_4_7 = !this.section5_3.A5_3_1_1 || !this.section5_3.A5_3_2 || this.section5_3.A5_3_3_1[i].A5_2_3_4_1_1 || !this.section5_3.A5_3_3_1[i].A5_2_3_4_3_1 || (typeof (this.section5_3.A5_3_3_1[i].A5_2_3_4_7) === 'string');
    this.validateSec5_3.A5_3_3_1[i].A5_2_3_4_8 = !this.section5_3.A5_3_1_1 || !this.section5_3.A5_3_2 || this.section5_3.A5_3_3_1[i].A5_2_3_4_1_1 || !this.section5_3.A5_3_3_1[i].A5_2_3_4_3_1 || (typeof (this.section5_3.A5_3_3_1[i].A5_2_3_4_8) === 'string');
  }

  validate5_4() {
    this.validateSec5_4.A5_4_1 = typeof (this.section5_4.A5_4_1) === 'boolean';
    this.validateSec5_4.A5_4_2 = !this.section5_4.A5_4_1 || (this.section5_4.A5_4_2 > 0 && this.section5_4.A5_4_2 < 100);
    this.validateSec5_4.A5_4_3 = !this.section5_4.A5_4_1 || typeof (this.section5_4.A5_4_3) === 'boolean';
    this.validateSec5_4.A5_4_4 = !this.section5_4.A5_4_1 || (this.section5_4.A5_4_4 <= this.section5_4.A5_4_2 && this.section5_4.A5_4_4 > 0 && this.section5_4.A5_4_4 < 21);
  }

  validate5_4_3(index) {
    this.validateSec5_4.A5_4_3_1[index].A5_4_3_0 = !this.section5_4.A5_4_1 || this.section5_4.A5_4_3_1[index].A5_4_3_0 > 0 && this.section5_4.A5_4_3_1[index].A5_4_3_0 < 5;
    this.validateSec5_4.A5_4_3_1[index].A5_4_3_1 = true
    this.validateSec5_4.A5_4_3_1[index].A5_4_3_2_1 = true
    this.validateSec5_4.A5_4_3_1[index].A5_4_3_2_2 = true
    this.validateSec5_4.A5_4_3_1[index].A5_4_3_2_3 = true
    this.validateSec5_4.A5_4_3_1[index].A5_4_3_2_4 = true
    this.validateSec5_4.A5_4_3_1[index].A5_4_3_3_1_1 = true
    this.validateSec5_4.A5_4_3_1[index].A5_4_3_3_1_2 = true
    this.validateSec5_4.A5_4_3_1[index].A5_4_3_3_1_3 = true
    this.validateSec5_4.A5_4_3_1[index].A5_4_3_3_2_1 = true
    this.validateSec5_4.A5_4_3_1[index].A5_4_3_3_2_2 = true
    if(this.section5_4.A5_4_3_1[index].A5_4_3_0 == 1){
      this.validateSec5_4.A5_4_3_1[index].A5_4_3_1 = this.inRange(this.section5_4.A5_4_3_1[index].A5_4_3_1, 0, 99, -1)
    }else if(this.section5_4.A5_4_3_1[index].A5_4_3_0 == 2){
      this.validateSec5_4.A5_4_3_1[index].A5_4_3_2_1 = this.inRange(this.section5_4.A5_4_3_1[index].A5_4_3_2_1, 0, 999, -1)
      this.validateSec5_4.A5_4_3_1[index].A5_4_3_2_2 = this.inRange(this.section5_4.A5_4_3_1[index].A5_4_3_2_2, 0, 3, -1)
      this.validateSec5_4.A5_4_3_1[index].A5_4_3_2_3 = this.inRange(this.section5_4.A5_4_3_1[index].A5_4_3_2_3, 0, 99, -1)
      this.validateSec5_4.A5_4_3_1[index].A5_4_3_2_4 = this.inRange(this.section5_4.A5_4_3_1[index].A5_4_3_2_4, 0, 99, -1)
      if(this.section5_4.A5_4_3_1[index].A5_4_3_2_1 == 0 &&
        this.section5_4.A5_4_3_1[index].A5_4_3_2_2 == 0 &&
        this.section5_4.A5_4_3_1[index].A5_4_3_2_3 == 0 &&
        this.section5_4.A5_4_3_1[index].A5_4_3_2_4 == 0){
          this.validateSec5_4.A5_4_3_1[index].A5_4_3_2_1 = false
          this.validateSec5_4.A5_4_3_1[index].A5_4_3_2_2 = false
          this.validateSec5_4.A5_4_3_1[index].A5_4_3_2_3 = false
          this.validateSec5_4.A5_4_3_1[index].A5_4_3_2_4 = false
        }
    }else if(this.section5_4.A5_4_3_1[index].A5_4_3_0 == 3){
      this.validateSec5_4.A5_4_3_1[index].A5_4_3_3_1_1 = this.inRange(this.section5_4.A5_4_3_1[index].A5_4_3_3_1_1, 0, 99, -1)
      this.validateSec5_4.A5_4_3_1[index].A5_4_3_3_1_2 = this.inRange(this.section5_4.A5_4_3_1[index].A5_4_3_3_1_2, 0, 99, -1)
      this.validateSec5_4.A5_4_3_1[index].A5_4_3_3_1_3 = this.inRange(this.section5_4.A5_4_3_1[index].A5_4_3_3_1_3, 0, 99, -1)
      if(this.section5_4.A5_4_3_1[index].A5_4_3_3_1_1 == 0 &&
        this.section5_4.A5_4_3_1[index].A5_4_3_3_1_2 == 0 &&
        this.section5_4.A5_4_3_1[index].A5_4_3_3_1_3 == 0){
          this.validateSec5_4.A5_4_3_1[index].A5_4_3_3_1_1 = false
          this.validateSec5_4.A5_4_3_1[index].A5_4_3_3_1_2 = false
          this.validateSec5_4.A5_4_3_1[index].A5_4_3_3_1_3 = false
        }
    }else if(this.section5_4.A5_4_3_1[index].A5_4_3_0 == 4){
      this.validateSec5_4.A5_4_3_1[index].A5_4_3_3_2_1 = this.inRange(this.section5_4.A5_4_3_1[index].A5_4_3_3_2_1, 0, 99, -1)
      this.validateSec5_4.A5_4_3_1[index].A5_4_3_3_2_2 = this.inRange(this.section5_4.A5_4_3_1[index].A5_4_3_3_2_2, 0, 99, -1)
      if(this.section5_4.A5_4_3_1[index].A5_4_3_3_2_1 == 0 &&
        this.section5_4.A5_4_3_1[index].A5_4_3_3_2_2 == 0){
          this.validateSec5_4.A5_4_3_1[index].A5_4_3_3_2_1 = false
          this.validateSec5_4.A5_4_3_1[index].A5_4_3_3_2_2 = false
        }
    }
    /*
   
    */
  }


  validate5_4_4(index) {
    this.validateSec5_4.A5_4_4_1[index].A5_4_4_1 = !this.section5_4.A5_4_1 || this.section5_4.A5_4_4_1[index].A5_4_4_1_2 || this.section5_4.A5_4_4_1[index].A5_4_4_1 > 0 && this.section5_4.A5_4_4_1[index].A5_4_4_1 < 10000000;
    this.validateSec5_4.A5_4_4_1[index].A5_4_4_2 = !this.section5_4.A5_4_1 || typeof (this.section5_4.A5_4_4_1[index].A5_4_4_2) === 'boolean';
    this.validateSec5_4.A5_4_4_1[index].A5_4_4_3 = !this.section5_4.A5_4_1 || !this.section5_4.A5_4_4_1[index].A5_4_4_2 || (this.section5_4.A5_4_4_1[index].A5_4_4_3 > 0 && this.section5_4.A5_4_4_1[index].A5_4_4_3 < 10);
    this.section5_4.A5_4_4_1[index].A5_4_4_5_1 = this.section5_4.A5_4_4_1[index].A5_4_4_5_1 ? this.section5_4.A5_4_4_1[index].A5_4_4_5_1 : 0;
    this.section5_4.A5_4_4_1[index].A5_4_4_5_2 = this.section5_4.A5_4_4_1[index].A5_4_4_5_2 ? this.section5_4.A5_4_4_1[index].A5_4_4_5_2 : 0;
    this.section5_4.A5_4_4_1[index].A5_4_4_5_3 = this.section5_4.A5_4_4_1[index].A5_4_4_5_3 ? this.section5_4.A5_4_4_1[index].A5_4_4_5_3 : 0;
    this.section5_4.A5_4_4_1[index].A5_4_4_5_4 = this.section5_4.A5_4_4_1[index].A5_4_4_5_4 ? this.section5_4.A5_4_4_1[index].A5_4_4_5_4 : 0;
    this.section5_4.A5_4_4_1[index].A5_4_4_5_5 = this.section5_4.A5_4_4_1[index].A5_4_4_5_5 ? this.section5_4.A5_4_4_1[index].A5_4_4_5_5 : 0;
    this.section5_4.A5_4_4_1[index].A5_4_4_5_6 = this.section5_4.A5_4_4_1[index].A5_4_4_5_6 ? this.section5_4.A5_4_4_1[index].A5_4_4_5_6 : 0;
    this.section5_4.A5_4_4_1[index].A5_4_4_5_1 = parseInt(this.section5_4.A5_4_4_1[index].A5_4_4_5_1.toString());
    this.section5_4.A5_4_4_1[index].A5_4_4_5_2 = parseInt(this.section5_4.A5_4_4_1[index].A5_4_4_5_2.toString());
    this.section5_4.A5_4_4_1[index].A5_4_4_5_3 = parseInt(this.section5_4.A5_4_4_1[index].A5_4_4_5_3.toString());
    this.section5_4.A5_4_4_1[index].A5_4_4_5_4 = parseInt(this.section5_4.A5_4_4_1[index].A5_4_4_5_4.toString());
    this.section5_4.A5_4_4_1[index].A5_4_4_5_5 = parseInt(this.section5_4.A5_4_4_1[index].A5_4_4_5_5.toString());
    this.section5_4.A5_4_4_1[index].A5_4_4_5_6 = parseInt(this.section5_4.A5_4_4_1[index].A5_4_4_5_6.toString());
    this.section5_4.A5_4_4_1[index].A5_4_4_5_7 = parseInt(this.section5_4.A5_4_4_1[index].A5_4_4_5_1.toString()) + parseInt(this.section5_4.A5_4_4_1[index].A5_4_4_5_2.toString()) + parseInt(this.section5_4.A5_4_4_1[index].A5_4_4_5_3.toString()) + parseInt(this.section5_4.A5_4_4_1[index].A5_4_4_5_4.toString()) + parseInt(this.section5_4.A5_4_4_1[index].A5_4_4_5_5.toString()) + parseInt(this.section5_4.A5_4_4_1[index].A5_4_4_5_6.toString());
    this.validateSec5_4.A5_4_4_1[index].A5_4_4_5 = !this.section5_4.A5_4_1 || this.section5_4.A5_4_4_1[index].A5_4_4_5_7 === 100;
    this.validateSec5_4.A5_4_4_1[index].A5_4_4_6_1 = !this.section5_4.A5_4_1 || typeof (this.section5_4.A5_4_4_1[index].A5_4_4_6_1) === 'boolean';
    this.validateSec5_4.A5_4_4_1[index].A5_4_4_6_2 = !this.section5_4.A5_4_1 || !this.section5_4.A5_4_4_1[index].A5_4_4_6_1 || (this.section5_4.A5_4_4_1[index].A5_4_4_6_2_1 || this.section5_4.A5_4_4_1[index].A5_4_4_6_2_2 || this.section5_4.A5_4_4_1[index].A5_4_4_6_2_3 || this.section5_4.A5_4_4_1[index].A5_4_4_6_2_4);
  }

  validatePump5_4_4(i, j) {
    this.validateSec5_4.A5_4_4_1[i].A5_4_4_4[j].A5_2_3_4_1_1 = !this.section5_4.A5_4_1 || !this.section5_4.A5_4_4_1[i].A5_4_4_1_2 || !this.section5_4.A5_4_4_1[i].A5_4_4_2 || typeof (this.section5_4.A5_4_4_1[i].A5_4_4_4[j].A5_2_3_4_1_1) === 'boolean';
    this.validateSec5_4.A5_4_4_1[i].A5_4_4_4[j].A5_2_3_4_1 = !this.section5_4.A5_4_1 || !this.section5_4.A5_4_4_1[i].A5_4_4_1_2 || !this.section5_4.A5_4_4_1[i].A5_4_4_2 || this.section5_4.A5_4_4_1[i].A5_4_4_4[j].A5_2_3_4_1_1 || this.section5_4.A5_4_4_1[i].A5_4_4_4[j].A5_2_3_4_1 > 0 && this.section5_4.A5_4_4_1[i].A5_4_4_4[j].A5_2_3_4_1 < 100;
    this.validateSec5_4.A5_4_4_1[i].A5_4_4_4[j].A5_2_3_4_2 = !this.section5_4.A5_4_1 || !this.section5_4.A5_4_4_1[i].A5_4_4_1_2 || !this.section5_4.A5_4_4_1[i].A5_4_4_2 || this.section5_4.A5_4_4_1[i].A5_4_4_4[j].A5_2_3_4_1_1 || (this.section5_4.A5_4_4_1[i].A5_4_4_4[j].A5_2_3_4_2 > 0 && this.section5_4.A5_4_4_1[i].A5_4_4_4[j].A5_2_3_4_2 < 1000);
    this.validateSec5_4.A5_4_4_1[i].A5_4_4_4[j].A5_2_3_4_3 = !this.section5_4.A5_4_1 || !this.section5_4.A5_4_4_1[i].A5_4_4_1_2 || !this.section5_4.A5_4_4_1[i].A5_4_4_2 || this.section5_4.A5_4_4_1[i].A5_4_4_4[j].A5_2_3_4_1_1 || this.section5_4.A5_4_4_1[i].A5_4_4_4[j].A5_2_3_4_3_1 || (this.section5_4.A5_4_4_1[i].A5_4_4_4[j].A5_2_3_4_3 > 0 && this.section5_4.A5_4_4_1[i].A5_4_4_4[j].A5_2_3_4_3 < 1000);
    this.validateSec5_4.A5_4_4_1[i].A5_4_4_4[j].A5_2_3_4_4 = !this.section5_4.A5_4_1 || !this.section5_4.A5_4_4_1[i].A5_4_4_1_2 || !this.section5_4.A5_4_4_1[i].A5_4_4_2 || this.section5_4.A5_4_4_1[i].A5_4_4_4[j].A5_2_3_4_1_1 || !this.section5_4.A5_4_4_1[i].A5_4_4_4[j].A5_2_3_4_3_1 || (this.section5_4.A5_4_4_1[i].A5_4_4_4[j].A5_2_3_4_4 > 0 && this.section5_4.A5_4_4_1[i].A5_4_4_4[j].A5_2_3_4_4 < 5);
    this.validateSec5_4.A5_4_4_1[i].A5_4_4_4[j].A5_2_3_4_5 = !this.section5_4.A5_4_1 || !this.section5_4.A5_4_4_1[i].A5_4_4_1_2 || !this.section5_4.A5_4_4_1[i].A5_4_4_2 || this.section5_4.A5_4_4_1[i].A5_4_4_4[j].A5_2_3_4_1_1 || !this.section5_4.A5_4_4_1[i].A5_4_4_4[j].A5_2_3_4_3_1 || (typeof (this.section5_4.A5_4_4_1[i].A5_4_4_4[j].A5_2_3_4_5) === 'string');
    this.validateSec5_4.A5_4_4_1[i].A5_4_4_4[j].A5_2_3_4_6 = !this.section5_4.A5_4_1 || !this.section5_4.A5_4_4_1[i].A5_4_4_1_2 || !this.section5_4.A5_4_4_1[i].A5_4_4_2 || this.section5_4.A5_4_4_1[i].A5_4_4_4[j].A5_2_3_4_1_1 || !this.section5_4.A5_4_4_1[i].A5_4_4_4[j].A5_2_3_4_3_1 || (typeof (this.section5_4.A5_4_4_1[i].A5_4_4_4[j].A5_2_3_4_6) === 'string');
    this.validateSec5_4.A5_4_4_1[i].A5_4_4_4[j].A5_2_3_4_7 = !this.section5_4.A5_4_1 || !this.section5_4.A5_4_4_1[i].A5_4_4_1_2 || !this.section5_4.A5_4_4_1[i].A5_4_4_2 || this.section5_4.A5_4_4_1[i].A5_4_4_4[j].A5_2_3_4_1_1 || !this.section5_4.A5_4_4_1[i].A5_4_4_4[j].A5_2_3_4_3_1 || (typeof (this.section5_4.A5_4_4_1[i].A5_4_4_4[j].A5_2_3_4_7) === 'string');
    this.validateSec5_4.A5_4_4_1[i].A5_4_4_4[j].A5_2_3_4_8 = !this.section5_4.A5_4_1 || !this.section5_4.A5_4_4_1[i].A5_4_4_1_2 || !this.section5_4.A5_4_4_1[i].A5_4_4_2 || this.section5_4.A5_4_4_1[i].A5_4_4_4[j].A5_2_3_4_1_1 || !this.section5_4.A5_4_4_1[i].A5_4_4_4[j].A5_2_3_4_3_1 || (typeof (this.section5_4.A5_4_4_1[i].A5_4_4_4[j].A5_2_3_4_8) === 'string');
  }

  validate5_5() {
    this.validateSec5_5.A5_5_1 = this.section5_5.A5_5_1_1 || (this.section5_5.A5_5_1 > 0 && this.section5_5.A5_5_1 < 10000000);
    this.validateSec5_5.A5_5_2 = !this.section5_5.A5_5_1_1 || !this.section5_5.A5_5_2 || typeof (this.section5_5.A5_5_2) === "boolean";
    this.validateSec5_5.A5_5_3 = !this.section5_5.A5_5_1_1 || !this.section5_5.A5_5_2 || (this.section5_5.A5_5_3 > 0 && this.section5_5.A5_5_3 < 10);

    this.section5_5.A5_5_4_1 = this.section5_5.A5_5_4_1 ? this.section5_5.A5_5_4_1 : 0;
    this.section5_5.A5_5_4_2 = this.section5_5.A5_5_4_2 ? this.section5_5.A5_5_4_2 : 0;
    this.section5_5.A5_5_4_3 = this.section5_5.A5_5_4_3 ? this.section5_5.A5_5_4_3 : 0;
    this.section5_5.A5_5_4_4 = this.section5_5.A5_5_4_4 ? this.section5_5.A5_5_4_4 : 0;
    this.section5_5.A5_5_4_5 = this.section5_5.A5_5_4_5 ? this.section5_5.A5_5_4_5 : 0;
    this.section5_5.A5_5_4_6 = this.section5_5.A5_5_4_6 ? this.section5_5.A5_5_4_6 : 0;
    this.section5_5.A5_5_4_1 = parseInt(this.section5_5.A5_5_4_1.toString());
    this.section5_5.A5_5_4_2 = parseInt(this.section5_5.A5_5_4_2.toString());
    this.section5_5.A5_5_4_3 = parseInt(this.section5_5.A5_5_4_3.toString());
    this.section5_5.A5_5_4_4 = parseInt(this.section5_5.A5_5_4_4.toString());
    this.section5_5.A5_5_4_5 = parseInt(this.section5_5.A5_5_4_5.toString());
    this.section5_5.A5_5_4_6 = parseInt(this.section5_5.A5_5_4_6.toString());
    this.section5_5.A5_5_4_7 = parseInt(this.section5_5.A5_5_4_1.toString()) + parseInt(this.section5_5.A5_5_4_2.toString()) + parseInt(this.section5_5.A5_5_4_3.toString()) + parseInt(this.section5_5.A5_5_4_4.toString()) + parseInt(this.section5_5.A5_5_4_5.toString()) + parseInt(this.section5_5.A5_5_4_6.toString())

    this.validateSec5_5.A5_5_4 = this.section5_5.A5_5_4_7 === 100;
    this.validateSec5_5.A5_5_5_1 = typeof (this.section5_5.A5_5_5_1) === 'boolean';
    this.validateSec5_5.A5_5_5_2 = !this.section5_5.A5_5_5_1 || (this.section5_5.A5_5_5_2_1 || this.section5_5.A5_5_5_2_2 || this.section5_5.A5_5_5_2_3 || this.section5_5.A5_5_5_2_4)

  }

  validatePump5_5(i) {
    this.validateSec5_5.A5_5_3_1[i].A5_2_3_4_1_1 = !this.section5_5.A5_5_1_1 || !this.section5_5.A5_5_2 || typeof (this.section5_5.A5_5_3_1[i].A5_2_3_4_1_1) === 'boolean';
    this.validateSec5_5.A5_5_3_1[i].A5_2_3_4_1 = !this.section5_5.A5_5_1_1 || !this.section5_5.A5_5_2 || this.section5_5.A5_5_3_1[i].A5_2_3_4_1_1 || this.section5_5.A5_5_3_1[i].A5_2_3_4_1 > 0 && this.section5_5.A5_5_3_1[i].A5_2_3_4_1 < 100;
    this.validateSec5_5.A5_5_3_1[i].A5_2_3_4_2 = !this.section5_5.A5_5_1_1 || !this.section5_5.A5_5_2 || this.section5_5.A5_5_3_1[i].A5_2_3_4_1_1 || (this.section5_5.A5_5_3_1[i].A5_2_3_4_2 > 0 && this.section5_5.A5_5_3_1[i].A5_2_3_4_2 < 1000);
    this.validateSec5_5.A5_5_3_1[i].A5_2_3_4_3 = !this.section5_5.A5_5_1_1 || !this.section5_5.A5_5_2 || this.section5_5.A5_5_3_1[i].A5_2_3_4_1_1 || this.section5_5.A5_5_3_1[i].A5_2_3_4_3_1 || (this.section5_5.A5_5_3_1[i].A5_2_3_4_3 > 0 && this.section5_5.A5_5_3_1[i].A5_2_3_4_3 < 1000);
    this.validateSec5_5.A5_5_3_1[i].A5_2_3_4_4 = !this.section5_5.A5_5_1_1 || !this.section5_5.A5_5_2 || this.section5_5.A5_5_3_1[i].A5_2_3_4_1_1 || !this.section5_5.A5_5_3_1[i].A5_2_3_4_3_1 || (this.section5_5.A5_5_3_1[i].A5_2_3_4_4 > 0 && this.section5_5.A5_5_3_1[i].A5_2_3_4_4 < 5);
    this.validateSec5_5.A5_5_3_1[i].A5_2_3_4_5 = !this.section5_5.A5_5_1_1 || !this.section5_5.A5_5_2 || this.section5_5.A5_5_3_1[i].A5_2_3_4_1_1 || !this.section5_5.A5_5_3_1[i].A5_2_3_4_3_1 || (typeof (this.section5_5.A5_5_3_1[i].A5_2_3_4_5) === 'string');
    this.validateSec5_5.A5_5_3_1[i].A5_2_3_4_6 = !this.section5_5.A5_5_1_1 || !this.section5_5.A5_5_2 || this.section5_5.A5_5_3_1[i].A5_2_3_4_1_1 || !this.section5_5.A5_5_3_1[i].A5_2_3_4_3_1 || (typeof (this.section5_5.A5_5_3_1[i].A5_2_3_4_6) === 'string');
    this.validateSec5_5.A5_5_3_1[i].A5_2_3_4_7 = !this.section5_5.A5_5_1_1 || !this.section5_5.A5_5_2 || this.section5_5.A5_5_3_1[i].A5_2_3_4_1_1 || !this.section5_5.A5_5_3_1[i].A5_2_3_4_3_1 || (typeof (this.section5_5.A5_5_3_1[i].A5_2_3_4_7) === 'string');
    this.validateSec5_5.A5_5_3_1[i].A5_2_3_4_8 = !this.section5_5.A5_5_1_1 || !this.section5_5.A5_5_2 || this.section5_5.A5_5_3_1[i].A5_2_3_4_1_1 || !this.section5_5.A5_5_3_1[i].A5_2_3_4_3_1 || (typeof (this.section5_5.A5_5_3_1[i].A5_2_3_4_8) === 'string');
  }

  validate5_6() {
    this.section5_6.A5_6_2_1 = this.section5_6.A5_6_2_1 ? this.section5_6.A5_6_2_1 : 0;
    this.section5_6.A5_6_2_2 = this.section5_6.A5_6_2_2 ? this.section5_6.A5_6_2_2 : 0;
    this.section5_6.A5_6_2_3 = this.section5_6.A5_6_2_3 ? this.section5_6.A5_6_2_3 : 0;
    this.section5_6.A5_6_2_4 = this.section5_6.A5_6_2_4 ? this.section5_6.A5_6_2_4 : 0;
    this.section5_6.A5_6_2_5 = this.section5_6.A5_6_2_5 ? this.section5_6.A5_6_2_5 : 0;
    this.section5_6.A5_6_2_1 = parseInt(this.section5_6.A5_6_2_1.toString());
    this.section5_6.A5_6_2_2 = parseInt(this.section5_6.A5_6_2_2.toString());
    this.section5_6.A5_6_2_3 = parseInt(this.section5_6.A5_6_2_3.toString());
    this.section5_6.A5_6_2_4 = parseInt(this.section5_6.A5_6_2_4.toString());
    this.section5_6.A5_6_2_5 = parseInt(this.section5_6.A5_6_2_5.toString());
    this.section5_6.A5_6_2_6 = parseInt(this.section5_6.A5_6_2_1.toString()) + parseInt(this.section5_6.A5_6_2_2.toString()) + parseInt(this.section5_6.A5_6_2_3.toString()) + parseInt(this.section5_6.A5_6_2_4.toString()) + parseInt(this.section5_6.A5_6_2_5.toString())
    this.validateSec5_6.A5_6_2 = this.section5_6.A5_6_2_6 === 100;
  }

  validate5_6_1(index) {
    this.validateSec5_6.A5_6_1[index].A5_6_1_1 = typeof (this.section5_6.A5_6_1[index].A5_6_1_1) === 'string';
    this.validateSec5_6.A5_6_1[index].A5_6_1_2 = typeof (this.section5_6.A5_6_1[index].A5_6_1_2) === 'number';
    this.validateSec5_6.A5_6_1[index].A5_6_1_3 = this.section5_6.A5_6_1[index].A5_6_1_3 > 0 && this.section5_6.A5_6_1[index].A5_6_1_3 < 100;
  }

  validate5_7() {
    this.validateSec5_7.A5_7_1 = Boolean(this.section5_7.A5_7_1_1_1 || this.section5_7.A5_7_1_1_2 || this.section5_7.A5_7_1_1_3 || this.section5_7.A5_7_1_1_4 || this.section5_7.A5_7_1_1_5 || this.section5_7.A5_7_1_2_1 || this.section5_7.A5_7_1_2_2 || this.section5_7.A5_7_1_2_3 || this.section5_7.A5_7_1_2_4 || this.section5_7.A5_7_1_2_5 || this.section5_7.A5_7_1_3_1 || this.section5_7.A5_7_1_3_2 || this.section5_7.A5_7_1_3_3 || this.section5_7.A5_7_1_3_4 || this.section5_7.A5_7_1_3_5 || this.section5_7.A5_7_1_4_1 || this.section5_7.A5_7_1_4_2 || this.section5_7.A5_7_1_4_3 || this.section5_7.A5_7_1_4_4 || this.section5_7.A5_7_1_4_5 || this.section5_7.A5_7_1_5_1 || this.section5_7.A5_7_1_5_2 || this.section5_7.A5_7_1_5_3 || this.section5_7.A5_7_1_5_4 || this.section5_7.A5_7_1_5_5 || this.section5_7.A5_7_1_5);
    this.validateSec5_7.A5_7_1_1_1 = (!this.section5_7.A5_7_1_1_1 && !this.section5_7.A5_7_1_1_2 && !this.section5_7.A5_7_1_1_3 && !this.section5_7.A5_7_1_1_4 && !this.section5_7.A5_7_1_1_5) || (this.section5_7.A5_7_1_1_1 >= 0 && this.section5_7.A5_7_1_1_1 < 10000);
    this.validateSec5_7.A5_7_1_1_2 = (!this.section5_7.A5_7_1_1_1 && !this.section5_7.A5_7_1_1_2 && !this.section5_7.A5_7_1_1_3 && !this.section5_7.A5_7_1_1_4 && !this.section5_7.A5_7_1_1_5) || (this.section5_7.A5_7_1_1_2 >= 0 && this.section5_7.A5_7_1_1_2 < 1000);
    this.validateSec5_7.A5_7_1_1_3 = (!this.section5_7.A5_7_1_1_1 && !this.section5_7.A5_7_1_1_2 && !this.section5_7.A5_7_1_1_3 && !this.section5_7.A5_7_1_1_4 && !this.section5_7.A5_7_1_1_5) || (this.section5_7.A5_7_1_1_3 >= 0 && this.section5_7.A5_7_1_1_3 < 1000);
    this.validateSec5_7.A5_7_1_1_4 = (!this.section5_7.A5_7_1_1_1 && !this.section5_7.A5_7_1_1_2 && !this.section5_7.A5_7_1_1_3 && !this.section5_7.A5_7_1_1_4 && !this.section5_7.A5_7_1_1_5) || (this.section5_7.A5_7_1_1_4 >= 0 && this.section5_7.A5_7_1_1_4 < 1000);
    this.validateSec5_7.A5_7_1_1_5 = (!this.section5_7.A5_7_1_1_1 && !this.section5_7.A5_7_1_1_2 && !this.section5_7.A5_7_1_1_3 && !this.section5_7.A5_7_1_1_4 && !this.section5_7.A5_7_1_1_5) || (this.section5_7.A5_7_1_1_5 >= 0 && this.section5_7.A5_7_1_1_5 < 1000);

    this.validateSec5_7.A5_7_1_2_1 = (!this.section5_7.A5_7_1_2_1 && !this.section5_7.A5_7_1_2_2 && !this.section5_7.A5_7_1_2_3 && !this.section5_7.A5_7_1_2_4 && !this.section5_7.A5_7_1_2_5) || (this.section5_7.A5_7_1_2_1 >= 0 && this.section5_7.A5_7_1_2_1 < 10000);
    this.validateSec5_7.A5_7_1_2_2 = (!this.section5_7.A5_7_1_2_1 && !this.section5_7.A5_7_1_2_2 && !this.section5_7.A5_7_1_2_3 && !this.section5_7.A5_7_1_2_4 && !this.section5_7.A5_7_1_2_5) || (this.section5_7.A5_7_1_2_2 >= 0 && this.section5_7.A5_7_1_2_2 < 1000);
    this.validateSec5_7.A5_7_1_2_3 = (!this.section5_7.A5_7_1_2_1 && !this.section5_7.A5_7_1_2_2 && !this.section5_7.A5_7_1_2_3 && !this.section5_7.A5_7_1_2_4 && !this.section5_7.A5_7_1_2_5) || (this.section5_7.A5_7_1_2_3 >= 0 && this.section5_7.A5_7_1_2_3 < 1000);
    this.validateSec5_7.A5_7_1_2_4 = (!this.section5_7.A5_7_1_2_1 && !this.section5_7.A5_7_1_2_2 && !this.section5_7.A5_7_1_2_3 && !this.section5_7.A5_7_1_2_4 && !this.section5_7.A5_7_1_2_5) || (this.section5_7.A5_7_1_2_4 >= 0 && this.section5_7.A5_7_1_2_4 < 1000);
    this.validateSec5_7.A5_7_1_2_5 = (!this.section5_7.A5_7_1_2_1 && !this.section5_7.A5_7_1_2_2 && !this.section5_7.A5_7_1_2_3 && !this.section5_7.A5_7_1_2_4 && !this.section5_7.A5_7_1_2_5) || (this.section5_7.A5_7_1_2_5 >= 0 && this.section5_7.A5_7_1_2_5 < 1000);

    this.validateSec5_7.A5_7_1_3_1 = (!this.section5_7.A5_7_1_3_1 && !this.section5_7.A5_7_1_3_2 && !this.section5_7.A5_7_1_3_3 && !this.section5_7.A5_7_1_3_4 && !this.section5_7.A5_7_1_3_5) || (this.section5_7.A5_7_1_3_1 >= 0 && this.section5_7.A5_7_1_3_1 < 10000);
    this.validateSec5_7.A5_7_1_3_2 = (!this.section5_7.A5_7_1_3_1 && !this.section5_7.A5_7_1_3_2 && !this.section5_7.A5_7_1_3_3 && !this.section5_7.A5_7_1_3_4 && !this.section5_7.A5_7_1_3_5) || (this.section5_7.A5_7_1_3_2 >= 0 && this.section5_7.A5_7_1_3_2 < 1000);
    this.validateSec5_7.A5_7_1_3_3 = (!this.section5_7.A5_7_1_3_1 && !this.section5_7.A5_7_1_3_2 && !this.section5_7.A5_7_1_3_3 && !this.section5_7.A5_7_1_3_4 && !this.section5_7.A5_7_1_3_5) || (this.section5_7.A5_7_1_3_3 >= 0 && this.section5_7.A5_7_1_3_3 < 1000);
    this.validateSec5_7.A5_7_1_3_4 = (!this.section5_7.A5_7_1_3_1 && !this.section5_7.A5_7_1_3_2 && !this.section5_7.A5_7_1_3_3 && !this.section5_7.A5_7_1_3_4 && !this.section5_7.A5_7_1_3_5) || (this.section5_7.A5_7_1_3_4 >= 0 && this.section5_7.A5_7_1_3_4 < 1000);
    this.validateSec5_7.A5_7_1_3_5 = (!this.section5_7.A5_7_1_3_1 && !this.section5_7.A5_7_1_3_2 && !this.section5_7.A5_7_1_3_3 && !this.section5_7.A5_7_1_3_4 && !this.section5_7.A5_7_1_3_5) || (this.section5_7.A5_7_1_3_5 >= 0 && this.section5_7.A5_7_1_3_5 < 1000);

    this.validateSec5_7.A5_7_1_4_1 = (!this.section5_7.A5_7_1_4_1 && !this.section5_7.A5_7_1_4_2 && !this.section5_7.A5_7_1_4_3 && !this.section5_7.A5_7_1_4_4 && !this.section5_7.A5_7_1_4_5) || (this.section5_7.A5_7_1_4_1 >= 0 && this.section5_7.A5_7_1_4_1 < 10000);
    this.validateSec5_7.A5_7_1_4_2 = (!this.section5_7.A5_7_1_4_1 && !this.section5_7.A5_7_1_4_2 && !this.section5_7.A5_7_1_4_3 && !this.section5_7.A5_7_1_4_4 && !this.section5_7.A5_7_1_4_5) || (this.section5_7.A5_7_1_4_2 >= 0 && this.section5_7.A5_7_1_4_2 < 1000);
    this.validateSec5_7.A5_7_1_4_3 = (!this.section5_7.A5_7_1_4_1 && !this.section5_7.A5_7_1_4_2 && !this.section5_7.A5_7_1_4_3 && !this.section5_7.A5_7_1_4_4 && !this.section5_7.A5_7_1_4_5) || (this.section5_7.A5_7_1_4_3 >= 0 && this.section5_7.A5_7_1_4_3 < 1000);
    this.validateSec5_7.A5_7_1_4_4 = (!this.section5_7.A5_7_1_4_1 && !this.section5_7.A5_7_1_4_2 && !this.section5_7.A5_7_1_4_3 && !this.section5_7.A5_7_1_4_4 && !this.section5_7.A5_7_1_4_5) || (this.section5_7.A5_7_1_4_4 >= 0 && this.section5_7.A5_7_1_4_4 < 1000);
    this.validateSec5_7.A5_7_1_4_5 = (!this.section5_7.A5_7_1_4_1 && !this.section5_7.A5_7_1_4_2 && !this.section5_7.A5_7_1_4_3 && !this.section5_7.A5_7_1_4_4 && !this.section5_7.A5_7_1_4_5) || (this.section5_7.A5_7_1_4_5 >= 0 && this.section5_7.A5_7_1_4_5 < 1000);
    this.validateSec5_7.A5_7_1_5 = (!this.section5_7.A5_7_1_5_1 && !this.section5_7.A5_7_1_5_2 && !this.section5_7.A5_7_1_5_3 && !this.section5_7.A5_7_1_5_4 && !this.section5_7.A5_7_1_5_5) || Boolean(this.section5_7.A5_7_1_5);
    this.validateSec5_7.A5_7_1_5_1 = (!this.section5_7.A5_7_1_5_1 && !this.section5_7.A5_7_1_5_2 && !this.section5_7.A5_7_1_5_3 && !this.section5_7.A5_7_1_5_4 && !this.section5_7.A5_7_1_5_5) || (this.section5_7.A5_7_1_5_1 >= 0 && this.section5_7.A5_7_1_5_1 < 10000);
    this.validateSec5_7.A5_7_1_5_2 = (!this.section5_7.A5_7_1_5_1 && !this.section5_7.A5_7_1_5_2 && !this.section5_7.A5_7_1_5_3 && !this.section5_7.A5_7_1_5_4 && !this.section5_7.A5_7_1_5_5) || (this.section5_7.A5_7_1_5_2 >= 0 && this.section5_7.A5_7_1_5_2 < 1000);
    this.validateSec5_7.A5_7_1_5_3 = (!this.section5_7.A5_7_1_5_1 && !this.section5_7.A5_7_1_5_2 && !this.section5_7.A5_7_1_5_3 && !this.section5_7.A5_7_1_5_4 && !this.section5_7.A5_7_1_5_5) || (this.section5_7.A5_7_1_5_3 >= 0 && this.section5_7.A5_7_1_5_3 < 1000);
    this.validateSec5_7.A5_7_1_5_4 = (!this.section5_7.A5_7_1_5_1 && !this.section5_7.A5_7_1_5_2 && !this.section5_7.A5_7_1_5_3 && !this.section5_7.A5_7_1_5_4 && !this.section5_7.A5_7_1_5_5) || (this.section5_7.A5_7_1_5_4 >= 0 && this.section5_7.A5_7_1_5_4 < 1000);
    this.validateSec5_7.A5_7_1_5_5 = (!this.section5_7.A5_7_1_5_1 && !this.section5_7.A5_7_1_5_2 && !this.section5_7.A5_7_1_5_3 && !this.section5_7.A5_7_1_5_4 && !this.section5_7.A5_7_1_5_5) || (this.section5_7.A5_7_1_5_5 >= 0 && this.section5_7.A5_7_1_5_5 < 1000);
  }

  A5_2_2_1Change() {
    if (this.section5_2.A5_2_2_1 <= 2) {

      if (this.section5_2_3.length < this.section5_2.A5_2_2_1) {
        for (let i = this.section5_2_3.length; i < this.section5_2.A5_2_2_1; i += 1) {
          let newSN = new SN2_1P5_2_3();
          newSN.A5_2_3_3_1 = [];
          this.section5_2_3.push(newSN);
        }
      } else {
        for (let i = this.section5_2_3.length; i > this.section5_2.A5_2_2_1; i -= 1) {
          this.section5_2_3.pop();
        }
      }
      if (this.validateSec5_2_3.length < this.section5_2.A5_2_2_1) {
        for (let i = this.validateSec5_2_3.length; i < this.section5_2.A5_2_2_1; i += 1) {
          let newValidate = new Validate21P523();
          newValidate.A5_2_3_3_1 = [];
          this.validateSec5_2_3.push(newValidate);
        }
      }
      else {
        for (let i = this.validateSec5_2_3.length; i > this.section5_2.A5_2_2_1; i -= 1) {
          this.validateSec5_2_3.pop();
        }
      }
      if (this.private_badan_pump_list.length < this.section5_2.A5_2_2_1) {
        for (let i = this.private_badan_pump_list.length; i < this.section5_2.A5_2_2_1; i += 1) {
          this.private_badan_pump_list.push([]);
          this.private_badan_horsepower_list.push([]);
          this.private_badan_pipe_con_list.push([]);
          this.private_badan_pipe_sen_list.push([]);
        }
      }
      else {
        for (let i = this.section5_2_3.length; i > this.section5_2.A5_2_2_1; i -= 1) {
          this.private_badan_pump_list.pop();
          this.private_badan_horsepower_list.pop();
          this.private_badan_pipe_con_list.pop();
          this.private_badan_pipe_sen_list.pop();
        }
      }
      this.section5_2.A5_2_3 = this.section5_2_3;
    } else {

    }
  }

  A5_2_3_3Change(index) {
    if (this.section5_2_3[index].A5_2_3_3 <= 2) {
      if (this.section5_2_3[index].A5_2_3_3_1.length < this.section5_2_3[index].A5_2_3_3) {
        for (let i = this.section5_2_3[index].A5_2_3_3_1.length; i < this.section5_2_3[index].A5_2_3_3; i += 1) {
          this.section5_2_3[index].A5_2_3_3_1.push(new Pump());
        }
      } else {
        for (let i = this.section5_2_3[index].A5_2_3_3_1.length; i > this.section5_2_3[index].A5_2_3_3; i -= 1) {
          this.section5_2_3[index].A5_2_3_3_1.pop();
        }
      }
      if (this.validateSec5_2_3[index].A5_2_3_3_1.length < this.section5_2_3[index].A5_2_3_3) {
        for (let i = this.validateSec5_2_3[index].A5_2_3_3_1.length; i < this.section5_2_3[index].A5_2_3_3; i += 1) {
          this.validateSec5_2_3[index].A5_2_3_3_1.push(new Validate_Pump());
        }
      } else {
        for (let i = this.validateSec5_2_3[index].A5_2_3_3_1.length; i > this.section5_2_3[index].A5_2_3_3; i -= 1) {
          this.validateSec5_2_3[index].A5_2_3_3_1.pop();
        }
      }
      if (this.private_badan_pump_list[index].length < this.section5_2_3[index].A5_2_3_3) {
        for (let i = this.private_badan_pump_list[index].length; i < this.section5_2_3[index].A5_2_3_3; i += 1) {
          this.private_badan_pump_list[index].push([]);
          this.private_badan_horsepower_list[index].push([]);
          this.private_badan_pipe_con_list[index].push([]);
          this.private_badan_pipe_sen_list[index].push([]);
        }
      } else {
        for (let i = this.private_badan_pump_list[index].length; i > this.section5_2_3[index].A5_2_3_3; i -= 1) {
          this.private_badan_pump_list[index].pop();
          this.private_badan_horsepower_list[index].pop();
          this.private_badan_pipe_con_list[index].pop();
          this.private_badan_pipe_sen_list[index].pop();
        }
      }

    } else {

    }
  }

  A5_2_5_1Change() {
    if (this.section5_2.A5_2_5_1 <= 2) {
      if (this.section5_2_3public.length < this.section5_2.A5_2_5_1) {
        for (let i = this.section5_2_3public.length; i < this.section5_2.A5_2_5_1; i += 1) {
          let newSN = new SN2_1P5_2_3();
          newSN.A5_2_3_3_1 = [];
          this.section5_2_3public.push(newSN);
        }
      } else {
        for (let i = this.section5_2_3public.length; i > this.section5_2.A5_2_5_1; i -= 1) {
          this.section5_2_3public.pop();
        }
      }
      if (this.validateSec5_2_3Public.length < this.section5_2.A5_2_5_1) {
        for (let i = this.validateSec5_2_3Public.length; i < this.section5_2.A5_2_5_1; i += 1) {
          let newValidate = new Validate21P523();
          newValidate.A5_2_3_3_1 = [];
          this.validateSec5_2_3Public.push(newValidate);
        }
      }
      else {
        for (let i = this.validateSec5_2_3Public.length; i > this.section5_2.A5_2_5_1; i -= 1) {
          this.validateSec5_2_3Public.pop();
        }
      }
      if (this.public_badan_pump_list.length < this.section5_2.A5_2_5_1) {
        for (let i = this.public_badan_pump_list.length; i < this.section5_2.A5_2_5_1; i += 1) {
          this.public_badan_pump_list.push([]);
          this.public_badan_horsepower_list.push([]);
          this.public_badan_pipe_con_list.push([]);
          this.public_badan_pipe_sen_list.push([]);
        }
      }
      else {
        for (let i = this.public_badan_pump_list.length; i > this.section5_2.A5_2_5_1; i -= 1) {
          this.public_badan_pump_list.pop();
          this.public_badan_horsepower_list.pop();
          this.public_badan_pipe_con_list.pop();
          this.public_badan_pipe_sen_list.pop();
        }
      }
      this.section5_2.A5_2_6 = this.section5_2_3public;
    } else {

    }
  }

  A5_2_6_3Change(index) {
    if (this.section5_2_3public[index].A5_2_3_3 <= 2) {
      if (this.section5_2_3public[index].A5_2_3_3_1.length < this.section5_2_3public[index].A5_2_3_3) {
        for (let i = this.section5_2_3public[index].A5_2_3_3_1.length; i < this.section5_2_3public[index].A5_2_3_3; i += 1) {
          this.section5_2_3public[index].A5_2_3_3_1.push(new Pump());
        }
      } else {
        for (let i = this.section5_2_3public[index].A5_2_3_3_1.length; i > this.section5_2_3public[index].A5_2_3_3; i -= 1) {
          this.section5_2_3public[index].A5_2_3_3_1.pop();
        }
      }
      if (this.validateSec5_2_3Public[index].A5_2_3_3_1.length < this.section5_2_3public[index].A5_2_3_3) {
        for (let i = this.validateSec5_2_3Public[index].A5_2_3_3_1.length; i < this.section5_2_3public[index].A5_2_3_3; i += 1) {
          this.validateSec5_2_3Public[index].A5_2_3_3_1.push(new Validate_Pump());
        }
      } else {
        for (let i = this.validateSec5_2_3Public[index].A5_2_3_3_1.length; i > this.section5_2_3public[index].A5_2_3_3; i -= 1) {
          this.validateSec5_2_3Public[index].A5_2_3_3_1.pop();
        }
      }
      if (this.public_badan_pump_list[index].length < this.section5_2_3public[index].A5_2_3_3) {
        for (let i = this.public_badan_pump_list[index].length; i < this.section5_2_3public[index].A5_2_3_3; i += 1) {
          this.public_badan_pump_list[index].push([]);
          this.public_badan_horsepower_list[index].push([]);
          this.public_badan_pipe_con_list[index].push([]);
          this.public_badan_pipe_sen_list[index].push([]);
        }
      } else {
        for (let i = this.public_badan_pump_list[index].length; i > this.section5_2_3public[index].A5_2_3_3; i -= 1) {
          this.public_badan_pump_list[index].pop();
          this.public_badan_horsepower_list[index].pop();
          this.public_badan_pipe_con_list[index].pop();
          this.public_badan_pipe_sen_list[index].pop();
        }
      }
    } else {

    }
  }

  A5_3_3Change() {
    if (this.section5_3.A5_3_3 <= 2) {
      if (this.section5_3.A5_3_3_1.length < this.section5_3.A5_3_3) {
        for (let i = this.section5_3.A5_3_3_1.length; i < this.section5_3.A5_3_3; i += 1) {
          this.section5_3.A5_3_3_1.push(new Pump());
        }
      } else {
        for (let i = this.section5_3.A5_3_3_1.length; i > this.section5_3.A5_3_3; i -= 1) {
          this.section5_3.A5_3_3_1.pop();
        }
      }
      if (this.validateSec5_3.A5_3_3_1.length < this.section5_3.A5_3_3) {
        for (let i = this.validateSec5_3.A5_3_3_1.length; i < this.section5_3.A5_3_3; i += 1) {
          this.validateSec5_3.A5_3_3_1.push(new Validate_Pump);
        }
      } else {
        for (let i = this.validateSec5_3.A5_3_3_1.length; i > this.section5_3.A5_3_3; i -= 1) {
          this.validateSec5_3.A5_3_3_1.pop();
        }
      }
      if (this.public_river_pump_list.length < this.section5_3.A5_3_3) {
        for (let i = this.public_river_pump_list.length; i < this.section5_3.A5_3_3; i += 1) {
          this.public_river_pump_list.push([]);
          this.public_river_horsepower_list.push([]);
          this.public_river_pipe_con_list.push([]);
          this.public_river_pipe_sen_list.push([]);
        }
      } else {
        for (let i = this.public_river_pump_list.length; i > this.section5_3.A5_3_3; i -= 1) {
          this.public_river_pump_list.pop();
          this.public_river_horsepower_list.pop();
          this.public_river_pipe_con_list.pop();
          this.public_river_pipe_sen_list.pop();
        }
      }
    } else {
    }
  }
  A5_5_3Change() {
    if (this.section5_5.A5_5_3 <= 2) {
      if (this.section5_5.A5_5_3_1.length < this.section5_5.A5_5_3) {
        for (let i = this.section5_5.A5_5_3_1.length; i < this.section5_5.A5_5_3; i += 1) {
          this.section5_5.A5_5_3_1.push(new Pump());
        }
      } else {
        for (let i = this.section5_5.A5_5_3_1.length; i > this.section5_5.A5_5_3; i -= 1) {
          this.section5_5.A5_5_3_1.pop();
        }
      }
      if (this.validateSec5_5.A5_5_3_1.length < this.section5_5.A5_5_3) {
        for (let i = this.validateSec5_5.A5_5_3_1.length; i < this.section5_5.A5_5_3; i += 1) {
          this.validateSec5_5.A5_5_3_1.push(new Validate_Pump());
        }
      } else {
        for (let i = this.validateSec5_5.A5_5_3_1.length; i > this.section5_5.A5_5_3; i -= 1) {
          this.validateSec5_5.A5_5_3_1.pop();
        }
      }
      if (this.chon_pump_list.length < this.section5_5.A5_5_3) {
        for (let i = this.chon_pump_list.length; i < this.section5_5.A5_5_3; i += 1) {
          this.chon_pump_list.push([]);
          this.chon_horsepower_list.push([]);
          this.chon_pipe_con_list.push([]);
          this.chon_pipe_sen_list.push([]);
        }
      } else {
        for (let i = this.chon_pump_list.length; i > this.section5_5.A5_5_3; i -= 1) {
          this.chon_pump_list.pop();
          this.chon_horsepower_list.pop();
          this.chon_pipe_con_list.pop();
          this.chon_pipe_sen_list.pop();
        }
      }
    } else {
    }
  }
  A5_4_3_1Change() {
    if(this.section5_4.A5_4_2 == 1)
    this.section5_4.A5_4_3=true;
    if (this.section5_4.A5_4_2 != null && this.section5_4.A5_4_3 != null) {
      if (this.section5_4.A5_4_3) {
        if (this.section5_4.A5_4_3_1.length > 1) {
          for (let i = this.section5_4.A5_4_3_1.length; i > 1; i -= 1) {
            this.section5_4.A5_4_3_1.pop();
          }
        }
        else if (this.section5_4.A5_4_3_1.length == 0) {
          this.section5_4.A5_4_3_1.push(new SN2_1P5_4_3());
        }

        if (this.validateSec5_4.A5_4_3_1.length > 1) {
          for (let i = this.validateSec5_4.A5_4_3_1.length; i > 1; i -= 1) {
            this.validateSec5_4.A5_4_3_1.pop();
          }
        }
        else if (this.validateSec5_4.A5_4_3_1.length == 0) {
          this.validateSec5_4.A5_4_3_1.push(new Validate21P543());
        }
      }
      else {
        if (this.section5_4.A5_4_3_1.length < this.section5_4.A5_4_2) {
          for (let i = this.section5_4.A5_4_3_1.length; i < this.section5_4.A5_4_2; i += 1) {
            this.section5_4.A5_4_3_1.push(new SN2_1P5_4_3());
            this.validateSec5_4.A5_4_3_1.push(new Validate21P543());
          }
        } else {
          for (let i = this.section5_4.A5_4_3_1.length; i > this.section5_4.A5_4_2; i -= 1) {
            this.section5_4.A5_4_3_1.pop();
            this.validateSec5_4.A5_4_3_1.pop();
          }
        }

        if (this.validateSec5_4.A5_4_3_1.length < this.section5_4.A5_4_2) {
          for (let i = this.section5_4.A5_4_3_1.length; i < this.section5_4.A5_4_2; i += 1) {
            this.validateSec5_4.A5_4_3_1.push(new Validate21P543());
          }
        } else {
          for (let i = this.validateSec5_4.A5_4_3_1.length; i > this.section5_4.A5_4_2; i -= 1) {
            this.validateSec5_4.A5_4_3_1.pop();
          }
        }
      }
    }
  }
  A5_4_4Change() {
    if (this.section5_4.A5_4_4 <= this.section5_4.A5_4_2) {
      if (this.section5_4.A5_4_4_1.length < this.section5_4.A5_4_4) {
        for (let i = this.section5_4.A5_4_4_1.length; i < this.section5_4.A5_4_4; i += 1) {
          let newSN = new SN2_1P5_4_4();
          newSN.A5_4_4_4 = [];
          this.section5_4.A5_4_4_1.push(newSN);
        }
      } else {
        for (let i = this.section5_4.A5_4_4_1.length; i > this.section5_4.A5_4_4; i -= 1) {
          this.section5_4.A5_4_4_1.pop();
        }
      }
      if (this.validateSec5_4.A5_4_4_1.length < this.section5_4.A5_4_4) {
        for (let i = this.validateSec5_4.A5_4_4_1.length; i < this.section5_4.A5_4_4; i += 1) {
          let newValidate544 = new Validate21P544();
          newValidate544.A5_4_4_4 = [];
          this.validateSec5_4.A5_4_4_1.push(newValidate544);
        }
      } else {
        for (let i = this.validateSec5_4.A5_4_4_1.length; i > this.section5_4.A5_4_4; i -= 1) {
          this.validateSec5_4.A5_4_4_1.pop();
        }
      }
      if (this.pool_pump_list.length < this.section5_4.A5_4_4) {
        for (let i = this.pool_pump_list.length; i < this.section5_4.A5_4_4; i += 1) {
          this.pool_pump_list.push([]);
          this.pool_horsepower_list.push([]);
          this.pool_pipe_con_list.push([]);
          this.pool_pipe_sen_list.push([]);
        }
      } else {
        for (let i = this.pool_pump_list.length; i > this.section5_4.A5_4_4; i -= 1) {
          this.pool_pump_list.pop();
          this.pool_horsepower_list.pop();
          this.pool_pipe_con_list.pop();
          this.pool_pipe_sen_list.pop();
        }
      }
    } else {


    }
  }

  recheckPachana() {
    if (this.validateSec5_6.A5_6_1.length < this.section5_6.A5_6_1.length) {
      for (let i = this.validateSec5_6.A5_6_1.length; i < this.section5_6.A5_6_1.length; i += 1) {
        this.validateSec5_6.A5_6_1.push(new Validate21P561());
      }
    } else {
      for (let i = this.validateSec5_6.A5_6_1.length; i > this.section5_6.A5_6_1.length; i -= 1) {
        this.validateSec5_6.A5_6_1.pop();
      }
    }
    for (let i in this.section5_6.A5_6_1) {
      this.createPachana(i);
    }
  }

  A5_4_4_3(index) {
    if (this.section5_4.A5_4_4_1[index].A5_4_4_3 <= 2) {
      if (this.section5_4.A5_4_4_1[index].A5_4_4_4.length < this.section5_4.A5_4_4_1[index].A5_4_4_3) {
        for (let i = this.section5_4.A5_4_4_1[index].A5_4_4_4.length; i < this.section5_4.A5_4_4_1[index].A5_4_4_3; i += 1) {
          this.section5_4.A5_4_4_1[index].A5_4_4_4.push(new Pump());
        }
      } else {
        for (let i = this.section5_4.A5_4_4_1[index].A5_4_4_4.length; i > this.section5_4.A5_4_4_1[index].A5_4_4_3; i -= 1) {
          this.section5_4.A5_4_4_1[index].A5_4_4_4.pop();
        }
      }
      if (this.validateSec5_4.A5_4_4_1[index].A5_4_4_4.length < this.section5_4.A5_4_4_1[index].A5_4_4_3) {
        for (let i = this.validateSec5_4.A5_4_4_1[index].A5_4_4_4.length; i < this.section5_4.A5_4_4_1[index].A5_4_4_3; i += 1) {
          this.validateSec5_4.A5_4_4_1[index].A5_4_4_4.push(new Validate_Pump);
        }
      } else {
        for (let i = this.validateSec5_4.A5_4_4_1[index].A5_4_4_4.length; i > this.section5_4.A5_4_4_1[index].A5_4_4_3; i -= 1) {
          this.validateSec5_4.A5_4_4_1[index].A5_4_4_4.pop();
        }
      }
      if (this.pool_pump_list.length < this.section5_4.A5_4_4_1[index].A5_4_4_3) {
        for (let i = this.pool_pump_list.length; i < this.section5_4.A5_4_4_1[index].A5_4_4_3; i += 1) {
          this.pool_pump_list[index].push([]);
          this.pool_horsepower_list[index].push([]);
          this.pool_pipe_con_list[index].push([]);
          this.pool_pipe_sen_list[index].push([]);
        }
      } else {
        for (let i = this.pool_pump_list.length; i > this.section5_4.A5_4_4_1[index].A5_4_4_3; i -= 1) {
          this.pool_pump_list[index].pop();
          this.pool_horsepower_list[index].pop();
          this.pool_pipe_con_list[index].pop();
          this.pool_pipe_sen_list[index].pop();
        }
      }
    } else {

    }
  }

  addPachana() {
    this.pachana_list.push([]);
    this.section5_6.A5_6_1.push(new SN2_1P5_6_1());
    this.validateSec5_6.A5_6_1.push(new Validate21P561());
  }

  removePachana() {
    this.pachana_list.pop();
    this.section5_6.A5_6_1.pop();
    this.validateSec5_6.A5_6_1.pop();
  }

  onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  createPachana(index) {
    this.pachana_list[index] = PACHANA.filter(p => p.pachana === this.section5_6.A5_6_1[index].A5_6_1_1).map(p => p.size);
  }

  createPrivateBadanPumpType(i, j) {
    this.private_badan_pump_list[i][j] = [];
    this.private_badan_horsepower_list[i][j] = [];
    this.private_badan_pipe_con_list[i][j] = [];
    this.private_badan_pipe_sen_list[i][j] = [];
    this.private_badan_pump_list[i][j] = EX_PUMP_BADAN_LIST.filter(p => p.power === this.section5_2_3[i].A5_2_3_3_1[j].A5_2_3_4_4).map(p => p.type).filter(this.onlyUnique);
    this.section5_2_3[i].A5_2_3_3_1[j].A5_2_3_4_5 = null;
    this.section5_2_3[i].A5_2_3_3_1[j].A5_2_3_4_6 = null;
    this.section5_2_3[i].A5_2_3_3_1[j].A5_2_3_4_7 = null;
    this.section5_2_3[i].A5_2_3_3_1[j].A5_2_3_4_8 = null;
  }

  createPrivateBadanHorsePower(i, j) {
    this.private_badan_horsepower_list[i][j] = [];
    this.private_badan_pipe_con_list[i][j] = [];
    this.private_badan_pipe_sen_list[i][j] = [];
    this.private_badan_horsepower_list[i][j] = EX_PUMP_BADAN_LIST.filter(p => (p.power === this.section5_2_3[i].A5_2_3_3_1[j].A5_2_3_4_4 && p.type === this.section5_2_3[i].A5_2_3_3_1[j].A5_2_3_4_5)).map(p => p.horsepower).filter(this.onlyUnique);
    this.section5_2_3[i].A5_2_3_3_1[j].A5_2_3_4_6 = null;
    this.section5_2_3[i].A5_2_3_3_1[j].A5_2_3_4_7 = null;
    this.section5_2_3[i].A5_2_3_3_1[j].A5_2_3_4_8 = null;
  }

  createPrivateBadanPipeCon(i, j) {
    this.private_badan_pipe_con_list[i][j] = [];
    this.private_badan_pipe_sen_list[i][j] = [];
    this.private_badan_pipe_con_list[i][j] = EX_PUMP_BADAN_LIST.filter(p => (p.power === this.section5_2_3[i].A5_2_3_3_1[j].A5_2_3_4_4 && p.type === this.section5_2_3[i].A5_2_3_3_1[j].A5_2_3_4_5 && p.horsepower === this.section5_2_3[i].A5_2_3_3_1[j].A5_2_3_4_6)).map(p => p.pipe_con).filter(this.onlyUnique);
    this.section5_2_3[i].A5_2_3_3_1[j].A5_2_3_4_7 = null;
  }
  createPrivateBadanPipeSen(i, j) {
    this.private_badan_pipe_sen_list[i][j] = [];
    this.private_badan_pipe_sen_list[i][j] = EX_PUMP_BADAN_LIST.filter(p => (p.power === this.section5_2_3[i].A5_2_3_3_1[j].A5_2_3_4_4 && p.type === this.section5_2_3[i].A5_2_3_3_1[j].A5_2_3_4_5 && p.horsepower === this.section5_2_3[i].A5_2_3_3_1[j].A5_2_3_4_6 && p.pipe_con === this.section5_2_3[i].A5_2_3_3_1[j].A5_2_3_4_7)).map(p => p.pipe_send).filter(this.onlyUnique);
    this.section5_2_3[i].A5_2_3_3_1[j].A5_2_3_4_8 = null;
  }

  createPublicBadanPumpType(i, j) {
    this.public_badan_pump_list[i][j] = [];
    this.public_badan_horsepower_list[i][j] = [];
    this.public_badan_pipe_con_list[i][j] = [];
    this.public_badan_pipe_sen_list[i][j] = [];
    this.public_badan_pump_list[i][j] = EX_PUMP_BADAN_LIST.filter(p => p.power === this.section5_2_3public[i].A5_2_3_3_1[j].A5_2_3_4_4).map(p => p.type).filter(this.onlyUnique);
    this.section5_2_3public[i].A5_2_3_3_1[j].A5_2_3_4_5 = null;
    this.section5_2_3public[i].A5_2_3_3_1[j].A5_2_3_4_6 = null;
    this.section5_2_3public[i].A5_2_3_3_1[j].A5_2_3_4_7 = null;
    this.section5_2_3public[i].A5_2_3_3_1[j].A5_2_3_4_8 = null;
  }

  createPublicBadanHorsePower(i, j) {
    this.public_badan_horsepower_list[i][j] = [];
    this.public_badan_pipe_con_list[i][j] = [];
    this.public_badan_pipe_sen_list[i][j] = [];
    this.public_badan_horsepower_list[i][j] = EX_PUMP_BADAN_LIST.filter(p => (p.power === this.section5_2_3public[i].A5_2_3_3_1[j].A5_2_3_4_4 && p.type === this.section5_2_3public[i].A5_2_3_3_1[j].A5_2_3_4_5)).map(p => p.horsepower).filter(this.onlyUnique);
    this.section5_2_3public[i].A5_2_3_3_1[j].A5_2_3_4_6 = null;
    this.section5_2_3public[i].A5_2_3_3_1[j].A5_2_3_4_7 = null;
    this.section5_2_3public[i].A5_2_3_3_1[j].A5_2_3_4_8 = null;
  }

  createPublicBadanPipeCon(i, j) {
    this.public_badan_pipe_con_list[i][j] = [];
    this.public_badan_pipe_sen_list[i][j] = [];
    this.public_badan_pipe_con_list[i][j] = EX_PUMP_BADAN_LIST.filter(p => (p.power === this.section5_2_3public[i].A5_2_3_3_1[j].A5_2_3_4_4 && p.type === this.section5_2_3public[i].A5_2_3_3_1[j].A5_2_3_4_5 && p.horsepower === this.section5_2_3public[i].A5_2_3_3_1[j].A5_2_3_4_6)).map(p => p.pipe_con).filter(this.onlyUnique);
    this.section5_2_3public[i].A5_2_3_3_1[j].A5_2_3_4_7 = null;
  }
  createPublicBadanPipeSen(i, j) {
    this.public_badan_pipe_sen_list[i][j] = [];
    this.public_badan_pipe_sen_list[i][j] = EX_PUMP_BADAN_LIST.filter(p => (p.power === this.section5_2_3public[i].A5_2_3_3_1[j].A5_2_3_4_4 && p.type === this.section5_2_3public[i].A5_2_3_3_1[j].A5_2_3_4_5 && p.horsepower === this.section5_2_3public[i].A5_2_3_3_1[j].A5_2_3_4_6 && p.pipe_con === this.section5_2_3public[i].A5_2_3_3_1[j].A5_2_3_4_7)).map(p => p.pipe_send).filter(this.onlyUnique);
    this.section5_2_3public[i].A5_2_3_3_1[j].A5_2_3_4_8 = null;
  }

  createPublicRiverPumpType(i) {
    this.public_river_pump_list[i] = [];
    this.public_river_horsepower_list[i] = [];
    this.public_river_pipe_con_list[i] = [];
    this.public_river_pipe_sen_list[i] = [];
    this.public_river_pump_list[i] = EX_PUMP_GROUND_LIST.filter(p => p.power === this.section5_3.A5_3_3_1[i].A5_2_3_4_4).map(p => p.type).filter(this.onlyUnique);
    this.section5_3.A5_3_3_1[i].A5_2_3_4_5 = null;
    this.section5_3.A5_3_3_1[i].A5_2_3_4_6 = null;
    this.section5_3.A5_3_3_1[i].A5_2_3_4_7 = null;
    this.section5_3.A5_3_3_1[i].A5_2_3_4_8 = null;
  }

  createPublicRiverHorsePower(i) {
    this.public_river_horsepower_list[i] = [];
    this.public_river_pipe_con_list[i] = [];
    this.public_river_pipe_sen_list[i] = [];
    this.public_river_horsepower_list[i] = EX_PUMP_GROUND_LIST.filter(p => (p.power === this.section5_3.A5_3_3_1[i].A5_2_3_4_4 && p.type === this.section5_3.A5_3_3_1[i].A5_2_3_4_5)).map(p => p.horsepower).filter(this.onlyUnique);
    this.section5_3.A5_3_3_1[i].A5_2_3_4_6 = null;
    this.section5_3.A5_3_3_1[i].A5_2_3_4_7 = null;
    this.section5_3.A5_3_3_1[i].A5_2_3_4_8 = null;
  }

  createPublicRiverPipeCon(i) {
    this.public_river_pipe_con_list[i] = [];
    this.public_river_pipe_sen_list[i] = [];
    this.public_river_pipe_con_list[i] = EX_PUMP_GROUND_LIST.filter(p => (p.power === this.section5_3.A5_3_3_1[i].A5_2_3_4_4 && p.type === this.section5_3.A5_3_3_1[i].A5_2_3_4_5 && p.horsepower === this.section5_3.A5_3_3_1[i].A5_2_3_4_6)).map(p => p.pipe_con).filter(this.onlyUnique);
    this.section5_3.A5_3_3_1[i].A5_2_3_4_7 = null;
    this.section5_3.A5_3_3_1[i].A5_2_3_4_8 = null;
  }
  createPublicRiverPipeSen(i) {
    this.public_river_pipe_sen_list[i] = [];
    this.public_river_pipe_sen_list[i] = EX_PUMP_GROUND_LIST.filter(p => (p.power === this.section5_3.A5_3_3_1[i].A5_2_3_4_4 && p.type === this.section5_3.A5_3_3_1[i].A5_2_3_4_5 && p.horsepower === this.section5_3.A5_3_3_1[i].A5_2_3_4_6 && p.pipe_con === this.section5_3.A5_3_3_1[i].A5_2_3_4_7)).map(p => p.pipe_send).filter(this.onlyUnique);
    this.section5_3.A5_3_3_1[i].A5_2_3_4_8 = null;
  }

  createPoolPumpType(i, j) {
    this.pool_pump_list[i][j] = [];
    this.pool_horsepower_list[i][j] = [];
    this.pool_pipe_con_list[i][j] = [];
    this.pool_pipe_sen_list[i][j] = [];
    this.pool_pump_list[i][j] = EX_PUMP_GROUND_LIST.filter(p => p.power === this.section5_4.A5_4_4_1[i].A5_4_4_4[j].A5_2_3_4_4).map(p => p.type).filter(this.onlyUnique);
    this.section5_4.A5_4_4_1[i].A5_4_4_4[j].A5_2_3_4_5 = null;
    this.section5_4.A5_4_4_1[i].A5_4_4_4[j].A5_2_3_4_6 = null;
    this.section5_4.A5_4_4_1[i].A5_4_4_4[j].A5_2_3_4_7 = null;
    this.section5_4.A5_4_4_1[i].A5_4_4_4[j].A5_2_3_4_8 = null;
  }

  createPoolHorsePower(i, j) {
    this.pool_horsepower_list[i][j] = [];
    this.pool_pipe_con_list[i][j] = [];
    this.pool_pipe_sen_list[i][j] = [];
    this.pool_horsepower_list[i][j] = EX_PUMP_GROUND_LIST.filter(p => (p.power === this.section5_4.A5_4_4_1[i].A5_4_4_4[j].A5_2_3_4_4 && p.type === this.section5_4.A5_4_4_1[i].A5_4_4_4[j].A5_2_3_4_5)).map(p => p.horsepower).filter(this.onlyUnique);
    this.section5_4.A5_4_4_1[i].A5_4_4_4[j].A5_2_3_4_6 = null;
    this.section5_4.A5_4_4_1[i].A5_4_4_4[j].A5_2_3_4_7 = null;
    this.section5_4.A5_4_4_1[i].A5_4_4_4[j].A5_2_3_4_8 = null;
  }

  createPoolPipeCon(i, j) {
    this.pool_pipe_con_list[i][j] = [];
    this.pool_pipe_sen_list[i][j] = [];
    this.pool_pipe_con_list[i][j] = EX_PUMP_GROUND_LIST.filter(p => (p.power === this.section5_4.A5_4_4_1[i].A5_4_4_4[j].A5_2_3_4_4 && p.type === this.section5_4.A5_4_4_1[i].A5_4_4_4[j].A5_2_3_4_5 && p.horsepower === this.section5_4.A5_4_4_1[i].A5_4_4_4[j].A5_2_3_4_6)).map(p => p.pipe_con).filter(this.onlyUnique);
    this.section5_4.A5_4_4_1[i].A5_4_4_4[j].A5_2_3_4_7 = null;
    this.section5_4.A5_4_4_1[i].A5_4_4_4[j].A5_2_3_4_8 = null;
  }
  createPoolPipeSen(i, j) {
    this.pool_pipe_sen_list[i][j] = [];
    this.pool_pipe_sen_list[i][j] = EX_PUMP_GROUND_LIST.filter(p => (p.power === this.section5_4.A5_4_4_1[i].A5_4_4_4[j].A5_2_3_4_4 && p.type === this.section5_4.A5_4_4_1[i].A5_4_4_4[j].A5_2_3_4_5 && p.horsepower === this.section5_4.A5_4_4_1[i].A5_4_4_4[j].A5_2_3_4_6 && p.pipe_con === this.section5_4.A5_4_4_1[i].A5_4_4_4[j].A5_2_3_4_7)).map(p => p.pipe_send).filter(this.onlyUnique);
    this.section5_4.A5_4_4_1[i].A5_4_4_4[j].A5_2_3_4_8 = null;
  }

  createChonPumpType(i) {
    this.chon_pump_list[i] = [];
    this.chon_horsepower_list[i] = [];
    this.chon_pipe_con_list[i] = [];
    this.chon_pipe_sen_list[i] = [];
    this.chon_pump_list[i] = EX_PUMP_GROUND_LIST.filter(p => p.power === this.section5_5.A5_5_3_1[i].A5_2_3_4_4).map(p => p.type).filter(this.onlyUnique);
    this.section5_5.A5_5_3_1[i].A5_2_3_4_5 = null;
    this.section5_5.A5_5_3_1[i].A5_2_3_4_6 = null;
    this.section5_5.A5_5_3_1[i].A5_2_3_4_7 = null;
    this.section5_5.A5_5_3_1[i].A5_2_3_4_8 = null;
  }

  createChonHorsePower(i) {
    this.chon_horsepower_list[i] = [];
    this.chon_pipe_con_list[i] = [];
    this.chon_pipe_sen_list[i] = [];
    this.chon_horsepower_list[i] = EX_PUMP_GROUND_LIST.filter(p => (p.power === this.section5_5.A5_5_3_1[i].A5_2_3_4_4 && p.type === this.section5_5.A5_5_3_1[i].A5_2_3_4_5)).map(p => p.horsepower).filter(this.onlyUnique);
    this.section5_5.A5_5_3_1[i].A5_2_3_4_6 = null;
    this.section5_5.A5_5_3_1[i].A5_2_3_4_7 = null;
    this.section5_5.A5_5_3_1[i].A5_2_3_4_8 = null;
  }

  createChonPipeCon(i) {
    this.chon_pipe_con_list[i] = [];
    this.chon_pipe_sen_list[i] = [];
    this.chon_pipe_con_list[i] = EX_PUMP_GROUND_LIST.filter(p => (p.power === this.section5_5.A5_5_3_1[i].A5_2_3_4_4 && p.type === this.section5_5.A5_5_3_1[i].A5_2_3_4_5 && p.horsepower === this.section5_5.A5_5_3_1[i].A5_2_3_4_6)).map(p => p.pipe_con).filter(this.onlyUnique);
    this.section5_5.A5_5_3_1[i].A5_2_3_4_7 = null;
    this.section5_5.A5_5_3_1[i].A5_2_3_4_8 = null;
  }
  createChonPipeSen(i) {
    this.chon_pipe_sen_list[i] = [];
    this.chon_pipe_sen_list[i] = EX_PUMP_GROUND_LIST.filter(p => (p.power === this.section5_5.A5_5_3_1[i].A5_2_3_4_4 && p.type === this.section5_5.A5_5_3_1[i].A5_2_3_4_5 && p.horsepower === this.section5_5.A5_5_3_1[i].A5_2_3_4_6 && p.pipe_con === this.section5_5.A5_5_3_1[i].A5_2_3_4_7)).map(p => p.pipe_send).filter(this.onlyUnique);
    this.section5_5.A5_5_3_1[i].A5_2_3_4_8 = null;
  }

  ngOnInit() {
    // this.parts is initial set!
    if(this.H4 != "ส่วนกลาง"){
      if(this.mergeTapWater)
        this.waterData.tapWater=false;
      if(this.mergeGroundWater)
        this.waterData.groundWater=false;
    }
    if (!this.section5) {
      this.section5_1 = new SN2_1P5_1();
      this.section5_2 = new SN2_1P5_2();
      this.section5_2_3 = [];
      this.section5_2_3public = [];
      this.section5_3 = new SN2_1P5_3();
      this.section5_4 = new SN2_1P5_4();
      this.section5_5 = new SN2_1P5_5();
      this.section5_6 = new SN2_1P5_6();
      this.section5_7 = new SN2_1P5_7();
      this.section5_6.A5_6_1 = [];
      this.section5_3.A5_3_3_1 = [];
      this.section5_5.A5_5_3_1 = [];
      this.section5_4.A5_4_3_1 = [];
      this.section5_4.A5_4_4_1 = [];

    } else {
      this.section5_1 = this.section5.A5_1 ? this.section5.A5_1 : new SN2_1P5_1();
      this.section5_2 = this.section5.A5_2 ? this.section5.A5_2 : new SN2_1P5_2();
      this.section5_3 = this.section5.A5_3 ? this.section5.A5_3 : new SN2_1P5_3();
      this.section5_2_3 = this.section5_2.A5_2_3 ? this.section5.A5_2.A5_2_3 : [];
      this.section5_2_3public = this.section5_2.A5_2_6 ? this.section5.A5_2.A5_2_6 : [];
      this.section5_4 = this.section5.A5_4 ? this.section5.A5_4 : new SN2_1P5_4();
      this.section5_5 = this.section5.A5_5 ? this.section5.A5_5 : new SN2_1P5_5();
      this.section5_6 = this.section5.A5_6 ? this.section5.A5_6 : new SN2_1P5_6();
      this.section5_7 = this.section5.A5_7 ? this.section5.A5_7 : new SN2_1P5_7();
      this.section5_6.A5_6_1 = this.section5_6.A5_6_1 ? this.section5_6.A5_6_1 : [];
      this.section5_3.A5_3_3_1 = this.section5_3.A5_3_3_1 ? this.section5_3.A5_3_3_1 : [];
      this.section5_5.A5_5_3_1 = this.section5_5.A5_5_3_1 ? this.section5_5.A5_5_3_1 : [];
      this.section5_4.A5_4_3_1 = this.section5_4.A5_4_3_1 ? this.section5_4.A5_4_3_1 : [];
      this.section5_4.A5_4_4_1 = this.section5_4.A5_4_4_1 ? this.section5_4.A5_4_4_1 : [];

    }
    this.section5_2.A5_2_3 = this.section5_2_3;
    this.section5_2.A5_2_6 = this.section5_2_3public;
    this.section5.A5_1 = this.section5_1;
    this.section5.A5_2 = this.section5_2;
    this.section5.A5_3 = this.section5_3;
    this.section5.A5_4 = this.section5_4;
    this.section5.A5_5 = this.section5_5;
    this.section5.A5_6 = this.section5_6;
    this.section5.A5_7 = this.section5_7;
    this.private_badan_pump_list = [];
    this.private_badan_horsepower_list = [];
    this.private_badan_pipe_con_list = [];
    this.private_badan_pipe_sen_list = [];
    this.public_badan_pump_list = [];
    this.public_badan_horsepower_list = [];
    this.public_badan_pipe_con_list = [];
    this.public_badan_pipe_sen_list = [];

    this.public_river_pump_list = [];
    this.public_river_horsepower_list = [];
    this.public_river_pipe_con_list = [];
    this.public_river_pipe_sen_list = [];

    this.pool_pump_list = [];
    this.pool_horsepower_list = [];
    this.pool_pipe_con_list = [];
    this.pool_pipe_sen_list = [];

    this.chon_pump_list = [];
    this.chon_horsepower_list = [];
    this.chon_pipe_con_list = [];
    this.chon_pipe_sen_list = [];


    if (this.section5_2_3.length != this.section5_2.A5_2_2_1) {
      this.A5_2_2_1Change();
    }
    if (this.section5_2_3public.length != this.section5_2.A5_2_5_1) {
      this.A5_2_5_1Change();
    }
    if (this.section5_5.A5_5_3_1.length != this.section5_5.A5_5_3) {
      this.A5_5_3Change();
    }
    if (this.section5_4.A5_4_3_1.length != this.section5_4.A5_4_2) {
      this.A5_4_3_1Change()
    }
    if (this.section5_4.A5_4_4_1.length != this.section5_4.A5_4_4) {
      this.A5_4_4Change();
    }
    
    this.revalidateAll();
    if(this.waterData.poolWater){
      this.section5_4.A5_4_1 = true;
      this.disable=true;
    }else{
      this.disable=false;
    }
    if(this.waterData.tapWater){
      this.section=1;
    }else if(this.waterData.groundWater){
      this.section=2;
      this.disable2=false;
    }else if(this.waterData.riverWater){
      this.section=3;
      this.disable3=false;
    }else{
      this.section=4;
      this.disable3=false;
    }
    if (this.section5.current_page != undefined) {
      if (this.section5.current_page == null) {
        
        if(this.waterData.tapWater){
          this.section=1;
          this.section5.current_page = "1";
        }else if(this.waterData.groundWater){
          this.section=2;
          this.disable2=false;
          this.section5.current_page = "2";
        }else if(this.waterData.riverWater){
          this.section=3;
          this.disable3=false;
          this.section5.current_page = "3";
        }else{
          this.section=4;
          this.disable3=false;
          this.section5.current_page = "4";
        }
      } else{
        
        let N=Number(this.section5.current_page);
        if((!this.waterData.tapWater && N==1)||(!this.waterData.groundWater && N==2)||(!this.waterData.riverWater && N==3)||(!this.waterData.chonWater && N==5)||(!this.waterData.rainWater && N==6)||(!this.waterData.buyWater && N==7)){
          if(this.waterData.tapWater){
            this.section=1;
            this.section5.current_page = "1";
          }else if(this.waterData.groundWater){
            this.section=2;
            this.disable2=false;
            this.section5.current_page = "2";
          }else if(this.waterData.riverWater){
            this.section=3;
            this.disable3=false;
            this.section5.current_page = "3";
          }else{
            this.section=4;
            this.disable3=false;
            this.section5.current_page = "4";
          }
        }
        this.section = Number(this.section5.current_page);
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
      }
    }
    
  }

  revalidateAll() {
    if (this.waterData.tapWater) {
      this.validate5_1();
    }
    if (this.waterData.groundWater) {
      this.validate5_2();
      if (this.section5_2_3) {
        this.A5_2_2_1Change();
        for (let i in this.section5_2_3) {
          this.validate5_2_3(i);
          if (this.section5_2_3[i]) {
            this.A5_2_3_3Change(i)
            if (this.section5_2_3[i].A5_2_3_3_1) {
              for (let j in this.section5_2_3[i].A5_2_3_3_1) {
                this.validate5_2_3_Pump(i, j);
              }
            }
          }
        }
      }
      if (this.section5_2_3public) {
        this.A5_2_5_1Change();
        for (let i in this.section5_2_3public) {
          this.validatePublic5_2_3(i);
          if (this.section5_2_3public[i]) {
            this.A5_2_6_3Change(i)
            if (this.section5_2_3public[i].A5_2_3_3_1) {
              for (let j in this.section5_2_3public[i].A5_2_3_3_1) {
                this.validatePublicPump5_2_3(i, j);
              }
            }
          }
        }
      }
    }

    if (this.waterData.riverWater) {
      this.validate5_3();
      if (this.section5_3.A5_3_3_1) {
        this.A5_3_3Change();
        for (let i in this.section5_3.A5_3_3_1) {
          this.validatePump5_3(i);
        }
      }
    }
    if (this.section5_4) {
      this.validate5_4();
      if (this.section5_4.A5_4_3_1) {
        this.A5_4_3_1Change()
        for (let i in this.section5_4.A5_4_3_1) {
          this.validate5_4_3(i);
        }
      }
      if (this.section5_4.A5_4_4_1) {
        this.A5_4_4Change();
        for (let i in this.section5_4.A5_4_4_1) {
          this.validate5_4_4(i);
          if (this.section5_4.A5_4_4_1[i].A5_4_4_4) {
            this.A5_4_4_3(i);
            for (let j in this.section5_4.A5_4_4_1[i].A5_4_4_4) {
              this.validatePump5_4_4(i, j);
            }
          }
        }
      }
    }

    if (this.waterData.chonWater) {
      this.validate5_5();
      if (this.section5_5.A5_5_3_1) {
        this.A5_5_3Change();
        for (let i in this.section5_5.A5_5_3_1) {
          this.validatePump5_5(i);
        }
      }
    }
    if (this.waterData.rainWater) {
      this.validate5_6();
      if (this.section5_6) {
        this.recheckPachana();
        for (let i in this.section5_6.A5_6_1) {
          this.validate5_6_1(i);
        }
      }
    }
    if (this.waterData.buyWater) {
      this.validate5_7();
    }
  }

  validateAll() {
    this.revalidateAll();
    let v_sec1 = Object.keys(this.validateSec5_1).filter(v => !this.validateSec5_1[v]).length === 0;
    let v_sec2privatePump = this.validateSec5_2_3.filter(p => (p.A5_2_3_3_1.filter(pu => (Object.keys(pu).filter(pump => !pu[pump]).length != 0)).length != 0)).length === 0 || !this.section5_2.A5_2_1;
    let v_sec2publicPump = this.validateSec5_2_3Public.filter(p => (p.A5_2_3_3_1.filter(pu => (Object.keys(pu).filter(pump => !pu[pump]).length != 0)).length != 0)).length === 0 || !this.section5_2.A5_2_4;
    let v_sec2private = this.validateSec5_2_3.filter(p => (Object.keys(p).filter(pu => !p[pu]).length != 0)).length === 0;
    let v_sec2public = this.validateSec5_2_3Public.filter(p => (Object.keys(p).filter(pu => !p[pu]).length != 0)).length === 0;
    let v_sec2 = Object.keys(this.validateSec5_2).filter(v => !this.validateSec5_2[v]).length === 0;
    let v_sec3pump = this.validateSec5_3.A5_3_3_1.filter(p => Object.keys(p).filter(pu => !p[pu]).length != 0).length === 0;
    let v_sec3 = Object.keys(this.validateSec5_3).filter(v => !this.validateSec5_3[v]).length === 0
    let v_sec4Pump = this.validateSec5_4.A5_4_4_1.filter(sa => sa.A5_4_4_4.filter(p => Object.keys(p).filter(pu => !p[pu]).length != 0).length != 0).length === 0;
    let v_sec4size = this.validateSec5_4.A5_4_3_1.filter(si => Object.keys(si).filter(k => !si[k]).length != 0).length === 0;
    let v_sec4sra = this.validateSec5_4.A5_4_4_1.filter(sra => Object.keys(sra).filter(k => !sra[k]).length != 0).length === 0;
    let v_sec4 = Object.keys(this.validateSec5_4).filter(k => !this.validateSec5_4[k]).length === 0;
    let v_sec5Pump = this.validateSec5_5.A5_5_3_1.filter(pump => Object.keys(pump).filter(k => !pump[k]).length != 0).length === 0;
    let v_sec5 = Object.keys(this.validateSec5_5).filter(v => !this.validateSec5_5[v]).length === 0;
    let v_sec6pachana = this.validateSec5_6.A5_6_1.filter(pacha => Object.keys(pacha).filter(p => !pacha[p]).length != 0).length === 0;
    let v_sec6 = Object.keys(this.validateSec5_6).filter(k => !this.validateSec5_6[k]).length === 0;
    let v_sec7 = Object.keys(this.validateSec5_7).filter(v => !this.validateSec5_7[v]).length === 0;
    // let test = {
    //   "v_sec1":v_sec1,
    //   "v_sec2privatePump":v_sec2privatePump,
    //   "v_sec2publicPump":v_sec2publicPump,
    //   "v_sec2private":v_sec2private,
    //   "v_sec2public":v_sec2public,
    //   "v_sec2":v_sec2,
    //   "v_sec3pump":v_sec3pump,
    //   "v_sec3":v_sec3,
    //   "v_sec4Pump":v_sec4Pump,
    //   "v_sec4size":v_sec4size,
    //   "v_sec4sra":v_sec4sra,
    //   "v_sec4":v_sec4,
    //   "v_sec5Pump":v_sec5Pump,
    //   "v_sec5":v_sec5,
    //   "v_sec6pachana":v_sec6pachana,
    //   "v_sec6":v_sec6,
    //   "v_sec7":v_sec7
    // }
    // //console.logog(test);
    return (v_sec1 && v_sec2privatePump && v_sec2publicPump && v_sec2private && v_sec2public && v_sec2 && v_sec3pump && v_sec3 && v_sec4Pump && v_sec4size && v_sec4sra && v_sec4 && v_sec5Pump && v_sec5 && v_sec6pachana && v_sec6 && v_sec7);
  }
  save1(){
    this.revalidateAll();
    if(Object.keys(this.validateSec5_1).filter(v => !this.validateSec5_1[v]).length === 0){
      this.next(1);
    }else{
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
  save2(){
    this.revalidateAll();
    let v_sec2privatePump = this.validateSec5_2_3.filter(p => (p.A5_2_3_3_1.filter(pu => (Object.keys(pu).filter(pump => !pu[pump]).length != 0)).length != 0)).length === 0 || !this.section5_2.A5_2_1;
    let v_sec2publicPump = this.validateSec5_2_3Public.filter(p => (p.A5_2_3_3_1.filter(pu => (Object.keys(pu).filter(pump => !pu[pump]).length != 0)).length != 0)).length === 0 || !this.section5_2.A5_2_4;
    let v_sec2private = this.validateSec5_2_3.filter(p => (Object.keys(p).filter(pu => !p[pu]).length != 0)).length === 0;
    let v_sec2public = this.validateSec5_2_3Public.filter(p => (Object.keys(p).filter(pu => !p[pu]).length != 0)).length === 0;
    let v_sec2 = Object.keys(this.validateSec5_2).filter(v => !this.validateSec5_2[v]).length === 0;
    if(v_sec2privatePump && v_sec2publicPump && v_sec2private && v_sec2public && v_sec2){
      this.next(2);
    }else{
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
  save3(){
    this.revalidateAll();
    let v_sec3pump = this.validateSec5_3.A5_3_3_1.filter(p => Object.keys(p).filter(pu => !p[pu]).length != 0).length === 0;
    let v_sec3 = Object.keys(this.validateSec5_3).filter(v => !this.validateSec5_3[v]).length === 0
    if(v_sec3pump && v_sec3){
      this.next(3);
    }else{
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
  save4(){
    this.revalidateAll();
    let v_sec4Pump = this.validateSec5_4.A5_4_4_1.filter(sa => sa.A5_4_4_4.filter(p => Object.keys(p).filter(pu => !p[pu]).length != 0).length != 0).length === 0;
    let v_sec4size = this.validateSec5_4.A5_4_3_1.filter(si => Object.keys(si).filter(k => !si[k]).length != 0).length === 0;
    let v_sec4sra = this.validateSec5_4.A5_4_4_1.filter(sra => Object.keys(sra).filter(k => !sra[k]).length != 0).length === 0;
    let v_sec4 = Object.keys(this.validateSec5_4).filter(k => !this.validateSec5_4[k]).length === 0;
    if(v_sec4Pump && v_sec4size && v_sec4sra && v_sec4){
      this.next(4);
    }else{
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
  save5(){
    this.revalidateAll();
    let v_sec5Pump = this.validateSec5_5.A5_5_3_1.filter(pump => Object.keys(pump).filter(k => !pump[k]).length != 0).length === 0;
    let v_sec5 = Object.keys(this.validateSec5_5).filter(v => !this.validateSec5_5[v]).length === 0;
    if(v_sec5Pump && v_sec5){
      this.next(5);
    }else{
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
  save6(){
    this.revalidateAll();
    let v_sec6pachana = this.validateSec5_6.A5_6_1.filter(pacha => Object.keys(pacha).filter(p => !pacha[p]).length != 0).length === 0;
    let v_sec6 = Object.keys(this.validateSec5_6).filter(k => !this.validateSec5_6[k]).length === 0;
    if(v_sec6pachana && v_sec6){
      this.next(6);
    }else{
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
  save7(){
    this.revalidateAll();
    let v_sec7 = Object.keys(this.validateSec5_7).filter(v => !this.validateSec5_7[v]).length === 0;
    if(v_sec7){
      this.next(7);
    }else{
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
  save() {
    if (this.validateAll()) {
      this.notValid = false;
      this.section5.status = 4;
      if (this.waterData.G1)
        this.events.publish("saveSN21", 5);
      else
        this.events.publish("saveSN21", 0);
    }
    else {
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
  inRange(data:any, min:number, max:number, length:number){
    //length = -1 is type of data in html is number, otherwise is text
      //console.logog(data)
      if(isNaN(data))
        return false
      if(data === '')
        return false
      if(data === null)
        return false
      let n = Number(data)
      if(!isNaN(n) && (data.length == length || length == -1)){
        if(n >= min && n <= max){
          return true // min < data < max
        }else{
          return false
        }
      }else{
        return false // not number
      }
    }

    test1(){
      if(this.section5_1.A5_1_1_1_1 === true){
        this.section5_1.A5_1_1_2_1 = false
      }
    }
    test2(){
      if(this.section5_1.A5_1_1_2_1 === true){
        this.section5_1.A5_1_1_1_1 = false
        
      }
    }
    test3(){
      // if(this.section5_1.A5_1_1_3_1 === true){
      //   this.section5_1.A5_1_1_1_1 = false
      //   this.section5_1.A5_1_1_2_1 = false
      // }
    }
}
