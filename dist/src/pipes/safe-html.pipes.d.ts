import { PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
export declare class SafeHtmlPipe implements PipeTransform {
    private sanitized;
    constructor(sanitized: DomSanitizer);
    transform(value: string): any;
}
