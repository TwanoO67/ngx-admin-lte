import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LogoService } from '../../services/logo.service';

@Component( {
    selector: 'app-logo',
    templateUrl: './logo.component.html'
})
export class LogoComponent implements OnInit {
  // default logo
  private logo: any = {
    small: {
      bold: 'A',
      normal: 'LT'
    },
    big: {
      bold: 'Admin',
      normal: 'LTE'
    }
  };

  constructor(
    private logoServ: LogoService
  ) {
    // TODO
  }

  public ngOnInit() {
    this.logoServ.currentLogo.subscribe((logo) => {
      this.logo = logo;
    });
  }
}
