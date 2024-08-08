import Transport from "./Transport";
import IVehicle from "./vechicles/interfaces/IVehicle";
import Motorcycle from "./vechicles/Motorcycle";

export default class MotorcycleTransport extends Transport {
    protected createTransport(): IVehicle {
        return new Motorcycle();
    }
}