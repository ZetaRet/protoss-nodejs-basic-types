declare module "zetaret.node.modules::CardServer";
declare module "protoss-nodejs-basic/modules/CardServer.js";

declare namespace zetaret.node.modules {
	export interface CardServerCTOR {
		new(): CardServer
	}
	export interface CardServer extends LobbyServer {
		decks: object;

		initCards(): void
		initCardAppServer(): void
	}
	export interface CardServerEvents {
		DRAW_CARD: "drawCard";
	}
	export interface CardServerModule extends LobbyServerModule {
		cardClass: CardCTOR;
		cardAppClass: CardAppCTOR;
		sideCardAppClass: SideCardAppCTOR;

		getExtends(): zetaret.node.modules.LobbyServerCTOR
		getExtendedServerProtoSS(ProtoSSChe: ProtoSSCheCTOR): zetaret.node.modules.CardServerCTOR
	}
}