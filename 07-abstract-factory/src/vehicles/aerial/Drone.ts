import IAircraft from "./interfaces/IAircraft";

export default class Drone implements IAircraft {
    startRoute(): void {
        this.checkWind();
        this.getCargo();
        console.log("Iniciando entrega via drone...")
    }
    getCargo(): void {
        console.log("Buscando carga...");
    }
    checkWind(): void {
        console.log("Sem ventos, ótimo para a entrega!");
    }
}