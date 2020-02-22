import { Component, OnInit } from '@angular/core';
import { IControlConfig, InputConfig, DataType, Allow,
  SelectConfig, IOption, CheckboxConfig, RadioConfig } from 'src/app/shared/models/form.model';
import { Formservice } from 'src/app/shared/services/form/form.service';
import { BaseFormComponent } from 'src/app/shared/components/base/base.form.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent extends BaseFormComponent implements OnInit {

    constructor(private formservice: Formservice) {
    super('Home - Uer Details Entry');

    this.setNameControls();
    this.setBusinessTypeControl();
    this.setRegionControl();
    this.setCheckControl();
    this.setRadioControl();

    this.fg = formservice.getFormGroup(this.formConfig);
  }

  ngOnInit() {
  }

  textChage(text: string) {
    console.log(text);
  }

  submit(controls: IControlConfig[]) {
    console.log(controls);
  }

  private setNameControls() {
    const firstName: InputConfig = new InputConfig('name',
    DataType.Text, 'John', true, 3, 25, 'First Name', 'Name required', Allow.Only_A_Z);
    this.formConfig.controlConfigs.push(firstName);

    const surame: InputConfig = new InputConfig('surName',
    DataType.Text, 'Adaikalasamy', true, 1, 25, 'Surname', 'Surname required', Allow.Only_A_Z);
    this.formConfig.controlConfigs.push(surame);
  }

  private setBusinessTypeControl() {
    const businessOptions: IOption[] = [];
    businessOptions.push({value: 'IT_1',  text: 'Computer Hardware'});
    businessOptions.push({value: 'IT_2',  text: 'Computer Software'});
    const businessType: SelectConfig = new SelectConfig('businessType',
                        businessOptions, true, 'Business', 'Business required', ['IT_2'], false );

    this.formConfig.controlConfigs.push(businessType);
  }

  private setRegionControl() {
    const regionOptions: IOption[] = [];
    regionOptions.push({value: 'ind',  text: 'India', selected: true});
    regionOptions.push({value: 'aus',  text: 'Australia'});
    regionOptions.push({value: 'uk',  text: 'United Kingdom', selected: true});
    const region: SelectConfig   = new SelectConfig('region',
                          regionOptions, true, 'Region', 'Region required', ['ind', 'uk'], true);

    this.formConfig.controlConfigs.push(region);
  }


  private setCheckControl() {
    const checkOptions: IOption[] = [];
    checkOptions.push({value: 'check1',  text: 'check 1'});
    checkOptions.push({value: 'check2',  text: 'check 2'});
    checkOptions.push({value: 'check3',  text: 'check 3'});

    const checkCtl: CheckboxConfig   = new CheckboxConfig('someOption', 'Check box Test' ,
                        checkOptions, true, 'SomeOption CB required');
    this.formConfig.controlConfigs.push(checkCtl);
  }

  private setRadioControl() {
    const checkOptions: IOption[] = [];
    checkOptions.push({value: 'check1',  text: 'check 1'});
    checkOptions.push({value: 'check2',  text: 'check 2'});
    checkOptions.push({value: 'check3',  text: 'check 3'});

    const radioCtl: RadioConfig   = new RadioConfig('someRDOption', 'Radio box test' ,
    checkOptions, true, 'SomeOption RD required');
    this.formConfig.controlConfigs.push(radioCtl);
  }

}
