import {Component, OnInit} from '@angular/core';
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
    this.navC.navigateBack('/tabs/rank/map');
  }

  close() {
    this.navC.navigateBack('/tabs/rank/map');
  }
}
