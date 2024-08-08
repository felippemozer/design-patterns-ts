import Server from "./server/Server";
import CheckUserMiddleware from "./middleware/CheckUserMiddleware";
import CheckPermissionMiddleware from "./middleware/CheckPermissionMiddleware";
import CheckWeakPasswordMiddleware from "./middleware/CheckWeakPasswordMiddleware";

const server = new Server();

const middleware = new CheckUserMiddleware();
middleware.link(new CheckPermissionMiddleware());
middleware.link(new CheckWeakPasswordMiddleware());

server.setMiddleware(middleware);
server.login("master@hcode.com.br", "123456");