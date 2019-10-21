import { Component, Input, OnInit, OnDestroy, OnChanges,
    ComponentFactoryResolver, ViewContainerRef, ViewChild, ViewEncapsulation} from '@angular/core';

/**
 * Component to dynamicly load other component
 */
@Component({
    selector: 'app-component-loader',
    encapsulation: ViewEncapsulation.None,
    template: '<ng-container #destination ></ng-container>'
})
export class ComponentLoaderComponent implements OnInit, OnDestroy, OnChanges {

    /**
     * class of the component to load
     */
    @Input() class_component: any = null;

    /**
     * data to pass to component
     */
    @Input() data: any = null;

    /**
     * component reference in dom
     */
    @ViewChild('destination', { read: ViewContainerRef, static: false }) viewContainerRef: ViewContainerRef;
    /**
     * component reference
     */
    private componentRef: any = null;

    /**
     * Component initialisation
     */
    constructor(
        private _factoryResolver: ComponentFactoryResolver
    ) { }


    /**
     * Lifecycle hook OnInit
     */
    ngOnInit() {
        // Build the child component
        const factory = this._factoryResolver.resolveComponentFactory(this.class_component);
        this.componentRef = this.viewContainerRef.createComponent(factory);

        // then give some data
        this.setComponentData(this.data);
    }

    /**
     * Lifecycle hook OnChanges, on modification of data send it to the child
     */
    ngOnChanges(changes) {
        this.setComponentData(changes);
    }

    /**
     * Send data to the inner component
     */
    private setComponentData(changes) {
        if (this.componentRef) {
        // send data to component
        Object.assign(this.componentRef.instance, changes);
        // trigger component ngOnChange
        this.componentRef.instance.ngOnChanges( changes );
        }
    }

    /**
     * Lifecycle hook OnDestroy
     */
    ngOnDestroy() {
        if (this.componentRef) {
        this.componentRef.destroy();
        }
    }
}
