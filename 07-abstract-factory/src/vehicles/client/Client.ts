import IAircraft from "../aerial/interfaces/IAircraft";
import ITransportFactory from "../factory/interfaces/ITransportFactory";
import ILandVehicle from "../land/interfaces.ts/ILandVehicle";

export default class Client {
    private vehicle: ILandVehicle;
    private aircraft: IAircraft;

    constructor(factory: ITransportFactory) {
        this.vehicle = factory.createLandTransport();
        this.aircraft = factory.createAircraftTransport();
    }

    startRoute(): void {
        this.vehicle.startRoute();
        this.aircraft.startRoute();
    }
}