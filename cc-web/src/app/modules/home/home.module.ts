import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home.routing.module';
import { HomeComponent } from './component/home.component';

import { AppFormModule } from 'src/app/app-form.module';
import { FormComponent } from 'src/app/shared/components/control/form/form.component';
import { InputComponent } from 'src/app/shared/components/control/input/input.component';
import { SelectComponent } from 'src/app/shared/components/control/select/select.component';
import { CheckboxComponent } from 'src/app/shared/components/control/checkbox/checkbox.component';
import { RadiobuttonComponent } from 'src/app/shared/components/control/radiobutton/radiobutton.component';


const formControlComponents = [
  InputComponent,
  SelectComponent,
  CheckboxComponent,
  RadiobuttonComponent,
  FormComponent
];

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    AppFormModule
  ],
  declarations: [HomeComponent, ...formControlComponents]
})
export class HomeModule { }
