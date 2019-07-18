import {Component, OnDestroy} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import {AlertController, ModalController, NavController} from '@ionic/angular';
import {HttpClient} from '@angular/common/http';
import {DetailPage} from '../../modal/detail/detail.page';
import {LoginService} from 'src/app/shared/services/login.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-rank-detail',
  templateUrl: 'rank-detail.page.html',
  styleUrls: ['rank-detail.page.scss']
})
export class RankDetailPage implements OnDestroy {
  modal = null;

  myData: any;
  rankList: any = [];

  routeSub: Subscription;
  signInfoSub: Subscription;

  constructor(
    private http: HttpClient,
    private alertC: AlertController,
    private modalC: ModalController,
    private router: Router,
    private navC: NavController,
    private route: ActivatedRoute,
    private loginS: LoginService
  ) {
    this.routeSub = this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        const areaNumber = this.router.getCurrentNavigation().extras.state
          .league;
        console.log('전달데이터', areaNumber);

        // 초기 데이터 call(여기에 전달받은 지역번호 담아서 보내줘야함)
        this.loadData();

        // 로그인 && 참가자일때
        if (this.loginS.checkUser() === 2) {
          this.signInfoSub = this.loginS.signInfo$.subscribe(res => {
            // 전달받은 지역번호와 로그인 정보의 지역번호가 같을때만 데이터 받음
            if (res.mypage.pwpLoctSiDo === areaNumber) {
              this.myData = res.mypage;
            }
            console.log('rank-detail login 정보 호출', this.myData);
          });
        }
      } else {
        // 비정상적인 방법을 통해서 접근했을때 초기페이지로 돌려보냄(map에서 링크찍고 들어올때만 접근가능)
        this.navC.navigateBack('/tabs/rank/map');
      }
    });
  }

  // api call
  loadData() {
    this.http.get('/assets/sidoAreaInfo.json', {}).subscribe((res: any) => {
      this.rankList = res.data.sidoAreaLolList;
      console.log('detail 리그 로드완료', this.rankList);
    });
  }

  goMap() {
    this.navC.navigateForward('/tabs/rank/map');
  }

  goMy() {
    this.navC.navigateForward('/tabs/my');
  }

  async presentModal1(e) {
    console.log('e', e); // 전달되는 seq값을 아래 modal에 전달해줄 예정
    const modal = await this.modalC.create({
      component: DetailPage,
      componentProps: {value: 123}
    });

    modal.onDidDismiss().then(dataReturned => {
      if (dataReturned !== null) {
        console.log('dataReturned', dataReturned);
        // this.dataReturned = dataReturned.data;
        // alert('Modal Sent Data :'+ dataReturned);
      }
    });

    return await modal.present();
  }

  changeLeague() {
    this.loadData();
  }

  ngOnDestroy(): void {
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
    if (this.signInfoSub) {
      this.signInfoSub.unsubscribe();
    }
  }
}
