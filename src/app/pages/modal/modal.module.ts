import {NgModule} from '@angular/core';
import {DetailPage} from './detail/detail.page';
import {SharedModule} from 'src/app/shared/shared.module';
import {MedalPage} from './medal/medal.page';
import {SetPage} from './set/set.page';
import {ChartModule} from 'src/app/shared/modules/chart/chart.module';
import {TermsPage} from './terms/terms.page';
import {RulePage} from './rule/rule.page';

@NgModule({
  imports: [SharedModule, ChartModule],
  exports: [DetailPage, MedalPage, SetPage, TermsPage, RulePage],
  declarations: [DetailPage, MedalPage, SetPage, TermsPage, RulePage],
  entryComponents: [DetailPage, MedalPage, SetPage, TermsPage, RulePage]
})
export class ModalPageModule {}
