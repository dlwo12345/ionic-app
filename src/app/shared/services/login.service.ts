import {Injectable} from '@angular/core';
import {Subject, BehaviorSubject} from 'rxjs';

declare const Kakao: any; // 카카오 API SDK
declare const ShareBand: any; // 밴드

@Injectable({
  providedIn: 'root' // 모든 페이지에서 공통으로 사용하기위해 provide root로 설정
})
export class LoginService {
  private signInfo = new BehaviorSubject({});
  public signInfo$ = this.signInfo.asObservable();
  
  constructor() {
  }

  login() {
    // 로그인 절차 http 요청해서 받은 결과값을 next
    this.signInfo.next({
      mblPhnNum: '01091937267',
    });
  }
  /**
   * 로그인 여부를 체크한다.
   */
  isLogin() {
    return false;
  }
}
