import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.page.html',
  styleUrls: ['./complete.page.scss']
})
export class CompletePage implements OnInit {
  constructor(public navC: NavController) {}

  ngOnInit() {}

  goMain() {
    this.navC.navigateBack('/tabs/rank');
  }
}
