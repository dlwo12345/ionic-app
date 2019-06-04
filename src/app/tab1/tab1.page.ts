import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AlertController, ModalController} from '@ionic/angular';
import {DetailPage} from '../modal/detail/detail.page';
import { ReportPage } from '../modal/report/report.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  modal = null;

  constructor(
    public http: HttpClient,
    public alertC: AlertController,
    public modalC: ModalController
  ) {}

  test() {
    this.http.get('/assets/test.json', {}).subscribe(res => {
      console.log('res', res);
    });
    // const alert = this.alertC.create({message:'123'});
    // alert.then(res=>{
    //   res.present();
    // })
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
  async presentModal3() {
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
}
