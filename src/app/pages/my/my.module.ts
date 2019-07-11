import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {SharedModule} from 'src/app/shared/shared.module';
import {ModalPageModule} from '../modal/modal.module';
import {MyPage} from './my.page';
import { ChartModule } from 'src/app/shared/modules/chart/chart.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([{path: '', component: MyPage}]),
    ModalPageModule,
    ChartModule
  ],
  declarations: [MyPage]
})
export class MyPageModule {}
