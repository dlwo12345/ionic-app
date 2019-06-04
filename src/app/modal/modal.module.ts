import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {DetailPage} from './detail/detail.page';
import {ReportPage} from './report/report.page';
import {ParticipationPage} from './participation/participation.page';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule],
  exports: [DetailPage, ReportPage, ParticipationPage],
  declarations: [DetailPage, ReportPage, ParticipationPage],
  entryComponents: [DetailPage, ReportPage, ParticipationPage]
})
export class ModalModule {}
