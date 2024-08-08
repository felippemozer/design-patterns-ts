import IPayPalPayment from "../paypal/IPayPalPayment";
import Token from "../utils/Token";
import MercadoPago from "../mercado-pago/MercadoPago";


export default class MercadoPagoAdapter implements IPayPalPayment {
    private token: Token;

    constructor(private mercadoPago: MercadoPago) {
        console.log("Adaptando o MercadoPago usando os métodos e padrões do Paypal");
    }

    authToken(): Token {
        return new Token();
    }
    paypalPayment(): void {
        this.mercadoPago.pay();
    }
    payPalReceive(): void {
        this.mercadoPago.receive();
    }
}