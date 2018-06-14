import { User } from './user';
export class Users {
  users: User[] = [];
  
  constructor() {
  }


  createNewUserID(cwt_id, role_id) {
    let pre_id = cwt_id + role_id;
    let id_list_in_cwt_role;
    if(this.users){
     id_list_in_cwt_role = this.users.filter(user => user.USERID.slice(0, 3) === pre_id).map(user => parseInt(user.USERID.slice(3, 7)));
    }else{
    id_list_in_cwt_role = [];
    }
    
    if (id_list_in_cwt_role.length == 0) {
      id_list_in_cwt_role.push(0);
    }
    let result = this.pad_with_zeroes(Math.max(...id_list_in_cwt_role) + 1, 4);
    return cwt_id + role_id + result;
  }


  private pad_with_zeroes(number, length) {

    let my_string = '' + number;
    while (my_string.length < length) {
      my_string = '0' + my_string;
    }

    return my_string;
  }

  getFilteredUser(TID, CWT) {
   if(TID === "0"){
     return this.users;
   }else{
    return this.getUserWithArea(this.getLowerUser(this.users, TID), CWT);
   } 
  }

  getLowerUser(users, TID) {
    return users.filter(user => user.TID > TID);
  }
  getUserWithArea(users, CWT) {
    return users.filter(user => user.CWT === CWT);
  }

  getLowerRole(TID) {
    let role_map = { '01': "ผู้บริหาร", '02': "ผู้ดูแลระบบ", '03': "เจ้าของโครงการ", '04': "สถจ. / สบจ.", '05': "เจ้าหน้าที่วิชาการ", '06': "พนักงานแจงนับ", '07': "ที่ปรึกษา" };
    return Object.keys(role_map).filter(num => num > TID).map(role_num => role_map[role_num]);
  }

  getUserByRoleAndProvince(TID,CWT){
    return this.users.filter(user => user.TID === TID).filter(user => user.CWT === CWT);
  }

  getUserByID(id) {
    return this.users.find(user => user.USERID === id);
  }

  searchUser(data) {
    let index = this.users.findIndex(user => user.USERID === data);
    if (index === -1) {
      index = this.users.findIndex(user => user.PHONE === data);
    }
    if (index === -1) {
      index = this.users.findIndex(user => user.EMAIL === data);
    }
    if (index === -1) {
      return false;
    } else {
      return this.users[index];
    }
  }
}