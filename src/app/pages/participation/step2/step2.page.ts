import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.page.html',
  styleUrls: ['./step2.page.scss']
})
export class Step2Page implements OnInit {
  constructor(public navC: NavController) {}

  ngOnInit() {}

  next() {
    this.navC.navigateForward('/participation/complete');
  }
}
