import { Component, OnInit, Input } from '@angular/core';
import { IMenu } from 'src/app/shared/models/menu.model';

@Component({
  selector: 'app-menu-builder',
  templateUrl: './menu-builder.component.html',
  styleUrls: ['./menu-builder.component.scss']
})
export class MenuBuilderComponent implements OnInit {
  @Input() menus: IMenu[];

  constructor() { }
  ngOnInit() { }

  private setMenuStatus(menu: IMenu, id: number) {
    if (menu.id === id) {
      menu.active = true;
    } else {
      menu.active = false;
      if (menu.hasChild()) {
        menu.child.forEach(child => this.setMenuStatus(child, id));
      }
    }
  }

  changeMenuStatus(id: number) {
    this.menus.forEach(menu => {
       this.setMenuStatus(menu, id);
     });
    }
}
