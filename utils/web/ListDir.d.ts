declare module "protoss-nodejs-basic/dist/utils/web/ListDir.js";
declare module "zetaret.node.utils.web::ListDir";

declare namespace zetaret.node.utils.web {
	export interface ListDir {
		(serverobj: zetaret.node.modules.Subserver | zetaret.node.api.Router, path: string, dir: string, config: ListDirConfig): Function
	}
	export interface ListDirConfig {
		ext: string[];
		whitelist?: string[];
		blacklist?: string[];
		filenameFilter?: Function;
		readFile?: Function;
		cacheControl?: { [ext: string]: number };
		nocache?: Record<string, boolean | number>;
		streamExt?: { [ext: string]: boolean };
		streamFiles?: { [filename: string]: boolean };
		access?: Record<string, any>;
		accessHandler?: Function;
		hashMap?: Record<string, boolean | number>;
	}
	export interface ListDirModule {
		MIME_TYPES: { [ext: string]: string };
		ListDir: ListDir;
	}
}