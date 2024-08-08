import Token from "../utils/Token";
import IMercadoPagoPayment from "./IMercadoPagoPayment";

export default class MercadoPago implements IMercadoPagoPayment {
    private token: Token;
    
    authToken(): Token {
        return new Token();
    }
    pay(): void {
        this.token = this.authToken();
        console.log(`TOKEN: ${this.token.getToken()}`);
        console.log("Enviando pagamentos via Mercado Pago");
    }
    receive(): void {
        console.log("Recebendo pagamentos via Mercado Pago");
    }
}