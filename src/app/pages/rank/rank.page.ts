import {Component, OnDestroy} from '@angular/core';

import * as moment from 'moment';
import {LoginService} from 'src/app/shared/services/login.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-rank',
  templateUrl: 'rank.page.html',
  styleUrls: ['rank.page.scss']
})
export class RankPage implements OnDestroy {
  private loginSub: Subscription;
  constructor(private loginS: LoginService) {

    this.loginSub = loginS.signInfo$.subscribe(res => {
      console.log('res', res);
    });

  }

  ngOnDestroy() {
    if (this.loginSub) {
      this.loginSub.unsubscribe();
    }
  }
}
