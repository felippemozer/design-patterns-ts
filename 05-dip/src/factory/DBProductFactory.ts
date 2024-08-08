import IDBProduct from "../model/IDBProduct";
import DB from "../model/DB";
import MySQLProduct from "../model/MySQLProduct";
import MongoDBProduct from "../model/MongoDBProduct";

export default class DBProductFactory {
    private static type: DB = DB.MONGODB;

    public static create(): IDBProduct {
        if(DBProductFactory.type === DB.MYSQL) {
            return new MySQLProduct();
        } else if (DBProductFactory.type === DB.MONGODB) {
            return new MongoDBProduct();
        }
    }
}