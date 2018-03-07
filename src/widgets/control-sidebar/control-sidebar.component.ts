import { Component, Input } from '@angular/core';
import { ControlSidebarService } from '../../services/control-sidebar.service';

@Component( {
    selector: 'app-control-sidebar',
    styleUrls: ['./control-sidebar.component.css'],
    templateUrl: './control-sidebar.component.html'
})
export class ControlSidebarComponent {

  constructor( private _sidebar: ControlSidebarService) { }
}
