import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TabsPage} from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/tabs/rank/map',
        pathMatch: 'full'
      },
      {
        path: 'rank',
        children: [
          {
            path: '',
            loadChildren: '../rank/rank.module#RankPageModule'
          }
        ]
      },
      {
        path: 'my',
        children: [
          {
            path: '',
            loadChildren: '../my/my.module#MyPageModule'
          }
        ]
      },
      {
        path: 'test',
        children: [
          {
            path: '',
            loadChildren:
              '../test/test.module#TestPageModule'
          }
        ]
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/rank/map',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
