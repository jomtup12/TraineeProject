// import { Injectable } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';

// import { FormFabric } from '../models/FormFabric';

// @Injectable()
// export class DynamicFormService {

//     constructor() { }

//     toFormGroup(fabric: FormFabric) {
//       let group: any = {};
//       let entries = fabric.entries;
  
//       entries.forEach(entry => {
//         group[entry.key] = entry.required ? new FormControl(entry.value || '', Validators.required)
//                                                 : new FormControl(entry.value || '');
//       });
//       return new FormGroup(group);
//     }

// }