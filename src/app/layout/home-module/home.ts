import { Component, OnInit } from '@angular/core';
import { SERVICES_LIST } from './services-box/services-list.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.html'
})
export class HomeComponent implements OnInit {
  servicesList = SERVICES_LIST;

  constructor() { }

  ngOnInit(): void {
  }

}
