import ILandVehicle from "./interfaces.ts/ILandVehicle";

export default class Motorcycle implements ILandVehicle {
    startRoute(): void {
        this.getCargo();
        console.log("Partiu entregar");
    }
    getCargo(): void {
        console.log("Já pegamos a encomenda");
    }
}