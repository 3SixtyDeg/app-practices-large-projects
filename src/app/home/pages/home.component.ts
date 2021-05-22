import { Component, OnInit } from '@angular/core';



declare function initSideBarMenu(): void;
declare function initCustom(): void;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor() { 
    initSideBarMenu();
    initCustom();
  }

  ngOnInit(): void {
  }

}
