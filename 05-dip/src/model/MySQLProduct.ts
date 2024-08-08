import IDBProduct from "./IDBProduct";

export default class MySQLProduct implements IDBProduct {
    getProductById(productId: number): string {
        return `MySQL: Exibindo dados do produto ${productId}`;
    }
}