import { BreadcrumbService } from '../../services/breadcrumb.service';
export declare class BreadcrumbComponent {
    private breadServ;
    display: boolean;
    header: string;
    description: string;
    levels: Array<any>;
    constructor(breadServ: BreadcrumbService);
}
