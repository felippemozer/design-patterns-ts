import database from "../server/Database";
import Middleware from "./Middleware";

export default class CheckWeakPasswordMiddleware extends Middleware {
    public check(email: string, password: string): boolean {
        if(password.startsWith("1234")) {
            console.warn("AVISO: Sua senha é muito fraca, se possível altere-a para uma senha mais forte");
        }
        
        return this.checkNext(email, password);
    }
}