import { Component, OnInit } from '@angular/core';
import { IControl, InputControl, DataType, Allow,
  SelectControl, IOption, CheckboxControl, RadioControl } from 'src/app/shared/models/form.control.model';

import { Formservice } from 'src/app/shared/services/formservice/form.service';
import { BaseFormComponent } from 'src/app/shared/components/base/base.form.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent extends BaseFormComponent implements OnInit {

    constructor(private formservice: Formservice) {
    super('Home - Uer Details Entry');
    const firstName: InputControl = new InputControl('name',
    DataType.Text, 'John', true, 3, 25, 'First Name', 'Name required', Allow.Only_A_Z);
    this.formConfig.controls.push(firstName);

    const surame: InputControl = new InputControl('surName',
    DataType.Text, 'Adaikalasamy', true, 1, 25, 'Surname', 'Surname required', Allow.Only_A_Z);
    this.formConfig.controls.push(surame);

    const businessOptions: IOption[] = [];
    businessOptions.push({value: 'IT_1',  text: 'Computer Hardware'});
    businessOptions.push({value: 'IT_2',  text: 'Computer Software'});
    const businessType: SelectControl = new SelectControl('businessType',
                        businessOptions, true, 'Business', 'Business required', ['IT_2'], false );

    this.formConfig.controls.push(businessType);


    const regionOptions: IOption[] = [];
    regionOptions.push({value: 'ind',  text: 'India', selected: true});
    regionOptions.push({value: 'aus',  text: 'Australia'});
    regionOptions.push({value: 'uk',  text: 'United Kingdom', selected: true});
    const region: SelectControl   = new SelectControl('region',
                          regionOptions, true, 'Region', 'Region required', ['ind', 'uk'], true);

    this.formConfig.controls.push(region);


    const checkOptions: IOption[] = [];
    checkOptions.push({value: 'check1',  text: 'check 1'});
    checkOptions.push({value: 'check2',  text: 'check 2'});
    checkOptions.push({value: 'check3',  text: 'check 3'});

    const checkCtl: CheckboxControl   = new CheckboxControl('someOption', 'Check box test' ,
                        checkOptions, true, 'SomeOption CB required');
    this.formConfig.controls.push(checkCtl);

    const radioCtl: RadioControl   = new RadioControl('someRDOption', 'Radio box test' ,
                        checkOptions, true, 'SomeOption RD required');
    this.formConfig.controls.push(radioCtl);

    this.fg = formservice.getFormGroup(this.formConfig);
  }

  ngOnInit() {
  }

textChage(text: string) {
  console.log(text);
}

submit(controls: IControl[]) {
  console.log(controls);
}

}
