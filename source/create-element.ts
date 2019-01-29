import { SimpleElementOptionsInterface } from './interface/simple-element-options.interface';

import { SimpleElementOptionsModel } from './model/simple-element-options.model';

export class SimpleCreateElement {
	private DOMElement: HTMLElement = null;
	private elementOptions: SimpleElementOptionsModel = null;

	constructor(private tagName: string, elementOptions?: SimpleElementOptionsInterface)
	{
		this.elementOptions = new SimpleElementOptionsModel(elementOptions || {});

		this.createElement();
		this.setElementParameters();
		this.setElementStyles();
		this.appendChildren();
	}

	public getTagName():string
	{
		return this.tagName;
	}

	public getElementOptions():SimpleElementOptionsModel
	{
		return this.elementOptions;
	}

	private createElement():void
	{
		try {
			this.DOMElement = document.createElement(this.getTagName());
		} catch (exception) {
			console.error('Element could not be created. Invalid name.', exception);
		}

		return;
	}

	private setElementParameters():void
	{
		['className', 'innerText', 'innerHTML'].forEach(item => {
			let value = this.getElementOptions()[item];
			if (value!==null)
				this.getDOMElement()[item] = value;
		});

		return;
	}

	private setElementStyles():void
	{
		const styles = this.getElementOptions().styles;

		if (styles!==null)
		{
			styles.forEach(style => {
				this.getDOMElement().style[style.name] = style.value;
			});
		}

		return;
	}

	private appendChildren():void
	{
		const children = this.getElementOptions().children;
		if (children!==null)
		{
			children.forEach(child => {
				this.getDOMElement().appendChild(child);
			});
		}

		return;
	}

	public appendTo(parent: HTMLElement):void
	{
		parent.appendChild(this.getDOMElement());

		return;
	}

	public getDOMElement():HTMLElement
	{
		return this.DOMElement;
	}

}

