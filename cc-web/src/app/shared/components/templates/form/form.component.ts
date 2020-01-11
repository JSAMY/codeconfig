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

  constructor() { }

  ngOnInit() {
  }

   getInputValue(control: InputControl) {
      return control.defaultValue;
   }

   getSelectOptions(control: SelectControl) {
    return control.options;
 }



}
