import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'Angular9 Store';
  name: any;

  constructor() { }

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBMgr3qGUI5G6Y3RiP7agQOjLqzdDqvMAo',
      authDomain: 'emart-store.firebaseapp.com',
    });
  }
}
