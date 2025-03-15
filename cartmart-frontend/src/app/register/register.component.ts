// src/app/register/register.component.ts
import { Component } from '@angular/core';
import { FormsModule,NgForm } from '@angular/forms';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-register',
  standalone:true,
  imports:[FormsModule,HttpClientModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  user = {
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
    password: '',
  };

  constructor(private http: HttpClient) {}

  // Submit form
  onSubmit() {
    if (this.isFormValid()) {
      this.http.post('http://localhost:8095/api/user/register', this.user).subscribe(
        (response) => {
          console.log('Registration successful', response);
          alert('Registration successful!');
        },
        (error) => {
          console.error('Registration failed', error);
          alert('Registration failed. Please try again.');
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
    return!! (
      this.user.firstName &&
      this.user.lastName &&
      this.user.email &&
      this.user.mobileNumber &&
      this.user.password
    );
  }
}