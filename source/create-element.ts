import { SimpleElementOptionsInterface } from './interface/simple-element-options.interface';


export class SimpleCreateElement
{
	public DOMElement: HTMLElement = null;

	constructor(public tagName: string, private elementOptions: SimpleElementOptionsInterface = {})
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

	private createElement():void
	{
		try {
			this.DOMElement = document.createElement(this.tagName);
		} catch (exception) {
			console.error('Element could not be created. Invalid name.', exception);
		}

		return;
	}

	private setElementParameters():void
	{
		['id', 'className', 'innerText', 'innerHTML', 'src', 'alt', 'title', 'type', 'href', 'target', 'srcset'].forEach(itemKey => {
			let value = this.elementOptions[itemKey];
			if (value)
			{
				if (itemKey==='srcset')
					this.DOMElement[itemKey] = ((typeof value)==='string' ? value : value.join(', '));
				else if (itemKey==='className' && (typeof value)!=='string')
					this.DOMElement[itemKey] = value.join(' ');
				else
					this.DOMElement[itemKey] = value;
			}
		});

		return;
	}

	private setElementStyles():void
	{
		const styleList = this.elementOptions.styles;

		if (styleList)
			for (let styleType of Object.keys(styleList))
				this.DOMElement.style[styleType] = styleList[styleType];

		return;
	}

	public appendTo(parent: HTMLElement):void
	{
		parent.appendChild(this.DOMElement);

		return;
	}

	public appendChildren(element: HTMLElement):void
	{
		this.DOMElement.appendChild(element);

		return;
	}

}

