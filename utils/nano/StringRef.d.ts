declare namespace zetaret.node.utils.nano {
	export interface StringRefCTOR {
		new(s: string): StringRef
	}
	export interface StringRef extends String {
		concat(...rest: string[]): string
		concat(value: string, ...rest: string[]): StringRef
		valueOf(): string
		valueOfObj(): StringRef
	}
}