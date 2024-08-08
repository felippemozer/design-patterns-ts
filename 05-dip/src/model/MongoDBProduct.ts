import IDBProduct from "./IDBProduct";

export default class MongoDBProduct implements IDBProduct {
    getProductById(productId: number): string {
        return `MongoDB: Exibindo dados do produto ${productId}`;
    }
}