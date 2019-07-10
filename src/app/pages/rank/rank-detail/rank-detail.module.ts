import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {SharedModule} from 'src/app/shared/shared.module';
import {ModalPageModule} from '../../modal/modal.module';
import {RankDetailPage} from './rank-detail.page';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([{path: '', component: RankDetailPage}]),
    ModalPageModule
  ],
  declarations: [RankDetailPage]
})
export class RankDetailPageModule {}
