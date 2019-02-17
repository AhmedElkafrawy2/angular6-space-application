import { Component, OnInit } from '@angular/core';

import { AppSettings } from '../../../../global/app.settings';
import { Title } from '@angular/platform-browser';
import { ConfigService } from '../../../services/config/config.service';
import { User } from '../../../../models/User.model';
import {Router} from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  pageTitle = AppSettings.APP_NAME + ' - Dashboard';

  currentPage = 1;
  totalPages: number;
  users: Array<User> = [];

  loadingUsers = true;
  hideSingleUser = true;

  singleUserAvatar: string;
  singleUsername: string;
  constructor(private title: Title, private config: ConfigService, private router: Router) {
    this.title.setTitle(this.pageTitle);
  }

  ngOnInit() {
    this.loadMore();
  }

  loadMoreUsers() {
    if (this.currentPage <= this.totalPages) {
      this.loadMore();
    }
  }
  loadMore() {

    const getUsersUrl = AppSettings.API_AUTH_BASE_ENDPOINT + 'users?page=' + this.currentPage + '';
    this.config.getConfig(getUsersUrl).subscribe(response => {
      for ( let i = 0; i <= response.data.length - 1; i++) {
        this.users.push(response.data[i]);
      }
      this.currentPage++;
      this.totalPages = response.total_pages;
      this.loadingUsers = false;
    }, error => {
      console.log(error);
    });
  }
  showSingleUser(id: string, first_name: string, last_name: string, avatar: string) {
    this.singleUserAvatar = avatar;
    this.singleUsername = first_name + ' ' + last_name;
    this.hideSingleUser = false;
    document.getElementById('users-section').style.width = '76.7%';
  }
  hiddeSingleUser() {
    this.hideSingleUser = true;
    document.getElementById('users-section').style.width = '100%';
  }

}
