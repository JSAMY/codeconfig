import { Component, OnInit } from '@angular/core';
import { IBaseControl, InputControl, DataType, Allow, SelectControl, IOption } from 'src/app/shared/models/form.control.model';

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

    const options: IOption[] = [];
    options.push({value: 'IT_1',  text: 'Computer Hardware'});
    options.push({value: 'IT_2',  text: 'Computer Software'});
    const businessType: SelectControl = new SelectControl('businessType',
                          options, true, 'Business', 'Business required', 'IT_2', '', false );

    this.controls.push(businessType);
    this.fg = formservice.getFormGroup(this.controls);
  }

  ngOnInit() {
  }

textChage(text: string) {
  console.log(text);
}

}
