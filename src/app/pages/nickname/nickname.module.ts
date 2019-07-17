import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {SharedModule} from 'src/app/shared/shared.module';
import {NicknamePage} from './nickname.page';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([{path: '', component: NicknamePage}])
  ],
  declarations: [NicknamePage]
})
export class NicknamePageModule {}
