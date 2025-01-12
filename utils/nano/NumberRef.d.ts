declare module "zetaret.node.utils.nano::NumberRef";

declare namespace zetaret.node.utils.nano {
	export interface NumberRefCTOR {
		new(n: number): NumberRef
	}
	export interface NumberRef extends Number {
		valueOf(): number
		valueOfObj(): NumberRef
	}
}