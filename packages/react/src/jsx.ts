// ReactElement

import { REACT_ELEMENT_TYPE } from 'shared/ReactSymbols';
import {
	ElementType,
	Key,
	Props,
	ReactElement,
	Ref,
	Type
} from 'shared/ReactTypes';

// 和宿主环境无关，可作为公共方法
const ReactElement = function (
	type: Type,
	key: Key,
	ref: Ref,
	props: Props
): ReactElement {
	const element = {
		$$typeof: REACT_ELEMENT_TYPE,
		type,
		key,
		ref,
		props,
		__mark: 'via'
	};

	return element;
};

export const jsx = (type: ElementType, config: any, ...maybeChildren: any) => {
	let key: Key = null;
	const props: Props = {};
	const ref: Ref = null;

	for (const prop in config) {
		if (Object.prototype.hasOwnProperty.call(config, prop)) {
			const val = config[prop];
			if (prop === 'key') {
				if (val !== undefined) {
					key = val + '';
				}
				continue;
			}
			if (prop === 'ref') {
				if (val !== undefined) {
					key = val;
				}
			}
			if ({}.hasOwnProperty.call(config, prop)) {
				props[prop] = val;
			}

			const maybeChildrenLength = maybeChildren.length;
			if (maybeChildrenLength) {
				if (maybeChildrenLength === 1) {
					props.children = maybeChildren[0];
				} else {
					props.children = maybeChildren;
				}
			}
		}
	}
	return ReactElement(type, key, ref, props);
};

export const jsxDev = jsx;
