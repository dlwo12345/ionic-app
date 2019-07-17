import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nickname',
  templateUrl: 'nickname.page.html',
  styleUrls: ['nickname.page.scss']
})
export class NicknamePage {
  constructor(public router: Router) {}
}
