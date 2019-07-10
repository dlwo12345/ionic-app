import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {SignInPage} from './sign-in.page';
import {SharedModule} from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([{path: '', component: SignInPage}])
  ],
  declarations: [SignInPage]
})
export class SignInPageModule {}
