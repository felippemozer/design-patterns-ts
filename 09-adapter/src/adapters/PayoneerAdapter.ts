import IPayPalPayment from "../paypal/IPayPalPayment";
import Payoneer from "../payoneer/Payoneer";
import Token from "../utils/Token";

export default class PayoneerAdapter implements IPayPalPayment {
    private token: Token;

    constructor(private payoneer: Payoneer) {
        console.log("Adaptando o payoneer usando os métodos e padrões do Paypal");
    }

    authToken(): Token {
        return new Token();    
    }
    paypalPayment(): void {
        this.payoneer.sendPayment();
    }
    payPalReceive(): void {
        this.payoneer.receivePayment();
    }

}