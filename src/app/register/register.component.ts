import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, User } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  user: User = { nom: '', email: '', password: '' };

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    this.authService.register(this.user).subscribe({
      next: (res: any) => {
        console.log('Inscription réussie', res);
        alert('Compte créé avec succès !');
        this.router.navigate(['/login']);
      },
      error: (err: any) => {
        console.error(err);
        alert('Erreur lors de l’inscription');
      }
    });
  }
}
