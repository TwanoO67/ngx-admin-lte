import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-login',
  styles: ['./login.css'],
  templateUrl: './login.component.html'
})
export class LayoutLoginComponent implements OnInit, OnDestroy {

  constructor(
  ) {
  }

  public ngOnInit() {
    window.dispatchEvent( new Event( 'resize' ) );
    document.body.className = 'hold-transition login-page';
  }

  public ngOnDestroy() {
    document.body.className = '';
  }

}
