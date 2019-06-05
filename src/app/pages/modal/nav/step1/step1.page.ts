import {Component, Input} from '@angular/core';
import * as moment from 'moment';
import {NavParams, ModalController} from '@ionic/angular';

@Component({
  selector: 'app-step1',
  templateUrl: 'step1.page.html',
  styleUrls: ['step1.page.scss']
})
export class Step1Page {
  // "value" passed in componentProps
  @Input() value: number;
  premiumAuth = false; // SPEC, 수익금, 시공사 표시여부

  constructor(private navParams: NavParams, private modalC: ModalController) {
    // componentProps can also be accessed at construction time using NavParams
    console.log('navParams', navParams);
  }
  async closeModal() {
    const onClosedData = {};
    await this.modalC.dismiss(onClosedData);
  }
}
