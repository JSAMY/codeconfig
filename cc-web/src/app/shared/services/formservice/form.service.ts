import { Injectable } from '@angular/core';
import { IBaseControl, InputControl, ControlType } from '../../models/form.control.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class Formservice   {

  constructor() { }

  getFormGroup(controls: IBaseControl[]): FormGroup {
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
