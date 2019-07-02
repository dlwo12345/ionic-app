import {Component, Input, OnInit} from '@angular/core';
import * as moment from 'moment';
import {NavParams, ModalController} from '@ionic/angular';
import {MedalPage} from '../medal/medal.page';

declare const Kakao: any;

@Component({
  selector: 'app-detail',
  templateUrl: 'detail.page.html',
  styleUrls: ['detail.page.scss']
})
export class DetailPage implements OnInit {
  // "value" passed in componentProps
  @Input() value: number;
  premiumAuth = false; // SPEC, 수익금, 시공사 표시여부

  constructor(private navParams: NavParams, private modalC: ModalController) {
    // componentProps can also be accessed at construction time using NavParams
    console.log('navParams', navParams);
  }

  ngOnInit() {
    this.kakaoShare();
  }
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

  kakaoShare() {
    Kakao.init('1b8992f588161a1d707ca7c5d660a5bf');
    Kakao.Link.createDefaultButton({
      container: '#kakao-link-btn',
      objectType: 'feed',
      installTalk: true,
      content: {
        title: '태양광 발전현황',
        description: '태양광 발전현황을 알아보자',
        imageUrl:
          'http://mud-kage.kakao.co.kr/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
        link: {
          mobileWebUrl: 'http://192.168.2.202:8100/tabs/rank',
          webUrl: 'http://192.168.2.202:8100/tabs/rank'
        }
      },
      buttons: [
        {
          title: '알아보러가기',
          link: {
            mobileWebUrl: 'http://192.168.2.202:8100/tabs/rank',
            webUrl: 'http://192.168.2.202:8100/tabs/rank'
          }
        }
      ]
    });
  }
}
