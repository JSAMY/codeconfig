import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from './app-material.module';

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
  ]
})
export class FormModule { }
