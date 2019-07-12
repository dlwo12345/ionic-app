import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {SharedModule} from 'src/app/shared/shared.module';
import {ModalPageModule} from '../modal/modal.module';
import {TestPage} from './test.page';

@NgModule({
  imports: [
    SharedModule,
    ModalPageModule,
    RouterModule.forChild([{path: '', component: TestPage}])
  ],
  declarations: [TestPage]
})
export class TestPageModule {}
