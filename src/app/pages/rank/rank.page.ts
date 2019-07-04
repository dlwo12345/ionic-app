import {Component, AfterViewInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AlertController, ModalController} from '@ionic/angular';
import {DetailPage} from '../modal/detail/detail.page';
import {Router} from '@angular/router';

import * as moment from 'moment';

declare var kakao: any;

@Component({
  selector: 'app-rank',
  templateUrl: 'rank.page.html',
  styleUrls: ['rank.page.scss']
})
export class RankPage {
  modal = null;
  viewMonth = moment(new Date()).format('YYYY-MM');

  testArr: any = [];

  constructor(
    public http: HttpClient,
    public alertC: AlertController,
    public modalC: ModalController,
    public router: Router
  ) {
    // 초기 데이터 call
    this.loadData();

    // 나의 정보도 call해서 받아와야함(발전왕 참가신청 및 나의 발전소 출력시키기 위해서)
    // 발전소 참가신청 필요 상태 - 미신청, 요청중, 참가중
    // 참가중일때 내 발전소에 대한 정보 필요
  }

  /**
   * 아이오닉 뷰 바인딩 이후
   */
  ionViewDidEnter() {
    const mapContainer = document.getElementById('map'), // 지도를 표시할 div
      mapOption = {
        center: new kakao.maps.LatLng(37.54699, 127.09598), // 지도의 중심좌표
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
    // 커스텀 오버레이에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    // const content = `<div class="customoverlay">
    //     <a href="javascript:void(0)" target="_blank">
    //       <span class="title">경기도<br><span style="color:red;">3건</span></span>
    //     </a>
    //   </div>`;

    // 커스텀 오버레이가 표시될 위치입니다
    // const position = new kakao.maps.LatLng(37.316275, 127.609132);

    customOverlayList.forEach(v => {
      const itemContent = `<div class="customoverlay">
                            <a href="javascript:void(0)" target="_blank">
                              <span class="title">${v.enterPosition}<br>
                                <span style="color:red;">${v.number}건</span>
                              </span>
                            </a>
                           </div>`;
      const customOverlay = new kakao.maps.CustomOverlay({
        map,
        position: v.position,
        content: itemContent,
        yAnchor: 1
      });
      customOverlay.setMap(map);
    });
    // 커스텀 오버레이를 생성합니다
    // const customOverlay = new kakao.maps.CustomOverlay({
    //   map,
    //   position,
    //   content,
    //   yAnchor: 1
    // });
  }

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

  // api call
  loadData() {
    this.http.get('/assets/test2.json', {}).subscribe((res: any) => {
      console.log('로드완료', res);
      this.testArr = res.data;
    });
  }

  // 임시로 리로딩용도로 사용 추후엔 loadData로 호출예정
  loadData2() {
    this.http.get('/assets/test3.json', {}).subscribe((res: any) => {
      console.log('로드완료', res);
      this.testArr = res.data;
    });
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

  changeMonth(type?: string, time?: any) {
    switch (type) {
      case 'left':
        this.viewMonth = moment(this.viewMonth)
          .add(-1, 'month')
          .format('YYYY-MM');
        break;
      case 'right':
        this.viewMonth = moment(this.viewMonth)
          .add(1, 'month')
          .format('YYYY-MM');
        break;
      case 'select':
        this.viewMonth = moment(time.detail.value).format('YYYY-MM');
        break;
    }

    this.ionRefresh(); // 임시.. data reload api 호출 필요
  }

  async ionRefresh(event?) {
    console.log('Pull Event Triggered!');
    // api 호출
    await this.loadData2();

    // complete()  signify that the refreshing has completed and to close the refresher
    if (event) {
      event.target.complete();
    }
  }

  ionPull(event) {
    // 사용자가 콘텐츠를 가져와서 재생기를 노출하는 동안 발생
    console.log('ionPull Event Triggered!');
  }

  ionStart(event) {
    // 사용자가 pull down을 시작할때 발생하는 이벤트
    console.log('ionStart Event Triggered!');
  }
}
