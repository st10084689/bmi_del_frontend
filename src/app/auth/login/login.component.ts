import { Component } from '@angular/core';
import { ContextComponent } from '../../context/context.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModel,FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ContextComponent, HttpClientModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../../app.component.css']
})
export class LoginComponent {
  email: string = '';

  constructor(private http: HttpClient) {}

  onEmailInput(event: any) {
    this.email = event.target.value; 
  }

  submitForm() {
    // Send HTTP request
    this.http.post('https://bmi-backend-api.azurewebsites.net/sendDeleteLink', { email: this.email }).subscribe(
      (response) => {
        console.log('Request successful', response);
        alert('Email Sent to ' + this.email); 
      },
      (error) => {
        console.error('Request failed', error);
        alert('Request failed'); 
      }
    );
  }
}