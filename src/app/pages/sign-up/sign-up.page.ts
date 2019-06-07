import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: 'sign-up.page.html',
  styleUrls: ['sign-up.page.scss']
})
export class SignUpPage {
  constructor(public router: Router) {}
}
