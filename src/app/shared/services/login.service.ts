import {Injectable} from '@angular/core';

declare const Kakao: any; // 카카오 API SDK
declare const ShareBand: any; // 밴드

@Injectable({
  providedIn: 'root' // 모든 페이지에서 공통으로 사용하기위해 provide root로 설정
})
export class LoginService {
  constructor() {}
  /**
   * 로그인 여부를 체크한다.
   */
  isLogin() {
    return false;
  }
}
