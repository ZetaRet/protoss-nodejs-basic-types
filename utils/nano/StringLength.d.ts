declare module "protoss-nodejs-basic/dist/utils/nano/StringLength.js";
declare module "zetaret.node.utils.nano::StringLength";

declare namespace zetaret.node.utils.nano {
	export interface StringLengthCTOR {
		new(s: string): StringLength
	}
	export interface StringLength extends String {
		concat(...rest: string[]): string
		concat(value: string, ...rest: string[]): StringLength
		valueOf(): string
		valueOf(): number
	}
}