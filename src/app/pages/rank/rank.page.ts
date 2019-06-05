import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AlertController, ModalController} from '@ionic/angular';
import {DetailPage} from '../modal/detail/detail.page';
import {ReportPage} from '../modal/report/report.page';
import {Router} from '@angular/router';

import * as moment from 'moment';

@Component({
  selector: 'app-rank',
  templateUrl: 'rank.page.html',
  styleUrls: ['rank.page.scss']
})
export class RankPage {
  modal = null;
  test = moment(new Date()).format('YYYY-MM');

  constructor(
    public http: HttpClient,
    public alertC: AlertController,
    public modalC: ModalController,
    public router: Router
  ) {}

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

  async presentModal1() {
    const modal = await this.modalC.create({
      component: DetailPage,
      componentProps: {value: 123}
    });

    modal.onDidDismiss().then(dataReturned => {
      if (dataReturned !== null) {
        console.log('dataReturned', dataReturned);
        // this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });

    return await modal.present();
  }
  async presentModal2() {
    const modal = await this.modalC.create({
      component: ReportPage,
      componentProps: {value: 123}
    });

    modal.onDidDismiss().then(dataReturned => {
      if (dataReturned !== null) {
        console.log('dataReturned', dataReturned);
        // this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });

    return await modal.present();
  }

  participation() {
    this.router.navigate(['/participation']);
  }
}
