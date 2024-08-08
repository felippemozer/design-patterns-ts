import ILandVehicle from "./interfaces.ts/ILandVehicle";

export default class Scooter implements ILandVehicle {
    startRoute(): void {
        this.getCargo();
        console.log("Iniciando entrega de patinete");
    }
    getCargo(): void {
        console.log("Pegando carga na loja parceira");
    }
}