import { Component, OnInit } from '@angular/core';

import { AppSettings } from '../../../../global/app.settings';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

  pageTitle = AppSettings.APP_NAME + ' - Forget Password Page';
  constructor(private title: Title) {
    this.title.setTitle(this.pageTitle);
  }

  ngOnInit() {
  }

}
