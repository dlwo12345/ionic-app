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
import {ShareSnsService} from 'src/app/shared/services/share-sns.service';

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
    private zone: NgZone,
    public ShareSnsS: ShareSnsService
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
    this.ShareSnsS.shareKakao();
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
