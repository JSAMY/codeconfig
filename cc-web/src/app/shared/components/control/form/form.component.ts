import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { IControl, ControlType, InputControl,
  SelectControl,   OptionControl, IFormConfig } from 'src/app/shared/models/form.control.model';
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
  @Input() formConfig: IFormConfig;
  @Input() fg: FormGroup;

  constructor() {
    this.formSubmitted = false;
  }

  ngOnInit() {
  }

 getControl(control: IControl) {
  let ctl: IControl;
  switch (control.controlType) {
    case ControlType.Input:
       ctl = (control as InputControl);
       break;
    case ControlType.Select:
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
  this.formConfig.controls.forEach(control => {

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


  this.save.emit(this.formConfig.controls);
 }

}
