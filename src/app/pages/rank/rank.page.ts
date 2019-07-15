import {Component} from '@angular/core';

import * as moment from 'moment';
import {LoginService} from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-rank',
  templateUrl: 'rank.page.html',
  styleUrls: ['rank.page.scss']
})
export class RankPage {
  constructor(private loginS: LoginService) {
    console.log('this.loginS.isLogin()', this.loginS.isLogin());
  }
}
