import {Component, AfterViewInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AlertController, ModalController} from '@ionic/angular';
import {DetailPage} from '../modal/detail/detail.page';
import {Router} from '@angular/router';

import * as moment from 'moment';
import {ShareSnsService} from 'src/app/shared/services/share-sns.service';

@Component({
  selector: 'app-my',
  templateUrl: 'my.page.html',
  styleUrls: ['my.page.scss']
})
export class MyPage implements AfterViewInit {
  modal = null;
  chartData = {
    data: [
      {country: '01', visits: 5},
      {country: '02', visits: 1},
      {country: '03', visits: 8},
      {country: '04', visits: 7},
      {country: '05', visits: 11},
      {country: '06', visits: 15},
      {country: '07', visits: 13},
      {country: '08', visits: 1},
      {country: '09', visits: 2},
      {country: '10', visits: 5},
      {country: '11', visits: 7},
      {country: '12', visits: 3},
      {country: '13', visits: 2},
      {country: '14', visits: 4},
      {country: '15', visits: 6},
      {country: '16', visits: 6},
      {country: '17', visits: 7},
      {country: '18', visits: 1},
      {country: '19', visits: 3},
      {country: '20', visits: 4},
      {country: '21', visits: 12},
      {country: '22', visits: 14},
      {country: '23', visits: 2},
      {country: '24', visits: 5},
      {country: '25', visits: 12},
      {country: '26', visits: 13},
      {country: '27', visits: 15},
      {country: '28', visits: 1},
      {country: '29', visits: 5},
      {country: '30', visits: 7}
    ],
    xAxes: [
      {
        type: 'CategoryAxis',
        dataFields: {
          category: 'country'
        },
        renderer: {
          grid: {
            template: {
              location: 0
            }
          },
          minGridDistance: 30
        },
        extraMin: 0.2,
        extraMax: 0.2
      }
    ],
    yAxes: [
      {
        type: 'ValueAxis'
      }
    ],
    series: [
      {
        type: 'ColumnSeries',
        dataFields: {
          valueY: 'visits',
          categoryX: 'country'
        },
        name: 'Visits',
        columns: {
          template: {
            tooltipText: '{categoryX}: [bold]{valueY}[/]',
            fillOpacity: 0.8,
            fill: '#33a0ff'
          }
        }
      }
    ],
    chartContainer: {
      children: [
        {
          type: 'Container',
          layout: 'absolute',
          paddingBottom: 15,
          callback: function() {
            this.toBack();
          },
          width: '100%',
          children: [
            {
              type: 'Label',
              text: '(시간)',
              fontWeight: 600,
              fontSize: 15,
              align: 'left',
              fill: '#999',
              paddingLeft: -35
            },
            {
              type: 'Label',
              text: '(일)',
              fontWeight: 600,
              align: 'right',
              marginTop: -100,
              // marginRight: -5,
              fontSize: 15,
              fill: '#999'
            }
          ]
        }
      ]
    }
  };

  viewMonth = moment(new Date()).format('YYYY-MM');

  constructor(
    public http: HttpClient,
    public alertC: AlertController,
    public modalC: ModalController,
    public router: Router,
    public ShareSnsS: ShareSnsService
  ) {}

  ngAfterViewInit(): void {
    this.ShareSnsS.shareKakao();
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
}
