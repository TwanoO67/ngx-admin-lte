import { Component, OnInit, AfterViewInit, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { UserBodyDirective } from '../../directives/user-body.directive';
import { UserBody } from '../../models/user-body';

@Component({
  /* tslint:disable */
  selector: '.userBox',
  /* tslint:enable */
  styleUrls: ['./user-box.component.css'],
  templateUrl: './user-box.component.html'
})
export class UserBoxComponent implements OnInit, AfterViewInit {

  @Input() public display_profile: boolean = true;
  @Input() public user_body: UserBody;

  @ViewChild(UserBodyDirective) userBody: UserBodyDirective;

  // default user, only an example, please use the userService to modify
  public currentUser: User =  new User({
      avatarUrl: 'assets/img/user2-160x160.jpg',
      email: 'weber.antoine@outlook.com',
      firstname: 'WEBER',
      lastname: 'Antoine'
  });

  constructor(private userServ: UserService, private router: Router,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
    // se connecter au modif du user courant
    this.userServ.getCurrent().subscribe((user: User) => this.currentUser = user);
  }

  // Load dynamic user body component
  // ref: https://angular.io/guide/dynamic-component-loader
  loadUserBody(){
    if(this.user_body){

      let componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.user_body.component);
      
      let viewContainerRef = this.userBody.viewContainerRef;
      viewContainerRef.clear();
  
      let componentRef = viewContainerRef.createComponent(componentFactory);
      (<UserBody>componentRef.instance).data = this.user_body.data;

    }
  }

  public ngOnInit() {
    // TODO
  }

  public ngAfterViewInit(): void {
    this.loadUserBody();
  }

  public logout = (): void => {
    this.userServ.logout();
  }
}
