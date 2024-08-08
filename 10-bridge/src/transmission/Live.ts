import IPlatform from "../platform/IPlatform";
import ITransmission from "./ITransmission";

export default class Live implements ITransmission {
    constructor(private platform: IPlatform){}

    broadcast(): void {
        console.log("Iniciando a transmissão");
    }
    result(): void {
        console.log("********** ON AIR **********");
    }
}