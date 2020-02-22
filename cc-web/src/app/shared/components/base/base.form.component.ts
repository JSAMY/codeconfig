import { BaseComponent } from './base.component';
import { FormGroup } from '@angular/forms';
import { IFormConfig, FormConfig } from '../../models/form.model';

export  class BaseFormComponent extends BaseComponent {
  fg: FormGroup;
  formConfig: IFormConfig = new FormConfig();

  constructor(title: string) {
    super();
    this.formConfig.formTitle = title;
    this.formConfig.controlConfigs = [];
  }
}
