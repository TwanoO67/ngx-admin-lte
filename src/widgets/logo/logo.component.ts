import { Component, Input, OnInit } from '@angular/core';
import { LogoService } from '../../services/logo.service';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html'
})
export class LogoComponent implements OnInit {
  logo: any;
  @Input() hide = '';

  constructor(private logoServ: LogoService) { }

  ngOnInit() {
    this.logoServ.getCurrent().subscribe((logo) => {
      this.logo = logo;
    });
  }
}
