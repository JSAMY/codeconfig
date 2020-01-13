import { Component, OnInit, Input } from '@angular/core';
import { IBaseControl, ControlType, InputControl, SelectControl } from 'src/app/shared/models/form.control.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {
  controlType: typeof  ControlType = ControlType;
  @Input() controls: IBaseControl[] = [];
  @Input() fg: FormGroup;

  constructor() {
  }

  ngOnInit() {

  }

   getInputValue(control: InputControl) {
      return control.defaultValue;
   }

   getSelectOptions(control: SelectControl) {
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

}
