import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home.routing.module';
import { HomeComponent } from './component/home.component';
import { AppFormModule } from 'src/app/app-form.module';
import { appFormComponents } from 'src/app/shared/type/const.type';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    AppFormModule
  ],
  declarations: [HomeComponent, ...appFormComponents]
})
export class HomeModule { }
