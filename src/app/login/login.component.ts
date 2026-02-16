import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, User } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  user: User = { email: '', password: '' };

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.user).subscribe({
      next: (res: any) => {
        console.log('Connexion réussie', res);
        localStorage.setItem('token', res.token); // stocker le token
        this.router.navigate(['/clients']); // rediriger vers la liste clients
      },
      error: (err: any) => {
        console.error(err);
        alert('Erreur de connexion');
      }
    });
  }
}
