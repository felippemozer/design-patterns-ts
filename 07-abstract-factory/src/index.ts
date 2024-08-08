import Client from "./vehicles/client/Client";
import Company from "./vehicles/consts/Company";
import ITransportFactory from "./vehicles/factory/interfaces/ITransportFactory";
import UberTransport from "./vehicles/factory/UberTransport";
import NineNineTransport from "./vehicles/factory/NineNineTransport";
import LimeTransport from "./vehicles/factory/LimeTransport";

const currentCompany = Company.LIME;
let factory: ITransportFactory;

switch (currentCompany) {
    case Company.NINENINE:
        factory = new NineNineTransport();
        break;
    case Company.UBER:
        factory = new UberTransport();
        break;
    case Company.LIME:
        factory = new LimeTransport();
        break;
    default:
        throw new Error("Companhia desconhecida");
}

const client = new Client(factory);

client.startRoute();