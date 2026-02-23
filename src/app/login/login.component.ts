import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email = '';
  mot_de_passe = '';
  message = '';

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    this.auth.login({ email: this.email, mot_de_passe: this.mot_de_passe }).subscribe({
      next: (res) => {
        this.auth.storeUser(res.user);
        this.message = res.message;
        this.router.navigate(['/avis-clients']);
      },
      error: (err) => {
        this.message = err.error.message || 'Erreur';
      }
    });
  }
}
