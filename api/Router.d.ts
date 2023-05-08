declare namespace zetaret.node.api {
	export interface RouterCTOR {
		new(): Router
	}
	export interface Router {
		prefix: string;
		adds: RouterAdds[];
		returns: RouterReturns[];

		addPathListener(path: string, callback?: Function): void
		addMethodPathListener(method: string, path: string, callback: Function): void
		addParamsPathListener(path: string, callback: Function | Function[], method?: string, autoRoute?: boolean): void
		get(path: string, callback: Function | Function[]): void
		post(path: string, callback: Function | Function[]): void
		put(path: string, callback: Function | Function[]): void
		patch(path: string, callback: Function | Function[]): void
		delete(path: string, callback: Function | Function[]): void
	}
	export interface RouterAdds {
		method: string;
		arguments: Array<any>;
	}
	export interface RouterReturns {
		add: RouterAdds;
		server: ProtoSSChe;
		callback: Function;
	}
	export interface RouterModule {
		Router: RouterCTOR;
	}
}