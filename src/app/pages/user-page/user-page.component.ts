import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// Models
import { User } from './../../core/models/user/user.model';

// Services
import { UserService } from './../../core/services/user/user.service';

// Components
import { CardComponent } from '../../components/card/card.component';
import { UserFormComponent } from '../../components/forms/user-form/user-form.component';


@Component({
  selector: 'app-user-page',
  standalone: true,
  imports: [CardComponent, UserFormComponent],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.css'
})
export class UserPageComponent implements OnInit {

  user: User | undefined = undefined;

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) {

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

  toCollection(user: User) {
    this.router.navigate(['users']);
  }
}
