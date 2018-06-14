import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the WaterDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WaterDataProvider {
  public tapWater: boolean;
  private tapWaterCount: number = 0;
  public groundWater: boolean;
  private groundWaterCount: number = 0;
  public riverWater: boolean;
  private riverWaterCount: number = 0;
  public poolWater: boolean;
  private poolWaterCount : number = 0;
  public chonWater: boolean;
  private chonWaterCount: number = 0;
  public rainWater: boolean;
  private rainWaterCount: number = 0;
  public buyWater: boolean;
  private buyWaterCount: number = 0;
  constructor(public http: Http) {
    //console.log('Hello WaterDataProvider Provider');
    this.tapWater = false;
    this.groundWater = false;
    this.riverWater = false;
    this.chonWater = false;
    this.rainWater = false;
    this.buyWater = false;
  }
  addTapWater() {
    this.tapWaterCount = this.tapWaterCount + 1;
    if (this.tapWaterCount > 0) {
      this.tapWater = true;
    }
  }
  rmTapWater() {
    this.tapWaterCount = this.tapWaterCount - 1;
    if (this.tapWaterCount > 0) {
      this.tapWater = true;
    }
    else {
      this.tapWater = false;
    }
  }

  addGroundWater() {
    this.groundWaterCount = this.groundWaterCount + 1;
    if (this.groundWaterCount > 0) {
      this.groundWater = true;
    }
  }
  rmGroundWater() {
    this.groundWaterCount = this.groundWaterCount - 1;
    if (this.groundWaterCount > 0) {
      this.groundWater = true;
    }
    else {
      this.groundWater = false;
    }
  }

  addRiverWater() {
    this.riverWaterCount = this.riverWaterCount + 1;
    if (this.riverWaterCount > 0) {
      this.riverWater = true;
    }
  }
  rmRiverWater() {
    this.riverWaterCount = this.riverWaterCount - 1;
    if (this.riverWaterCount > 0) {
      this.riverWater = true;
    }
    else {
      this.riverWater = false;
    }
  }
  
  addPoolWater(){
    this.poolWaterCount = this.poolWaterCount + 1;
    if(this.poolWaterCount > 0){
      this.poolWater = true;
    }
  }
  rmPoolWater(){
    this.poolWaterCount = this.poolWaterCount - 1;
    if(this.poolWaterCount > 0){
      this.poolWater = true
    }else{
      this.poolWater = false
    }
  }

  addChonWater() {
    this.chonWaterCount = this.chonWaterCount + 1;
    if (this.chonWaterCount > 0) {
      this.chonWater = true;
    }
  }
  rmChonWater() {
    this.chonWaterCount = this.chonWaterCount - 1;
    if (this.chonWaterCount > 0) {
      this.chonWater = true;
    }
    else {
      this.chonWater = false;
    }
  }

  addRainWater() {
    this.rainWaterCount = this.rainWaterCount + 1;
    if (this.rainWaterCount > 0) {
      this.rainWater = true;
    }
  }
  rmRainWater() {
    this.rainWaterCount = this.rainWaterCount - 1;
    if (this.rainWaterCount > 0) {
      this.rainWater = true;
    }
    else {
      this.rainWater = false;
    }
  }
  addBuyWater() {
    this.buyWaterCount = this.buyWaterCount + 1;
    if (this.buyWaterCount > 0) {
      this.buyWater = true;
    }
  }
  rmBuyWater() {
    this.buyWaterCount = this.buyWaterCount - 1;
    if (this.buyWaterCount > 0) {
      this.buyWater = true;
    }
    else {
      this.buyWater = false;
    }
  }



}
