declare module "zetaret.node.modules::Subserver";
declare module "protoss-nodejs-basic/dist/modules/Subserver.js";

declare namespace zetaret.node.modules {
	export interface SubserverCTOR {
		new(): Subserver
	}
	export interface Subserver extends XProtoSSChe {
		routeMap: object;
		codeMap: object;
		noRouteCode: number;
		noRouteEvent: string;
		debugRoute: boolean;
		debugRouteList: string[];
		listener: zetaret.node.Emitter;
		pathEmitter: zetaret.node.Emitter;
		routeRegMap: object;
		routeRegExp: RegExp;
		routeRegGet: Function;
		useProxy: boolean;
		proxyPaths: string;
		proxyMask: object;
		noProxyCode: number;
		noProxyEvent: string;
		emitExacts: boolean;

		addPathListener(path: string, callback?: Function): Function
		removePathListener(path: string, callback: Function): zetaret.node.modules.Subserver
		pathListener(server: Subserver, robj: object, routeData: object, request: zetaret.node.Input, response: zetaret.node.Output): void
		addMethodPathListener(method: string, path: string, callback: Function): Function
		addParamsPathListener(path: string, callback: Function | Function[], method?: string, autoRoute?: boolean): Function
		addRegPathListener(path: string, callback: Function): Function
		setRouteRegExp(path: string): RegExp
		routeCallback(routeData: object, body: string, request: zetaret.node.Input, response: zetaret.node.Output): void
		initRoute(): void
		initRouteListener(): Subserver
		addRouter(router: zetaret.node.api.Router): void
		pushProtoSSResponse(request: zetaret.node.Input, response: zetaret.node.Output): Subserver
		addHeaders(request: zetaret.node.Input, response: zetaret.node.Output): object
	}
	export interface SubserverEvents {
		VOID: "";
	}
	export interface SubserverModule extends XProtoSSCheModule {
		getExtends(): XProtoSSCheCTOR
		getExtendedServerProtoSS(ProtoSSChe: ProtoSSCheCTOR): SubserverCTOR
	}
}