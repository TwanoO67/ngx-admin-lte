import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LogoService } from '../../services/logo.service';

@Component( {
    selector: 'app-logo',
    templateUrl: './logo.component.html'
})
export class LogoComponent implements OnInit {
  public logo: any;
  @Input() hide = '';

  constructor(
    private logoServ: LogoService
  ) { }

  public ngOnInit() {
    this.logoServ.getCurrent().subscribe((logo) => {
      this.logo = logo;
    });
  }
}
