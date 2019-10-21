import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable()
export class ControlSidebarService {
  // Handle the state (open or closed)
  private current_state: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);
  private default_state: any = false;
  private current_state_value = false;

  // Handle the items
  private current_items: ReplaySubject<any> = new ReplaySubject<any>(1);
  private default_items: any = [
    {
      id: 'control-sidebar-home-tab',
      icon: 'home',
      active: true,
      items: [
        {
          html: `
            <h3 class='control-sidebar-heading'>Recent Activity</h3>
            <ul class='control-sidebar-menu'>
              <li><a href='javascript::;'> <i
                  class='menu-icon fa fa-birthday-cake bg-red'></i>
                  <div class='menu-info'>
                    <h4 class='control-sidebar-subheading'>Langdon's Birthday</h4>
                    <p>Will be 23 on April 24th</p>
                  </div>
              </a></li>
            </ul>`
        },
        {
          html: `
            <h3 class='control-sidebar-heading'>Tasks Progress</h3>
            <ul class='control-sidebar-menu'>
              <li><a href='javascript::;'>
                  <h4 class='control-sidebar-subheading'>
                    Custom Template Design <span
                      class='label label-danger pull-right'>70%</span>
                  </h4>
                  <div class='progress progress-xxs'>
                    <div class='progress-bar progress-bar-danger' style='width: 70%'></div>
                  </div>
              </a></li>
            </ul>`
        }
      ]
    },
    {
      id: 'control-sidebar-settings-tab',
      icon: 'gear',
      active: false,
      items: [
        {
          html: `<form method='post'>
            <h3 class='control-sidebar-heading'>General Settings</h3>
            <div class='form-group'>
              <label class='control-sidebar-subheading'> Report panel
                usage <input type='checkbox' class='pull-right' checked>
              </label>
              <p>Some information about this general settings option</p>
            </div>
            <!-- /.form-group -->
          </form>`
        }
      ]
    }
  ];

  constructor() {
    this.current_state.next(this.default_state);
    this.current_items.next(this.default_items);
  }

  public setItems(items: any) {
    this.current_items.next(items);
  }

  public getItems() {
    return this.current_items;
  }

  public getState(): ReplaySubject<boolean> {
    return this.current_state;
  }

  public setState(val: boolean): void {
    this.current_state_value = val;
    this.current_state.next(this.current_state_value);
  }

  public open(): void {
    this.setState(true);
    this.current_state.next(this.current_state_value);
  }

  public close(): void {
    this.setState(false);
  }

  public toggle(): void {
    this.setState(!this.current_state_value);
  }
}
