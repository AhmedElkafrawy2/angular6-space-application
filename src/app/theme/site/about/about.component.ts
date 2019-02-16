import { Component, OnInit } from '@angular/core';

import { AppSettings } from '../../../../global/app.settings';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  pageTitle = AppSettings.APP_NAME + ' - About Us Page';
  constructor(private title: Title) {
    this.title.setTitle(this.pageTitle);
  }

  ngOnInit() {
  }

}
