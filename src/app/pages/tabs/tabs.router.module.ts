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
        redirectTo: '/tabs/rank',
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
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/rank',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
