import {Component, Input} from '@angular/core';
import {NavParams, ModalController} from '@ionic/angular';
import {TERMS_TEXT} from './data/terms.model';

@Component({
  selector: 'app-terms',
  templateUrl: 'terms.page.html',
  styleUrls: ['terms.page.scss']
})
export class TermsPage {
  public TERMS_TEXT = TERMS_TEXT;
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
