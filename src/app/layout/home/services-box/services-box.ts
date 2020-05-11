import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-services-box',
  templateUrl: './services-box.html'
})
export class ServicesBoxComponent implements OnInit {
  @Input()
  icon: string;
  @Input()
  title: string;
  @Input()
  description: string;

  constructor() { }

  ngOnInit(): void {
  }

}
