import { Component, OnInit } from '@angular/core';
import { BaseControlComponent } from '../../base/base.control.component';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent extends BaseControlComponent  implements OnInit {

  constructor() {
    super();
   }

  ngOnInit() {
  }
}
