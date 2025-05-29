declare module "protoss-nodejs-basic/dist/utils/html/ObfuscateCSSHelper.js";
declare module "zetaret.node.utils.html::ObfuscateCSSHelper";

declare namespace zetaret.node.utils.html {
	export interface ObfuscateCSSHelperModule {
		settings: any;
		ob_classes: any;
		ob_output_css: any;

		setClassName(id: string, obj: any): void
		obfuscateCSS(id: string, rnd: Function): string
		applyObCSS(el: any, hpinst: HTMLParser): void
	}
}