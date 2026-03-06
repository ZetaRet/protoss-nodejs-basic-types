declare module "zetaret.node.api::Randomizer";
declare module "protoss-nodejs-basic/dist/api/Randomizer.js";

declare namespace zetaret.node.api {
	export interface RandomizerCTOR {
		new(seed?: number, count?: number): Randomizer
	}
	export interface Randomizer {
		Seed: number;
		Count: number;
		SEED_CONST: number;
		TIME_CONST: number;
		NUMBER_SEED_CONST: number;
		OVERFLOW_CONST: number;
		randomSeedCount: number;

		setRandomSeed(): Randomizer
		GetTime(): number
		GenerateSeed(): number
		GetInt(): number
		GetNumber(): number
		GetRange(min: number, max: number): number
		GetRangeMethod(min: number, max: number, method: Function): number
		GetRangeInt10(min: number, max: number): number
		Clone(): Randomizer
	}
	export interface RandomizerModule {
		Randomizer: RandomizerCTOR
	}
}
