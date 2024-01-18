import { Component } from '@angular/core';

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
export class UserPageComponent {

  user: User = {
    id: 0,
    name: '',
    email: '',
    roles: []
  };

  constructor(private userService: UserService) {

  }



}
