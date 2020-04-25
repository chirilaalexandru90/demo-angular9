import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'demo-angular9';
  name: any;

  constructor(
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    // this.activatedRoute.queryParams.subscribe(params => {
    //   console.log(params, params.name)
    //   this.name = params.name;
    // });
  }
}
