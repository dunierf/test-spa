import { Component, OnInit } from '@angular/core';

// Models
import { User } from './../../core/models/user/user.model';

// Services
import { UserService } from './../../core/services/user/user.service';

// Components
import { DataGridComponent } from '../../components/data-grid/data-grid.component';

@Component({
  selector: 'app-users-page',
  standalone: true,
  imports: [DataGridComponent],
  templateUrl: './users-page.component.html',
  styleUrl: './users-page.component.css'
})
export class UsersPageComponent implements OnInit {

  items: User[] = [];

  constructor(private userService: UserService) {

  }

  ngOnInit(): void {
    this.userService.getAll().subscribe({
      next: (response: { data: User[] }) => {
        this.items = response.data;
      },
      error: err => {

      }
    });
  }

}
