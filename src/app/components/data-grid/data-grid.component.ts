import { Component, Input } from '@angular/core';

// Components
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-data-grid',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './data-grid.component.html',
  styleUrl: './data-grid.component.css'
})
export class DataGridComponent {

  @Input() title: string | undefined = undefined;

  @Input() items: any | undefined = undefined;

  @Input() columns: string [] = [];

  @Input() allowDelete: boolean = true;

  @Input() allowEdit: boolean = true;

}
