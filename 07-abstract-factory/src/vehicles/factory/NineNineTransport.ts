import Helicopter from "../aerial/Helicopter";
import IAircraft from "../aerial/interfaces/IAircraft";
import ILandVehicle from "../land/interfaces.ts/ILandVehicle";
import Motorcycle from "../land/Motorcycle";
import ITransportFactory from "./interfaces/ITransportFactory";

export default class NineNineTransport implements ITransportFactory {
    createLandTransport(): ILandVehicle {
        return new Motorcycle();
    }
    createAircraftTransport(): IAircraft {
        return new Helicopter();
    }
}