import { Component, Input } from '@angular/core';

// Models
import { ItemMenu } from "../../../models/menu/item-menu.model";

@Component({
  selector: 'app-items-menu',
  templateUrl: './items-menu.component.html',
  styleUrl: './items-menu.component.css'
})
export class ItemsMenuComponent {

  @Input() items: ItemMenu [] = [];

}
