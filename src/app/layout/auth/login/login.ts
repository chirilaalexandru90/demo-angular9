import { AuthService } from './../auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToasterService } from 'src/app/shared/services/toaster-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.html'
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  isLoading: boolean;

  constructor(
    private authService: AuthService,
    private toasterService: ToasterService
  ) { }

  ngOnInit() {
    this.initializeForm();
  }

  onSubmit() {
    if (!this.loginForm.valid) {
      this.toasterService.displayToaster(
        `All fields must be completed`,
        'Close',
        'toast-danger',
        200000
      );
    }

    this.isLoading = true;

    this.authService.login({
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }).subscribe(() => {
      this.isLoading = false;
      this.authService.authSuccessfully();
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

  private initializeForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', {
        validators: [Validators.required, Validators.email]
      }),
      password: new FormControl('', {
        validators: [Validators.required]
      })
    });
  }

  ngOnDestroy() {
    this.toasterService.snackBar.dismiss();
  }
}
