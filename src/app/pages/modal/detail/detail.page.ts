import {Component, Input, OnInit} from '@angular/core';
import * as moment from 'moment';
import {NavParams, ModalController} from '@ionic/angular';
import {MedalPage} from '../medal/medal.page';

declare const Kakao: any;
declare const ShareBand: any;

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
    this.shareKakao();
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

  shareKakao() {
    Kakao.init('1b8992f588161a1d707ca7c5d660a5bf');
    Kakao.Link.createDefaultButton({
      container: '#kakao-link-btn',
      objectType: 'feed',
      installTalk: true,
      content: {
        title: '홍길동님의 발전소',
        description:
          '이번달엔 이렇게 발전이 되었습니다~~~~~~~이번달엔 이렇게 발전이 되었습니다~~~~~~~',
        imageUrl:
          'http://mud-kage.kakao.co.kr/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
        link: {
          mobileWebUrl: 'http://192.168.2.202:8100/tabs/my',
          webUrl: 'http://192.168.2.202:8100/tabs/my'
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

  shareBand(content, url) {
    content = content + ' ' + url;
    const param = 'create/post?text=' + encodeURIComponent(content);
    if (navigator.userAgent.match(/android/i)) {
      setTimeout(() => {
        location.href =
          'intent://' + param + '#Intent;package=com.nhn.android.band;end';
      }, 100);
    } else if (navigator.userAgent.match(/(iphone)|(ipod)|(ipad)/i)) {
      location.href = 'bandapp://' + param;
    }

    // 웹공유방식;
    content =
      'https://map.naver.com/?pinId=18821453&dlevel=11&enc=b64&pinType=site&y=4b5d9325eb8986da16391a0924e22e86&x=bb84cb4ba4c2740d594884d572586d21&spi_ref=m_map_band';
    const shareUrl =
      'http://www.band.us/plugin/share?body=' + encodeURIComponent(content);
    window.open(shareUrl, 'ShareBand', 'width=410, height=540, resizable=no');
  }
}
