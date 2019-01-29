import { SimpleElementOptionsInterface } from './../interface/simple-element-options.interface';

export class SimpleElementOptionsModel
{
	constructor(private elementOptions: SimpleElementOptionsInterface)
	{
	}

	private getElementOptions():SimpleElementOptionsInterface
	{
		return this.elementOptions;
	}

	get className():string
	{
		return (('className' in this.getElementOptions()) && (typeof this.getElementOptions().className)==='object' ? this.getElementOptions().className.join(' ') : null);
	}

	get innerText():string
	{
		return (('innerText' in this.getElementOptions()) ? ''+this.getElementOptions().innerText : null);
	}

	get innerHTML():string
	{
		return (('innerHTML' in this.getElementOptions()) ? ''+this.getElementOptions().innerHTML : null);
	}

	get children():HTMLElement[]
	{
		return (('children' in this.getElementOptions()) ? this.getElementOptions().children : null);
	}

	get styles():{name: string; value: string}[]
	{
		if (!('styles' in this.getElementOptions()))
			return null;

		let styles:{name: string; value: string}[] = [];
		for (let name in this.getElementOptions().styles)
			styles.push({name: <string>name, value: <string>this.getElementOptions().styles[name]});

		return styles;
	}

}
