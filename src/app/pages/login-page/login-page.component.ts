import { Component } from '@angular/core';

// Models
import { Role } from '../../core/models/user/role.model';

// Services
import { AuthService } from './../../core/services/auth/auth.service';

// Components
import { LoginComponent } from '../../components/login/login.component';



@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [LoginComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

  constructor(private authService: AuthService) {

  }

  onAuthenticationSucceeded(token: string) {
    sessionStorage.setItem('token', token);

    this.authService.roles().subscribe({
      next: (resp: { data: Role[] }) => {
        const roles = resp.data;
        const pos = roles.findIndex( role => role.id == 1);
        this.authService.setAdmin(pos != -1);
      },
      error: err => {

      }
    });
  }

  onAuthenticationFailed(msg: string) {
    sessionStorage.removeItem('token');
  }

}
