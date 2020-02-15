import { SelectControl, InputControl,
  OptionControl, CheckboxControl, RadioControl,
  IControl, ControlType } from '../../models/form.control.model';

export class BaseControl {

getInputValue(control: InputControl) {
  return control.value;
}

getSelectOptions(control: SelectControl | OptionControl) {
  return control.options;
}

getMaxLength(control: InputControl) {
  return control.maxLength;
}

// TO DO : Need to check this validation
getMinLength(control: InputControl) {
  return control.minLength;
}

isMultiSelect(control: SelectControl) {
 return control.multiSelect;
}

getTitle(control: CheckboxControl | RadioControl) {
 return control.title;
}

hasError(control: IControl): string {
  return  control.errorMessage;
}

getControl(control: IControl) {
let ctl: IControl;
switch (control.controlType) {
  case ControlType.Input:
     console.log('input');
     ctl = (control as InputControl);
     break;
  case ControlType.Select:
        console.log('select');
        ctl = (control as SelectControl);
        break;
}

return ctl;

}
}
