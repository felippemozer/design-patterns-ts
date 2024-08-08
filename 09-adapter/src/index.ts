import MercadoPagoAdapter from "./adapters/MercadoPagoAdapter";
import PayoneerAdapter from "./adapters/PayoneerAdapter";
import MercadoPago from "./mercado-pago/MercadoPago";
import IPayoneerPayment from "./payoneer/IPayoneerPayment";
import Payoneer from "./payoneer/Payoneer";
import IPayPalPayment from "./paypal/IPayPalPayment";
import PayPal from "./paypal/PayPal";

// const payment: IPayPalPayment = new PayPal();
// const payment: IPayPalPayment = new PayoneerAdapter(new Payoneer());
const payment: IPayPalPayment = new MercadoPagoAdapter(new MercadoPago());

payment.paypalPayment();
payment.payPalReceive();