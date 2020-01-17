import { Injectable } from '@angular/core';
import { IBaseControl, InputControl, ControlType, SelectControl, CheckboxControl, IOption, OptionControl } from '../../models/form.control.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class Formservice   {

  constructor() { }

  getFormGroup(controls: IBaseControl[]): FormGroup {
      const group: any = {};

      controls.forEach(control => {

              if (control.controlType === ControlType.Input) {
                let defaultValue = '';

                defaultValue = (control as InputControl).defaultValue || '';

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
              } else if (control.controlType === ControlType.CheckBox ||
                control.controlType === ControlType.RadioButton ) {

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


    private inputControlInit(control: InputControl) {

    }


}
