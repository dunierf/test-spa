import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {

  @Input() title: string | undefined = undefined;
  @Output() showSidebarMenu = new EventEmitter();

  showMenu() {
    this.showSidebarMenu.emit();
  }

}
