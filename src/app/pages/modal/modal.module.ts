import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {DetailPage} from './detail/detail.page';
import {ReportPage} from './report/report.page';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule],
  exports: [DetailPage, ReportPage],
  declarations: [DetailPage, ReportPage],
  entryComponents: [DetailPage, ReportPage]
})
export class ModalModule {}
