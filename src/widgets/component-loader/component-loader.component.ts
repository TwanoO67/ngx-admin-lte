import { Component, Input, OnInit, OnDestroy, OnChanges, ComponentRef,
    ComponentFactoryResolver, ViewContainerRef, ViewChild} from '@angular/core';

/**
 * Component to dynamicly load other component
 */
@Component({
    selector: 'app-component-loader',
    template: '<div #destination ></div>'
})
export class ComponentLoaderComponent implements OnInit, OnDestroy, OnChanges {

    /**
     * class of the component to load
     * @type {Class}
     */
    @Input() class_component: any = null;

    /**
     * data to pass to component
     * @type {Class}
     */
    @Input() data: any = null;

    /**
     * component reference in dom
     * @type {any}
     */
    @ViewChild('destination', {read: ViewContainerRef}) viewContainerRef;
    /**
     * component reference
     * @type {number|string}
     */
    private componentRef: any = null;

    /**
     * Component initialisation
     * @param  {ComponentFactoryResolver} _factoryResolver
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
     * @param  {any} changes new data changes (and old ones, in same object)
     */
    ngOnChanges(changes) {
        this.setComponentData(changes);
    }

    /**
     * Send data to the inner component
     * @param  {any} changes Data to send
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
     * @return {[type]} [description]
     */
    ngOnDestroy() {
        if (this.componentRef) {
        this.componentRef.destroy();
        }
    }
}
