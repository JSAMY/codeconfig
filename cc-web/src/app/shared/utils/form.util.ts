import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IBaseControl, ControlType, InputControl } from '../models/form.control.model';

// To create new form group
export class BuildFormGroup {

  create(controls: IBaseControl[]): FormGroup {
    const group: any = {};

    controls.forEach(control => {
      let defaultValue = '';
      if (control.controlType === ControlType.Input) {
        defaultValue = (control as InputControl).defaultValue || '';
       }

      if (control.required) {
        group[control.name] = new FormControl(defaultValue, Validators.required);
      } else {
        group[control.name] = new FormControl(defaultValue);
      }
      }
    );

    return new FormGroup(group);
  }

}
