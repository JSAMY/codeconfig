import { Component, OnInit, Input } from '@angular/core';
import { BaseControlComponent } from '../../base/base.control.component';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})

export class InputComponent extends BaseControlComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }
}
