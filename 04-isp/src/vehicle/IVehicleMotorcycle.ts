import IVehicle from "./IVehicle";

export default interface IVehicleMotorcycle extends IVehicle {
    configure(
        color: string,
        year: number,
        engine: number   
    ): void;
}