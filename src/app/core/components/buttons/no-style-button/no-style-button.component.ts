import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-no-style-button',
  templateUrl: './no-style-button.component.html',
  styleUrl: './no-style-button.component.css'
})
export class NoStyleButtonComponent {

  @Output() click = new EventEmitter();

  onClickButton() {
    this.click.emit();
  }

}
