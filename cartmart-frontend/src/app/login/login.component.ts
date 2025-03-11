// src/app/login/login.component.ts
import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms'; // Import FormsModule
import { HttpClient, HttpClientModule } from '@angular/common/http'; // Import HttpClient and HttpClientModule
import { CommonModule } from '@angular/common'; // Import CommonModule
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true, // Ensure standalone is true
  imports: [RouterModule,FormsModule, HttpClientModule, CommonModule], // Add required modules
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation:ViewEncapsulation.None,
})
export class LoginComponent {
  user = {
    username: '',
    password: '',
  };

  constructor(private http: HttpClient) {}

  // Submit form
  onSubmit() {
    if (this.isFormValid()) {
      this.http.post('https://your-backend-url.com/login', this.user).subscribe(
        (response) => {
          console.log('Login successful', response);
          alert('Login successful!');
        },
        (error) => {
          console.error('Login failed', error);
          alert('Login failed. Please try again.');
        }
      );
    }
  }

  // Reset form
  onReset(form: NgForm) {
    form.resetForm();
  }

  // Check if form is valid
  isFormValid(): boolean {
    return !!(
      this.user.username &&
      this.user.password
    );
  }
}