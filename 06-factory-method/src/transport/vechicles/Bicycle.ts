import IVehicle from "./interfaces/IVehicle";

export default class Bicycle implements IVehicle {
    startRoute(): void {
        this.getCargo();
        console.log("Iniciando a entrega...")
    }
    getCargo(): void {
        console.log("A bike pegou a carga e já estará a caminho");
    }

}