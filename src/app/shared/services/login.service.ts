import {Injectable} from '@angular/core';
import {Subject, BehaviorSubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';

declare const Kakao: any; // 카카오 API SDK
declare const ShareBand: any; // 밴드

@Injectable({
  providedIn: 'root' // 모든 페이지에서 공통으로 사용하기위해 provide root로 설정
})
export class LoginService {
  private signInfo = new BehaviorSubject({});
  public signInfo$ = this.signInfo.asObservable();

  constructor(private http: HttpClient) {}

  login() {
    this.http.get('/assets/logintest.json', {}).subscribe(res => {
      this.signInfo.next(res);
      console.log('loginr es', res);
    });
  }
  /**
   * 로그인 여부를 체크한다.
   */
  isLogin() {
    return false;
  }
}
