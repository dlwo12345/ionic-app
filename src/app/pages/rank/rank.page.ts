import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AlertController, ModalController} from '@ionic/angular';
import {DetailPage} from '../modal/detail/detail.page';
import {ReportPage} from '../modal/report/report.page';
import {Router} from '@angular/router';

import * as moment from 'moment';

@Component({
  selector: 'app-rank',
  templateUrl: 'rank.page.html',
  styleUrls: ['rank.page.scss']
})
export class RankPage {
  modal = null;
  test = moment(new Date()).format('YYYY-MM');

  testArr = [
    {text: '초기데이터- 벨라 님의 발전소1'},
    {text: '초기데이터- 윌슨 님의 발전소3'},
    {text: '초기데이터- 남산 님의 발전소1'},
    {text: '초기데이터- 이름긴사람 님의 발전소3'},
    {text: '초기데이터- 이름긴사람 님의 발전소1'},
    {text: '초기데이터- 이름긴사람 님의 발전소3'},
    {text: '초기데이터- 이름긴사람 님의 발전소1'},
    {text: '초기데이터- 이름긴사람 님의 발전소3'}
  ];

  constructor(
    public http: HttpClient,
    public alertC: AlertController,
    public modalC: ModalController,
    public router: Router
  ) {}

  apiTest() {
    this.http.get('/assets/test.json', {}).subscribe(res => {
      console.log('res', res);
    });
    // const alert = this.alertC.create({message:'123'});
    // alert.then(res=>{
    //   res.present();
    // })
  }

  test3(e) {
    console.log('e', e);
  }

  async presentModal1() {
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
  async presentModal2() {
    const modal = await this.modalC.create({
      component: ReportPage,
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

  changeMonth(type: string) {
    switch (type) {
      case 'left':
        this.test = moment(this.test)
          .add(-1, 'month')
          .format('YYYY-MM');
        break;
      case 'right':
        this.test = moment(this.test)
          .add(1, 'month')
          .format('YYYY-MM');
        break;
    }

    this.ionRefresh();
  }

  participation() {
    this.router.navigate(['/participation']);
  }

  ionRefresh(event?) {
    console.log('Pull Event Triggered!');
    setTimeout(() => {
      console.log('Async operation has ended');
      this.testArr = [
        {text: '갱신데이터 - 벨라 님의 발전소1'},
        {text: '갱신데이터 - 윌슨 님의 발전소3'},
        {text: '갱신데이터 - 남산 님의 발전소1'},
        {text: '갱신데이터 - 이름긴사람 님의 발전소3'},
        {text: '갱신데이터 - 이름긴사람 님의 발전소1'},
        {text: '갱신데이터 - 이름긴사람 님의 발전소3'},
        {text: '갱신데이터 - 이름긴사람 님의 발전소1'},
        {text: '갱신데이터 - 이름긴사람 님의 발전소3'}
      ];

      //complete()  signify that the refreshing has completed and to close the refresher
      if (event) {
        event.target.complete();
      }
    }, 2000);
  }
  ionPull(event) {
    //Emitted while the user is pulling down the content and exposing the refresher.
    console.log('ionPull Event Triggered!');
  }
  ionStart(event) {
    //Emitted when the user begins to start pulling down.
    console.log('ionStart Event Triggered!');
  }
}
