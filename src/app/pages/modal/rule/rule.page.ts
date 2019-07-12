import {Component, Input} from '@angular/core';
import {NavParams, ModalController} from '@ionic/angular';

@Component({
  selector: 'app-rule',
  templateUrl: 'rule.page.html',
  styleUrls: ['rule.page.scss']
})
export class RulePage {
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
