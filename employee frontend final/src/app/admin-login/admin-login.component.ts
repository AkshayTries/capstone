import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  name: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    const adminData = {
      adminName: this.name,
      adminPassword: this.password
    };

    this.http.post<any>('http://localhost:8080/api/v1/login', adminData)
.subscribe(
      response => {
        console.log('Login successful', response);
        alert(response.message); // or response.token if you have JWT
        this.router.navigate(['/home']); // ✅ route after login success
      },
      error => {
        console.error('Login failed', error);
        alert('Invalid credentials. Please try again.');
      }
    );
  }
}