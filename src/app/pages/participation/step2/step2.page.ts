import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {NavController} from '@ionic/angular';
import {ObjectUtil} from 'src/app/shared/utils/object-util';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Step2Model, defaultStep2Model} from './models/step2.model';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.page.html',
  styleUrls: ['./step2.page.scss']
})
export class Step2Page implements OnInit {
  data: any;
  step2Form: FormGroup;
  constructor(
    public navC: NavController,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.createForm();
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state;
        console.log('this.data', this.data);
      } else {
        alert('비정상적인 접근방법입니다. 초기페이지로 이동합니다');
        this.navC.navigateBack('/participation/agree');
      }
    });
  }

  createForm(formData?: any) {
    const data: Step2Model = {
      monitoringName: ['', Validators.required], // 발전소 이름
      monitoringUrl: ['', Validators.required] // 용량
    };

    this.step2Form = this.formBuilder.group(data);
  }

  /**
   * 페이지에서 빠져 나가는것을 제한
   * @param currentRoute
   * @param currentState
   * @param nextState
   */
  canDeactivate(currentRoute, currentState, nextState) {
    const formData = this.step2Form.getRawValue(); // 현재 데이터
    const originalData = defaultStep2Model; // 초기 데이터
    if (
      nextState.url === '/participation/complete' &&
      !this.step2Form.invalid
    ) {
      // 정상적으로 입력 후 다음버튼 눌렀을때
      alert('canDeactivate 정상진행');
      return true;
    } else if (
      nextState.url !== '/participation/complete' &&
      ObjectUtil.equals(formData, originalData)
    ) {
      // 수정사항이 없는 상태에서 빠져나갈때
      alert('canDeactivate 수정사항 없음 빠져나가자');
      return true;
    } else if (
      nextState.url !== '/participation/complete' &&
      !ObjectUtil.equals(formData, originalData) &&
      confirm('저장되지 않은 정보가 있습니다. 빠져나가시겠습니까?')
    ) {
      alert('저장안하고 빠져나가기');
      return true;
    }
    return false;
  }

  ngOnInit() {}

  next() {
    this.navC.navigateForward('/participation/complete');
  }

  close() {
    this.navC.navigateBack('/tabs/rank');
  }
}
