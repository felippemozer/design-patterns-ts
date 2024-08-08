import Drone from "../aerial/Drone";
import IAircraft from "../aerial/interfaces/IAircraft";
import ILandVehicle from "../land/interfaces.ts/ILandVehicle";
import Scooter from "../land/Scooter";
import ITransportFactory from "./interfaces/ITransportFactory";

export default class LimeTransport implements ITransportFactory {
    createLandTransport(): ILandVehicle {
        return new Scooter();
    }
    createAircraftTransport(): IAircraft {
        return new Drone();
    }
}