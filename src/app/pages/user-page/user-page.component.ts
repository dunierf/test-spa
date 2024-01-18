import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Models
import { User } from './../../core/models/user/user.model';

// Services
import { UserService } from './../../core/services/user/user.service';


@Component({
  selector: 'app-user-page',
  standalone: true,
  imports: [],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.css'
})
export class UserPageComponent implements OnInit {

  user: User | undefined = undefined;

  constructor(private userService: UserService, private route: ActivatedRoute) {

  }

  newUser() {
    this.user = {
      id: 0,
      name: '',
      email: '',
      roles: []
    };
  }

  ngOnInit(): void {
    this.route.params.subscribe( params => {
      const id = params['id'] ? parseInt(params['id']) : 0;

      if (id) {
        this.userService.getById(id).subscribe({
          next: (user: User) => {
            this.user = user;
          },
          error: err => {
            this.newUser();
          },
        })
      }
      else
        this.newUser();
    });
  }
}
