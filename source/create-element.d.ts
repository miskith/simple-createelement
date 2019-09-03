import { SimpleElementOptionsInterface } from './interface/simple-element-options.interface';
export declare class SimpleCreateElement {
    tagName: string;
    private elementOptions;
    DOMElement: HTMLElement;
    constructor(tagName: string, elementOptions?: SimpleElementOptionsInterface);
    private createElement;
    private setElementParameters;
    private setElementStyles;
    appendTo(parent: HTMLElement): void;
    appendChildren(element: HTMLElement): void;
}
