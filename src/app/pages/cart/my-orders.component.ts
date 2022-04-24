/**
 * Created by andrew.yang on 7/31/2017.
 */
 import { Component } from '@angular/core';
 import {CartBaseComponent} from "./cart-base.component";
 import {CartService} from "../../services/cart.service";
 import { Router } from '@angular/router';
 import { Product } from '../../model/product';
 import { Order } from '../../model/0rder';
 import { CartProduct } from '../../model/CartProduct';
 import { Cart } from '../../model/cart';
 import { ProductService } from '../../services/products.service';
 
 @Component({
     selector: 'my-orders',
     styleUrls: ["my-orders.component.css"],
     templateUrl: 'my-orders.component.html'
 })
 export class MyOrdersComponent {

    public orderList = new Array<Order>();

    public cartList:Cart[] = [];

    public totalPrice = 0;

     constructor(protected cartService: CartService,protected router: Router,private productService: ProductService) {
         //super(cartService);
     }
 
     ngOnInit() {
          console.log("&&&&&&&&&&& "+sessionStorage.getItem("username"));
        this.cartService.fetchOrder(sessionStorage.getItem("username"))
          .subscribe(res => {
            console.log("ressss is "+JSON.stringify(res));
            this.orderList = res.data;
            console.log("orderList is "+JSON.stringify(this.orderList));
          })
     }
     changeQuantity = (cart,quantity) => {
         cart.quantity = quantity;
         this.cartService.reloadCart(this.cartList);
     }
 
    

     populateOrder(order:Order) {
        this.cartList = order.cartList;
        this.totalPrice = order.totalCost;
     }
 }