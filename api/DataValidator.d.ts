declare module "zetaret.node.api::DataValidator";
declare module "protoss-nodejs-basic/dist/api/DataValidator.js";

declare namespace zetaret.node.api {
	export interface DataValidator {
		log: boolean;
		error: ValidationError;

		reset(): DataValidator
		validate(data: { [key: string | number]: any }, validation: { [key: string | number]: ValidatorObject }, keychain?: string[]): boolean
	}
	export interface ValidatorObject {
		required?: boolean;
		defaults?: any;
		type: string;
	}
	export interface MinMaxValidation {
		min?: number;
		max?: number;
	}
	export interface StringValidatorObject extends ValidatorObject, MinMaxValidation {
		defaults?: string;
		regexp?: RegExp;
	}
	export interface NumberValidatorObject extends ValidatorObject, MinMaxValidation {
		defaults?: number;
	}
	export interface BooleanValidatorObject extends ValidatorObject {
		defaults?: boolean;
	}
	export interface ValidationFunction {
		(key: string | number, value: any, keychain?: Array<string | number>): boolean
	}
	export interface FunctionValidatorObject extends ValidatorObject {
		tester: ValidationFunction;
	}
	export interface ArrayValidatorObject extends ValidatorObject, MinMaxValidation {
		defaults?: { [key: number]: any };
		validation: { [key: number]: ValidatorObject };
		element?: ValidatorObject;
	}
	export interface KeyValidatorObject extends ValidatorObject {
		defaults?: { [key: string]: any };
		validation: { [key: string]: ValidatorObject };
	}
	export interface ErrorObj {
		type: string;
		key: string;
		value: any;
		keychain: Array<string | number>;
	}
	export interface ValidationError {
		error: ErrorObj;
		validation: ValidatorObject;
	}
}