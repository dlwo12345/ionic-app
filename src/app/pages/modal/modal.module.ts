import {NgModule} from '@angular/core';
import {DetailPage} from './detail/detail.page';
import {ReportPage} from './report/report.page';
import {SharedModule} from 'src/app/shared/shared.module';
import {MedalPage} from './medal/medal.page';
import {SetPage} from './set/set.page';
import {ChartModule} from 'src/app/shared/modules/chart/chart.module';
import {TermsPage} from './terms/terms.page';

@NgModule({
  imports: [SharedModule, ChartModule],
  exports: [DetailPage, ReportPage, MedalPage, SetPage, TermsPage],
  declarations: [DetailPage, ReportPage, MedalPage, SetPage, TermsPage],
  entryComponents: [DetailPage, ReportPage, MedalPage, SetPage, TermsPage]
})
export class ModalPageModule {}
