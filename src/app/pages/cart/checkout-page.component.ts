/**
 * Created by andrew.yang on 7/31/2017.
 */
import { Component } from '@angular/core';
import {CartBaseComponent} from "./cart-base.component";
import {CartService} from "../../services/cart.service";

@Component({
    selector: 'app-checkout-page',
    styleUrls: ["checkout-page.component.css"],
    templateUrl: 'checkout-page.component.html'
})
export class CheckoutPageComponent {
    constructor(protected cartService: CartService,) {
         console.log("heloooooo");
     }

     ngOnInit() {
        this.cartService.removeAllFromCart();
     }
    // changeQuantity = (cart,quantity) => {
    //     cart.quantity = quantity;
    //     this.cartService.reloadCart(this.cartList);
    // }
}