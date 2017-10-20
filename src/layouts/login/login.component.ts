import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-login',
  styles: ['./login.css'],
  templateUrl: './login.component.html',
})
export class LayoutLoginComponent implements OnInit, OnDestroy {
  ngOnInit() {
    window.dispatchEvent(new Event('resize'));
    document.body.className = 'hold-transition login-page';
  }

  ngOnDestroy() {
    document.body.className = '';
  }

}
