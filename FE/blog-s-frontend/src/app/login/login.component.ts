import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}
  showPassword: boolean = false;
  emailAlert: string = '';
  passwordAlert: string = '';
  @ViewChild('myForm') form!: NgForm;
  incorrectDetails!: string;
  setShowPassword() {
    this.showPassword = !this.showPassword;
  }
  onSubmit() {
    if (this.form.valid) {
      this.http
        .post('http://localhost:5000/api/auth/login', this.form.value)
        .subscribe(
          (res) => {},
          (err) => {
            this.incorrectDetails = err.error.message;
          }
        );
    }
  }
}
