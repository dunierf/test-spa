import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

// Models
import { ItemMenu } from "../../../models/menu/item-menu.model";

// Service
import { AuthService } from '../../../services/auth/auth.service';


@Component({
  selector: 'app-items-menu',
  templateUrl: './items-menu.component.html',
  styleUrl: './items-menu.component.css'
})
export class ItemsMenuComponent {

  @Input() items: ItemMenu [] = [];

  constructor(private authService: AuthService, private router: Router) {

  }

  logout() {
    this.authService.logout().subscribe({
      next: () => {
        this.authService.removeToken();
        this.router.navigate(['/']);
      },
      error: err => {

      }
    })
  }
}
