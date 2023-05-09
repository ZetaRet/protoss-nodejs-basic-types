declare namespace zetaret.node {
	export interface SplitURL {
		url?: string;
		query?: string;
		path?: string;
		pages?: Array<string>;
		root?: string;
		page?: string;
		sub?: string;
		param?: string;
		vars?: object;
		post?: object;
	}
	export interface RouteObject extends SplitURL {
		rawpath?: string;
		pageIndex?: number;
		pageCurrent?: string;
		pageProxy?: string;
		exact?: boolean;
		output?: object;
	}
	export interface AugmentRequest {
		__reqid?: number;
		__encoding?: string;
		__bodyBuffer?: Buffer;
	}
	export interface AugmentResponse {
		__splitUrl?: SplitURL;
		__body?: string | Buffer;
		__encoding?: string;
		__async?: boolean;
		__data?: Array<any>;
		__rcode?: number;
		__dataJoin?: string;
		__dataPrefix?: string;
		__dataSuffix?: string;
	}
	export interface RoutedResponse extends AugmentResponse {
		__splitUrl?: RouteObject;
		__breakRoute?: boolean;
		__headers?: object;
		__rawdata?: Array<object>;
	}
	export interface ProtoResponse extends AugmentResponse {
		__json(data: any, code?: number): void
	}
	export interface XProtoResponse extends ProtoResponse {
		__asyncEnd(code?: number): void
		__asyncDataEnd(data: any, code: number): void
		__asyncJsonEnd(data: any, code?: number): void
	}
	export interface ServerEnvironment {
		dumpall?: boolean;
		dumpkeys?: Array<string>;
		omit?: object;
		maxBodyLength?: number;
		contenttype?: string;
		sidinterval?: number;
		statsin?: ServerStats;
		statsout?: ServerStats;
		keepBodyBuffer?: boolean;
		swapBodyBuffer?: boolean;
	}
	export interface SingleServerStats {
		xserver?: boolean;
		xserverModule?: string;
		htport?: number;
		https?: boolean;
		httpsop?: ServerOptions;
		h2op?: object;
	}
	export interface ServerStats extends SingleServerStats {
		reqnum?: number;
		cookieid?: string;
	}
	export interface ClusterStats extends ServerStats {
		requested?: number;
		enforceRequested?: boolean;
		coreThreads?: number;
		masterPort?: boolean;
		port?: number;
		servers?: SingleServerStats[];
	}
	export interface ServerOptions {
		keyPath?: string;
		key?: string;
		certPath?: string;
		cert?: string;
		pfxPath?: string;
		pfx?: string;
		caPath?: string;
		ca?: Array<string> | string;
		h2?: boolean;
	}
	export interface BasicServerGlobal {
		DisableAutoStartOfProtoSSChe?: boolean;
		EnableGlobalStatsFile?: boolean;
		GlobalStatsFile?: ServerStats;
		ProtoSSCheStatsFile?: string;
		ProtoSSCheXServerPath?: string;
		SubserverRequireModule?: string;
		LobbyServerRequireModule?: string;
		CardServerRequireModule?: string;
		VoyageRequireModule?: string;
		DeepVoyageRequireModule?: string;
	}
	export interface ServerModule {
		xpros: ServerModule;
		SERVERID: string;
		EVENTS?: object;

		resetExtends(): void
		getExtends(): ProtoSSCheCTOR
		getExtendedServerProtoSS(ProtoSSChe: ProtoSSCheCTOR): ProtoSSCheCTOR
	}
	export interface ModuleInstance {
		serverche: ProtoSSChe;
		xpro: ServerModule;
		xprocls: ProtoSSCheCTOR;
		xmodule: string;
	}
	export interface NodeServerData {
		httpsop: object;
		htserv: XServer;
	}
}