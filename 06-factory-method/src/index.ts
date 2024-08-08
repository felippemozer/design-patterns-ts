import BicycleTransport from "./transport/BicycleTransport";
import CarTransport from "./transport/CarTransport";
import MotorcycleTransport from "./transport/MotorcycleTransport";
import Transport from "./transport/Transport";

declare var process;

let transport: Transport | undefined;

if(process.argv.includes("--uber")) {
    transport = new CarTransport();
} else if (process.argv.includes("--log")) {
    transport = new MotorcycleTransport();
} else if (process.argv.includes("--eats")) {
    transport = new BicycleTransport();
} else {
    console.error("Selecione o tipo de entrega (--uber) ou (--log) ou (--eats)");
}

if(!!transport) {
    transport.startTransport();
}