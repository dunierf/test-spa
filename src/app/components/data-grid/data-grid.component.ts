import { Component, EventEmitter, Input, Output } from '@angular/core';

// Components
import { CardComponent } from '../card/card.component';

// Environment
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-data-grid',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './data-grid.component.html',
  styleUrl: './data-grid.component.css'
})
export class DataGridComponent {

  @Input() collection: string = "";

  @Input() items: any | undefined = undefined;

  @Input() columns: string [] = [];

  @Input() allowDelete: boolean = true;

  @Input() allowEdit: boolean = true;

  @Output() onDelete: EventEmitter<number> = new EventEmitter<number>();

  @Output() onEdit: EventEmitter<number> = new EventEmitter<number>();

  delete(id: number) {
    this.onDelete.emit(id);
  }

  edit(id: number) {
    this.onEdit.emit(id);
  }

}
