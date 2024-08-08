import PermissionType from "./PermissionType";

interface DatabaseItem {
    email: string;
    password: string;
    permission: PermissionType;
}

const database: Array<DatabaseItem> = [
    {
        email: "master@hcode.com.br",
        password: "123456",
        permission: PermissionType.ADMIN
    },
    {
        email: "user@hcode.com.br",
        password: "12345678",
        permission: PermissionType.USER    
    }
];

export default database;