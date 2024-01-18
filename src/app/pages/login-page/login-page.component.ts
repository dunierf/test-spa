import { Component } from '@angular/core';

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
  }

  onAuthenticationFailed(msg: string) {
    sessionStorage.removeItem('token');
  }

}
