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
    var mapContainer = document.getElementById('map'), // 지도를 표시할 div
      mapOption = {
        center: new kakao.maps.LatLng(37.54699, 127.09598), // 지도의 중심좌표
        level: 14 // 지도의 확대 레벨
      };

    var map = new kakao.maps.Map(mapContainer, mapOption);

    var imageSrc =
        'http://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png', // 마커이미지의 주소입니다
      imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
      imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

    // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
    var markerImage = new kakao.maps.MarkerImage(
        imageSrc,
        imageSize,
        imageOption
      ),
      markerPosition = new kakao.maps.LatLng(37.54699, 127.09598); // 마커가 표시될 위치입니다

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
      position: markerPosition,
      image: markerImage // 마커이미지 설정
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);

    // 커스텀 오버레이에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    var content = `<div class="customoverlay">
        <a href="https://map.kakao.com/link/map/11394059" target="_blank">
          <span class="title">경기도 <span style="color:red;">3건</span></span>
        </a>
      </div>`;

    // 커스텀 오버레이가 표시될 위치입니다
    var position = new kakao.maps.LatLng(37.54699, 127.09598);

    // 커스텀 오버레이를 생성합니다
    var customOverlay = new kakao.maps.CustomOverlay({
      map: map,
      position: position,
      content: content,
      yAnchor: 1
    });
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
