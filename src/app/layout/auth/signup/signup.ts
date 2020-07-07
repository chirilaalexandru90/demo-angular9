import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { ToasterService } from 'src/app/shared/services/toaster-service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.html'
})
export class SignupComponent implements OnInit {
  maxDate: Date;
  signupForm: FormGroup;
  isLoading = false;

  constructor(
    private authService: AuthService,
    private toasterService: ToasterService
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
    if (!this.signupForm.valid) {
      this.toasterService.displayToaster(
        `All fields must be completed`,
        'Close',
        'toast-danger',
        200000
      );
      return;
    }

    this.isLoading = true;

    this.authService.registerUser({
      email: this.signupForm.value.email,
      password: this.signupForm.value.password
    }).subscribe(r => {
      this.signupForm.reset();
      this.isLoading = false;
      this.toasterService.displayToaster('Registered successfully', 'Close', 'toast-successfully', 2000);
    }, error => {
      this.toasterService.displayToaster(
        `Error code ${error.error.error.code}  - ${error.error.error.message}`,
        'Close',
        'toast-danger',
        200000
      );

      this.isLoading = false;
    });
  }
}
