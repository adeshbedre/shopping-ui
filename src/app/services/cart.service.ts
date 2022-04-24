/**
 * Created by andrew.yang on 7/28/2017.
 */
import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Product} from "../model/product";
import {Cart} from "../model/cart";
import { Http } from '@angular/http';
import { Order } from '../model/0rder';
import { Person } from '../model/Person';
import { FetchOrder } from '../model/FetchOrder';
import {Response} from "@angular/http";

@Injectable()
export class CartService {

    constructor(public http: Http) { }
    
    public cartListSubject = new BehaviorSubject([]);
    public toggleCartSubject = new BehaviorSubject(false);

    toggleCart = () => {
        this.toggleCartSubject.next(!this.toggleCartSubject.getValue());
    };
    addToCart = (cart:Cart) => {
        let current = this.cartListSubject.getValue();
        let dup = current.find(c=>c.product.title === cart.product.title);
        if(dup) dup.quantity += cart.quantity;
        else current.push(cart);
        this.cartListSubject.next(current);
    };
    reloadCart = (cartList) => {
        this.cartListSubject.next(cartList);
    };
    removeCart = index => {
        let current = this.cartListSubject.getValue();
        current.splice(index,1);
        this.cartListSubject.next(current);
    };

    removeAllFromCart() {
        this.cartListSubject.next([]);

    }

    registerUser(name: string, emailId: string, password: string, address: string) {
        let p = new Person();
        p.name = name;
        p.emailId = emailId;
        p.address = address;
        p.password = password;
        console.log("ps is "+JSON.stringify(p));
        return this.http.post('http://3.91.64.198:8080/register-user', p).map((res:Response) => res.json());
    }

    userLogin(name: string, emailId: string, password: string, address: string) {
        let p = new Person();
        p.name = name;
        p.password = password;
        console.log("ps is "+JSON.stringify(p));
        return this.http.post('http://3.91.64.198:8080/login', p).map((res:Response) => res.json());
    }

    placeOrder(order :Order) {
        console.log("ps is "+JSON.stringify(order));
        this.http.post('http://3.91.64.198:8080/order-place', order).subscribe(data => {
            console.log("the response is "+data);
        });
    }

    
    fetchOrder(userName:string) {
        let fetchOrder = new FetchOrder();
        fetchOrder.userName = userName
        console.log("ps is "+JSON.stringify(userName));
        return this.http.post('http://3.91.64.198:8080/fetch-order',fetchOrder).map((res:Response) => res.json())
    }


    
}

