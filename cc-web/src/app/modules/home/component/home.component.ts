import { Component, OnInit } from '@angular/core';
import { IBaseControl, InputControl, DataType, Allow, SelectControl, IOption } from 'src/app/shared/models/form.control.model';
import { BuildFormGroup } from 'src/app/shared/utils/form.util';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  fg: FormGroup;
  controls: IBaseControl[] = [];
  constructor() {
    const buildFormGroup = new BuildFormGroup();

    const firstName: InputControl = new InputControl('name',
    DataType.Text, 'John', true, 1, 25, 'First Name', 'Name required', Allow.Only_A_Z);
    this.controls.push(firstName);

    const surame: InputControl = new InputControl('surName',
    DataType.Text, 'Adaikalasamy', true, 1, 25, 'Surname', 'Surname required', Allow.Only_A_Z);
    this.controls.push(surame);

    const options: IOption[] = [];
    options.push({key: 'IT_1',  value: 'Computer Hardware'});
    options.push({key: 'IT_2',  value: 'Computer Software'});
    const businessType: SelectControl = new SelectControl('businessType',
                          options, true, 'Business', 'Business required', 'IT_2', '', false );

    this.controls.push(businessType);
    this.fg = buildFormGroup.create(this.controls);
  }

  ngOnInit() {
  }

textChage(text: string) {
  console.log(text);
}

}
