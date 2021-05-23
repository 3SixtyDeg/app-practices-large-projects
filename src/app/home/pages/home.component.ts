import { Component, OnInit } from '@angular/core';



declare function initPage(): void;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    initPage();
  }

}
