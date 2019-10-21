'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">ngx-admin-lte documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="changelog.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>CHANGELOG
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/NgxAdminLteModule.html" data-type="entity-link">NgxAdminLteModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-NgxAdminLteModule-f1a683baf004660a1f88538553a3e4d7"' : 'data-target="#xs-components-links-module-NgxAdminLteModule-f1a683baf004660a1f88538553a3e4d7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-NgxAdminLteModule-f1a683baf004660a1f88538553a3e4d7"' :
                                            'id="xs-components-links-module-NgxAdminLteModule-f1a683baf004660a1f88538553a3e4d7"' }>
                                            <li class="link">
                                                <a href="components/AppFooterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppFooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppHeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppHeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BreadcrumbComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BreadcrumbComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ComponentLoaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ComponentLoaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ControlSidebarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ControlSidebarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LayoutAuthComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LayoutAuthComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LayoutLoginComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LayoutLoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LayoutRegisterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LayoutRegisterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LogoComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LogoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MenuAsideComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MenuAsideComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MessagesBoxComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MessagesBoxComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotificationBoxComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NotificationBoxComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TasksBoxComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TasksBoxComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserBoxComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserBoxComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-NgxAdminLteModule-f1a683baf004660a1f88538553a3e4d7"' : 'data-target="#xs-injectables-links-module-NgxAdminLteModule-f1a683baf004660a1f88538553a3e4d7"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-NgxAdminLteModule-f1a683baf004660a1f88538553a3e4d7"' :
                                        'id="xs-injectables-links-module-NgxAdminLteModule-f1a683baf004660a1f88538553a3e4d7"' }>
                                        <li class="link">
                                            <a href="injectables/BreadcrumbService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>BreadcrumbService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ControlSidebarService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ControlSidebarService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/FooterService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>FooterService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LoggerService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>LoggerService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LogoService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>LogoService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/MenuService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>MenuService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/MessagesService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>MessagesService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/NotificationsService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>NotificationsService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TranslateService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>TranslateService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>UserService</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-NgxAdminLteModule-f1a683baf004660a1f88538553a3e4d7"' : 'data-target="#xs-pipes-links-module-NgxAdminLteModule-f1a683baf004660a1f88538553a3e4d7"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-NgxAdminLteModule-f1a683baf004660a1f88538553a3e4d7"' :
                                            'id="xs-pipes-links-module-NgxAdminLteModule-f1a683baf004660a1f88538553a3e4d7"' }>
                                            <li class="link">
                                                <a href="pipes/SafeHtmlPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SafeHtmlPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Message.html" data-type="entity-link">Message</a>
                            </li>
                            <li class="link">
                                <a href="classes/Notification.html" data-type="entity-link">Notification</a>
                            </li>
                            <li class="link">
                                <a href="classes/Preference.html" data-type="entity-link">Preference</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link">User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/RestService.html" data-type="entity-link">RestService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/CanActivateGuard.html" data-type="entity-link">CanActivateGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});