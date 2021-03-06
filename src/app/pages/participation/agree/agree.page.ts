import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {NavigationExtras, Router} from '@angular/router';
import {NavController, AlertController} from '@ionic/angular';

@Component({
  selector: 'app-agree',
  templateUrl: './agree.page.html',
  styleUrls: ['./agree.page.scss']
})
export class AgreePage implements OnInit {
  agreeForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private navC: NavController,
    private alertC: AlertController
  ) {
    this.createForm();
  }

  ngOnInit() {}

  createForm(formData?: any) {
    this.agreeForm = this.formBuilder.group({
      agree1: [false, Validators.requiredTrue],
      agree2: [false, Validators.requiredTrue]
    });
  }

  next() {
    if (this.agreeForm.invalid) {
      return this.alertC
        .create({
          header: '알림',
          message: '미동의 약관이 있습니다',
          buttons: ['OK']
        })
        .then(res => res.present());
    }

    const navigationExtras: NavigationExtras = {
      state: this.agreeForm.getRawValue()
    };

    this.router.navigate(['participation', 'step1'], navigationExtras);
  }

  close() {
    this.navC.navigateBack('/tabs/rank/map');
  }
}
