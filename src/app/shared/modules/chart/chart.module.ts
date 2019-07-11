import {NgModule} from '@angular/core';

import {ChartComponent} from './chart.component';
import {SharedModule} from '../../shared.module';

@NgModule({
  imports: [SharedModule],
  declarations: [ChartComponent],
  exports: [ChartComponent]
})
export class ChartModule {}
