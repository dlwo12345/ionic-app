import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../shared.module';
import {KakaoMapComponent} from './kakao-map.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  exports: [KakaoMapComponent],
  declarations: [KakaoMapComponent]
})
export class KakaoMapModule {}
