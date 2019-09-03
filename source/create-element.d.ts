import { SimpleElementOptionsInterface } from './interface/simple-element-options.interface';
export declare class SimpleCreateElement {
    private tagName;
    private elementOptions;
    private DOMElement;
    constructor(tagName: string, elementOptions?: SimpleElementOptionsInterface);
    getTagName(): string;
    private createElement;
    private setElementParameters;
    private setElementStyles;
    appendTo(parent: HTMLElement): void;
    appendChildren(element: SimpleCreateElement): void;
    getDOMElement(): HTMLElement;
}
