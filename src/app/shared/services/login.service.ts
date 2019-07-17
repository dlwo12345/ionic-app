import {Injectable, OnDestroy} from '@angular/core';
import {Subject, BehaviorSubject, Subscription} from 'rxjs';
import {HttpClient} from '@angular/common/http';

declare const Kakao: any; // 카카오 API SDK
declare const ShareBand: any; // 밴드

@Injectable({
  providedIn: 'root' // 모든 페이지에서 공통으로 사용하기위해 provide root로 설정
})
export class LoginService implements OnDestroy {
  private signInfo = new BehaviorSubject(null);
  public signInfo$ = this.signInfo.asObservable();
  private signInfoSub: Subscription;

  loginInfo: any;
  constructor(private http: HttpClient) {
    this.signInfoSub = this.signInfo$.subscribe(res => {
      this.loginInfo = res;
      console.log('loginInfo', this.loginInfo);
    });
  }

  ngOnDestroy() {
    if (this.signInfoSub) {
      this.signInfoSub.unsubscribe();
    }
  }

  login() {
    this.http.get('/assets/logintest2.json', {}).subscribe((res: any) => {
      this.signInfo.next(res.data);
      // console.log('로그인 로드완료', res);
    });

    // 로그인 절차 http 요청해서 받은 결과값을 next
    // this.signInfo.next({
    //   authYn: '', //	인증여부
    //   useLolYn: '', //	발전왕등록여부
    //   useLolAppYn: '', //	발전왕리그여부
    //   lolId: 'jaehong.lee', //	발전왕ID
    //   mypage: {
    //     lolId: 'jaehong.lee', //	발전왕ID
    //     ptcpNm: '이재홍', //	고객이름
    //     mblPhnNum: '01091937267', //	휴대폰번호
    //     nickNm: '핵주먹펀치', //	닉네임
    //     oprtStrtDate: '201901', //	운영시작
    //     pwpLoctSiDo: '경기도', //	시도
    //     pwpLoctSiGunGu: '', //	시구군
    //     totFcltCpct: '', //	용량
    //     pwpLoctSiDoNm: '', //	시도명
    //     rnk: '', //	기본랭크
    //     gnrtTime: '', //	시간
    //     realRank: '' //	중복체크랭크
    //   } //	MODEL
    // });
  }
  /**
   * 로그인 여부를 체크한다.
   * 비로그인시 return:0
   * 로그인은 했지만 미참가 return:1
   * 로그인 & 참가신청 완료 return:2
   */
  checkUser(): number {
    enum loginState {
      nologin = 0, // 비로그인시 0
      noparticipation = 1, // 로그인은 했지만 참가안했을시 1
      participation = 2 // 로그인 & 참가신청 완료
    }

    if (this.loginInfo === null) {
      console.log('로그인 x');
      return loginState.nologin;
    }

    if (this.loginInfo.useLolYn === 'Y' && this.loginInfo.useLolAppYn === 'N') {
      console.log('회원가입 o 참가신청 x');
      return loginState.noparticipation;
    }

    if (this.loginInfo.useLolYn === 'Y' && this.loginInfo.useLolAppYn === 'Y') {
      console.log('회원가입 o 참가신청 o');
      return loginState.participation;
    }
  }
}
