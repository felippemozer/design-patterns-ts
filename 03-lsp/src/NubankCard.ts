import IPaymentInstrument from "./IPaymentInstrument";

export default abstract class NubankCard implements IPaymentInstrument {
    collectPayment(): void {
        console.log("Pagamento realizado");
    }

    validate(): void {
        console.log("Validação básica");
    }
}