import { FormArray } from '@angular/forms';

export class CheckboxValidators {
  static minRequireOne(fa: FormArray) {
    let valid = false;

    for (let x = 0; x < fa.length; ++x) {
      if (fa.at(x).value) {
        valid = true;
        break;
      }
    }
    return valid ? null : {
      minRequireOne: true
    };
  }
}
