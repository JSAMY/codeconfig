import { Component, OnInit, Input } from '@angular/core';
import { IControl } from 'src/app/shared/models/form.control.model';
import { BaseControl } from '../../base/base.control';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})

export class InputComponent extends BaseControl implements OnInit {
  @Input() control: IControl;
  @Input() fg: FormGroup;

  constructor() {
    super();
  }

  ngOnInit() {
  }
}
