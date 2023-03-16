// 独一无二

const supportSymbol = typeof Symbol === 'function' && Symbol.for; //判断宿主环境是否支持symbol类型

export const REACT_ELEMENT_TYPE = supportSymbol
	? Symbol.for('react.element')
	: 0xeac7;
