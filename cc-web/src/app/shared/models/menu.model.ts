import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

export interface IMenu {
  id: number;
  path: string;
  caption: string;
  active: boolean;
  parentId?: number;
  child?: IMenu [] ;
  hasChild(): boolean;
  addChild(menu: IMenu);
}

export class Menu implements IMenu  {
  id: number;
  path: string;
  caption: string;
  active: boolean;
  parentId?: number;
  child?: IMenu[];

  hasChild(): boolean {
    if (this.child) {
      return   this.child.length > 0;
    }
    return false;
  }

  addChild(menu: IMenu) {
    if (!this.child) {
      this.child = [];
    }
    this.child.push(menu);
  }

  constructor(id: number, caption: string, path: string, parentId?: number) {
    this.id = id;
    this.caption = caption;
    this.path = path;
    this.parentId = parentId;
  }
}
