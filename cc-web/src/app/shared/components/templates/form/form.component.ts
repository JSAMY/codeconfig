import { Component, OnInit, Input } from '@angular/core';
import { IBaseControl } from 'src/app/shared/models/form.control.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {

  @Input() controls: IBaseControl[] = [];
  @Input() fg: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
