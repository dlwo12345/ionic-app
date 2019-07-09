import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: './pages/tabs/tabs.module#TabsPageModule'},
  {
    path: 'participation',
    children: [
      {
        path: '',
        redirectTo: '/participation/agree',
        pathMatch: 'full'
      },
      {
        path: 'agree',
        loadChildren: './pages/participation/agree/agree.module#AgreePageModule'
      },
      {
        path: 'step1',
        loadChildren: './pages/participation/step1/step1.module#Step1PageModule',
      },
      {
        path: 'step2',
        loadChildren: './pages/participation/step2/step2.module#Step2PageModule'
      },
      {
        path: 'complete',
        loadChildren:
          './pages/participation/complete/complete.module#CompletePageModule'
      }
    ]
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
