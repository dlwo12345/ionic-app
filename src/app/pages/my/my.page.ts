import {Component, AfterViewInit, OnDestroy} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

import {LoginService} from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-my',
  templateUrl: 'my.page.html',
  styleUrls: ['my.page.scss']
})
export class MyPage {
  loginState: number;
  constructor(private loginS: LoginService) {
    this.loginState = this.loginS.checkUser();
  }
}
