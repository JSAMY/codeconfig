import { Component, OnInit } from '@angular/core';
import { BaseControlComponent } from '../../base/base.control.component';

@Component({
  selector: 'app-radiobutton',
  templateUrl: './radiobutton.component.html',
  styleUrls: ['./radiobutton.component.scss']
})
export class RadiobuttonComponent extends BaseControlComponent implements OnInit {

  constructor() {
    super();
   }

  ngOnInit() {
  }

}
