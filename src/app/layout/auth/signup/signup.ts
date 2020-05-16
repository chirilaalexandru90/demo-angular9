import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.html'
})
export class SignupComponent implements OnInit {
  maxDate: Date;
  signupForm: FormGroup;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.getMaxDate();
    this.initializeForm();
  }

  private initializeForm() {
    this.signupForm = new FormGroup({
      email: new FormControl('', {
        validators: [Validators.required, Validators.email]
      }),
      password: new FormControl('', {
        validators: [Validators.required]
      }),
      birthday: new FormControl('', {
        validators: [Validators.required]
      })
    });
  }
  private getMaxDate() {
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
  }

  onSubmit() {
    this.authService.registerUser({
      email: this.signupForm.value.email,
      password: this.signupForm.value.password
    });

  }

}
