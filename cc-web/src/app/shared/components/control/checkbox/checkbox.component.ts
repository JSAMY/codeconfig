import { Component, OnInit, Input } from '@angular/core';
import { BaseControl } from '../../base/base.control';
import { IControl } from 'src/app/shared/models/form.control.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent extends BaseControl implements OnInit {
  @Input() control: IControl;
  @Input() fg: FormGroup;

  constructor() {
    super();
   }

  ngOnInit() {
  }

}
