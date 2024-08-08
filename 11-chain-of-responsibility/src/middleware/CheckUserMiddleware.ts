import database from "../server/Database";
import Middleware from "./Middleware";

export default class CheckUserMiddleware extends Middleware {
    public check(email: string, password: string): boolean {
        if(email.indexOf("@") === -1) {
            console.error("Email inválido");
            return false;
        }

        if(!database.filter((item) => item.email === email && item.password === password).length) {
            console.error("Email e/ou senha inválidos");
        }

        return this.checkNext(email, password);
    }
}