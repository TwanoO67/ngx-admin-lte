import { Component, Input, OnInit } from '@angular/core';
import { ControlSidebarService } from '../../services/control-sidebar.service';

@Component( {
    selector: 'app-control-sidebar',
    styleUrls: ['./control-sidebar.component.css'],
    templateUrl: './control-sidebar.component.html'
})
export class ControlSidebarComponent implements OnInit {
  public items: any = null;
  private subs: any = [];

  constructor( public _sidebar: ControlSidebarService) { }

  public ngOnInit(){
    let sub = this._sidebar.getItems().subscribe( ( items ) => {
      this.items = items;
    });
    this.subs.push(sub);
  }

  public ngOnDestroy(){
    this.subs.forEach( (sub) => {
      sub.unsubscribe();
    });
  }
}
