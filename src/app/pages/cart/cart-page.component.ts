/**
 * Created by andrew.yang on 7/31/2017.
 */
import { Component } from '@angular/core';
import {CartBaseComponent} from "./cart-base.component";
import {CartService} from "../../services/cart.service";
import { Order } from '../../model/0rder';
import { Router } from '@angular/router';

@Component({
    selector: 'app-cart-page',
    styleUrls: ["cart-page.component.css"],
    templateUrl: 'cart-page.component.html'
})
export class CartPageComponent extends CartBaseComponent{
    constructor(protected cartService: CartService,private router: Router) {
        super(cartService);
    }

    ngOnInit() {

    }
    changeQuantity = (cart,quantity) => {
        cart.quantity = quantity;
        this.cartService.reloadCart(this.cartList);
    }

    onCheckout() {
        let order = new Order();
        order.cartList = this.cartList;
        order.userName = sessionStorage.getItem("username");
        order.totalCost = this.totalPrice;
        this.cartService.placeOrder(order);
        this.router.navigate(['/cart/checkout']);
    }
}