import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router, ActivatedRoute, NavigationEnd} from '@angular/router';
import {Subscription} from 'rxjs';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-agree',
  templateUrl: './agree.page.html',
  styleUrls: ['./agree.page.scss']
})
export class AgreePage implements OnInit, OnDestroy {
  routerSub: Subscription;
  interval = null;
  constructor(public navC: NavController) {}

  ngOnInit() {}

  agree() {
    this.navC.navigateForward('/participation/step1');
  }

  ngOnDestroy(): void {
    if (this.routerSub) {
      this.routerSub.unsubscribe();
    }
  }
}
