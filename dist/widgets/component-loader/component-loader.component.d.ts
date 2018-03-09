import { OnInit, OnDestroy, OnChanges, ComponentFactoryResolver } from '@angular/core';
/**
 * Component to dynamicly load other component
 */
export declare class ComponentLoaderComponent implements OnInit, OnDestroy, OnChanges {
    private _factoryResolver;
    /**
     * class of the component to load
     */
    class_component: any;
    /**
     * data to pass to component
     */
    data: any;
    /**
     * component reference in dom
     */
    viewContainerRef: any;
    /**
     * component reference
     */
    private componentRef;
    /**
     * Component initialisation
     */
    constructor(_factoryResolver: ComponentFactoryResolver);
    /**
     * Lifecycle hook OnInit
     */
    ngOnInit(): void;
    /**
     * Lifecycle hook OnChanges, on modification of data send it to the child
     */
    ngOnChanges(changes: any): void;
    /**
     * Send data to the inner component
     */
    private setComponentData(changes);
    /**
     * Lifecycle hook OnDestroy
     */
    ngOnDestroy(): void;
}
