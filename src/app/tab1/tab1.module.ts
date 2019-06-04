import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Tab1Page} from './tab1.page';
import {SharedModule} from '../shared/shared.module';
import {HttpClientModule} from '@angular/common/http';
import { ModalModule } from '../modal/modal.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SharedModule,
    HttpClientModule,
    RouterModule.forChild([{path: '', component: Tab1Page}]),
    ModalModule,
  ],
  declarations: [Tab1Page],
})
export class Tab1PageModule {}
