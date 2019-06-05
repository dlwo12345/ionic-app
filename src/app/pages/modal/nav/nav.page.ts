import {Component, Input} from '@angular/core';
import {NavParams, ModalController} from '@ionic/angular';
import {AgreePage} from './agree/agree.page';
@Component({
  selector: 'app-nav',
  template: `
    <ion-nav [root]="defaultPage"></ion-nav>
  `
})
export class NavPage {
  defaultPage = AgreePage;

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
