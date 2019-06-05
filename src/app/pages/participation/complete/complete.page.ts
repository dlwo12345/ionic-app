import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.page.html',
  styleUrls: ['./complete.page.scss']
})
export class CompletePage implements OnInit {
  constructor(public router: Router) {}

  ngOnInit() {}

  goMain() {
    this.router.navigate(['/tabs/rank']);
  }
}
