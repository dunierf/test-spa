import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrl: './icon-button.component.css'
})
export class IconButtonComponent {

  @Input() iconClass: string = '';

  @Input() iconColor: string = '';

  @Output() click = new EventEmitter();

  onClickButton() {
    this.click.emit();
  }

}
