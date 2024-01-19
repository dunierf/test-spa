import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

//Services
import { AuthService } from './../../core/services/auth/auth.service';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email: string = '';

  password: string = '';

  disabled: boolean = false;

  @Output() onAuthenticationSucceeded: EventEmitter<string> = new EventEmitter<string> ();

  @Output() onAuthenticationFailed: EventEmitter<string> = new EventEmitter<string> ();

  constructor(private authService: AuthService) {

  }

  onSubmit() {
    this.disabled = true;

    this.authService.login(this.email, this.password).subscribe({
      next: (response: { token: string; }) => {
        this.email = '';
        this.password = '';
        this.disabled = false;
        this.onAuthenticationSucceeded.emit(response.token);
      },
      error: err => {
        this.disabled = false;
        this.onAuthenticationFailed.emit(err.error.msg);
      }
    });
  }

}
