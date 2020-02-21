import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { IControlConfig, ControlType, InputConfig,
  SelectConfig,   OptionConfig, IFormConfig } from 'src/app/shared/models/form.control.model';
import { FormGroup } from '@angular/forms';
import { BaseControlComponent } from '../../base/base.control.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent extends BaseControlComponent implements OnInit {
  @Output() save: EventEmitter<IControlConfig[]> = new EventEmitter();
  @Input() formConfig: IFormConfig;


  controlType: typeof  ControlType = ControlType;

  constructor() {
    super();
    this.formSubmitted = false;
  }

  ngOnInit() {
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

showError(ctnName: string, error: string = 'required' ) {
  return ( this.fg.controls[ctnName].dirty || this.fg.controls[ctnName].touched || this.formSubmitted) &&
    this.fg.controls[ctnName].hasError(error);
}

 formSubmit() {
  this.formSubmitted = true;
  this.formConfig.controls.forEach(control => {

    if (control.controlType === this.controlType.Input) {
      (control as InputConfig).value = this.fg.get(control.name).value;
    } else if (control.controlType === this.controlType.Select) {
      (control as SelectConfig).selectedValue  = this.fg.get(control.name).value;
    }  else if (control.controlType === this.controlType.CheckBox ) {
      (control as OptionConfig).selectedValues = this.fg.get(control.name).value.
      map((checked, index) => checked ? (control as OptionConfig).options[index].value : null)
      .filter(value => value !== null);
    } else if (control.controlType === this.controlType.RadioButton) {
      (control as OptionConfig).selectedValues = this.fg.get(control.name).value;
    }
  });


  this.save.emit(this.formConfig.controls);
 }

}
