import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {map, take, switchMap} from 'rxjs/operators';
import {of, Observable} from 'rxjs';

@Component({
  selector: 'app-nickname',
  templateUrl: 'nickname.page.html',
  styleUrls: ['nickname.page.scss']
})
export class NicknamePage {
  public nicknameForm: FormGroup;
  private nickNmChkFlag: boolean | null;

  constructor(
    private router: Router,
    private http: HttpClient,
    private formBuilder: FormBuilder
  ) {
    this.createForm();
  }

  submit() {
    this.http
      .get('/assets/nickNmChk.json', {})
      .pipe(
        switchMap((res: any) => {
          if (res.data.nickNmYn === 'Y') {
            return of('overlap');
          } else {
            return this.http.get('/assets/upNickNm.json', {});
          }
        }),
        take(1)
      )
      .subscribe(res => {
        // 중복일때
        if (res === 'overlap') {
          this.nickNmChkFlag = true;
          return alert('이미 사용중인 닉네임입니다');
        } else {
          // 중복이 아닐때
          this.nickNmChkFlag = false;
          // api통신 후 다음페이지로 이동
          // this.router.navigate(['participation']);
          return alert('변경완료');
        }
      });
  }

  /**
   * form 개별요소 유효성 체크
   */
  targetValidate(form, key) {
    const target = this[form].get(key);
    return target.invalid && (target.dirty || target.touched);
  }

  /**
   * 폼 생성
   */
  private createForm() {
    this.nicknameForm = this.formBuilder.group({
      nickNm: ['', Validators.required]
    });
  }
}
