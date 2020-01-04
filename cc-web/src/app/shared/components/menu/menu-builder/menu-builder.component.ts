import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IMenu } from 'src/app/shared/models/menu.model';

@Component({
  selector: 'app-menu-builder',
  templateUrl: './menu-builder.component.html',
  styleUrls: ['./menu-builder.component.scss']
})
export class MenuBuilderComponent implements OnInit {
  @Input() menus: IMenu[];
  @Output() selectEvents: EventEmitter<number>;

  constructor() {
    this.selectEvents = new EventEmitter<number>();
  }

  ngOnInit() { }

    updateMenuStatus(id: number) {
      this.selectEvents.emit(id);
    }

    updateChildMenuStatus(id: number) {
      this.updateMenuStatus(id);
    }

    updateParentMenuStatus(id: number) {
      this.updateMenuStatus(id);
    }
}
