import { Type } from '@angular/core';

export class UserBody {
    constructor(public component: Type<any>, public data: any) {}
}