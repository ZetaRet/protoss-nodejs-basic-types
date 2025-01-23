declare module "protoss-nodejs-basic/utils/html/ReplaceHTMLParams.js";
declare module "zetaret.node.utils.html::ReplaceHTMLParams";

declare namespace zetaret.node.utils.html {
	export interface ReplaceHTMLParamsModule {
		settings: any;

		replaceParamsRegExp(data: any, prefix: string, suffix: string): RegExp
		wrapText(value: any, wrap: string): string
		replaceParams(string: string, data: any, prefix?: string, suffix?: string): string
		replaceParamsWrapper(string: string, data: any, wrap?: string, prefix?: string, suffix?: string): string
		exportServerVar(name: string, json: any, pretty?: boolean): string
	}
}