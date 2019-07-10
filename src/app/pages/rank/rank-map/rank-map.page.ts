import {Component} from '@angular/core';
import {Router} from '@angular/router';

import * as moment from 'moment';

declare var kakao: any;

@Component({
  selector: 'app-rank-map',
  templateUrl: 'rank-map.page.html',
  styleUrls: ['rank-map.page.scss']
})
export class RankMapPage {
  viewMonth = moment(new Date()).format('YYYY-MM');
  constructor(private router: Router) {}

  /**
   * 아이오닉 뷰 바인딩 이후
   */
  ionViewDidEnter() {
    this.loadKakaoMap();
  }

  loadKakaoMap() {
    console.log('1111222');
    const mapContainer = document.getElementById('map'), // 지도를 표시할 div
      mapOption = {
        center: new kakao.maps.LatLng(36.407263, 128.099706), // 지도의 중심좌표
        draggable: true,
        disableDoubleClickZoom: true,
        level: 13 // 지도의 확대 레벨
      };

    const map = new kakao.maps.Map(mapContainer, mapOption);

    const customOverlayList = [
      {
        position: new kakao.maps.LatLng(37.274399, 127.51605), // 커스텀 오버레이가 표시될 위치입니다
        enterPosition: '경기도', // 참가 구분
        number: 3 // 참가 인원
      },
      {
        position: new kakao.maps.LatLng(37.686313, 127.059961), // 커스텀 오버레이가 표시될 위치입니다
        enterPosition: '서울', // 참가 구분
        number: 5 // 참가 인원
      },
      {
        position: new kakao.maps.LatLng(37.379845, 126.626494), // 커스텀 오버레이가 표시될 위치입니다
        enterPosition: '인천', // 참가 구분
        number: 1 // 참가 인원
      },
      {
        position: new kakao.maps.LatLng(37.461489, 128.963376), // 커스텀 오버레이가 표시될 위치입니다
        enterPosition: '강원도', // 참가 구분
        number: 1 // 참가 인원
      },
      {
        position: new kakao.maps.LatLng(35.406111, 129.210556), // 커스텀 오버레이가 표시될 위치입니다
        enterPosition: '경상도', // 참가 구분
        number: 1 // 참가 인원
      },
      {
        position: new kakao.maps.LatLng(35.14989, 126.625157), // 커스텀 오버레이가 표시될 위치입니다
        enterPosition: '전라도', // 참가 구분
        number: 1 // 참가 인원
      },
      {
        position: new kakao.maps.LatLng(36.380507, 127.14494), // 커스텀 오버레이가 표시될 위치입니다
        enterPosition: '충청도', // 참가 구분
        number: 1 // 참가 인원
      },
      {
        position: new kakao.maps.LatLng(33.343684, 126.541758), // 커스텀 오버레이가 표시될 위치입니다
        enterPosition: '제주도', // 참가 구분
        number: 1 // 참가 인원
      }
    ];

    customOverlayList.forEach(v => {
      const itemContent = document.createElement('div');
      itemContent.className = 'customoverlay';
      itemContent.addEventListener('click', e => {
        this.router.navigate(['tabs', 'rank', 'detail']);
        console.log('v', v);
        console.log('e', e);
      });
      itemContent.innerHTML = `<a href="javascript:void(0)" target="_blank"><span class="title">${
        v.enterPosition
      }(${v.number})<br><span style="color:#60A9F8;">4.81 h</span></span></a>`;

      // const itemContent = `<div class="customoverlay">
      //                       <a href="javascript:void(0)" target="_blank">
      //                         <span class="title">${v.enterPosition}<br>
      //                           <span style="color:red;">${v.number}건</span>
      //                         </span>
      //                       </a>
      //                      </div>`;
      const customOverlay = new kakao.maps.CustomOverlay({
        map,
        clickable: true,
        position: v.position,
        content: itemContent,
        yAnchor: 1
      });
      customOverlay.setMap(map);
    });
    // 커스텀 오버레이에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    // const content = `<div class="customoverlay">
    //     <a href="javascript:void(0)" target="_blank">
    //       <span class="title">경기도<br><span style="color:red;">3건</span></span>
    //     </a>
    //   </div>`;

    // 커스텀 오버레이가 표시될 위치입니다
    // const position = new kakao.maps.LatLng(37.316275, 127.609132);
    // 커스텀 오버레이를 생성합니다
    // const customOverlay = new kakao.maps.CustomOverlay({
    //   map,
    //   position,
    //   content,
    //   yAnchor: 1
    // });
  }
  loadKakaoMap2(e) {
    if (e.cancelable) {
      e.preventDefault();
    }
    console.log('e', e);
    const mapContainer = document.getElementById('map'), // 지도를 표시할 div
      mapOption = {
        center: new kakao.maps.LatLng(36.407263, 128.099706), // 지도의 중심좌표
        draggable: false,
        disableDoubleClickZoom: true,
        level: 14 // 지도의 확대 레벨
      };

    const map = new kakao.maps.Map(mapContainer, mapOption);

    const customOverlayList = [
      {
        position: new kakao.maps.LatLng(37.379845, 126.626494), // 커스텀 오버레이가 표시될 위치입니다
        enterPosition: '인천', // 참가 구분
        number: 1 // 참가 인원
      },
      {
        position: new kakao.maps.LatLng(37.461489, 128.963376), // 커스텀 오버레이가 표시될 위치입니다
        enterPosition: '강원도', // 참가 구분
        number: 1 // 참가 인원
      },
      {
        position: new kakao.maps.LatLng(35.406111, 129.210556), // 커스텀 오버레이가 표시될 위치입니다
        enterPosition: '경상도', // 참가 구분
        number: 1 // 참가 인원
      },
      {
        position: new kakao.maps.LatLng(35.14989, 126.625157), // 커스텀 오버레이가 표시될 위치입니다
        enterPosition: '전라도', // 참가 구분
        number: 1 // 참가 인원
      },
      {
        position: new kakao.maps.LatLng(36.380507, 127.14494), // 커스텀 오버레이가 표시될 위치입니다
        enterPosition: '충청도', // 참가 구분
        number: 1 // 참가 인원
      },
      {
        position: new kakao.maps.LatLng(33.343684, 126.541758), // 커스텀 오버레이가 표시될 위치입니다
        enterPosition: '제주도', // 참가 구분
        number: 1 // 참가 인원
      }
    ];

    customOverlayList.forEach(v => {
      const itemContent = document.createElement('div');
      itemContent.className = 'customoverlay';
      itemContent.addEventListener('click', e => {
        this.router.navigate(['tabs', 'rank']);
        console.log('v', v);
        console.log('e', e);
      });
      itemContent.innerHTML = `<a href="javascript:void(0)" target="_blank">
                              <span class="title">${v.enterPosition}<br>
                                <span style="color:red;">${v.number}건</span>
                              </span>
                            </a>`;
      // const itemContent = `<div class="customoverlay">
      //                       <a href="javascript:void(0)" target="_blank">
      //                         <span class="title">${v.enterPosition}<br>
      //                           <span style="color:red;">${v.number}건</span>
      //                         </span>
      //                       </a>
      //                      </div>`;
      const customOverlay = new kakao.maps.CustomOverlay({
        map,
        clickable: true,
        position: v.position,
        content: itemContent,
        yAnchor: 1
      });
      customOverlay.setMap(map);
    });
    // 커스텀 오버레이에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    // const content = `<div class="customoverlay">
    //     <a href="javascript:void(0)" target="_blank">
    //       <span class="title">경기도<br><span style="color:red;">3건</span></span>
    //     </a>
    //   </div>`;

    // 커스텀 오버레이가 표시될 위치입니다
    // const position = new kakao.maps.LatLng(37.316275, 127.609132);
    // 커스텀 오버레이를 생성합니다
    // const customOverlay = new kakao.maps.CustomOverlay({
    //   map,
    //   position,
    //   content,
    //   yAnchor: 1
    // });
  }
}