import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './shared/components/login/login.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { MenuBuilderComponent } from './shared/components/menu/menu-builder/menu-builder.component';
import { InputComponent } from './shared/components/control/input/input.component';
import { SelectComponent } from './shared/components/control/select/select.component';
import { CheckboxComponent } from './shared/components/control/checkbox/checkbox.component';
import { RadiobuttonComponent } from './shared/components/control/radiobutton/radiobutton.component';
import { FormComponent } from './shared/components/control/form/form.component';
import { AppMaterialModule } from './app-material.module';
import { AppFormModule } from './app-form.module';


const AppFormComponent = [
  InputComponent,
  SelectComponent,
  CheckboxComponent,
  RadiobuttonComponent,
  FormComponent
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    MenuBuilderComponent
  ],
  exports: [AppMaterialModule],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
