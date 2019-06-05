import {Component} from '@angular/core';
import * as moment from 'moment';
@Component({
  selector: 'app-main',
  templateUrl: 'main.page.html',
  styleUrls: ['main.page.scss']
})
export class MainPage {
  test = moment(new Date()).format('YYYY-MM');
  constructor() {}
}
