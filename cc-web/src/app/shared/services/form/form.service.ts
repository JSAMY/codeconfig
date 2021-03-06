import { Injectable } from '@angular/core';
import { IControlConfig, InputConfig, ControlType, SelectConfig,
  OptionConfig,
  IFormConfig} from '../../models/form.model';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { CheckboxValidators } from '../../validators/required.validators';

@Injectable()
export class Formservice   {

  constructor() { }

  getFormGroup(formConfig: IFormConfig): FormGroup {
      const group: any = {};

      formConfig.controlConfigs.forEach(control => {

              if (control.controlType === ControlType.Input) {
                let defaultValue = '';

                defaultValue = (control as InputConfig).value || '';

                if (control.required) {
                  group[control.name] = new FormControl(defaultValue, Validators.required);
                } else {
                  group[control.name] = new FormControl(defaultValue);
                }
              } else if (control.controlType === ControlType.Select) {
                    const selectControl = (control as SelectConfig);
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

                const selectControl = (control as OptionConfig);
                let selectedValues: string[] = [];
                selectedValues = selectControl.options.filter(opt => opt.selected).map(o => o.value);
                const cbCtls = selectControl.options.map(opt =>
                  new FormControl(opt.selected));
                group[control.name] = new FormArray(cbCtls,  [CheckboxValidators.minRequireOne]);
          } else if (control.controlType === ControlType.RadioButton ) {

            const selectControl = (control as OptionConfig);
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
