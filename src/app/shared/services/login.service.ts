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
    });
  }

  /**
   * 로그인
   */
  login() {
    // (로그인 & 미참가) 임시데이터
    // this.http.get('/assets/logintest1.json', {}).subscribe((res: any) => {
    //   this.signInfo.next(res.data);
    // });

    // (로그인 & 참가) 임시데이터
    this.http.get('/assets/logintest2.json', {}).subscribe((res: any) => {
      this.signInfo.next(res.data);
    });
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

  ngOnDestroy() {
    if (this.signInfoSub) {
      this.signInfoSub.unsubscribe();
    }
  }
}
