import {Component} from '@angular/core';
import {Router} from '@angular/router';

import * as moment from 'moment';
import {ModalController} from '@ionic/angular';
import {RulePage} from '../../modal/rule/rule.page';
import {HttpClient} from '@angular/common/http';

declare var kakao: any;

@Component({
  selector: 'app-rank-map',
  templateUrl: 'rank-map.page.html',
  styleUrls: ['rank-map.page.scss']
})
export class RankMapPage {
  viewMonth = moment(new Date()).format('YYYY-MM');
  constructor(
    private router: Router,
    private modalC: ModalController,
    private http: HttpClient
  ) {}

  loadData() {
    this.http.get('/assets/test2.json', {}).subscribe((res: any) => {
      console.log('로드완료', res);

      this.loadKakaoMap();
    });
  }

  /**
   * 아이오닉 뷰 바인딩 이후
   */
  ionViewDidEnter() {
    this.loadData();
  }

  loadKakaoMap() {
    const LatLngType = {
      경기도: {lat: 37.774358, lng: 126.781824}, // 경기도
      강원도: {lat: 38.09441, lng: 128.579839}, // 강원도
      경상북도: {lat: 36.365168, lng: 129.013577}, // 경상북도
      경상남도: {lat: 35.363869, lng: 129.10274}, // 경상남도
      전라북도: {lat: 35.697445, lng: 127.125101}, // 전라북도
      전라남도: {lat: 34.849181, lng: 126.974222}, // 전라남도
      충청남도: {lat: 36.671489, lng: 126.816363}, // 충청남도
      충청북도: {lat: 37.116357, lng: 128.196271} // 충청북도
    };

    // 데이터 받아서 customOverlayList 루프돌아서 셋팅, 위경도는 위의 object에 도별 구분 받아서 처리

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
        position: new kakao.maps.LatLng(37.774358, 126.781824), // 커스텀 오버레이가 표시될 위치입니다
        enterPosition: '경기도', // 참가 구분
        number: 5 // 참가 인원
      },
      {
        position: new kakao.maps.LatLng(38.09441, 128.579839), // 커스텀 오버레이가 표시될 위치입니다
        enterPosition: '강원도', // 참가 구분
        number: 1 // 참가 인원
      },
      {
        position: new kakao.maps.LatLng(36.365168, 129.013577), // 커스텀 오버레이가 표시될 위치입니다
        enterPosition: '경상북도', // 참가 구분
        number: 1 // 참가 인원
      },
      {
        position: new kakao.maps.LatLng(35.363869, 129.10274), // 커스텀 오버레이가 표시될 위치입니다
        enterPosition: '경상남도', // 참가 구분
        number: 1 // 참가 인원
      },
      {
        position: new kakao.maps.LatLng(35.697445, 127.125101), // 커스텀 오버레이가 표시될 위치입니다
        enterPosition: '전라북도', // 참가 구분
        number: 1 // 참가 인원
      },
      {
        position: new kakao.maps.LatLng(34.849181, 126.974222), // 커스텀 오버레이가 표시될 위치입니다
        enterPosition: '전라남도', // 참가 구분
        number: 1 // 참가 인원
      },
      {
        position: new kakao.maps.LatLng(36.671489, 126.816363), // 커스텀 오버레이가 표시될 위치입니다
        enterPosition: '충청남도', // 참가 구분
        number: 1 // 참가 인원
      },
      {
        position: new kakao.maps.LatLng(37.116357, 128.196271), // 커스텀 오버레이가 표시될 위치입니다
        enterPosition: '충청북도', // 참가 구분
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

  async presentModal1(e) {
    console.log('e', e); // 전달되는 seq값을 아래 modal에 전달해줄 예정
    const modal = await this.modalC.create({
      component: RulePage,
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
