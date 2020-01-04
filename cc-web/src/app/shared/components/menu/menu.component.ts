import { Component, OnInit } from '@angular/core';
import { IMenu } from '../../models/menu.model';
import { generateMenu } from '../../utils/menu.util';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {
  menus: IMenu[] = [];

  constructor() {
    this.menus = generateMenu();
   }

  ngOnInit() {
  }
}
