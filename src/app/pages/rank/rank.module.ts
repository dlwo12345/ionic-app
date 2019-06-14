import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {SharedModule} from 'src/app/shared/shared.module';
import {ModalPageModule} from '../modal/modal.module';
import {RankPage} from './rank.page';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([{path: '', component: RankPage}]),
    ModalPageModule
  ],
  declarations: [RankPage]
})
export class RankPageModule {}
