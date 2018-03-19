# ngx-admin-lte

[![Join the chat at https://gitter.im/TwanoO67/ngx-admin-lte](https://badges.gitter.im/TwanoO67/ngx-admin-lte.svg)](https://gitter.im/TwanoO67/ngx-admin-lte?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Build Status](https://travis-ci.org/TwanoO67/ngx-admin-lte.svg?branch=master)](https://travis-ci.org/TwanoO67/ngx-admin-lte)

Admin-LTE for Angular 4/5/6 as a NPM package

![Preview](https://almsaeedstudio.com/img/AdminLTE2.1.png)

This project is a library to integrate in your own project.
If your are looking for a full bootstrapping using this library, please check: [Bootstrapping Ngx-Admin-Lte](https://github.com/TwanoO67/bootstraping-ngx-admin-lte)


## Documentation

Documentation is available here [Documentation](https://twanoo67.github.io/ngx-admin-lte)

## Support & Contribution

This project is maintained on personnal time.

As so weI can't assure you that all questions/issues will be answered as quickly as you need.

But the communauty around it is growing fast, more than 200 projects are using it

And it's an open-source project, so feel free to add feature / fix issues via Pull Requests (they will be merged quickly).

Furthermore, if you like this project and you do want to help us, please considere donating.

Every little help is welcome :)

[![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=ghostsmaker@hotmail.com&lc=US&item_name=TwanoO67&item_number=ngx-admin-lte&no_note=0&currency_code=EUR)


## Installation

This lib is only tested on angular-cli projects, but it may work in any angular project.

Install this lib in your existing project with
`yarn add ngx-admin-lte` or `npm install ngx-admin-lte`

  in your app.modules.ts, add these statements:
  ```javascript
  import { NgxAdminLteModule } from 'ngx-admin-lte';

  @NgModule({
  // ...
  imports: [
    // ...
    NgxAdminLteModule,
```

  Add js and css of admin-lte in your project like so:

in your angular-cli.json
```json
  "assets": [
    { "glob": "**/*", "input": "../node_modules/ngx-admin-lte/public/assets", "output": "./assets" }
  ],
  "scripts": [
    "../node_modules/jquery/dist/jquery.min.js",
    "../node_modules/bootstrap/dist/js/bootstrap.min.js",
    "../node_modules/admin-lte/dist/js/app.min.js"
  ],
```

in your style.css
```css
  @import "../node_modules/angular2-toaster/toaster.css";
  @import "../node_modules/admin-lte/dist/css/AdminLTE.min.css";
  @import "../node_modules/admin-lte/dist/css/skins/_all-skins.min.css";
  @import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
  @import "../node_modules/font-awesome/css/font-awesome.min.css";
  @import "../node_modules/ionicons/dist/css/ionicons.min.css";
```

then you can declare your component with the adminLte template in your router:

```javascript
  import { CanActivateGuard, LayoutAuthComponent } from 'ngx-admin-lte';
  ...
  const routes: Routes = [
    // logged routes
    {
      canActivate: [CanActivateGuard],
      children: [
        {
          canActivate: [CanActivateGuard],
          component: HomeComponent,
          path: 'home'
        },
        {
          canActivate: [CanActivateGuard],
          component: PageNumComponent,
          path: 'page/:id'
        },
      ],
      component: LayoutAuthComponent,
      path: '',
    },
    // not logged routes
    {
      component: LayoutLoginComponent,
      path: 'login'
    },
    {
      component: RegisterComponent,
      path: 'register'
    }
  ];
```

## Handling Translation

In order to use the translation files given by the libraries, you should configure your angular-cli as:

```json
   { "glob": "**/*", "input": "../node_modules/ngx-admin-lte/src/public/assets", "output": "./assets" }
```

But if you want to provide your own translation files, lets say in a folder named "src/public/i18n" in your project.
( That you could have initialised it by doing `cp -r ./node_modules/ngx-admin-lte/src/public/assets/i18n ./src/public/` in your project)

You could do that like so:

```json
    { "glob": "**/*", "input": "../node_modules/ngx-admin-lte/src/public/assets/img", "output": "./assets/img" },
    { "glob": "**/*", "input": "./public/i18n", "output": "./assets/i18n" }
```

Same principle applies if you want to override the "img" assets folder

## Configuration

You can change skin and hide some buttons by passing data to the layout component like so:

```javascript
  component: LayoutAuthComponent,
  data: [{
      'skin': 'skin-black',
      /*
      // USE THIS IS YOU WANT TO HIDE SOME TEMPLATE PART
      'boxed_style': false,
      'display_tasks': false,
      'display_control': false,
      'display_user': false,
      'display_messages': false,
      'display_notifications': false,
      'display_menu_user': false,
      'display_menu_search': false,
      'display_logout': true,
      'display_control_sidebar': true,
      header_components: []
      */
    }],
```

DEPRECATED:
Please don't use 'menu_title' anymore, you can just set 'header' property in your links setting.

Don't forget to import the css skin in you style.css if you use it.

## Additionnal components

You can add some components in the header by adding some in the configuration of the layout like so:

```
'header_components': [{
  class: MenuWidgetComponent,
  data: {
    label: 'test widget'
  }
}]
```

the same structure can be used in the menu configuration to add components in the left menu.

```
import { MenuWidgetComponent } from './widgets/menu-widget/menu-widget.component';
...
let mylinks = [
  //some standard link ...
    {
      'title': 'External Links',
      'icon': 'link',
      'sublinks': [
        {
          'title': 'Github',
          'link': ['https://github.com/TwanoO67/ngx-admin-lte'],
          'icon': 'github',
          'external': true,
          'target': '_blank'
        }
      ]
    },
    // and an additionnal component
    {
      class: MenuWidgetComponent,
      data: {
        label: 'test component'
      }
    }
  ];
// then define the menu
    this.menuService.setCurrent(this.mylinks);
```

Don't forget to add your component to the declarations and entryComponents part of your module file.
Those components must implement OnChanges (so they can receive data)

## Services

If you need some practical example of using this services, check out the project [Bootstraping-ngx-admin-lte](https://github.com/TwanoO67/bootstraping-ngx-admin-lte)

### BreadcrumbService

Helper to set the breadcrumb in a LayoutAuthComponent extended page.

Example for an homepage:
```javascript
  constructor(
    private breadServ: BreadcrumbService
  ) {

  public ngOnInit() {
    // settings the header for the home
    this.breadServ.setCurrent({
      description: 'HomePage',
      display: true,
      header: 'Dashboard',
      levels: [
        {
          icon: 'dashboard',
          link: ['/'],
          title: 'Home'
        }
      ]
    });
  }

  public ngOnDestroy() {
    // removing the header
    this.breadServ.clear();
  }
```

### CanActivateGuard

Service that check if the user is connected.
If you want to use it, just put in you routes like, so;

```javascript
  import { CanActivateGuard } from 'ngx-admin-lte';

  // ...
  {
    component: MyComponent,
    canActivate: [CanActivateGuard],
    path: 'mycompo'
  }
```

And set a `user.connected = true` in your user service.

Example of a basic login page:

```javascript
  constructor(
    private userServ: UserService,
    private router: Router
  ) {

  private login() {
    // DOING SOME BACKOFFICE STUFF ON THE SERVER

    // then if the server said OK, then log the user in js
    if ( 1 === 1 ) {

      const user1 = new User( {
          avatarUrl: 'assets/img/user2-160x160.jpg',
          email: 'weber.antoine@outlook.com',
          firstname: 'WEBER',
          lastname: 'Antoine'
      } );

      user1.connected = true;

      this.userServ.setCurrent( user1 );

      this.router.navigate( ['home'] );
    }
  }
```

### FooterService

Helper to define the footer of an LayoutAuthComponent extended page.
use *setCurrent* to send your footer with `{ left_part: "some text or", right_part: "some <span>html</span>"}`

### LoggerService

the method *log* is used to show some *console.log* using the i18n translation

### LogoService

Helper to define the logo of an LayoutAuthComponent extended page.
use *setCurrent* to send your logo with `{
  html_mini; "<b>A</b>LTE",
  html_lg; "<b>Admin</b>LTE",
}`


You can define your own brand name in the logo, if you want it to be initialised once, do it in your app.compontent.ts like so:

```javascript
  import { LogoService } from 'ngx-admin-lte';

  constructor(
    private logoServ: LogoService
    ){

  // ...

  this.logoServ.setCurrentLogo({
    html_mini; "<b>A</b>LTE",
    html_lg; "<b>Admin</b>LTE",
  });
  ```

Please remove any usage of it.

### MenuService

You can set the menu links, globally (if you do that in your app.component.ts for example),
or locally, if you do that in each of your component.


```javascript
import { User, MenuService, Message, MessagesService } from 'ngx-admin-lte';

// ...

// define here your own links menu structure
private mylinks: any = [
  {
    'header': 'Custom Header'
  },
  {
    'title': 'Home',
    'icon': 'dashboard',
    'link': ['/']
  },
  {
    'title': 'Sub menu',
    'icon': 'link',
    'sublinks': [
      {
        'title': 'Page 2',
        'link': ['/page/2'],
      },
      {
        'title': 'Page 3',
        'link': ['/page/3'],
      }
    ]
  }
];

constructor(
  private menuServ: MenuService,
  private msgServ: MessagesService
) {

}

public ngOnInit() {
  // define menu
  this.menuServ.setCurrentMenu(this.mylinks);
```

### MessagesService

Can be used to send message in the message box of the header

Example:

```javascript
constructor(
    private msgServ: MessagesService,
    // ...
  ) {
    // ...
  }

  public ngOnInit() {
    // FAKE MESSAGE
    // defining some users
    const user1 = new User( {
        avatarUrl: 'assets/img/user2-160x160.jpg',
        email: 'weber.antoine.pro@gmail.com',
        firstname: 'WEBER',
        lastname: 'Antoine'
    });
    const user2 = new User( {
        avatarUrl: 'assets/img/user2-160x160.jpg',
        email: 'EMAIL',
        firstname: 'FIRSTNAME',
        lastname: 'LASTNAME'
    });

    // sending a test message
    this.msgServ.addMessage( new Message( {
        author: user2,
        content: 'le contenu d\'un message d\'une importance extreme',
        destination: user1,
        title: 'un message super important'
    }) );
```


### NotificationsService

Can be used to send notification in the notification box of the header

Example:

```javascript
constructor(
    ...
    private notifServ: NotificationsService
  ) {
    ...
  }

  public ngOnInit() {
    // sending a test notification
    this.notifServ.addNotification( new Notification( {
        class: 'fa fa-users text-aqua',
        content: '5 new members joined today',
        link: '/page/2'
    }) );
```

### RestService

Abstract service to contact a REST API.
You can use that to do Services for you data models.


Example, for a model named "Device"

```javascript
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';
import { Device } from '../../models/device';
import { RestService } from "ngx-admin-lte";

@Injectable()
export class DeviceService extends RestService {

  constructor(_http: Http) {
      super(_http);
      this.modelName = 'devices';
      this.setApiUrl('http://my-rest_api_to_contact/devices');
  }

  /*This parts are only needed if you want to have correct types for your datas*/
  public getAll(): Observable<Device[]>{
    return super.getAll().map((tab)=> {
      return <Device[]>tab.map(unit => new Device(unit) );
    });
  }

  public get(id: number): Observable<Device>{
      return super.get(id).map((unit) => <Device>unit);
  }

}
```

This service will now provide base CRUD functionality respecting the RESP in JSON API format.
```javascript
// CONFIGURATION
setApiUrl( url: string)

// HELPERS WITH CACHE
getAllFromLS(maxtime = 0): Array<any>
getFromCache(id): any

// Standard REST functions
getAll(): Observable<any[]>
get(id: number): Observable<any>
add(item: any): Observable<number>
addAll(tab: Array<any>): Observable<Array<number>>
update(id: number, itemToUpdate: any): Observable<number>
delete(id: number): Observable<Response>
```

### TranslateService

This service will listen to your user changes and check if the current user has a selected language (in the field `preferredLang`).
If so, it will change the language of the app, accordingly.

Use the UserService to change the user, with language set like so:

```javascript
new User( {
    avatarUrl: 'assets/img/user2-160x160.jpg',
    email: 'weber.antoine@outlook.com',
    firstname: 'WEBER',
    lastname: 'Antoine'
    //set the language here
    preferredLang: 'fr'
} );
```

Supported language are: 'en', 'fr', 'ru', 'he', 'zh'

If no preferredLang is given, it will take the browser settings, and otherwise default is 'en'.

### User service

This service is used to send/get the current user information across the app

For example you can set the current user, in your login page :

```javascript
import { User, UserService } from 'ngx-admin-lte';

constructor(
  private _user_serv: UserService
){

ngOnInit(){
  let user = new User({
    firstname: "WEBER",
    lastname: "Antoine",
    email: "why-not-yop@yopmail.com",
    avatarUrl: "assets/img/user2-160x160.jpg"
  });
  this._user_serv.setCurrentUser( user );
```

and you can get the user in a widget:

```javascript
import { User, UserService } from 'ngx-admin-lte';

private current_user: User;
constructor(
  private _user_serv : UserService,
){
  //se connecter au modification du user courant
  this._user_serv.current_user.subscribe((user: User) => this.current_user = user);
```

## Specific Components

### App Header

This widget handles the header bar, it includes other 'box' widgets for the top navigation:

* Messages Box
* Notification Box
* Tasks Box
* User box

### Messages Box

This widget is registered to the messages service

### Notification Box

WIP This widget is registered to the notification service

### Tasks Box

WIP This widget is registered to the task service

### User box

This widget is registered to the user service (for the current user display)

### Menu Aside

This widget handles the left navigation Menu
It is registered to the user service (for the current user display)

## Models

### User

* *firstname*: string, First Name of the user
* *lastname* : string, Last Name of the user
* *email* : string, Email address of the user
* *avatarUrl* : string, URL for the user avatar, could be absolute or relative
* *creation_date* : string, timestamp of the creation of the user

### Message

* *title* : string, title of the message
* *content* : string, content of the message
* *author* : User, source user of the message
* *destination* : User, destination user of the message
* *date* : string, date of sending
