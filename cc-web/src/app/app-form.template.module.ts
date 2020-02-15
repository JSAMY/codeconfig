import { NgModule } from '@angular/core';
import { InputComponent } from './shared/components/control/input/input.component';
import { SelectComponent } from './shared/components/control/select/select.component';
import { CheckboxComponent } from './shared/components/control/checkbox/checkbox.component';
import { RadiobuttonComponent } from './shared/components/control/radiobutton/radiobutton.component';
import { FormComponent } from './shared/components/control/form/form.component';
import { CommonModule } from '@angular/common';

const modules = [
    InputComponent,
    SelectComponent,
    CheckboxComponent,
    RadiobuttonComponent,
    FormComponent
];

@NgModule({
    // imports: [CommonModule],
    declarations: [...modules],
    exports: [
       ...modules
    ] // CommonModule
})
export class AppFormTemplateModule { }

