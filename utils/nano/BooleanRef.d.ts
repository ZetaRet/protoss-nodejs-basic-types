declare module "protoss-nodejs-basic/dist/utils/nano/BooleanRef.js";
declare module "zetaret.node.utils.nano::BooleanRef";

declare namespace zetaret.node.utils.nano {
	export interface BooleanRefCTOR {
		new(b: boolean): BooleanRef
	}
	export interface BooleanRef extends Boolean {
		valueOf(): boolean
		valueOfObj(): BooleanRef
	}
}