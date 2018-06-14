import { Validate21P2 } from '../../models/SN2_1/Validate21P2';


export class ValidatorSection2{
  
  validator: Validate21P2 = this.init()
  month_mapping = {

  }
  constructor() {
    //console.log('ValidatorSection2 Component');
    //console.log("validator")
  }
  result: any = {                                                  
    rice: false,
    riceInfo: [],
    treeRai: false,
    treeRaiInfo: [],
    yang: false,
    yanginfo: [],
    treeTon: false,
    treeTonInfo: [],
    treeVet: false,
    treeVetInfo: [],
    treePad: false,
    treePadInfo: [],
    mushroom: false,
    mushroomInfo: [],
    animal : false,
    animalInfo: [],
    aquatic : false,
    aquaticInfo: [],
    HAS_ONCE:false
  }
  
  //if return should tell what errors
  inRange(data:any, min:number, max:number, length:number){
    //length = -1 is type of data in html is number, otherwise is text
      //console.log(data)
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

    hasData(data : any){
      if(data !== null && data !== undefined)
        return true
      return false
    }

    calculateCap(obj: any){
      let cap = null;
      let pi =  3.1415926535897932384;
      if(obj.A2_E9_1_1_2_2_0 == 1){
        if(this.hasData(obj.A2_E9_1_1_2_2_1_1)){
          cap = Number(obj.A2_E9_1_1_2_2_1_1)
        }
      }
      if(obj.A2_E9_1_1_2_2_0 == 2){
        if(this.hasData(obj.A2_E9_1_1_2_2_2_1) && this.hasData(obj.A2_E9_1_1_2_2_2_2) 
          && this.hasData(obj.A2_E9_1_1_2_2_2_3) && this.hasData(obj.A2_E9_1_1_2_2_2_4)){
            cap = Number(obj.A2_E9_1_1_2_2_2_1) * 4
            cap = (cap + Number(obj.A2_E9_1_1_2_2_2_2)) * 100
            cap = (cap + Number(obj.A2_E9_1_1_2_2_2_3)) * 4 * Number(obj.A2_E9_1_1_2_2_2_4) 
        }
      }else if(obj.A2_E9_1_1_2_2_0 == 3){
        if(this.hasData(obj.A2_E9_1_1_2_2_3_1_1) && this.hasData(obj.A2_E9_1_1_2_2_3_1_2 
            && this.hasData(obj.A2_E9_1_1_2_2_3_1_3))){
            cap = Number(obj.A2_E9_1_1_2_2_3_1_1) * Number(obj.A2_E9_1_1_2_2_3_1_2) * Number(obj.A2_E9_1_1_2_2_3_1_3)
        }
      }else if(obj.A2_E9_1_1_2_2_0 == 4){
          if(this.hasData(obj.A2_E9_1_1_2_2_3_2_1) && this.hasData(obj.A2_E9_1_1_2_2_3_2_2)){
            cap = pi * (Number(obj.A2_E9_1_1_2_2_3_2_1)/2) * (Number(obj.A2_E9_1_1_2_2_3_2_1)/2) * (Number(obj.A2_E9_1_1_2_2_3_2_2))
          }
      }
      return cap
    }

  hasvalue(obj : any, value : any){
    if(obj == null)
      return false
    let t = Object.keys(obj)
    
    for(let i = 0; i < t.length ; i++){
      let k = t[i]
      //console.log("----------------------a------------------")
      //console.log(typeof(obj[k]));
      //console.log(obj[k]);
      //console.log(Object.keys(obj[k]))
      if(typeof(obj[k]) == 'object'  && Object.keys(obj[k]).length > 0){
        if(this.hasvalue(obj[k], value))
          return true
        //console.log(a)
      }else if(typeof(obj[k]) == 'object' && Object.keys(obj[k]).length == 0){
        // return false
      }else if(obj[k] === value){
        return true
      }
    }
    return false
  }
  hasFalse(obj : any){
      let t = Object.keys(obj)
      for(let i = 0 ; i < t.length ; i++){
        let k = t[i]
        if(obj[k] === false)
          return true
        else if(typeof(obj[k]) == "object"){
          for(let j = 0;j < obj[k].length ; j++){
            if(obj[k][j] == false)
              return true
          }
        }
      }
      return false
  }
  
  validate(info : any){
    //console.log("data is")
    //console.log(info)
    let no_check = {
      'no_check' : true
    }
    // this.validator['HAS_ONCE']=false;
    function subValidate(topic : boolean, validatorFunc: any){
      //console.log("--------------------subValidate-------------------------")
      

      if(topic){
        // this.validator['HAS_ONCE']=true;
        validatorFunc(info)
        return true
      }else if(topic == undefined){
        //console.log('nullllllllllllll')
        return false
      }

      return false
    }
    if(info.A2_E1_1 === false)
      this.validator['A2_E1_2'] = true 
    if(info.A2_E2_1 === false)
      this.validator['A2_E2_2'] = true 
    if(info.A2_E3_1 === false)
      this.validator['A2_E3_2'] = true 
    if(info.A2_E4_1 === false)
      this.validator['A2_E4_2'] = true 
    if(info.A2_E5_1 === false)
      this.validator['A2_E5_2'] = true 
    if(info.A2_E6_1 === false)
      this.validator['A2_E6_2'] = true 
    if(info.A2_E7_1 === false)
      this.validator['A2_E7_2'] = true
    
    this.result.rice = subValidate(info.A2_E1_1, this.validateRice.bind(this))
    this.result.treeRai = subValidate(info.A2_E2_1, this.validateTreeRai.bind(this))
    this.result.yang = subValidate(info.A2_E3_1, this.validateYang.bind(this))
    this.result.treeTon = subValidate(info.A2_E4_1, this.validateTreeTon.bind(this))
    this.result.treeVet = subValidate(info.A2_E5_1, this.validateTreeVet.bind(this))
    this.result.treePad = subValidate(info.A2_E6_1, this.validateTreePad.bind(this))
    this.result.mushroom = subValidate(info.A2_E7_1, this.validateMushroom.bind(this))
    this.result.animal = subValidate(info.A2_E8_1, this.validateAnimal.bind(this))
    this.result.aquatic = subValidate(info.A2_E9_1, this.validateAquatic.bind(this))
    this.result.HAS_ONCE = subValidate(true,this.validateHasOnce.bind(this))
    if(this.result.rice !== true)
      this.validator['A2_E1'] = [no_check]
    if(this.result.treeRai !== true)
      this.validator['A2_E2'] = [no_check]
    if(this.result.yang !== true)
      this.validator['A2_E3'] = [no_check]
    if(this.result.treeTon !== true)
      this.validator['A2_E4'] = [no_check]
    if(this.result.treeVet !== true)
      this.validator['A2_E5'] = [no_check]
    if(this.result.treePad !== true)
      this.validator['A2_E6'] = [no_check]
    if(this.result.mushroom !== true)
      this.validator['A2_E7'] = [no_check]
    if(this.result.animal !== true)
      this.validator['A2_E8'] = [no_check]
    if(info.A2_E9_1 === false){
      let k = Object.keys(this.validator)
      for(let i=0;i<k.length;i++){
        if(k[i].indexOf('A2_E9') >= 0){
          this.validator[k[i]] = true
        }
      }
    }
      
 
    this.validator['A2_E1_1'] = info.A2_E1_1 === true || info.A2_E1_1 === false
    this.validator['A2_E2_1'] = info.A2_E2_1 === true || info.A2_E2_1 === false
    this.validator['A2_E3_1'] = info.A2_E3_1 === true || info.A2_E3_1 === false
    this.validator['A2_E4_1'] = info.A2_E4_1 === true || info.A2_E4_1 === false
    this.validator['A2_E5_1'] = info.A2_E5_1 === true || info.A2_E5_1 === false
    this.validator['A2_E6_1'] = info.A2_E6_1 === true || info.A2_E6_1 === false
    this.validator['A2_E7_1'] = info.A2_E7_1 === true || info.A2_E7_1 === false
    this.validator['A2_E8_1'] = info.A2_E8_1 === true || info.A2_E8_1 === false
    this.validator['A2_E9_1'] = info.A2_E9_1 === true || info.A2_E9_1 === false
    //console.log("result")
    //console.log(this.result)
  }
  //not return value validate{}

  chosenAtLeastOne(b: any, key : string, lastIndex : number){
    let result = false
    for(let i = 1; i <= lastIndex; i++){
      result = result || (b[key + i] == null || b[key + i] == undefined  ? false : b[key + i])
    } 
    return result
  }

  normalizeArea(first :number, second : number, third : number){
    //console.log('nor')
    //console.log(first)
    //console.log(second)
    //console.log(third)
    //console.log((((first*4) + second) * 100) + third)
    return Number((((Number(first)*4) + Number(second)) * 100) + Number(third))
  }

  isInPeriod(info : any){
    //console.log("isInPeriod")
    //console.log(info)
    if(info.start_previous == null || info.end_previous == null || info.start == null){
      //console.log("error1")
      return true
    }
    
    if(info.end_previous > info.start_previous){
      if(info.start >= info.start_previous && info.start < info.end_previous){
        //console.log('case 1')
        return true
      }
    }else if(info.end_previous < info.start_previous){
      if(info.start >= info.start_previous && info.start <= 12){
        //console.log('case 2')
        return true
      }
      if(info.start < info.end_previous && info.start >= 1){
        //console.log('case 3')
        return true
      }
    }
    //console.log("nothing case")
    return false
  }
  validateHasOnce(info : any){
    this.validator.HAS_ONCE = info.A2_E1_1 || info.A2_E2_1 || info.A2_E3_1 || info.A2_E4_1 || info.A2_E5_1 || info.A2_E6_1 || info.A2_E7_1 || info.A2_E8_1 || info.A2_E9_1
  }
  validateRiceInfo(b : any,c:boolean){
    let obj = {}
    let area = 0
    //console.log("validateRice ------ show info")
    //console.log(b)
    obj['A2_E1_2_1_CWT'] = b.A2_E1_2_1_CWT !== '' || c
    obj['A2_E1_2_1_AMP'] = b.A2_E1_2_1_AMP !== '' || c
    obj['A2_E1_2_1_TMB'] = b.A2_E1_2_1_TMB !== '' || c
    obj['A2_E1_2_2_1'] = this.inRange(b.A2_E1_2_2_1, 0, 100, -1) || c
    obj['A2_E1_2_2_2'] = this.inRange(b.A2_E1_2_2_2, 0, 3, -1) || c
    obj['A2_E1_2_2_3'] = this.inRange(b.A2_E1_2_2_3, 0, 99, -1) || c
    if(b.A2_E1_2_2_1 == 0 && b.A2_E1_2_2_2 == 0 && b.A2_E1_2_2_3 == 0){
      obj['A2_E1_2_2_1'] = false || c
      obj['A2_E1_2_2_2'] = false || c
      obj['A2_E1_2_2_3'] = false || c
    }else{
      area = this.normalizeArea(b.A2_E1_2_2_1, b.A2_E1_2_2_2, b.A2_E1_2_2_3) 
    }
    obj['A2_E1_2_3'] = this.inRange(b.A2_E1_2_3, 1, 4, 1) || c
    obj['A2_E1_2_4'] = this.inRange(b.A2_E1_2_4, 1, 3, 1) || c//ทำทุกครั้ง == 1 
    if(b.A2_E1_2_4 == '2'){
      obj['A2_E1_2_4_2_1'] = this.inRange(b.A2_E1_2_4_2_1, 0, 100, -1) || c
      obj['A2_E1_2_4_2_2'] = this.inRange(b.A2_E1_2_4_2_2, 0, 3, -1) || c
      obj['A2_E1_2_4_2_3'] = this.inRange(b.A2_E1_2_4_2_3, 0, 99, -1) || c
      obj['A2_E1_2_4_2_area'] = this.normalizeArea(b.A2_E1_2_4_2_1, b.A2_E1_2_4_2_2, b.A2_E1_2_4_2_3) <= area || c
    }
    else if(b.A2_E1_2_4 == '3'){
      if(b.A2_E1_2_3 >= 1){
        obj['A2_E1_2_4_3_1_1'] = this.inRange(b.A2_E1_2_4_3_1_1, 0, 100, -1) || c
        obj['A2_E1_2_4_3_1_2'] = this.inRange(b.A2_E1_2_4_3_1_2, 0, 3, -1) || c
        obj['A2_E1_2_4_3_1_3'] = this.inRange(b.A2_E1_2_4_3_1_3, 0, 99, -1) || c
        obj['A2_E1_2_4_3_1_area'] = this.normalizeArea(b.A2_E1_2_4_3_1_1, b.A2_E1_2_4_3_1_2, b.A2_E1_2_4_3_1_3) <= area || c

        obj['A2_E1_2_5_1_1'] = this.inRange(Number(this.hasData(b.A2_E1_2_5_1_1) ? b.A2_E1_2_5_1_1.split('.')[0] : -1), 1, 12, -1) || c
        //console.log("1_1 = " + obj['A2_E1_2_5_1_1']) || c
        obj['A2_E1_2_5_1_2'] = this.inRange(Number(this.hasData(b.A2_E1_2_5_1_2) ? b.A2_E1_2_5_1_2.split('.')[0] : -1), 1, 12, -1) || c
        //console.log( "1_2 = " + obj['A2_E1_2_5_1_2']) || c
        obj['A2_E1_2_6_1'] = this.inRange(b.A2_E1_2_6_1, 0, 100, -1) || c
        obj['A2_E1_2_7_1'] = this.inRange(b.A2_E1_2_7_1, 1, 60, -1)  || c
          && ((b.A2_E1_2_7_1 == 0 && b.A2_E1_2_6_1 == 0) || (b.A2_E1_2_6_1 != 0)) || c
      }
      if(b.A2_E1_2_3 >= 2){
        obj['A2_E1_2_4_3_2_1'] = this.inRange(b.A2_E1_2_4_3_2_1, 0, 100, -1) || c
        obj['A2_E1_2_4_3_2_2'] = this.inRange(b.A2_E1_2_4_3_2_2, 0, 3, -1) || c
        obj['A2_E1_2_4_3_2_3'] = this.inRange(b.A2_E1_2_4_3_2_3, 0, 99, -1) || c
        obj['A2_E1_2_4_3_2_area'] = this.normalizeArea(b.A2_E1_2_4_3_2_1, b.A2_E1_2_4_3_2_2,b.A2_E1_2_4_3_2_3) <= area || c

        let a = {
          'start_previous' : this.hasData(b.A2_E1_2_5_1_1) ? Number(b.A2_E1_2_5_1_1.split('.')[0]) : -1,
          'end_previous' : this.hasData(b.A2_E1_2_5_1_2) ? Number(b.A2_E1_2_5_1_2.split('.')[0]) : -1,
          'start' : this.hasData(b.A2_E1_2_5_2_1) ? Number(b.A2_E1_2_5_2_1.split('.')[0]) : -1
        }
        obj['A2_E1_2_5_2_1'] = this.inRange(Number(this.hasData(b.A2_E1_2_5_2_1) ? b.A2_E1_2_5_2_1.split('.')[0] : -1), 1, 12, -1) && !this.isInPeriod(a) || c
        obj['A2_E1_2_5_2_2'] = this.inRange(Number(this.hasData(b.A2_E1_2_5_2_2) ? b.A2_E1_2_5_2_2.split('.')[0] : -1), 1, 12, -1)  || c
        obj['A2_E1_2_6_2'] = this.inRange(b.A2_E1_2_6_2, 0, 100, -1) || c
        obj['A2_E1_2_7_2'] = this.inRange(b.A2_E1_2_7_2, 0, 60, -1) 
          && ((b.A2_E1_2_7_2 == 0 && b.A2_E1_2_6_2 == 0) || (b.A2_E1_2_6_2 != 0)) || c
      }
      if(b.A2_E1_2_3 >= 3){
        obj['A2_E1_2_4_3_3_1'] = this.inRange(b.A2_E1_2_4_3_3_1, 0, 100, -1) || c
        obj['A2_E1_2_4_3_3_2'] = this.inRange(b.A2_E1_2_4_3_3_2, 0, 3, -1) || c
        obj['A2_E1_2_4_3_3_3'] = this.inRange(b.A2_E1_2_4_3_3_3, 0, 99, -1) || c
        obj['A2_E1_2_4_3_3_area'] = this.normalizeArea(b.A2_E1_2_4_3_3_1, b.A2_E1_2_4_3_3_2, b.A2_E1_2_4_3_3_3) <= area || c

        let a = {
          'start_previous' : this.hasData(b.A2_E1_2_5_2_1) ? Number(b.A2_E1_2_5_2_1.split('.')[0]) : -1,
          'end_previous' : this.hasData(b.A2_E1_2_5_2_2) ? Number(b.A2_E1_2_5_2_2.split('.')[0]) : -1,
          'start' : this.hasData(b.A2_E1_2_5_3_1) ? Number(b.A2_E1_2_5_3_1.split('.')[0]) : -1
        }
        obj['A2_E1_2_5_3_1'] = this.inRange(Number(this.hasData(b.A2_E1_2_5_3_1) ? b.A2_E1_2_5_3_1.split('.')[0] : -1), 1, 12, 1) && !this.isInPeriod(a) || c
        obj['A2_E1_2_5_3_2'] = this.inRange(Number(this.hasData(b.A2_E1_2_5_3_2) ? b.A2_E1_2_5_3_2.split('.')[0] : -1), 1, 12, 1) || c
        obj['A2_E1_2_6_3'] = this.inRange(b.A2_E1_2_6_3, 0, 100, -1) || c
        obj['A2_E1_2_7_3'] = this.inRange(b.A2_E1_2_7_3, 0, 60, -1) 
          && ((b.A2_E1_2_7_3 == 0 && b.A2_E1_2_6_3 == 0) || (b.A2_E1_2_6_3 != 0)) || c
      }
      if(b.A2_E1_2_3 >= 4){
        obj['A2_E1_2_4_3_4_1'] = this.inRange(b.A2_E1_2_4_3_4_1, 0, 100, -1) || c
        obj['A2_E1_2_4_3_4_2'] = this.inRange(b.A2_E1_2_4_3_4_2, 0, 3, -1) || c
        obj['A2_E1_2_4_3_4_3'] = this.inRange(b.A2_E1_2_4_3_4_3, 0, 99, -1) || c
        obj['A2_E1_2_4_3_4_area'] = this.normalizeArea(b.A2_E1_2_4_3_4_1, b.A2_E1_2_4_3_4_2, b.A2_E1_2_4_3_4_3) <= area || c

        let a = {
          'start_previous' : this.hasData(b.A2_E1_2_5_3_1) ? Number(b.A2_E1_2_5_3_1.split('.')[0]) : -1,
          'end_previous' : this.hasData(b.A2_E1_2_5_3_2) ? Number(b.A2_E1_2_5_3_2.split('.')[0]) : -1,
          'start' : this.hasData(b.A2_E1_2_5_4_1) ? Number(b.A2_E1_2_5_4_1.split('.')[0]) : -1
        }
        obj['A2_E1_2_5_4_1'] = this.inRange(Number(this.hasData(b.A2_E1_2_5_4_1) ? b.A2_E1_2_5_4_1.split('.')[0] : -1), 1, 12, 1) && !this.isInPeriod(a) || c
        obj['A2_E1_2_5_4_2'] = this.inRange(Number(this.hasData(b.A2_E1_2_5_4_2) ? b.A2_E1_2_5_4_2.split('.')[0] : -1), 1, 12, 1) || c
        obj['A2_E1_2_6_4'] = this.inRange(b.A2_E1_2_6_4, 0, 100, -1) || c
        obj['A2_E1_2_7_4'] = this.inRange(b.A2_E1_2_7_4, 0, 60, -1) 
          && ((b.A2_E1_2_7_4 == 0 && b.A2_E1_2_6_4 == 0) || (b.A2_E1_2_6_4 != 0)) || c
      }
    }
    if(b.A2_E1_2_3 >= 1){
        obj['A2_E1_2_5_1_1'] = this.inRange(this.hasData(b.A2_E1_2_5_1_1) ? Number(b.A2_E1_2_5_1_1.split('.')[0]) : -1, 1, 12, -1) || c
        //console.log("1_1 = " + obj['A2_E1_2_5_1_1'])
        obj['A2_E1_2_5_1_2'] = this.inRange(this.hasData(b.A2_E1_2_5_1_2) ? Number(b.A2_E1_2_5_1_2.split('.')[0]) : -1, 1, 12, -1) || c
        //console.log( "1_2 = " + obj['A2_E1_2_5_1_2'])
        obj['A2_E1_2_6_1'] = this.inRange(b.A2_E1_2_6_1, 0, 100, -1) || c
        obj['A2_E1_2_7_1'] = this.inRange(b.A2_E1_2_7_1, 0, 60, -1)  
          && ((b.A2_E1_2_7_1 == 0 && b.A2_E1_2_6_1 == 0) || (b.A2_E1_2_6_1 != 0)) || c
    }if(b.A2_E1_2_3 >= 2){
      let a = {
        'start_previous' : this.hasData(b.A2_E1_2_5_1_1) ? Number(b.A2_E1_2_5_1_1.split('.')[0]) : -1,
        'end_previous' : this.hasData(b.A2_E1_2_5_1_2) ? Number(b.A2_E1_2_5_1_2.split('.')[0]) : -1,
        'start' : this.hasData(b.A2_E1_2_5_2_1) ? Number(b.A2_E1_2_5_2_1.split('.')[0]) : -1
      }
      obj['A2_E1_2_5_2_1'] = (this.inRange(this.hasData(b.A2_E1_2_5_2_1) ? Number(b.A2_E1_2_5_2_1.split('.')[0]) : -1, 1, 12, -1) && !this.isInPeriod(a)) || c
      obj['A2_E1_2_5_2_2'] = this.inRange(this.hasData(b.A2_E1_2_5_2_2) ? Number(b.A2_E1_2_5_2_2.split('.')[0]) : -1, 1, 12, -1)  || c
      obj['A2_E1_2_6_2'] = this.inRange(b.A2_E1_2_6_2, 0, 100, -1) || c
      obj['A2_E1_2_7_2'] = this.inRange(b.A2_E1_2_7_2, 0, 60, -1) 
        && ((b.A2_E1_2_7_2 == 0 && b.A2_E1_2_6_2 == 0) || (b.A2_E1_2_6_2 != 0)) || c
    }if(b.A2_E1_2_3 >= 3){
      let a = {
        'start_previous' : this.hasData(b.A2_E1_2_5_2_1) ? Number(b.A2_E1_2_5_2_1.split('.')[0]) : -1,
        'end_previous' : this.hasData(b.A2_E1_2_5_2_2) ? Number(b.A2_E1_2_5_2_2.split('.')[0]) : -1,
        'start' : this.hasData(b.A2_E1_2_5_3_1) ? Number(b.A2_E1_2_5_3_1.split('.')[0]) : -1
      }
      obj['A2_E1_2_5_3_1'] = this.inRange(this.hasData(b.A2_E1_2_5_3_1) ? Number(b.A2_E1_2_5_3_1.split('.')[0]) : -1, 1, 12, 1) &&  !this.isInPeriod(a) || c
      obj['A2_E1_2_5_3_2'] = this.inRange(this.hasData(b.A2_E1_2_5_3_1) ? Number(b.A2_E1_2_5_3_2.split('.')[0]) : -1, 1, 12, 1) || c
      obj['A2_E1_2_6_3'] = this.inRange(b.A2_E1_2_6_3, 0, 100, -1) || c
      obj['A2_E1_2_7_3'] = this.inRange(b.A2_E1_2_7_3, 0, 60, -1)
        && ((b.A2_E1_2_7_3 == 0 && b.A2_E1_2_6_3 == 0) || (b.A2_E1_2_6_3 != 0))  || c
    }if(b.A2_E1_2_4 >= 4){
      let a = {
        'start_previous' : this.hasData(b.A2_E1_2_5_3_1) ? Number(b.A2_E1_2_5_3_1.split('.')[0]) : -1,
        'end_previous' : this.hasData(b.A2_E1_2_5_3_2) ? Number(b.A2_E1_2_5_3_2.split('.')[0]) : -1,
        'start' : this.hasData(b.A2_E1_2_5_4_1) ? Number(b.A2_E1_2_5_4_1.split('.')[0]) : -1
      }
      obj['A2_E1_2_5_4_1'] = this.inRange(this.hasData(b.A2_E1_2_5_4_1) ? Number(b.A2_E1_2_5_4_1.split('.')[0]) : -1, 1, 12, 1)  && !this.isInPeriod(a) || c
      obj['A2_E1_2_5_4_2'] = this.inRange(this.hasData(b.A2_E1_2_5_4_2) ? Number(b.A2_E1_2_5_4_2.split('.')[0]) : -1, 1, 12, 1) || c
      obj['A2_E1_2_6_4'] = this.inRange(b.A2_E1_2_6_4, 0, 100, -1) || c
      obj['A2_E1_2_7_4'] = this.inRange(b.A2_E1_2_7_4, 0, 60, -1)
        && ((b.A2_E1_2_7_4 == 0 && b.A2_E1_2_6_4 == 0) || (b.A2_E1_2_6_4 != 0)) || c
    }
    obj['A2_E1_2_8'] = b.A2_E1_2_8 === true || b.A2_E1_2_8 === false || c
    obj['A2_E1_2_9_8_1'] = this.chosenAtLeastOne(b, 'A2_E1_2_9_', 8) && (!b.A2_E1_2_9_8 || (b.A2_E1_2_9_8 && this.hasData(b.A2_E1_2_9_8_1)))  || c
    //console.log('validate rice result is : ')
    //console.log(obj)
    return obj
  }
  validateRice(info : any){
    //console.log("-------------A2_E1_1-------------")
    //console.log(info.A2_E1_1);
    if(info.A2_E1_1 === true)
      this.validator['A2_E1_2'] = !isNaN(Number(info.A2_E1_2)) && info.A2_E1_2 > 0 && info.A2_E1_2 <= 20 || !info.A2_E1_1
    else if(info.A2_E1_1 === false)
      this.validator['A2_E1_2'] = true
    else
      this.validator['A2_E1_2'] = false
    if(this.validator.A2_E1_2){
      for(let i = 0;i < info.A2_E1_2;i++){
        if(('A2_E1' in info)){
          if(i < this.validator['A2_E1'].length){
            this.validator['A2_E1'][i] = this.validateRiceInfo(info.A2_E1[i] ,!info.A2_E1_1 )
          }else{
            this.validator['A2_E1'].push(this.validateRiceInfo(info.A2_E1[i] ,!info.A2_E1_1))
          }
        }
      }
      this.validator['A2_E1'].splice(info.A2_E1_2)
    }
    
    return this.hasvalue(this.validator,false)
  }
  validateTreeRaiInfo(b : any,c:boolean){
    let obj = {}
    //console.log('TreeRai')
    //console.log(b)
    //obj['A2_E2_2'] = this.inRange(b.A2_E2_2, 1, 20 ,-1) || c
    obj['A2_E2_2_1_CWT'] = b.A2_E2_2_1_CWT !== '' || c
    obj['A2_E2_2_1_AMP'] = b.A2_E2_2_1_AMP !== '' || c
    obj['A2_E2_2_1_TMB'] = b.A2_E2_2_2_TMB !== '' || c
    obj['A2_E2_2_2_1'] = this.inRange(b.A2_E2_2_2_1, 0, 999, -1) || c
    obj['A2_E2_2_2_2'] = this.inRange(b.A2_E2_2_2_2, 0, 3, -1) || c
    obj['A2_E2_2_2_3'] = this.inRange(b.A2_E2_2_2_3, 0, 99, -1) || c
    if(b.A2_E2_2_2_1 == 0 && b.A2_E2_2_2_2 == 0 && b.A2_E2_2_2_3 == 0){
      obj['A2_E2_2_2_1'] = false || c
      obj['A2_E2_2_2_2'] = false || c
      obj['A2_E2_2_2_3'] = false || c
    }
    obj['A2_E2_2_3'] = b.A2_E2_2_3 === true || b.A2_E2_2_3 === false || c
    obj['A2_E2_2_4'] = (b.A2_E2_2_4 == null ? false : this.inRange(b.A2_E2_2_4.length, 1, 5, -1)) || c
    obj['A2_E2_2_5_9_1'] = this.chosenAtLeastOne(b, 'A2_E2_2_5_', 9) && (!b.A2_E2_2_5_9 || (b.A2_E2_2_5_9 && this.hasData(b.A2_E2_2_5_9_1))) || c
    return obj
  }
  validateTreeRai(info : any){
    //console.log('treerai')
    //console.log(info)
    if(info.A2_E2_1 === true)
      this.validator.A2_E2_2 = (!isNaN(Number(info.A2_E2_2)) && info.A2_E2_2 > 0 && info.A2_E2_2 <= 20) || !info.A2_E2_1
    else if(info.A2_E2_1 === false)
      this.validator.A2_E2_2 = true
    else
      this.validator.A2_E2_2 = false
    if(this.validator.A2_E2_2){
      for(let i = 0;i < info.A2_E2_2;i++){
        if('A2_E2' in info){
          if(i < this.validator['A2_E2'].length){
            //console.log(info)
            //console.log(info.A2_E2[i])
            this.validator['A2_E2'][i] = this.validateTreeRaiInfo(info.A2_E2[i],!info.A2_E2_1) 
          }else{
            //console.log(info)
            //console.log(info.A2_E2[i])
            this.validator['A2_E2'].push(this.validateTreeRaiInfo(info.A2_E2[i],!info.A2_E2_1)) 
          }
        } 
      }
      this.validator['A2_E2'].splice(info.A2_E2_2)
    }
    
  }
  validateYangInfo(b : any,c:boolean){
    let obj = {}
    //obj['A2_E3_2'] = this.inRange(b.A2_E3_2, 1, 20, -1) || c
    obj['A2_E3_2_1_CWT'] = b.A2_E3_2_1_CWT !== '' || c
    obj['A2_E3_2_1_AMP'] = b.A2_E3_2_1_AMP !== '' || c
    obj['A2_E3_2_1_TMB'] = b.A2_E3_2_1_TMB !== '' || c
    obj['A2_E3_2_2_1'] = this.inRange(b.A2_E3_2_2_1, 0, 999, -1) || c
    obj['A2_E3_2_2_2'] = this.inRange(b.A2_E3_2_2_2, 0, 3, -1) || c
    obj['A2_E3_2_2_3'] = this.inRange(b.A2_E3_2_2_3, 0, 99, -1) || c
    if(b.A2_E3_2_2_1 == 0 && b.A2_E3_2_2_2 == 0 && b.A2_E3_2_2_3 == 0){
      obj['A2_E3_2_2_1'] = false || c
      obj['A2_E3_2_2_2'] = false || c
      obj['A2_E3_2_2_3'] = false || c
    }
    obj['A2_E3_2_3'] = b.A2_E3_2_3 == true || b.A2_E3_2_3 == false || c
    obj['A2_E3_2_4_9_1'] = this.chosenAtLeastOne(b, 'A2_E3_2_4_', 9) && (!b.A2_E3_2_4_9 || (b.A2_E3_2_4_9 && this.hasData(b.A2_E3_2_4_9_1))) || c
    return obj
  }
  validateYang(info : any){
    if(info.A2_E3_1 === true)
      this.validator.A2_E3_2 = (!isNaN(Number(info.A2_E3_2)) && info.A2_E3_2 > 0 && info.A2_E3_2 < 20)
    else if(info.A2_E3_1 === false)
      this.validator.A2_E3_2 = true
    else
      this.validator.A2_E3_2 = false
    if(this.validator.A2_E3_2){
      for(let i = 0;i< info.A2_E3_2;i++){
        if('A2_E3' in info){
          if(i < this.validator['A2_E3'].length){
            this.validator['A2_E3'][i] = this.validateYangInfo(info.A2_E3[i],!info.A2_E3_1) 
          }else{
            this.validator['A2_E3'].push(this.validateYangInfo(info.A2_E3[i],!info.A2_E3_1)) 
          }
        }
      }
      this.validator['A2_E3'].splice(info.A2_E3_2)
    }
    
    return null
  }
  validateTreeTonInfo(b : any,c:boolean){
    let obj = {}
    //obj['A2_E4_2'] = this.inRange(b.A2_E4_2, 1, 20, -1) || c
    obj['A2_E4_2_1_CWT'] = b.A2_E4_2_1_CWT !== '' || c
    obj['A2_E4_2_1_AMP'] = b.A2_E4_2_1_AMP !== '' || c
    obj['A2_E4_2_1_TMB'] = b.A2_E4_2_1_TMB !== '' || c
    obj['A2_E4_2_2_1'] = this.inRange(b.A2_E4_2_2_1, 0, 999, -1) || c
    obj['A2_E4_2_2_2'] = this.inRange(b.A2_E4_2_2_2, 0, 3, -1) || c
    obj['A2_E4_2_2_3'] = this.inRange(b.A2_E4_2_2_3, 0, 99, -1) || c
    if(b.A2_E4_2_2_1 == 0 && b.A2_E4_2_2_2 == 0 && b.A2_E4_2_2_3 == 0){
      obj['A2_E4_2_2_1'] = false || c
      obj['A2_E4_2_2_2'] = false || c
      obj['A2_E4_2_2_3'] = false || c
    }
    obj['A2_E4_2_3'] = b.A2_E4_2_3 === true || b.A2_E4_2_3 === false || c
    obj['A2_E4_2_4'] = b.A2_E4_2_4 == null ? false : this.inRange(b.A2_E4_2_4.length, 1, 5, -1) || c
    obj['A2_E4_2_5_9_1'] = this.chosenAtLeastOne(b, 'A2_E4_2_5_', 9) && (!b.A2_E4_2_5_9 || (b.A2_E4_2_5_9 && this.hasData(b.A2_E4_2_5_9_1))) || c
    return obj 
  }
  validateTreeTon(info : any){
    if(info.A2_E4_1 === true)
      this.validator.A2_E4_2 = (!isNaN(Number(info.A2_E4_2)) && info.A2_E4_2 > 0 && info.A2_E4_2 < 20 ) || !info.A2_E4_1
    else if(info.A2_E4_1 === false)
      this.validator.A2_E4_2 = true
    else
      this.validator.A2_E4_2 = false
    if(this.validator.A2_E4_2){
      for(let i = 0;i < info.A2_E4_2;i++){
          if('A2_E4' in info){
            if(i < this.validator['A2_E4'].length){
              this.validator['A2_E4'][i] = this.validateTreeTonInfo(info.A2_E4[i],!info.A2_E4_1) 
            }else{
              this.validator['A2_E4'].push(this.validateTreeTonInfo(info.A2_E4[i],!info.A2_E4_1)) 
            }
          }
      }
      this.validator['A2_E4'].splice(Number(info.A2_E4_2))
    }
    return null
  }
  validateTreeVetInfo(b : any,c:boolean){
    let obj = {}
    //obj['A2_E5_2'] = this.inRange(b.A2_E5_2, 1, 20, -1) || c
    obj['A2_E5_2_1_CWT'] = b.A2_E5_2_1_CWT !== '' || c
    obj['A2_E5_2_1_AMP'] = b.A2_E5_2_1_AMP !== '' || c
    obj['A2_E5_2_1_TMB'] = b.A2_E5_2_1_TMB !== '' || c
    obj['A2_E5_2_2_1'] = this.inRange(b.A2_E5_2_2_1, 0, 999, -1) || c
    obj['A2_E5_2_2_2'] = this.inRange(b.A2_E5_2_2_2, 0, 3, -1) || c
    obj['A2_E5_2_2_3'] = this.inRange(b.A2_E5_2_2_3, 0, 99, -1) || c
    if(b.A2_E5_2_2_1 == 0 && b.A2_E5_2_2_2 == 0 && b.A2_E5_2_2_3 == 0){
      obj['A2_E5_2_2_1'] = false || c
      obj['A2_E5_2_2_2'] = false || c
      obj['A2_E5_2_2_3'] = false || c
    }
    obj['A2_E5_2_3'] = b.A2_E5_2_3 === true || b.A2_E5_2_3 === false || c
    obj['A2_E5_2_4'] = b.A2_E5_2_4 == null ? false : this.inRange(b.A2_E5_2_4.length, 1, 5, -1) || c
    obj['A2_E5_2_5'] = b.A2_E5_2_5 == 1 || b.A2_E5_2_5 == 2 || c
    obj['A2_E5_2_5_2'] = (b.A2_E5_2_5 == 1 ? true : !(b.A2_E5_2_5_2 == undefined || b.A2_E5_2_5_2 == null || b.A2_E5_2_5_2 == "")) || c
    obj['A2_E5_2_6_9_1'] = this.chosenAtLeastOne(b, 'A2_E5_2_6_', 9) && (!b.A2_E5_2_6_9 || (b.A2_E5_2_6_9 && this.hasData(b.A2_E5_2_6_9_1))) || c
    return obj
  }
  validateTreeVet(info : any){
    if(info.A2_E5_1 === true)
      this.validator.A2_E5_2 = (!isNaN(Number(info.A2_E5_2)) && info.A2_E5_2 > 0 && info.A2_E5_2 < 20) || !info.A2_E5_1
    else if(info.A2_E5_1 === false)
      this.validator.A2_E5_2 = true
    else
      this.validator.A2_E5_2 = false

    if(this.validator.A2_E5_2){
      for(let i = 0 ; i<info.A2_E5_2 ; i++){
        if('A2_E5' in info){
          if(i < this.validator['A2_E5'].length){
            this.validator['A2_E5'][i] = this.validateTreeVetInfo(info.A2_E5[i],!info.A2_E5_1) 
          }else{
            this.validator['A2_E5'].push(this.validateTreeVetInfo(info.A2_E5[i],!info.A2_E5_1)) 
          }
        }
      }
      this.validator['A2_E5'].splice(info.A2_E5_2)
    }
    return null
  }
  validateTreePadInfo(b : any,c:boolean){
    let obj = {}
    //obj['A2_E6_2'] = this.inRange(b.A2_E6_2, 1, 20, -1) || c
    obj['A2_E6_2_1_CWT'] = b.A2_E6_2_1_CWT !== '' || c
    obj['A2_E6_2_1_AMP'] = b.A2_E6_2_1_AMP !== '' || c
    obj['A2_E6_2_1_TMB'] = b.A2_E6_2_1_TMB !== '' || c
    obj['A2_E6_2_2_1'] = this.inRange(b.A2_E6_2_2_1, 0, 999, -1) || c
    obj['A2_E6_2_2_2'] = this.inRange(b.A2_E6_2_2_2, 0, 3, -1) || c
    obj['A2_E6_2_2_3'] = this.inRange(b.A2_E6_2_2_3, 0, 99, -1) || c
    if(b.A2_E6_2_2_1 == 0 && b.A2_E6_2_2_2 == 0 && b.A2_E6_2_2_3 == 0){
      obj['A2_E6_2_2_1'] = false || c
      obj['A2_E6_2_2_2'] = false || c
      obj['A2_E6_2_2_3'] = false || c
    }
    obj['A2_E6_2_3'] = b.A2_E6_2_3 === true || b.A2_E6_2_3 === false || c
    obj['A2_E6_2_4'] = b.A2_E6_2_4 == null ? false : this.inRange(b.A2_E6_2_4.length, 1, 5, -1) || c
    obj['A2_E6_2_5'] = b.A2_E6_2_5 == 1 || b.A2_E6_2_5 == 2 || c
    obj['A2_E6_2_5_2'] = b.A2_E6_2_5 == 1 ? true : !(b.A2_E6_2_5_2 == undefined || b.A2_E6_2_5_2 == null || b.A2_E6_2_5_2 == "") || c
    obj['A2_E6_2_6_9_1'] = this.chosenAtLeastOne(b, 'A2_E6_2_6_', 9)&& (!b.A2_E6_2_6_9 || (b.A2_E6_2_6_9 && this.hasData(b.A2_E6_2_6_9_1))) || c
    return obj
  }
  validateTreePad(info : any){
    if(info.A2_E6_1 === true)
      this.validator.A2_E6_2 = (!isNaN(Number(info.A2_E6_2)) && info.A2_E6_2 > 0 && info.A2_E6_2 < 20 ) || !info.A2_E6_1 
    else if(info.A2_E6_1 === false)
      this.validator.A2_E6_2 = true
    else
      this.validator.A2_E6_2 = false

    if(this.validator.A2_E6_2){
      for(let i=0;i<info.A2_E6_2;i++){
        if('A2_E6' in info){
          if(i < this.validator['A2_E6'].length){
            this.validator['A2_E6'][i] = this.validateTreePadInfo(info.A2_E6[i],!info.A2_E6_1) 
          }else{
            this.validator['A2_E6'].push(this.validateTreePadInfo(info.A2_E6[i],!info.A2_E6_1))
          }
        }
      }
      this.validator['A2_E6'].splice(info.A2_E6_2)
    }
  }
  validateMushroomInfo(b : any,c:boolean){
    let obj = {}
    //obj['A2_E7_2'] = this.inRange(b.A2_E7_2, 1, 20, -1) || c
    obj['A2_E7_2_1_CWT'] = b.A2_E7_2_1_CWT !== '' || c
    obj['A2_E7_2_1_AMP'] = b.A2_E7_2_1_AMP !== '' || c
    obj['A2_E7_2_1_TMB'] = b.A2_E7_2_1_TMB !== '' || c
    //obj['A2_E7_2_2_1'] = this.inRange(b.A2_E7_2_2_1, 1, 999, -1) || c
    //obj['A2_E7_2_2_2'] = this.inRange(b.A2_E7_2_2_2, 1, 3, -1) || c
    //obj['A2_E7_2_2_3'] = this.inRange(b.A2_E7_2_2_3, 1, 99, -1) || c
    obj['A2_E7_2_2'] = this.inRange(Number(b.A2_E7_2_2),1,99999,-1)
    obj['A2_E7_2_3']  = b.A2_E7_2_3 === true || b.A2_E7_2_3 === false
    obj['A2_E7_2_4_9_1'] = this.chosenAtLeastOne(b, 'A2_E7_2_4_', 9) && (!b.A2_E7_2_4_9_1 || (b.A2_E7_2_4_9 && this.hasData(b.A2_E7_2_4_9_1))) || c
    return obj
  }
  validateMushroom(info :  any){
    if(info.A2_E7_1 === true)
      this.validator.A2_E7_2 = (!isNaN(Number(info.A2_E7_2)) && info.A2_E7_2 > 0 && info.A2_E7_2 < 20) || !info.A2_E7_1
    else if(info.A2_E7_1 === false)
      this.validator.A2_E7_2 = true
    else
      this.validator.A2_E7_2 = false

    if(this.validator.A2_E7_2){
      for(let i = 0;i < info.A2_E7_2;i++){
        if('A2_E7' in info){
          if(i < this.validator['A2_E7'].length){
            this.validator['A2_E7'][i] = this.validateMushroomInfo(info.A2_E7[i],!info.A2_E7_1) 
          }else{
            this.validator['A2_E7'].push(this.validateMushroomInfo(info.A2_E7[i],!info.A2_E7_1)) 
          }
        }
      }
      this.validator['A2_E7'].splice(info.A2_E7_2)
    }
    
  }
  validateAnimal(info : any){
    //console.log('info in validate animal')
    //console.log(info)
    let obj = {}
    obj['A2_E8'] = {}
    //console.log(info.A2_E8_2_1_0)
    //console.log("in range : " + this.inRange(Number(info.A2_E8_2_1), 1, 100000, -1))
    if(info.A2_E8_1){
      obj['A2_E8']['A2_E8_2_1'] = !info.A2_E8_2_1_0 || (info.A2_E8_2_1_0 && this.inRange(Number(info.A2_E8_2_1), 1, 100000, -1)) ||  !info.A2_E8_1
      obj['A2_E8']['A2_E8_2_2'] = !info.A2_E8_2_2_0 || (info.A2_E8_2_2_0 && this.inRange(Number(info.A2_E8_2_2), 1, 100000, -1)) ||  !info.A2_E8_1
      obj['A2_E8']['A2_E8_2_3'] = !info.A2_E8_2_3_0 || (info.A2_E8_2_3_0 && this.inRange(Number(info.A2_E8_2_3), 1, 100000, -1)) ||  !info.A2_E8_1
      obj['A2_E8']['A2_E8_2_4'] = !info.A2_E8_2_4_0 || (info.A2_E8_2_4_0 && this.inRange(Number(info.A2_E8_2_4), 1, 100000, -1)) ||  !info.A2_E8_1
      obj['A2_E8']['A2_E8_2_5'] = !info.A2_E8_2_5_0 || (info.A2_E8_2_5_0 && this.inRange(Number(info.A2_E8_2_5), 1, 100000, -1)) ||  !info.A2_E8_1
      obj['A2_E8']['A2_E8_2_6'] = !info.A2_E8_2_6_0 || (info.A2_E8_2_6_0 && this.inRange(Number(info.A2_E8_2_6), 1, 100000, -1)) ||  !info.A2_E8_1
      obj['A2_E8']['A2_E8_2_7'] = !info.A2_E8_2_7_0 || (info.A2_E8_2_7_0 && this.inRange(Number(info.A2_E8_2_7), 1, 100000, -1)) ||  !info.A2_E8_1
      obj['A2_E8']['A2_E8_2_8'] = !info.A2_E8_2_8_0 || (info.A2_E8_2_8_0 && this.inRange(Number(info.A2_E8_2_8), 1, 100000, -1)) ||  !info.A2_E8_1
      obj['A2_E8']['A2_E8_2_9'] = !info.A2_E8_2_9_0 || (info.A2_E8_2_9_0 && this.inRange(Number(info.A2_E8_2_9), 1, 100000, -1)) ||  !info.A2_E8_1
      obj['A2_E8']['A2_E8_2_10'] = !info.A2_E8_1 || !info.A2_E8_2_10_0 || (info.A2_E8_2_10_0 && this.hasData(info.A2_E8_2_10_1)
                            && this.inRange(info.A2_E8_2_8, 1, 100000, -1)) || !info.A2_E8_1
      obj['A2_E8']['A2_E8_3_9_1'] = (this.chosenAtLeastOne(info, 'A2_E8_3_', 9) && (!info.A2_E8_3_9 || (info.A2_E8_3_9 && this.hasData(info.A2_E8_3_9_1)))) || !info.A2_E8_1
      obj['A2_E8']['A2_E8_no_data'] = !(!info.A2_E8_2_1_0 && !info.A2_E8_2_2_0 && !info.A2_E8_2_3_0 && !info.A2_E8_2_4_0 &&
                            !info.A2_E8_2_5_0 && !info.A2_E8_2_6_0 && !info.A2_E8_2_7_0 && !info.A2_E8_2_8_0 &&
                            !info.A2_E8_2_9_0) || !info.A2_E8_1
    }else{
      obj['A2_E8']['A2_E8_2_1'] = true;
    }
    Object.assign(this.validator, obj) 
    return obj
  }
  validateAquatic(info : any){
    
    
    //console.log("validate aquatic")
    //console.log(info)
    let no_check = {
      'no_check' : true
    }
    if(info.A2_E9_1_1 === true)
      this.validateFish(info.A2_E9_1_1_1, 'A2_E9_1_1_1')
    else
      this.validator['A2_E9_1_1_1'] = no_check
    if(info.A2_E9_1_2 === true)
      this.validateFish(info.A2_E9_1_1_2, 'A2_E9_1_1_2')
    else
      this.validator['A2_E9_1_1_2'] = no_check
    if(info.A2_E9_1_3 === true)
      this.validateFrog(info.A2_E9_1_1_3)
    else
      this.validator['A2_E9_1_1_3'] = no_check
    if(info.A2_E9_1_4 === true)
      this.validateCroc(info.A2_E9_1_1_4, 'A2_E9_1_1_4')
    else
      this.validator['A2_E9_1_1_4'] = no_check
    if(info.A2_E9_1_5 === true)
      this.validateCroc(info.A2_E9_1_1_5, 'A2_E9_1_1_5')
    else
      this.validator['A2_E9_1_1_5'] = no_check
    if(info.A2_E9_1_6 === true)
      this.validateFish(info.A2_E9_1_1_6, 'A2_E9_1_1_6')
    else
      this.validator['A2_E9_1_1_6'] = no_check
    if(info.A2_E9_1_7 === true)
      this.validateFish(info.A2_E9_1_1_7, 'A2_E9_1_1_7')
    else
      this.validator['A2_E9_1_1_7'] = no_check
    if(info.A2_E9_1_8 === true)
      this.validateCroc(info.A2_E9_1_1_8, 'A2_E9_1_1_8')
    else
      this.validator['A2_E9_1_1_8'] = no_check
    if(info.A2_E9_1_9 === true)
      this.validateFish(info.A2_E9_1_1_9, 'A2_E9_1_1_9')
    else
      this.validator['A2_E9_1_1_9'] = no_check

    let obj = {}
    obj['A2_E9_1_1'] = info.A2_E9_1_1 === true || info.A2_E9_1_1 === false 
    obj['A2_E9_1_2'] = info.A2_E9_1_2 === true || info.A2_E9_1_2 === false
    obj['A2_E9_1_3'] = info.A2_E9_1_3 === true || info.A2_E9_1_3 === false
    obj['A2_E9_1_4'] = info.A2_E9_1_4 === true || info.A2_E9_1_4 === false
    obj['A2_E9_1_5'] = info.A2_E9_1_5 === true || info.A2_E9_1_5 === false
    obj['A2_E9_1_6'] = info.A2_E9_1_6 === true || info.A2_E9_1_6 === false
    obj['A2_E9_1_7'] = info.A2_E9_1_7 === true || info.A2_E9_1_7 === false
    obj['A2_E9_1_8'] = info.A2_E9_1_8 === true || info.A2_E9_1_8 === false
    obj['A2_E9_1_9'] = info.A2_E9_1_9 === true || info.A2_E9_1_9 === false
    //console.log('A2_E9_1_9 = ' + obj['A2_E9_1_9'] + " " + info.A2_E9_1_9)
    // this.validator['A2_E9_S'] = obj['A2_E9_1_1'] && obj['A2_E9_1_2'] && obj['A2_E9_1_3'] && obj['A2_E9_1_4'] 
    //                 && obj['A2_E9_1_5'] && obj['A2_E9_1_6'] && obj['A2_E9_1_7'] && obj['A2_E9_1_8']
    //                 && obj['A2_E9_1_9']
    this.validator['A2_E9_S'] = this.chosenAtLeastOne(info, 'A2_E9_1_', 9)
    return null
  }
  validateFish(info : any, key : string){
    let obj = {}
    //console.log("validate fish" + key)
    //console.log(info)
    obj['A2_E9_1_1_1'] = info.A2_E9_1_1_1_1 || info.A2_E9_1_1_1_2 || info.A2_E9_1_1_1_3 
                        || info.A2_E9_1_1_1_4 || (info.A2_E9_1_1_1_5 && info.A2_E9_1_1_1_5_1 !== '')
    obj['A2_E9_1_1_1_5_1'] = (!info.A2_E9_1_1_1_5 || (info.A2_E9_1_1_1_5 && info.A2_E9_1_1_1_5_1 !== '')) && this.chosenAtLeastOne(info, 'A2_E9_1_1_1_',5 )
    if(info.A2_E9_1_1_1_1 || info.A2_E9_1_1_1_2){
      obj['A2_E9_1_1_2'] = this.inRange(info.A2_E9_1_1_2, 1, 99, -1)
      obj['A2_E9_1_1_2_1'] = info.A2_E9_1_1_2_1 === true || info.A2_E9_1_1_2_1 === false
      obj['A2_E9_1_1_2_2'] = info.A2_E9_1_1_2_1 ? this.validateFishInfo(info.A2_E9_1_1_2_2, false) 
                            : this.validateFishInfo(info.A2_E9_1_1_2_2, true)
      obj['A2_E9_1_1_3'] = this.inRange(info.A2_E9_1_1_3, 1, 9999999, -1)
      obj['A2_E9_1_1_4_9_1'] = (!info.A2_E9_1_1_4_9 || (info.A2_E9_1_1_4_9 && this.hasData(info.A2_E9_1_1_4_9_1))) && this.chosenAtLeastOne(info, 'A2_E9_1_1_4_', 9)
    }
    
    this.validator[key] = obj
    //console.log("validate fish " + key + "end")
    return true
  }
  validateFishInfo(info : any, loop : boolean){
    //input fishinfo each pool
    if(info===undefined)
      return []
    let l = []
    //console.log("validate fish info")
    //console.log(info)
    let p = info.length
    if(!loop)
      p = 1
    if(info.length == 0)
      p = 0
    
    for(let i = 0; i < p ;i++ ){
      let obj = {}
      if(info[i].A2_E9_1_1_2_2_0 == 1){
        obj['A2_E9_1_1_2_2_0'] = 1;
        obj['A2_E9_1_1_2_2_1_1'] = this.inRange(info[i].A2_E9_1_1_2_2_1_1, 1, 99999, -1)
        obj['A2_E9_1_1_2_2_2_R'] = true
        obj['A2_E9_1_1_2_2_3_R'] = true
        obj['A2_E9_1_1_2_2_4_R'] = true
      }else if(info[i].A2_E9_1_1_2_2_0 == 2){
        obj['A2_E9_1_1_2_2_0'] = 2;
        obj['A2_E9_1_1_2_2_2_1'] = this.inRange(info[i].A2_E9_1_1_2_2_2_1, 0, 999, -1)
        obj['A2_E9_1_1_2_2_2_2'] = this.inRange(info[i].A2_E9_1_1_2_2_2_2, 0, 3, -1)
        obj['A2_E9_1_1_2_2_2_3'] = this.inRange(info[i].A2_E9_1_1_2_2_2_3, 0, 99, -1)
        obj['A2_E9_1_1_2_2_2_4'] = this.inRange(info[i].A2_E9_1_1_2_2_2_4, 0, 99, -1) && !(info[i].A2_E9_1_1_2_2_2_1 == 0 
          && info[i].A2_E9_1_1_2_2_2_2 == 0 && info[i].A2_E9_1_1_2_2_2_3 == 0 && info[i].A2_E9_1_1_2_2_2_4 == 0)
        obj['A2_E9_1_1_2_2_1_1'] = true
        obj['A2_E9_1_1_2_2_2_R'] = obj['A2_E9_1_1_2_2_2_1'] && obj['A2_E9_1_1_2_2_2_2'] && obj['A2_E9_1_1_2_2_2_3'] && obj['A2_E9_1_1_2_2_2_4']
        obj['A2_E9_1_1_2_2_3_R'] = true
        obj['A2_E9_1_1_2_2_4_R'] = true
      }else if(info[i].A2_E9_1_1_2_2_0 == 3){
        obj['A2_E9_1_1_2_2_0'] = 3;
        obj['A2_E9_1_1_2_2_3_1_1'] = this.inRange(info[i].A2_E9_1_1_2_2_3_1_1, 0, 999, -1);
        obj['A2_E9_1_1_2_2_3_1_2'] = this.inRange(info[i].A2_E9_1_1_2_2_3_1_2, 0, 999, -1)
        obj['A2_E9_1_1_2_2_3_1_3'] = this.inRange(info[i].A2_E9_1_1_2_2_3_1_3, 0, 99, -1) && !(info[i].A2_E9_1_1_2_2_3_1_1 == 0
          && info[i].A2_E9_1_1_2_2_3_1_2 == 0 && info[i].A2_E9_1_1_2_2_3_1_3 == 0)
        obj['A2_E9_1_1_2_2_1_1'] = true
        obj['A2_E9_1_1_2_2_2_R'] = true
        obj['A2_E9_1_1_2_2_3_R'] =  obj['A2_E9_1_1_2_2_3_1_1'] && obj['A2_E9_1_1_2_2_3_1_2'] && obj['A2_E9_1_1_2_2_3_1_3']
        obj['A2_E9_1_1_2_2_4_R'] = true
      }else if(info[i].A2_E9_1_1_2_2_0 == 4){
        obj['A2_E9_1_1_2_2_0'] = 4
        obj['A2_E9_1_1_2_2_3_2_1'] = this.inRange(info[i].A2_E9_1_1_2_2_3_2_1, 0, 99, -1)
        obj['A2_E9_1_1_2_2_3_2_2'] = this.inRange(info[i].A2_E9_1_1_2_2_3_2_2, 0, 99, -1) && !(info[i].A2_E9_1_1_2_2_3_2_1 == 0 
          && info[i].A2_E9_1_1_2_2_3_2_2 ==0)
        obj['A2_E9_1_1_2_2_1_1'] = true
        obj['A2_E9_1_1_2_2_2_R'] = true
        obj['A2_E9_1_1_2_2_3_R'] = true
        obj['A2_E9_1_1_2_2_4_R'] = obj['A2_E9_1_1_2_2_3_2_1'] && obj['A2_E9_1_1_2_2_3_2_2']
      }
      info[i].A2_E9_1_1_2_2_1_1 = this.calculateCap(info[i])
      //console.log("---calculate cap---")
      //console.log(this.calculateCap(info[i]))
      l.push(obj)
    }
   
    //console.log('llllllllllllllllllll')
    //console.log(l)
    return l
  }
  validateFrog(info : any){
    let obj = {}
    //console.log('validateFrog')
    obj['A2_E9_1_3_1'] = info.A2_E9_1_3_1_1 || info.A2_E9_1_3_1_2 || (info.A2_E9_1_3_1_3 && this.hasData(info.A2_E9_1_3_1_3))
    obj['A2_E9_1_3_2'] = this.inRange(info.A2_E9_1_3_3, 1, 9999999, -1)
    obj['A2_E9_1_3_3'] = (!info.A2_E9_1_3_4_9 || (info.A2_E9_1_3_4_9 && this.hasData(info.A2_E9_1_3_4_9_1)))
      && this.chosenAtLeastOne(info, 'A2_E9_1_3_4_', 9)
    this.validator['A2_E9_1_1_3'] = obj
    //console.log(obj)
    return null
  }
  validateCroc(info : any, key : string){
    //console.log("validate croc" +  key)
    let obj = {}
    obj['A2_E9_1_4_1_2_1'] = (info.A2_E9_1_4_1_1 || info.A2_E9_1_4_1_2) && (!info.A2_E9_1_4_1_2 || (info.A2_E9_1_4_1_2 && this.hasData(info.A2_E9_1_4_1_2_1)))
    if(info.A2_E9_1_4_1_1 === true){
      obj['A2_E9_1_4_2'] = this.inRange(info.A2_E9_1_4_2, 1, 20, -1)
      obj['A2_E9_1_4_2_1'] = info.A2_E9_1_4_2_1 === true || info.A2_E9_1_4_2_2 === false
      obj['A2_E9_1_4_2_2'] = info.A2_E9_1_4_2_1 ? this.validateFishInfo(info.A2_E9_1_4_2_2, false): this.validateFishInfo(info.A2_E9_1_4_2_2, true)
      obj['A2_E9_1_4_3'] = this.inRange(info.A2_E9_1_4_3, 1, 9999999, -1)
      obj['A2_E9_1_4_4_9_1'] = (!info.A2_E9_1_4_4_9 || (info.A2_E9_1_4_4_9 && this.hasData(info.A2_E9_1_4_4_9_1)))
        && this.chosenAtLeastOne(info, 'A2_E9_1_4_4_', 8)
    }
    this.validator[key] = obj
    //console.log("validate croc" +  key + "end")
    return null
  }
  init(){
    return {
      A2_E1_1: false,
      A2_E1_2: true,
      A2_E1: [],
      A2_E2_1: false,
      A2_E2_2: true,
      A2_E2: [],
      A2_E3_1: false,
      A2_E3_2: true,
      A2_E3: [],
      A2_E4_1: false,
      A2_E4_2: true,
      A2_E4: [],
      A2_E5_1: false,
      A2_E5_2: true,
      A2_E5: [],
      A2_E6_1: false,
      A2_E6_2: true,
      A2_E6: [],
      A2_E7_1: false,
      A2_E7_2: true,
      A2_E7: [],
      A2_E8_1: false,
      A2_E8 : {},
      A2_E8_3_1: true,
      A2_E8_3_2: true,
      A2_E8_3_3: true,
      A2_E8_3_4: true,
      A2_E8_3_5: true,
      A2_E8_3_6: true,
      A2_E8_3_7: true,
      A2_E8_3_8: true,
      A2_E8_3_9: true,
      A2_E8_3_9_1: true,
      A2_E9_1: false,
      A2_E9_1_1: true,
      A2_E9_1_2: true,
      A2_E9_1_3: true,
      A2_E9_1_4: true,
      A2_E9_1_5: true,
      A2_E9_1_6: true,
      A2_E9_1_7: true,
      A2_E9_1_8: true,
      A2_E9_1_9: true,
      A2_E9_1_1_1: {},
      A2_E9_1_1_2: {},
      A2_E9_1_1_3: {},
      A2_E9_1_1_4: {},
      A2_E9_1_1_5: {},
      A2_E9_1_1_6: {},
      A2_E9_1_1_7: {},
      A2_E9_1_1_8: {},
      A2_E9_1_1_9: {},
      HAS_ONCE:false
    }
  }
} 