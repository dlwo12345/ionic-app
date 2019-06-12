import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.page.html',
  styleUrls: ['./step1.page.scss']
})
export class Step1Page implements OnInit {
  constructor(public navC: NavController) {}

  ngOnInit() {}

  next() {
    this.navC.navigateForward('/participation/step2');
  }

  segmentChanged() {
    console.log('segmentChanged');
  }
}
