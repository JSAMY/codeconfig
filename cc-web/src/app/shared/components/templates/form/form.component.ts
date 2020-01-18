import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { IBaseControl, ControlType, InputControl,
  SelectControl, CheckboxControl, RadioControl, OptionControl, IOption } from 'src/app/shared/models/form.control.model';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {
  @Output() save: EventEmitter<IBaseControl[]> = new EventEmitter();
  controlType: typeof  ControlType = ControlType;
  @Input() controls: IBaseControl[] = [];
  @Input() fg: FormGroup;



  constructor() {
  }

  ngOnInit() {

  }

   getInputValue(control: InputControl) {
      return control.value;
   }

   getSelectOptions(control: SelectControl | CheckboxControl | RadioControl) {
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

 getControl(control: IBaseControl) {
  let ctl: IBaseControl;
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

//  updateCheckBox(option: IOption, isChecked: boolean, key: string) {
//     const chkArray = this.fg.get(key) as FormArray;
//     console.log(chkArray);
//     console.log(option);
//     if (isChecked) {
//         if (chkArray.controls.filter(x => x.value[0] === option.value)) {
//           chkArray.push(new FormControl({ value: option.value, text: option.text  }));
//         }
//        } else {
//           const idx = chkArray.controls.findIndex(x => x.value[0] === option.value);
//           chkArray.removeAt(idx);
//       }
// }

 formSubmit() {

  this.controls.forEach(control => {

    if (control.controlType === this.controlType.Input) {
      (control as InputControl).value = this.fg.get(control.name).value;
    } else if (control.controlType === this.controlType.Select) {
      (control as SelectControl).selectedValue  = this.fg.get(control.name).value;
    }  else if (control.controlType === this.controlType.CheckBox ) {
      (control as OptionControl).selectedValues = this.fg.get(control.name).value.
      map((checked, index) => checked ? (control as OptionControl).options[index].value : null)
      .filter(value => value !== null);
    } else if (control.controlType === this.controlType.RadioButton) {
      (control as OptionControl).selectedValues = this.fg.get(control.name).value;
    }
  });


  this.save.emit(this.controls);
 }

}
