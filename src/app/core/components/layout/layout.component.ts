import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  showSideBar: boolean = false;

  showSidebarMenu() {
    this.showSideBar = true;
  }

  onRouterOutletActive() {
    this.showSideBar = false;
  }

}
