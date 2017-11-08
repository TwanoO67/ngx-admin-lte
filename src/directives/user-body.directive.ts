import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[user-body]',
})
export class UserBodyDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
