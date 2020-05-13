import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.html'
})
export class SignupComponent implements OnInit {
  maxDate: Date;
  signupForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.getMaxDate();
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

  getMaxDate() {
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
  }

  onSubmit() {
    console.log(this.signupForm.value);
  }

}
