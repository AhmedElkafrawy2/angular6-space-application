import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../../services/config/config.service';
import { AppSettings } from '../../../../global/app.settings';
import { Title } from '@angular/platform-browser';

import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formData: any = {};
  loginUrl = AppSettings.API_AUTH_BASE_ENDPOINT + 'login';
  pageTitle = AppSettings.APP_NAME + ' - login';
  loading = false;
  loginError = false;


  constructor(private config: ConfigService, private title: Title, private routet: Router) {}
  ngOnInit() {
    this.title.setTitle(this.pageTitle);
  }

  login() {
    this.changeLoadingIndicator(true);
    this.config.postConfig(this.formData, this.loginUrl)
      .subscribe(data => {
        this.changeLoadingIndicator(false);
        if (data.token) {
          localStorage.setItem('userToken', data.token);
          this.routet.navigate(['/dashboard']);
        } else {
          this.loginError = true;
        }
      }, error => {
        this.changeLoadingIndicator(false);
        console.log('There is an error', error);
      });
  }
  changeLoadingIndicator(status) {
    this.loading = status;
  }
}
