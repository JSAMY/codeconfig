import { SelectConfig, InputConfig,
  OptionConfig, CheckboxConfig, RadioConfig,
  IControlConfig, ControlType } from '../../models/form.model';
import { Input } from '@angular/core';
import { FormGroup, ValidationErrors } from '@angular/forms';

export class BaseControlComponent {
  protected formSubmitted: boolean;
  @Input() control: IControlConfig;
  @Input() fg: FormGroup;

  constructor() {
    this.formSubmitted = false;
  }

getInputValue(control: InputConfig) {
  return control.value;
}

getSelectOptions(control: SelectConfig | OptionConfig) {
  return control.options;
}

getMaxLength(control: InputConfig) {
  return control.maxLength;
}

// TO DO : Need to check this validation
getMinLength(control: InputConfig) {
  return control.minLength;
}

isMultiSelect(control: SelectConfig) {
 return control.multiSelect;
}

getTitle(control: CheckboxConfig | RadioConfig) {
 return control.title;
}

private getFormValidationErrors(controlName: string) {
  const controlErrors: ValidationErrors = this.fg.get(controlName).errors;
  if (controlErrors != null) {
        Object.keys(controlErrors).forEach(keyError => {
          // console.log('Key : ' + controlName + ', Error: ' + keyError + ',  value: ', controlErrors[keyError]);
        });
      }
  }

hasError(control: IControlConfig): boolean {

  if ((this.fg.controls[control.name].dirty ||
    this.fg.controls[control.name].touched ||
    this.formSubmitted) && this.fg.get(control.name).errors) {

      this.getFormValidationErrors(control.name);

      return true;
  }

  return false;
}

getControl(control: IControlConfig) {
      let ctl: IControlConfig;
      switch (control.controlType) {
        case ControlType.Input:
          ctl = (control as InputConfig);
          break;
        case ControlType.Select:
              ctl = (control as SelectConfig);
              break;
      }

      return ctl;
  }

}
