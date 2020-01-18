import { Injectable } from '@angular/core';
import { IBaseControl, InputControl, ControlType, SelectControl,
  OptionControl } from '../../models/form.control.model';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';

@Injectable()
export class Formservice   {

  constructor() { }

  getFormGroup(controls: IBaseControl[]): FormGroup {
      const group: any = {};

      controls.forEach(control => {

              if (control.controlType === ControlType.Input) {
                let defaultValue = '';

                defaultValue = (control as InputControl).value || '';

                if (control.required) {
                  group[control.name] = new FormControl(defaultValue, Validators.required);
                } else {
                  group[control.name] = new FormControl(defaultValue);
                }
              } else if (control.controlType === ControlType.Select) {
                    const selectControl = (control as SelectControl);
                    let selectedValues: string[] = [];
                    let selectedValue = '';
                    selectedValues = selectControl.selectedValue  || [''];
                    if (!selectControl.multiSelect) {
                      selectedValue = !selectControl.selectedValue ? '' : selectControl.selectedValue[0];
                    }

                    if (control.required) {
                      group[control.name] = new FormControl(selectControl.multiSelect ? selectedValues : selectedValue,
                        Validators.required);
                    } else {
                      group[control.name] = new FormControl(selectControl.multiSelect ? selectedValues : selectedValue);
                    }
              } else if (control.controlType === ControlType.CheckBox ) {

                const selectControl = (control as OptionControl);
                let selectedValues: string[] = [];
                selectedValues = selectControl.options.filter(opt => opt.selected).map(o => o.value);
                // http://marcusresell.com/2018/07/18/dynamic-checkbox-angular/

                const cbCtls = selectControl.options.map(opt => new FormControl(opt.selected));

                group[control.name] = new FormArray(cbCtls);
                // if (control.required) {
                //   group[control.name] = new FormControl(selectedValues, Validators.required);
                // } else {
                //   group[control.name] = new FormControl(selectedValues);
                // }
          } else if (control.controlType === ControlType.RadioButton ) {

            const selectControl = (control as OptionControl);
            let selectedValues: string[] = [];
            selectedValues = selectControl.options.filter(opt => opt.selected).map(o => o.value);
            if (control.required) {
              group[control.name] = new FormControl(selectedValues, Validators.required);
            } else {
              group[control.name] = new FormControl(selectedValues);
            }
      }

        }
    );

      return new FormGroup(group);
    }




}
