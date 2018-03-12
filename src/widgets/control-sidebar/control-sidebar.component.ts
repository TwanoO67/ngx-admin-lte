import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlSidebarService } from '../../services/control-sidebar.service';

@Component( {
    selector: 'app-control-sidebar',
    styleUrls: ['./control-sidebar.component.css'],
    templateUrl: './control-sidebar.component.html'
})
export class ControlSidebarComponent implements OnDestroy, OnInit {
  public items: any[];
  private subs: any[];

  constructor( public _sidebar: ControlSidebarService) { }

  public ngOnInit() {
    const sub = this._sidebar.getItems().subscribe(items => {
      this.items = items;
    });
    this.subs.push(sub);
  }

  public ngOnDestroy() {
    this.subs.forEach( (sub) => sub.unsubscribe());
  }
}
