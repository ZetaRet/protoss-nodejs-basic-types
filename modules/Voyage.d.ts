declare module "zetaret.node.modules::Voyage";
declare module "protoss-nodejs-basic/modules/Voyage.js";

declare namespace zetaret.node.modules {
	export interface VoyageCTOR {
		new(): Voyage
	}
	export interface Voyage extends Subserver {
		initVoyage(): void
		voya(route: object, port?: number): zetaret.node.modules.Voyage
	}
	export interface VoyageModule extends SubserverModule {
		getExtends(): zetaret.node.modules.SubserverCTOR
		getExtendedServerProtoSS(ProtoSSChe: ProtoSSCheCTOR): zetaret.node.modules.VoyageCTOR
	}
}