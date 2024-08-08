import Transport from "./Transport";
import Bicycle from "./vechicles/Bicycle";
import IVehicle from "./vechicles/interfaces/IVehicle";

export default class BicycleTransport extends Transport {
    protected createTransport(): IVehicle {
        return new Bicycle();
    }
}