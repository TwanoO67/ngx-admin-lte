import { Component, Input } from '@angular/core';

@Component( {
    selector: 'app-loading',
    styleUrls: ['./app-loading.component.css'],
    templateUrl: './app-loading.component.html'
})
export class AppLoadingComponent {

    @Input()
    isLoadin: false;

    constructor( ) {

    }
}
