import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.scss'
})
export class AdminLoginComponent {
  email: string = '';
  password: string = '';
  rememberMe: boolean = false;

  constructor(private router: Router) {}

  onLogin() {
    // Simple validation for demo
    if (this.email && this.password) {
      // Store login state (in real app, use proper authentication)
      localStorage.setItem('isAdminLoggedIn', 'true');
      localStorage.setItem('adminEmail', this.email);
      
      // Navigate to dashboard
      this.router.navigate(['/admin/dashboard']);
    } else {
      alert('Please enter email and password');
    }
  }
}
