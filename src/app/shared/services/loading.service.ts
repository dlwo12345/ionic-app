import {Injectable} from '@angular/core';
import {LoadingController} from '@ionic/angular';

@Injectable()
export class LoadingService {
  isLoading = false;

  constructor(private loadingC: LoadingController) {}

  async show() {
    this.isLoading = true;
    return await this.loadingC
      .create({
        message: 'loading...'
      })
      .then(a => {
        a.present().then(() => {
          console.log('presented');
          if (!this.isLoading) {
            a.dismiss().then(() => console.log('abort presenting'));
          }
        });
      });
  }

  async hide() {
    this.isLoading = false;
    return await this.loadingC.dismiss().then(() => console.log('dismissed'));
  }
}
