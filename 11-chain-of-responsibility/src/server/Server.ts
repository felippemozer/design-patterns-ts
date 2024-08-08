import Middleware from "../middleware/Middleware";

export default class Server {
    private middleware: Middleware;

    public setMiddleware(middleware: Middleware): void {
        this.middleware = middleware;
    }

    public login(email: string, password: string): boolean {
        if (this.middleware.check(email, password)) {
            console.log("Usuário autenticado com sucesso");
            return true;
        }
        
        return false;
    }
}