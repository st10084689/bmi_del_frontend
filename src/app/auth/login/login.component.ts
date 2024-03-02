import { Component } from '@angular/core';
import { ContextComponent } from '../../context/context.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModel,FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ContextComponent, HttpClientModule,FormsModule, CommonModule,],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../../app.component.css']
})
export class LoginComponent {
  email: string = '';
  isDisabled: boolean = false;
  timerStarted: boolean = false;
  remainingTime: number = 10; 

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
    this.isDisabled = true;
    this.timerStarted = true;
    this.startTimer();
  }
  startTimer() {
    // Set a timer to enable the button after 10 seconds
    setTimeout(() => {
      this.isDisabled = false;
    }, 10000);

    // Update remaining time every second
    const interval = setInterval(() => {
      this.remainingTime -= 1;
      // Clear the interval when remaining time reaches 0
      if (this.remainingTime === 0) {
        clearInterval(interval);
      }
    }, 1000);
  }
}