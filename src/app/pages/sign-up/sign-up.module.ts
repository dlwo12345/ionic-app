import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {SignUpPage} from './sign-up.page';
import {SharedModule} from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([{path: '', component: SignUpPage}])
  ],
  declarations: [SignUpPage]
})
export class SignUpPageModule {}
