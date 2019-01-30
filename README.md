# simple-createelement

Library for simple creation of element

**Usage**

```typescript
new SimpleCreateElement(tagName: string, elementOptions?: SimpleElementOptionsInterface);
```

**SimpleElementOptionsInterface**
```typescript
export interface SimpleElementOptionsInterface
{
	className?: string[];
	innerText?: string;
	innerHTML?: string;
	styles?: Object;
	children?: HTMLElement[];
}
```
