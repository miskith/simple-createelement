# simple-createelement

Library for simple creation of element

**Usage**

```typescript
new SimpleCreateElement(tagName: string, elementOptions?: SimpleElementOptionsInterface = {});
```

**SimpleElementOptionsInterface**
```typescript
export interface SimpleElementOptionsInterface
{
	className?: string[]|string;
	id?: string;
	innerText?: string;
	innerHTML?: string;
	styles?: SimpleElementStyle;
	children?: HTMLElement[];
	src?: string;
	alt?: string;
	title?: string;
	type?: string;
	href?: string;
	target?: '_blank'|'_self'|'_parent'|'_top'|string;
}
```
