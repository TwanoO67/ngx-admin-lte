import { OnInit, OnDestroy, OnChanges, ComponentFactoryResolver } from '@angular/core';
/**
 * Component to dynamicly load other component
 */
export declare class ComponentLoaderComponent implements OnInit, OnDestroy, OnChanges {
    private _factoryResolver;
    /**
     * class of the component to load
     * @type {Class}
     */
    class_component: any;
    /**
     * data to pass to component
     * @type {Class}
     */
    data: any;
    /**
     * component reference in dom
     * @type {any}
     */
    viewContainerRef: any;
    /**
     * component reference
     * @type {number|string}
     */
    private componentRef;
    /**
     * Component initialisation
     * @param  {ComponentFactoryResolver} _factoryResolver
     */
    constructor(_factoryResolver: ComponentFactoryResolver);
    /**
     * Lifecycle hook OnInit
     */
    ngOnInit(): void;
    /**
     * Lifecycle hook OnChanges, on modification of data send it to the child
     * @param  {any} changes new data changes (and old ones, in same object)
     */
    ngOnChanges(changes: any): void;
    /**
     * Send data to the inner component
     * @param  {any} changes Data to send
     */
    private setComponentData(changes);
    /**
     * Lifecycle hook OnDestroy
     * @return {[type]} [description]
     */
    ngOnDestroy(): void;
}
