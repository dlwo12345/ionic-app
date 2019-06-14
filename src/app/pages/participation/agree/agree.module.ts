import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AgreePage} from './agree.page';
import {SharedModule} from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: AgreePage
  }
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [AgreePage]
})
export class AgreePageModule {}
