import { SimpleElementOptionsInterface } from './interface/simple-element-options.interface';


export default class SimpleCreateElement
{
	private DOMElement: HTMLElement = null;

	constructor(private tagName: string, private elementOptions: SimpleElementOptionsInterface = {})
	{
		this.createElement();
		this.setElementParameters();
		this.setElementStyles();

		if (this.elementOptions.children && this.elementOptions.children.length)
		{
			this.elementOptions.children.forEach((item)=>{
				this.appendChildren(item);
			});
		}
	}

	public getTagName():string
	{
		return this.tagName;
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
		['id', 'className', 'innerText', 'innerHTML', 'src', 'alt', 'title', 'type', 'href', 'target'].forEach(itemKey => {
			let value = this.elementOptions[itemKey];
			if (value)
			{
				if (itemKey==='className' && (typeof value)!=='string')
					this.getDOMElement()[itemKey] = value.join(' ');
				else
					this.getDOMElement()[itemKey] = value;
			}
		});

		return;
	}

	private setElementStyles():void
	{
		const styleList = this.elementOptions.styles;

		if (styleList)
			for (let styleType of Object.keys(styleList))
				this.getDOMElement().style[styleType] = styleList[styleType];

		return;
	}

	public appendTo(parent: HTMLElement):void
	{
		parent.appendChild(this.getDOMElement());

		return;
	}

	public appendChildren(element: SimpleCreateElement):void
	{
		this.getDOMElement().appendChild(element.getDOMElement());

		return;
	}

	public getDOMElement():HTMLElement
	{
		return this.DOMElement;
	}

}

console.log(SimpleCreateElement);
