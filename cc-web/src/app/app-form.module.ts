import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from './app-material.module';
import { Formservice } from './shared/services/formservice/form.service';

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
