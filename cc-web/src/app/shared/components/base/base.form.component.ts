import { BaseComponent } from './base.component';
import { FormGroup } from '@angular/forms';
import { IControlCollection, ControlCollection } from '../../models/form.control.model';

export  class BaseFormComponent extends BaseComponent {
  fg: FormGroup;
  controlCollection: IControlCollection = new ControlCollection();

  constructor() {
    super();
    this.controlCollection.controls = [];
  }
}

