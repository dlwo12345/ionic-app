import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AlertController, ModalController} from '@ionic/angular';
import {DetailPage} from '../modal/detail/detail.page';
import {Router} from '@angular/router';

import * as moment from 'moment';
import {MedalPage} from '../modal/medal/medal.page';
import {SetPage} from '../modal/set/set.page';

@Component({
  selector: 'app-my',
  templateUrl: 'my.page.html',
  styleUrls: ['my.page.scss']
})
export class MyPage {
  modal = null;
  chartData = [
    {country: '가', visits: 2025},
    {country: '나', visits: 1882},
    {country: '다', visits: 1809},
    {country: '라', visits: 1322},
    {country: '마', visits: 1122},
    {country: '바', visits: 1114},
    {country: '사', visits: 984},
    {country: '아', visits: 711},
    {country: '자', visits: 665},
    {country: '차', visits: 580},
    {country: '타', visits: 443},
    {country: '카', visits: 441},
    {country: '파', visits: 395}
  ];

  viewMonth = moment(new Date()).format('YYYY-MM');

  constructor(
    public http: HttpClient,
    public alertC: AlertController,
    public modalC: ModalController,
    public router: Router
  ) {}

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
}
