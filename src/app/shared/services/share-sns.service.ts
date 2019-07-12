import {Injectable} from '@angular/core';

declare const Kakao: any; // 카카오 API SDK
declare const ShareBand: any; // 밴드

@Injectable({
  providedIn: 'root' // 모든 페이지에서 공통으로 사용하기위해 provide root로 설정
})
export class ShareSnsService {
  kakaoInit = false; // 카카오 init 여부
  constructor() {
    console.log('init', this.kakaoInit);
  }

  shareKakao(option?: any) {
    if (!this.kakaoInit) {
      console.log('init11111111');
      Kakao.init('1b8992f588161a1d707ca7c5d660a5bf');
      this.kakaoInit = true;
    }

    Kakao.Link.createDefaultButton(
      Object.assign(
        {
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
                mobileWebUrl: 'http://192.168.2.202:8100/tabs/rank/map',
                webUrl: 'http://192.168.2.202:8100/tabs/rank/map'
              }
            }
          ]
        },
        option
      )
    );
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
