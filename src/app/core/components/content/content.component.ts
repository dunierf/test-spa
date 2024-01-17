import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

  @Output() onRouterOutletActive: EventEmitter<void> = new EventEmitter();

  onActivate() {
    this.onRouterOutletActive.emit();
  }

}
