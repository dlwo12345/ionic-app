import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';
import {NavController} from '@ionic/angular';
import {FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-agree',
  templateUrl: './agree.page.html',
  styleUrls: ['./agree.page.scss']
})
export class AgreePage implements OnInit {
  agreeForm: FormGroup;
  constructor(public navC: NavController, private formBuilder: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {}

  createForm(formData?: any) {
    this.agreeForm = this.formBuilder.group({
      agree1: true,
      agree2: true
    });
  }

  /**
   * 모든 약관 동의여부 체크
   * 모두 동의o -> return true
   * 모두 동의x -> return false
   */
  agreeCheck() {
    // form data list
    const target = this.agreeForm.controls;
    for (const i in target) {
      if (target.hasOwnProperty(i)) {
        const value = target[i].value; // 개별 아이템 value
        if (!value) {
          // false 값이 있으면 false 반환
          return false;
        }
      }
    }
    return true;
  }

  next() {
    if (!this.agreeCheck()) {
      alert('미동의 약관이 있습니다');
    }

    this.navC.navigateForward('/participation/step1');
  }
}
