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

import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

am4core.useTheme(am4themes_animated);

declare const Kakao: any; // 카카오 API SDK
declare const ShareBand: any; // 밴드

@Component({
  selector: 'app-detail',
  templateUrl: 'detail.page.html',
  styleUrls: ['detail.page.scss']
})
export class DetailPage implements OnInit, AfterViewInit, OnDestroy {
  // "value" passed in componentProps
  @Input() value: number;
  premiumAuth = false; // SPEC, 수익금, 시공사 표시여부
  private chart: am4charts.XYChart;

  constructor(
    private navParams: NavParams,
    private modalC: ModalController,
    private zone: NgZone
  ) {
    // componentProps can also be accessed at construction time using NavParams
    console.log('navParams', navParams);
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }

  ngAfterViewInit(): void {
    this.zone.runOutsideAngular(() => {
      // Create chart instance
      let chart = am4core.create('chartdiv', am4charts.XYChart);

      // Add data
      chart.data = [
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

      // Create axes
      let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = 'country';
      categoryAxis.renderer.grid.template.location = 0;
      categoryAxis.renderer.minGridDistance = 30;

      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

      // Create series
      let series = chart.series.push(new am4charts.ColumnSeries());
      series.dataFields.valueY = 'visits';
      series.dataFields.categoryX = 'country';
      series.name = 'Visits';
      series.columns.template.tooltipText = '{categoryX}: [bold]{valueY}[/]';
      series.columns.template.fillOpacity = 0.8;

      let columnTemplate = series.columns.template;
      columnTemplate.strokeWidth = 2;
      columnTemplate.strokeOpacity = 1;
    });
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
