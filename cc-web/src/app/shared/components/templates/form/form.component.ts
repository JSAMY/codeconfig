import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { IControl, ControlType, InputControl,
  SelectControl, CheckboxControl, RadioControl, OptionControl, IControlCollection } from 'src/app/shared/models/form.control.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {
  private formSubmitted: boolean;

  @Output() save: EventEmitter<IControl[]> = new EventEmitter();
  controlType: typeof  ControlType = ControlType;
  @Input() controlCollection: IControlCollection;
  @Input() fg: FormGroup;

  constructor() {
    this.formSubmitted = false;
  }

  ngOnInit() {
  }

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

showError(ctnName: string, error: string = 'required' ) {
  return ( this.fg.controls[ctnName].dirty || this.fg.controls[ctnName].touched || this.formSubmitted) &&
    this.fg.controls[ctnName].hasError(error);
}

 formSubmit() {
  this.formSubmitted = true;
  this.controlCollection.controls.forEach(control => {

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


  this.save.emit(this.controlCollection.controls);
 }

}
