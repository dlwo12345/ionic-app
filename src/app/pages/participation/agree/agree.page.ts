import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router, ActivatedRoute, NavigationEnd} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-agree',
  templateUrl: './agree.page.html',
  styleUrls: ['./agree.page.scss']
})
export class AgreePage implements OnInit, OnDestroy {
  routerSub: Subscription;
  interval = null;
  constructor(public router: Router) {}

  ngOnInit() {
    this.routerSub = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log('event', event);
      }
    });
  }

  agree() {
    this.router.navigate(['/participation/step1']);
  }

  ngOnDestroy(): void {
    if (this.routerSub) {
      this.routerSub.unsubscribe();
    }
  }
}
