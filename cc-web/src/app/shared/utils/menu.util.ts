import { IMenu, Menu } from '../models/menu.model';

export function generateMenu(): IMenu[]  {
const menus: IMenu[] = [];

const home: Menu = new Menu (1, 'Home', '');
home.active = true;
menus.push(home);


const home1: Menu = new Menu (100, 'Home 1', '', 1);
const home2: Menu = new Menu (101, 'Home 2', '', 1);
home.addChild(home1);
home.addChild(home2);

const aboutUs: Menu = new Menu (2, 'About Us', 'about');
menus.push(aboutUs);

return menus;
}
