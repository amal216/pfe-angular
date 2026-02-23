import { Component } from '@angular/core';
import { AuthService, User } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  user: User & { mot_de_passe: string } = { nom: '', email: '', role: 'Client', mot_de_passe: '' };
  message = '';

  roles = ['Admin', 'Service Appel', 'Client', 'Gerant'];

  constructor(private auth: AuthService, private router: Router) {}

  register() {
    this.auth.register(this.user).subscribe({
      next: (res) => {
        this.message = res.message;
        this.router.navigate(['/login']);
      },
      error: (err) => {
        this.message = err.error.message || 'Erreur';
      }
    });
  }
}
