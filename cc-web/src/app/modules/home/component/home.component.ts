import { Component, OnInit } from '@angular/core';
import { IBaseControl, InputControl, DataType, Allow, SelectControl, IOption, CheckboxControl, RadioControl } from 'src/app/shared/models/form.control.model';

import { FormGroup } from '@angular/forms';
import { Formservice } from 'src/app/shared/services/formservice/form.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  fg: FormGroup;
  controls: IBaseControl[] = [];

    constructor(private formservice: Formservice) {

    const firstName: InputControl = new InputControl('name',
    DataType.Text, 'John', true, 3, 25, 'First Name', 'Name required', Allow.Only_A_Z);
    this.controls.push(firstName);

    const surame: InputControl = new InputControl('surName',
    DataType.Text, 'Adaikalasamy', false, 1, 25, 'Surname', 'Surname required', Allow.Only_A_Z);
    this.controls.push(surame);

    const businessOptions: IOption[] = [];
    businessOptions.push({value: 'IT_1',  text: 'Computer Hardware'});
    businessOptions.push({value: 'IT_2',  text: 'Computer Software'});
    const businessType: SelectControl = new SelectControl('businessType',
                        businessOptions, true, 'Business', 'Business required', ['IT_2'], false );

    this.controls.push(businessType);


    const regionOptions: IOption[] = [];
    regionOptions.push({value: 'ind',  text: 'India', selected: true});
    regionOptions.push({value: 'aus',  text: 'Australia'});
    regionOptions.push({value: 'uk',  text: 'United Kingdom', selected: true});
    const region: SelectControl   = new SelectControl('region',
                          regionOptions, true, 'Region', 'Region required', ['ind', 'uk'], true);

    this.controls.push(region);


    const checkOptions: IOption[] = [];
    checkOptions.push({value: 'check1',  text: 'check 1'});
    checkOptions.push({value: 'check2',  text: 'check 2', selected: true});
    checkOptions.push({value: 'check3',  text: 'check 3'});

    const checkCtl: CheckboxControl   = new CheckboxControl('someOption', 'Check box test' ,
                        checkOptions, true, 'option required');
    this.controls.push(checkCtl);

    const radioCtl: RadioControl   = new RadioControl('someRDOption', 'radio box test' ,
                        checkOptions, true, 'Region required');
    this.controls.push(radioCtl);

    this.fg = formservice.getFormGroup(this.controls);
  }

  ngOnInit() {
  }

textChage(text: string) {
  console.log(text);
}

}
