import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CompletePage} from './complete.page';
import {SharedModule} from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: CompletePage
  }
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [CompletePage]
})
export class CompletePageModule {}
