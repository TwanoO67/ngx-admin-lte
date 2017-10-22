# ngx-admin-lte

[![Join the chat at https://gitter.im/TwanoO67/ngx-admin-lte](https://badges.gitter.im/TwanoO67/ngx-admin-lte.svg)](https://gitter.im/TwanoO67/ngx-admin-lte?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Build Status](https://travis-ci.org/TwanoO67/ngx-admin-lte.svg?branch=master)](https://travis-ci.org/TwanoO67/ngx-admin-lte)

Admin-LTE for Angular4 as a NPM package

![Preview](https://almsaeedstudio.com/img/AdminLTE2.1.png)

## Support
Hey dude! Help me out for a couple of :beers:!

[![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=ghostsmaker@hotmail.com&lc=US&item_name=TwanoO67&item_number=ngx-admin-lte&no_note=0&currency_code=EUR)


## Installation

  This lib is only tested on angular-cli project, but it probably can work elsewhere...

  To install this lib on your project :
  `yarn add ngx-admin-lte`or `npm install ngx-admin-lte`

  in your app.modules.ts
  ```import { NgxAdminLteModule } from 'ngx-admin-lte';

  @NgModule({
    ...
  imports: [
    ...
    NgxAdminLteModule,

  ```

  add js and css of admin-lte in your project.
  like so:

in your angular-cli.json
  ```
  "assets": [
        { "glob": "**/*", "input": "../node_modules/ngx-admin-lte/src/public/assets", "output": "./assets" }
  ...
      ],
  "scripts": [
        "../node_modules/jquery/dist/jquery.js",
        "../node_modules/bootstrap/dist/js/bootstrap.js",
        "../node_modules/admin-lte/dist/js/app.js"
      ],
```

in your style.css
```
@import "../node_modules/bootstrap/dist/css/bootstrap.css";
@import "../node_modules/font-awesome/css/font-awesome.css";
@import "../node_modules/admin-lte/dist/css/AdminLTE.css";
@import "../node_modules/ionicons/dist/css/ionicons.css";
// Default skin
@import "../node_modules/admin-lte/dist/css/skins/skin-blue.css";
// Optionnally, add other skins you may use...
@import "../node_modules/admin-lte/dist/css/skins/skin-black.css";
```

  then you can declare your component with the adminLte template in your router:

  ```
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

  ## Configuration

  You can change skin and disactivate some buttons by passing data to the layout component.
  like so:

  ```
  component: LayoutAuthComponent,
  data: [{
      'skin': 'skin-black',
      /*
      // USE THIS IS YOU WANT TO HIDE SOME TEMPLATE PART
      'display_tasks': false,
      'display_control': false,
      'display_user': false,
      'display_tasks': false,
      'display_messages': false,
      'display_notifications': false,
      'display_menu_user: false,
      'display_menu_search': false,
      'menu_title': 'MENU TITLE',
      */
    }],
  ```

  don't forget to import the css skin in you style.css if you use it.

  ## Services

  If you need some pratical example of utilisation of this services, check the project [Bootstraping-ngx-admin-lte](https://github.com/TwanoO67/bootstraping-ngx-admin-lte)

  ### Breadcrumb service

  Helper to set the breadcrumb in a LayoutAuthComponent extended page.

  ### CanActivateGuard service

  Service that check if the user is connected.
  If you want to use it, just put in you routes like, so;

  ```
  import { CanActivateGuard } from 'ngx-admin-lte';
  ...
  {
    component: MyComponent,
    canActivate: [CanActivateGuard],
    path: 'mycompo'
  }

  ```

  And set a `user.connected = true` in your user service

  ### Footer Service

  Helper to define the footer of an LayoutAuthComponent extended page.
  use *setCurrent* to send your footer with `{ left_part: "some text or", right_part: "some <span>html</span>"}`

  ### Logger

  the method *log* is used to show some *console.log* using the i18n translation

  ### Logo Service

  Helper to define the logo of an LayoutAuthComponent extended page.
  use *setCurrentLogo* to send your logo with `{
    html_mini; "<b>A</b>LTE",
    html_lg; "<b>Admin</b>LTE",
  }`

  Syntaxe with small, big, bold and normal items are now deprecated

  ### Menu service

  You can set the menu links, globally (if you do that in your app.component.ts for example),
  or locally, if you do that in each of your component


  ```
  import { User, MenuService, Message, MessagesService } from 'ngx-admin-lte';
  ...

  // define here your own links menu structure
  private mylinks: any = [
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

  ### Logo Service

  You can define your own brand name in the logo

  Import { LogoService } from 'ngx-admin-lte';

  constructor(
    private logoServ: LogoService
    ){

  ...

  this.logoServ.setCurrentLogo({
    //used for reduced menu
    small: {
      bold: 'A',
      normal: 'LT'
    },
    //used for normal state
    big: {
      bold: 'Admin',
      normal: 'LTE'
    }
  });


  ### User service

  This service is used to send/get the current user informations accross the app

  For example you can set the current user, in your login page :

  ```
  import {User, UserService} from 'ngx-admin-lte';
  ...
  constructor(
    private _user_serv: UserService
  ){
  ...
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

  ```
  import {User, UserService} from 'ngx-admin-lte';
  ...
  private current_user: User;
  constructor(
    private _user_serv : UserService,
  ){
    //se connecter au modification du user courant
    this._user_serv.current_user.subscribe((user: User) => this.current_user = user);
  ```


## Specific Components

### App Header

This widget handle the header bar, it includes other 'box' widgets for the top navigation:

* Messages Box
* Notification Box
* Tasks Box
* User box

### Messages Box

This widget is registred to the messages service

### Notification Box

WIP This widget is registred to the notification service

### Tasks Box

WIP This widget is registred to the task service

### User box

This widget is registred to the user service (for the current user display)

### Menu Aside

This widget handle the left navigation Menu

It is registred to the user service (for the current user display)

## Models

### User

* *firstname*: string, First Name of the user
* *lastname* : string, Last Name of the user
* *email* : string, Email address of the user
* *avatarUrl* : string, URL for the user avatar, could be absolute or relative
* *creation_date* : string, timestamp of the creation of the user

### Message

* *title* : string, title of the message
* *content* : string, content of the mesage
* *author* : User, source user of the message
* *destination* : User, destination user of the message
* *date* : string, date of sending
