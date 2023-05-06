declare namespace zetaret.node.utils.nano {
	export interface BooleanRefCTOR {
		new(b: boolean): BooleanRef
	}
	export interface BooleanRef extends Boolean {
		valueOf(): boolean
		valueOfObj(): BooleanRef
	}
}