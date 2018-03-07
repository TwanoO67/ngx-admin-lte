import { TranslateService } from './translate.service';
export declare class LoggerService {
    private translate;
    constructor(translate: TranslateService);
    log(component: string, msg?: string, i18nRef?: string, data?: string[]): void;
}
