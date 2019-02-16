import { Component, OnInit } from '@angular/core';

import { AppSettings } from '../../../../global/app.settings';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  pageTitle = AppSettings.APP_NAME + ' - Contact Us Page';
  constructor(private title: Title) {
    this.title.setTitle(this.pageTitle);
  }

  ngOnInit() {
  }

}
