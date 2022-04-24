import { Cart } from "./cart";
import { CartProduct } from "./CartProduct";
import { Product } from "./product";

/**
 * Created by andrew.yang on 7/27/2017.
 */
 export class Order {
    userName: string;
    address: string;
    totalCost: number;
    cartList: Array<Cart>;
}