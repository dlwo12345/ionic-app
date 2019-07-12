import {Component} from '@angular/core';
import {ModalController} from '@ionic/angular';

import * as moment from 'moment';
import {TermsPage} from '../modal/terms/terms.page';

@Component({
  selector: 'app-test',
  templateUrl: 'test.page.html',
  styleUrls: ['test.page.scss']
})
export class TestPage {
  constructor(public modalC: ModalController) {}

  async presentModal2(e) {
    console.log('', e); // 전달되는 seq값을 아래 modal에 전달해줄 예정
    const modal = await this.modalC.create({
      component: TermsPage,
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
