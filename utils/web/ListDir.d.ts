declare namespace zetaret.node.utils.web {
	export interface ListDir {
		(serverobj: zetaret.node.modules.Subserver | zetaret.node.api.Router, path: string, dir: string, config: ListDirConfig): Function
	}
	export interface ListDirConfig {
		ext: string[];
		files_whitelist?: string[];
		files_blacklist?: string[];
		filenameFilter?: Function;
		readFile?: Function;
		cacheControl?: { [ext: string]: number };
		streamExt?: { [ext: string]: boolean };
		streamFiles?: { [filename: string]: boolean };
	}
	export interface ListDirModule {
		MIME_TYPES: { [ext: string]: string };
		ListDir: ListDir;
	}
}