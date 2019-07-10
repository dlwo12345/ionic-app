import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {SharedModule} from 'src/app/shared/shared.module';
import {ModalPageModule} from '../../modal/modal.module';
import {RankMapPage} from './rank-map.page';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([{path: '', component: RankMapPage}]),
    ModalPageModule
  ],
  declarations: [RankMapPage]
})
export class RankMapPageModule {}
