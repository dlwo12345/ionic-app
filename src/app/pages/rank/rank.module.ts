import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {SharedModule} from 'src/app/shared/shared.module';
import {ModalPageModule} from '../modal/modal.module';
import {RankPage} from './rank.page';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([{path: '', component: RankPage}]),
    ModalPageModule
  ],
  declarations: [RankPage]
})
export class RankPageModule {}
