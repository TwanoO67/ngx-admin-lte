import { PipeTransform } from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
export declare class SafeHtmlPipe implements PipeTransform {
    private sanitized;
    constructor(sanitized: DomSanitizer);
    transform(value: string): SafeHtml;
}
