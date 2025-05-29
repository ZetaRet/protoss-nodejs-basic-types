declare module "protoss-nodejs-basic/dist/utils/web/Logging.js";
declare module "zetaret.node.utils.web::Logging";

declare namespace zetaret.node.utils.web {
	export interface LoggingCTOR {
		new(): Logging
	}
	export interface Logging {
		logStr(domain: string, timestamp: number, requestId: string, data: any, format?: string): string
		logFile(filename: string, logstring: string): void
	}
	export interface ListDirModule {
		settings: any;
		Logging: LoggingCTOR;

		logText(domain: string, timestamp: number, requestId: string, data: any): string
		logMD(domain: string, timestamp: number, requestId: string, data: any): string
		log(domain: string, timestamp: number, requestId: string, data: any, format?: string): string
	}
}