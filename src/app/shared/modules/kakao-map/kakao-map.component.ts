import {
  Component,
  Input,
  ElementRef,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  EventEmitter
} from '@angular/core';

// declare const Kakao: any; // 카카오 API SDK

/**
  type?: String => layer|inline|popup (default popup)
  target?: String => layer, inline 타입시 embed할 요소의 ID값 (위 소스에서 layer, wrap)
  width?: Number => layer 타입시 가로크기
  height?: Number => layer 타입시 세로크기
  border?: Number => layer 타입시 테두리 크기
  class?: Array|String => 클래스 부여
*/

@Component({
  selector: 'app-kakao-map',
  template: `
    <button
      type="button"
      [ngStyle]="style"
      [class]="styleClass"
      (click)="openDaumApi()"
    >
      {{ btnText }}
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KakaoMapComponent {
  // @Output() result = new EventEmitter<Object>();
  // @Input() options: any;
  // @Input() styleClass: string;
  // @Input() style: any;
  // @Input() btnText = '우편번호 찾기';
  // // public styleClass: String;
  // private el: ElementRef;
  // constructor(el: ElementRef) {
  //   this.el = el;
  // }
  // ngOnInit() {}
  // private daumApiCallback(data) {
  //   let fullAddr = '',
  //     extraAddr = '',
  //     engAddr = '',
  //     zipCode = '';
  //   if (data.userSelectedType === 'R') {
  //     fullAddr = data.roadAddress;
  //     zipCode = data.zonecode;
  //     engAddr = data.roadAddressEnglish;
  //     if (data.bname !== '') {
  //       extraAddr += data.bname;
  //     }
  //     if (data.buildingName !== '') {
  //       extraAddr +=
  //         extraAddr !== '' ? ', ' + data.buildingName : data.buildingName;
  //     }
  //     fullAddr += extraAddr !== '' ? ' (' + extraAddr + ')' : '';
  //   } else {
  //     fullAddr = data.jibunAddress;
  //     zipCode = data.postcode;
  //     engAddr = data.jibunAddressEnglish;
  //   }
  //   this.result.emit({
  //     zip: zipCode,
  //     addr: fullAddr,
  //     addrEng: engAddr
  //   });
  // }
  // openDaumApi() {
  //   const self = this;
  //   if (
  //     !this.options ||
  //     (!this.options.type || this.options.type === 'popup')
  //   ) {
  //     daum.postcode.load(() => {
  //       new daum.Postcode({
  //         oncomplete: data => self.daumApiCallback(data)
  //       }).open();
  //     });
  //   } else {
  //     if (!this.options.target) {
  //       console.error(
  //         'ERROR: Parent Component does not have a target element.'
  //       );
  //       return false;
  //     }
  //     const $target = this.el.nativeElement.parentElement.querySelector(
  //       `#${this.options.target}`
  //     );
  //     switch (this.options.type) {
  //       case 'layer':
  //         const width = this.options.width || 300;
  //         const height = this.options.height || 460;
  //         const border = this.options.border || 5;
  //         daum.postcode.load(() => {
  //           new daum.Postcode({
  //             oncomplete: data => self.daumApiCallback(data),
  //             onclose: () => ($target.style.display = 'none'),
  //             width: '100%',
  //             height: '100%'
  //           }).embed($target);
  //         });
  //         $target.style.display = 'block';
  //         $target.style.width = `${width}px`;
  //         $target.style.height = `${height}px`;
  //         $target.style.border = `${border}px solid`;
  //         $target.style.left = `${((window.innerWidth ||
  //           document.documentElement.clientWidth) -
  //           width) /
  //           2 -
  //           border}px`;
  //         $target.style.top = `${((window.innerHeight ||
  //           document.documentElement.clientHeight) -
  //           height) /
  //           2 -
  //           border}px`;
  //         try {
  //           $target.querySelector('#btnCloseLayer').onclick = () => {
  //             $target.style.display = 'none';
  //           };
  //         } catch (e) {
  //           console.error(`ERROR: ${e.message}`);
  //         }
  //         break;
  //       case 'inline':
  //         const currentScroll = Math.max(
  //           document.body.scrollTop,
  //           document.documentElement.scrollTop
  //         );
  //         daum.postcode.load(() => {
  //           new daum.Postcode({
  //             oncomplete: data => {
  //               self.daumApiCallback(data);
  //               document.body.scrollTop = currentScroll;
  //             },
  //             onclose: () => ($target.style.display = 'none'),
  //             onresize: size => ($target.style.height = size.height + 'px'),
  //             width: '100%',
  //             height: '100%'
  //           }).embed($target);
  //         });
  //         $target.style.display = 'block';
  //         try {
  //           $target.querySelector('#btnFoldWrap').onclick = () => {
  //             $target.style.display = 'none';
  //           };
  //         } catch (e) {
  //           console.error(`ERROR: ${e.message}`);
  //         }
  //         break;
  //     }
  //   }
  // }
}
