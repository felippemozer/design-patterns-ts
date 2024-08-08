import DBProductFactory from "../factory/DBProductFactory";

export default class Payment {
    pay(productId: number): void {
        const dbProduct = DBProductFactory.create();
        const product = dbProduct.getProductById(productId);

        console.log(product);
    }
}