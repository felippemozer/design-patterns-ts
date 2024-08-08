import IPlatform from "./IPlatform";

export default class Facebook implements IPlatform {
    constructor() {
        this.configureRMTP();
        console.log("Facebook Live: Transmissão iniciada");
    }

    configureRMTP(): void {
        this.authToken();
        console.log("Facebook Live: Configurando o broadcasting")
    }
    authToken(): void {
        console.log("Facebook Live: Autorizando a aplicação");
    }
}