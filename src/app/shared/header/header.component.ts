import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isUserLogin = false;
  constructor() {
    if (localStorage.getItem('userToken') == null) {
      this.isUserLogin = false;
    } else {
      this.isUserLogin = true;
    }
  }

  ngOnInit() {
  }

}
