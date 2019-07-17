import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-no-login',
  templateUrl: 'no-login.page.html',
  styleUrls: ['no-login.page.scss']
})
export class NoLoginPage {
  constructor(public router: Router) {}
}
