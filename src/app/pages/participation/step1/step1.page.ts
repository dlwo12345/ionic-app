import {Component, OnInit, OnDestroy} from '@angular/core';
import {NavController, AlertController} from '@ionic/angular';
import {NavigationExtras, Router, ActivatedRoute} from '@angular/router';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Step1Model, defaultStep1Model} from './models/step1.model';
import {ObjectUtil} from 'src/app/shared/utils/object-util';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.page.html',
  styleUrls: ['./step1.page.scss']
})
export class Step1Page implements OnInit, OnDestroy {
  data: any;
  step1Form: FormGroup;
  constructor(
    public navC: NavController,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    public alertC: AlertController
  ) {
    this.createForm();
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state;
      } else {
        this.alertC
          .create({
            header: '알림',
            message: '비정상적인 접근방법입니다. 초기페이지로 이동합니다',
            buttons: ['OK']
          })
          .then(res => res.present());
        this.navC.navigateBack('/participation/agree');
      }
    });
  }

  ngOnInit() {}

  createForm(formData?: any) {
    const data: Step1Model = {
      facilityName: ['', Validators.required], // 발전소 이름
      capacity: ['', Validators.required] // 용량
    };

    this.step1Form = this.formBuilder.group(data);
  }

  next() {
    const navigationExtras: NavigationExtras = {
      state: Object.assign({}, this.data, {user: '123123'})
    };
    this.router.navigate(['participation', 'step2'], navigationExtras);
  }

  /**
   * 페이지에서 빠져 나가는것을 제한
   * @param currentRoute
   * @param currentState
   * @param nextState
   */
  canDeactivate(currentRoute, currentState, nextState) {
    const formData = this.step1Form.getRawValue(); // 현재 데이터
    const originalData = defaultStep1Model; // 초기 데이터
    if (nextState.url === '/participation/step2' && !this.step1Form.invalid) {
      // 정상적으로 입력 후 다음버튼 눌렀을때
      this.alertC
        .create({
          header: '알림',
          message: 'canDeactivate 정상진행',
          buttons: ['OK']
        })
        .then(res => res.present());
      return true;
    } else if (
      nextState.url !== '/participation/step2' &&
      ObjectUtil.equals(formData, originalData)
    ) {
      // 수정사항이 없는 상태에서 빠져나갈때
      this.alertC
        .create({
          header: '알림',
          message: 'canDeactivate 수정사항 없음 빠져나가자',
          buttons: ['OK']
        })
        .then(res => res.present());
      return true;
    } else if (
      nextState.url !== '/participation/step2' &&
      !ObjectUtil.equals(formData, originalData) &&
      confirm('저장되지 않은 정보가 있습니다. 빠져나가시겠습니까?')
    ) {
      this.alertC
        .create({
          header: '알림',
          message: '저장안하고 빠져나가기',
          buttons: ['OK']
        })
        .then(res => res.present());
      return true;
    }
    return false;
  }

  segmentChanged() {
    console.log('segmentChanged');
  }

  ngOnDestroy() {}

  close() {
    this.navC.navigateBack('/tabs/rank');
  }
}
