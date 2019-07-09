import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {Step2Page} from './step2.page';
import {SharedModule} from 'src/app/shared/shared.module';
import {DeactivateGuardService} from 'src/app/shared/services/deactivate-guard.service';

const routes: Routes = [
  {
    path: '',
    component: Step2Page,
    canDeactivate: [DeactivateGuardService]
  }
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [Step2Page]
})
export class Step2PageModule {}
