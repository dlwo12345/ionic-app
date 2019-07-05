import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {SharedModule} from 'src/app/shared/shared.module';
import {ModalPageModule} from '../modal/modal.module';
import {CurrentStatePage} from './current-state.page';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([{path: '', component: CurrentStatePage}]),
    ModalPageModule
  ],
  declarations: [CurrentStatePage]
})
export class CurrentStatePageModule {}
