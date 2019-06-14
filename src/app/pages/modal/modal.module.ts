import {NgModule} from '@angular/core';
import {DetailPage} from './detail/detail.page';
import {ReportPage} from './report/report.page';
import {SharedModule} from 'src/app/shared/shared.module';
import {MedalPage} from './medal/medal.page';

@NgModule({
  imports: [SharedModule],
  exports: [DetailPage, ReportPage, MedalPage],
  declarations: [DetailPage, ReportPage, MedalPage],
  entryComponents: [DetailPage, ReportPage, MedalPage]
})
export class ModalPageModule {}
