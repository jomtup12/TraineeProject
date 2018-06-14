import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { User } from '../../models/user';


/*
  Generated class for the HttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpProvider {
  userInfo:User;
  url= '35.231.173.183:8080';
  //35.231.173.183:8080
  constructor(public http: Http,private storage: Storage) {
    //console.log('Hello HttpProvider Provider');
  }
  // 35.227.94.29:5000
  downloadEA(): Observable<any>{
    return Observable.fromPromise(this.storage.get('userInfo')).mergeMap((val) => {
      this.userInfo=val;
      //console.log(JSON.stringify(val));
      return this.http.get('http://'+this.url+'/ea_fi?FI='+this.userInfo.USERID).map(res =>res.json()).timeout(60000);;
    });
    
  }
  // /update_user
  
  login(id,password){
    return this.http.post('http://'+this.url+'/user_id_pwd',{"USERID":id,"PASSWORD":password}).timeout(30000);
  }
  updateuser(userinfo){
    return this.http.post('http://'+this.url+'/user_id_pwd',userinfo).timeout(30000);
  }

  saveSN2_2(sn2_2Data){
    return this.http.put('http://'+this.url+'/insert_sn22',sn2_2Data).timeout(60000);
  }
  saveSN1(sn1Data){
    return this.http.put('http://'+this.url+'/insert_sn1',sn1Data).timeout(60000);
  }
  updateUserinfo(user){
    return this.http.post('http://'+this.url+'/update_user',user).timeout(30000);
  }
  updateTablet(info){
    return this.http.post('http://'+this.url+'/update_tablet',info).timeout(30000);
  }
  downloadSN1(user){
    return this.http.get('http://'+this.url+'/sn1_fi?FI_ID='+user).timeout(30000);
  }
  downloadSN22(user){
    return this.http.get('http://'+this.url+'/sn22_fi?FI_ID='+user).timeout(30000);
  }
  loadImage(){
    
  }
  //sn1_edit?FI=ID=

}
