import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.page.html',
  styleUrls: ['./step2.page.scss']
})
export class Step2Page implements OnInit {
  constructor(public router: Router) {}

  ngOnInit() {}

  next() {
    this.router.navigate(['/participation/complete']);
  }
}
