import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private userService: UserService, private router: Router) {

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

  delete(id: number) {
    this.userService.delete(id).subscribe({
      next: () => {
        const index = this.items.findIndex(item => item.id == id);
        this.items.splice(index, 1);
      },
      error: err => {

      }
    });
  }

  edit(id: number) {
    this.router.navigate(['user', id.toString()]);
  }

}
