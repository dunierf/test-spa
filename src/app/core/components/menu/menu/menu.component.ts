import { Component } from '@angular/core';

// Models
import { ItemMenu } from "../../../models/menu/item-menu.model";

// Menu
import { menu } from "../../../menu/menu";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  items: ItemMenu [] = menu.items;

}
