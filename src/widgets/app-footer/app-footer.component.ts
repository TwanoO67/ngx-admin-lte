import { Component } from '@angular/core';
import { FooterService } from '../../services/footer.service';

@Component({
    selector: 'app-footer',
    styleUrls: ['./app-footer.component.css'],
    templateUrl: './app-footer.component.html'
})
export class AppFooterComponent {
    footer: any = {};

    constructor(private footerServ: FooterService) {
        this.footerServ.getCurrent().subscribe(footer => this.footer = footer);
    }
}
