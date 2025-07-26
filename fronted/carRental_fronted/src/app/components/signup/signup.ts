// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';

// @Component({
//   selector: 'app-signup',
//   standalone: true,
//   imports: [FormsModule, RouterModule, CommonModule],
//   templateUrl: './signup.html',
//   styleUrl: './signup.css'
// })
// export class Signup {
//  name: string = '';
//   email: string = '';
//   password: string = '';

//   signup() {
//     // Sirf UI ke liye placeholder function
//     alert(`Account created for ${this.name}`);
//   }
// }
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { AuthData } from '../../models/auth';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './signup.html',
  styleUrls: ['./signup.css']
})
export class Signup {
  authData: AuthData = { username: '', password: '' };

  constructor(private authService: AuthService) {}

  signup() {
    this.authService.signup(this.authData).subscribe({
      next: res => alert('Signup Successful!'),
      error: err => alert(err.error.message || 'Signup Failed')
    });
  }
}
