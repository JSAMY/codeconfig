import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home.routing.module';
import { HomeComponent } from './component/home.component';
import { FormComponent } from 'src/app/shared/components/templates/form/form.component';
import { FormModule } from 'src/app/app-form.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormModule
  ],
  declarations: [HomeComponent, FormComponent]
})
export class HomeModule { }
