import { SimpleCreateElement } from "../create-element";

export type SimpleElementStyle = {[key: string]: string};

export interface SimpleElementOptionsInterface
{
	className?: string[]|string;
	id?: string;
	innerText?: string;
	innerHTML?: string;
	styles?: SimpleElementStyle;
	children?: SimpleCreateElement[];
	src?: string;
	alt?: string;
	title?: string;
	type?: string;
	href?: string;
	target?: '_blank'|'_self'|'_parent'|'_top'|string;
}
