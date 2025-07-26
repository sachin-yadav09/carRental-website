// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';

// @Component({
//   selector: 'app-login',
//   standalone: true,
//   imports: [FormsModule, RouterModule, CommonModule],
//   templateUrl: './login.html',
//   styleUrl: './login.css'
// })
// export class Login {
//  email: string = '';
//   password: string = '';

//   login() {
//     // Sirf UI ke liye placeholder function
//     alert(`Logged in with\nEmail: ${this.email}`);
//   }
// }

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { AuthData } from '../../models/auth';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  authData: AuthData = { username: '', password: '' };

  constructor(private authService: AuthService) {}

  login() {
    this.authService.login(this.authData).subscribe({
      next: res => alert('Login Successful!'),
      error: err => alert(err.error.message || 'Login Failed')
    });
  }
}
