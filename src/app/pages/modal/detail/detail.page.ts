import {
  Component,
  Input,
  OnInit,
  NgZone,
  AfterViewInit,
  OnDestroy
} from '@angular/core';
import * as moment from 'moment';
import {NavParams, ModalController} from '@ionic/angular';
import {MedalPage} from '../medal/medal.page';

import {ShareSnsService} from 'src/app/shared/services/share-sns.service';

@Component({
  selector: 'app-detail',
  templateUrl: 'detail.page.html',
  styleUrls: ['detail.page.scss']
})
export class DetailPage implements OnInit, AfterViewInit, OnDestroy {
  // "value" passed in componentProps
  @Input() value: number;

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

  constructor(
    private navParams: NavParams,
    private modalC: ModalController,
    public ShareSnsS: ShareSnsService
  ) {
    // componentProps can also be accessed at construction time using NavParams
    console.log('navParams', navParams);
  }

  ngOnDestroy() {}

  ngAfterViewInit(): void {
    this.ShareSnsS.shareKakao();
  }

  ngOnInit() {}

  async closeModal() {
    const onClosedData = {};
    await this.modalC.dismiss(onClosedData);
  }

  async presentModal1(e) {
    console.log('e', e); // 전달되는 seq값을 아래 modal에 전달해줄 예정
    const modal = await this.modalC.create({
      component: MedalPage,
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
