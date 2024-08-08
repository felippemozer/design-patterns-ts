import database from "../server/Database";
import PermissionType from "../server/PermissionType";
import Middleware from "./Middleware";

export default class CheckPermissionMiddleware extends Middleware {
    public check(email: string, password: string): boolean {
        const users = database.filter(item => item.email === email);

        if (!users.length) {
            console.error("Email não cadastrado");
            return false;
        }

        if (users[0].permission === PermissionType.ADMIN) {
            console.log("Seja bem vindo administrador!");
            return this.checkNext(email, password);
        }
        console.log("Seja bem vindo usuário");

        return this.checkNext(email, password);
    }
}