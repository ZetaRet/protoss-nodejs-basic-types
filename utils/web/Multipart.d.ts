declare module "zetaret.node.utils.web::Multipart";

declare namespace zetaret.node.utils.web {
	export interface MultipartModule {
		settings: any;

		parse(multipartBodyBuffer: any, boundary: string): any[]
		getBoundary(header: string): string
		contentParser(body: any, headers: any, request: zetaret.node.Input): any
		configParser(server: zetaret.node.modules.XProtoSSChe, callback?: Function): void
	}
}