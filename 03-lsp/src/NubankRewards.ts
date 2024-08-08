import IPaymentInstrument from "./IPaymentInstrument";

export default class NubankRewards implements IPaymentInstrument {
    collectPayment(): void {
        console.log("Pagar com a pontuação no rewards");
    }
    validate(): void {
        console.log("Verificar a pontuação no rewards");
    }
}