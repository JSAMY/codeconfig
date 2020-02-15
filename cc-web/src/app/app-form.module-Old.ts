import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from './app-material.module';
import { Formservice } from './shared/services/formservice/form.service';
import { InputComponent } from './shared/components/control/input/input.component';
import { SelectComponent } from './shared/components/control/select/select.component';
import { CheckboxComponent } from './shared/components/control/checkbox/checkbox.component';
import { RadiobuttonComponent } from './shared/components/control/radiobutton/radiobutton.component';
import { FormComponent } from 'src/app/shared/components/control/form/form.component';
import { AppFormTemplateModule } from './app-form.template.module';

@NgModule({
  exports: [
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule
  ],
   providers: [
    Formservice
  ]
})
export class FormModule { }
