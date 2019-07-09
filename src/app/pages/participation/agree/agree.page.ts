import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {NavigationExtras, Router} from '@angular/router';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-agree',
  templateUrl: './agree.page.html',
  styleUrls: ['./agree.page.scss']
})
export class AgreePage implements OnInit {
  agreeForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    public router: Router,
    public navC: NavController
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
      return alert('미동의 약관이 있습니다');
    }

    const navigationExtras: NavigationExtras = {
      state: this.agreeForm.getRawValue()
    };

    this.router.navigate(['participation', 'step1'], navigationExtras);
  }

  close() {
    this.navC.navigateBack('/tabs/rank');
  }
}
