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

  constructor() {}

  login() {
    // 로그인 절차 http 요청해서 받은 결과값을 next
    this.signInfo.next({
      authYn: '', //	인증여부
      useLolYn: '', //	발전왕등록여부
      useLolAppYn: '', //	발전왕리그여부
      lolId: 'jaehong.lee', //	발전왕ID
      mypage: {
        lolId: 'jaehong.lee', //	발전왕ID
        ptcpNm: '이재홍', //	고객이름
        mblPhnNum: '01091937267', //	휴대폰번호
        nickNm: '핵주먹펀치', //	닉네임
        oprtStrtDate: '201901', //	운영시작
        pwpLoctSiDo: '경기도', //	시도
        pwpLoctSiGunGu: '', //	시구군
        totFcltCpct: '', //	용량
        pwpLoctSiDoNm: '', //	시도명
        rnk: '', //	기본랭크
        gnrtTime: '', //	시간
        realRank: '' //	중복체크랭크
      } //	MODEL
    });
  }
  /**
   * 로그인 여부를 체크한다.
   */
  isLogin() {
    return false;
  }
}
