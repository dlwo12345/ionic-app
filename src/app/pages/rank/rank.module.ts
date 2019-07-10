import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {SharedModule} from 'src/app/shared/shared.module';
import {ModalPageModule} from '../modal/modal.module';
import {RankPage} from './rank.page';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        redirectTo: 'map',
        pathMatch: 'full'
      },
      {
        path: '',
        component: RankPage,
        children: [
          {
            path: 'map',
            loadChildren: './rank-map/rank-map.module#RankMapPageModule'
          },
          {
            path: 'detail',
            loadChildren:
              './rank-detail/rank-detail.module#RankDetailPageModule'
          }
        ]
      }
    ])
  ],
  declarations: [RankPage]
})
export class RankPageModule {}
