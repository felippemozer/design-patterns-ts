import IAircraft from "../../aerial/interfaces/IAircraft";
import ILandVehicle from "../../land/interfaces.ts/ILandVehicle";

export default interface ITransportFactory {
    createLandTransport(): ILandVehicle;
    createAircraftTransport(): IAircraft;
}