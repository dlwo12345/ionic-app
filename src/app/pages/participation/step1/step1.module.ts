import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {Step1Page} from './step1.page';
import {SharedModule} from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: Step1Page
  }
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [Step1Page]
})
export class Step1PageModule {}
