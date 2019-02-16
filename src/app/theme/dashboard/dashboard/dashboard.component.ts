import { Component, OnInit } from '@angular/core';

import { AppSettings } from '../../../../global/app.settings';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  pageTitle = AppSettings.APP_NAME + ' - Dashboard';
  navigation = [
    {
      name : 'Home',
      url  : '/home'
    },
    {
      name : 'Dashboard',
      url  : '/dashboard'
    }
  ];
  constructor(private title: Title) {
    this.title.setTitle(this.pageTitle);
  }

  ngOnInit() {
  }

}
