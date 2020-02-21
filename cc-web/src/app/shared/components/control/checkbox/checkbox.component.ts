import { Component, OnInit } from '@angular/core';
import { BaseControlComponent } from '../../base/base.control.component';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent extends BaseControlComponent implements OnInit {

  constructor() {
    super();
   }

  ngOnInit() {
  }

}
