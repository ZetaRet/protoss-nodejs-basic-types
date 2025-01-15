declare module "zetaret.node.utils.web::CookieHelper";

declare namespace zetaret.node.utils.web {
	export interface CookieHelperModule {
		settings: any;
		LiveSessions: any;

		bakeCookie(request: zetaret.node.Input, response: zetaret.node.Output): void
	}
}