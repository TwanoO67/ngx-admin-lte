import { Component } from '@angular/core';
import { BreadcrumbService } from '../../services/breadcrumb.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
})
export class BreadcrumbComponent {
  display = false;
  header = '';
  description = '';
  levels: any[] = [];

  constructor(private breadServ: BreadcrumbService) {
    // getting the data from the services
    this.breadServ.getCurrent().subscribe((data) => {
      this.display = data.display;
      this.header = data.header;
      this.description = data.description;
      this.levels = data.levels;
    });
  }

}
