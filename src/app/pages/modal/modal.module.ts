import {NgModule} from '@angular/core';
import {DetailPage} from './detail/detail.page';
import {ReportPage} from './report/report.page';
import {SharedModule} from 'src/app/shared/shared.module';
import {MedalPage} from './medal/medal.page';
import {SetPage} from './set/set.page';

@NgModule({
  imports: [SharedModule],
  exports: [DetailPage, ReportPage, MedalPage, SetPage],
  declarations: [DetailPage, ReportPage, MedalPage, SetPage],
  entryComponents: [DetailPage, ReportPage, MedalPage, SetPage]
})
export class ModalPageModule {}
