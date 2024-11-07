import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  constructor(private http: HttpClient, private router: Router) {}
  @ViewChild('myForm') form!: NgForm;
  showPassword: boolean = false;
  incorrectDetails: string = '';
  ngOnInit(): void {}
  setShowPassword() {
    this.showPassword = !this.showPassword;
  }
  onSubmit() {
    if (this.form.valid) {
      this.http
        .post('http://localhost:5000/api/auth/signup', this.form.value)
        .subscribe(
          (res) => {
            console.log('res', res);
            this.router.navigate(['/']);
          },
          (err) => {
            this.incorrectDetails = err.error.message;
          }
        );
    }
  }
}
