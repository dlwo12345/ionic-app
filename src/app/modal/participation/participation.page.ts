import {Component, Input} from '@angular/core';
import * as moment from 'moment';
import {NavParams, ModalController} from '@ionic/angular';
@Component({
  selector: 'app-participation',
  templateUrl: 'participation.page.html',
  styleUrls: ['participation.page.scss']
})
export class ParticipationPage {
  // "value" passed in componentProps
  @Input() value: number;

  constructor(private navParams: NavParams, private modalC: ModalController) {
    // componentProps can also be accessed at construction time using NavParams
  }
  async closeModal() {
    const onClosedData = {};
    await this.modalC.dismiss(onClosedData);
  }
}
