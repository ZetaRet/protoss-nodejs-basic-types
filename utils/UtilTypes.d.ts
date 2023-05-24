declare type UtilsEventEmitter = import("events").EventEmitter;
declare type UtilsFSWatcher = import("fs").FSWatcher;

declare namespace zetaret.node.utils {
	export type Emitter = UtilsEventEmitter;
	export type Watcher = UtilsFSWatcher;

	export interface RequestMiddlewareFunction {
		(request: Input, response: Output, input: RequestMiddlewareObject): Promise<any> | boolean
	}
	export interface RequestMiddlewareObject {
		data: string | Buffer;
		ctype: string;
	}
	export interface MiddlewareFunction {
		(request: Input, response: Output, midobj: any): Promise<any> | boolean
	}
	export interface ResponseMiddlewareFunction {
		(request: Input, response: Output, output: ResponseMiddlewareObject): Promise<any> | boolean
	}
	export interface ResponseMiddlewareObject {
		data: string | Buffer;
		headers: { [hid: string]: string };
	}
	export interface ContentParserFunction {
		(body: any, headers: { [hid: string]: string }, request: Input): Promise<any> | any
	}
	export interface RouteCallbackFunction {
		(server: ProtoSSChe, robj: RouteObject, routeData: object, request: Input, response: Output): void
	}
}