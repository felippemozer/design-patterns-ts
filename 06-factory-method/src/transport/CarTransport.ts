import Transport from "./Transport";
import Car from "./vechicles/Car";
import IVehicle from "./vechicles/interfaces/IVehicle";

export default class CarTransport extends Transport {
    protected createTransport(): IVehicle {
        return new Car();
    }
}