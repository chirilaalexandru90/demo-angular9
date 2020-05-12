import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.html'
})
export class SignupComponent implements OnInit {
  maxDate;
  constructor() { }

  ngOnInit(): void {
    this.getMaxDate();
  }

  getMaxDate() {
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
  }

}
