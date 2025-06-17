declare module "zetaret.node.modules::Voyage";
declare module "protoss-nodejs-basic/dist/modules/Voyage.js";

declare namespace zetaret.node.modules {
	export interface VoyageCTOR {
		new(): Voyage
	}
	export interface Voyage extends Subserver {
		initVoyage(): void
		voya(route: object, port?: number): Voyage
	}
	export interface VoyageModule extends SubserverModule {
		getExtends(): SubserverCTOR
		getExtendedServerProtoSS(ProtoSSChe: ProtoSSCheCTOR): VoyageCTOR
	}
}