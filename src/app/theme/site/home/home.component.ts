import { Component, OnInit } from '@angular/core';

import { AppSettings } from '../../../../global/app.settings';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pageTitle = AppSettings.APP_NAME + ' - Home Page';
  constructor(private title: Title) {
    this.title.setTitle(this.pageTitle);
  }

  ngOnInit() {
  }

}
