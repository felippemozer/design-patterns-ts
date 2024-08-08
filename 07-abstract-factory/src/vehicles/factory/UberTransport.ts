import IAircraft from "../aerial/interfaces/IAircraft";
import ILandVehicle from "../land/interfaces.ts/ILandVehicle";
import ITransportFactory from "./interfaces/ITransportFactory";
import Car from "../land/Car";
import Airplane from "../aerial/Airplane";

export default class UberTransport implements ITransportFactory {
    createLandTransport(): ILandVehicle {
        return new Car();
    }
    createAircraftTransport(): IAircraft {
        return new Airplane();
    }
}