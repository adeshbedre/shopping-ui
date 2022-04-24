/**
 * Created by andrew.yang on 7/28/2017.
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CartService} from "../../services/cart.service";

@Component({
    selector: 'top-bar',
    styleUrls: ['./top-bar.component.css'],
    template: `    
    <div class="main-header navbar-fixed-top">
        <div class="header-menu">
            <div class="header-mobile-nav-wrapper">
                <button type="button" class="navbar-toggle" (click)="collapse = !collapse">
                    <span class="fa fa-bars fa-2x"></span>
                </button>
            </div>
            <div class="header-logo-wrapper">
                <img class="header-logo-image" style="cursor: pointer;" (click)="homePage()" src="./assets/imgs/logo.png" alt="Hero">
            </div>
            <div class="header-nav-wrapper">

                        <a class="order-item" [routerLink]="['cart/orders']">MY ORDERS</a>


            </div>
            <div class="header-nav-wrapper">


                        <a class="order-item" (click)="logout()">LOGOUT</a>

            </div>
            
            <div class="header-cart-wrapper">
                <div class="header-cart" (click)="toggleCartPopup($event)">
                    <div class="mobil-shopping-cart">
                        <span><i class="fa fa-shopping-cart fa-2x"></i> <span *ngIf="cart_num">( {{cart_num}} )</span></span>
                    </div>
                    
                    <div class="header-cart-item">
                        <a href="">MY CART <span *ngIf="cart_num">( {{cart_num}} )</span><span class="fa fa-caret-down"></span></a>
                    </div>
                </div>
            </div>
        </div>
        <cart-popup></cart-popup>
    </div>
`
})
export class TopbarComponent implements OnInit {
    public collapse: boolean = false;
    public cart_num:number;
    constructor(
        private cartService: CartService,
        private router: Router
    ) { }

    ngOnInit() {
        this.cartService.cartListSubject
            .subscribe(res => {
                this.cart_num = res.length;
            })

        if(sessionStorage.getItem("username") == null) {
            this.router.navigate(['/cart/login']);
        }
    }
    toggleCartPopup = (event) => {
        event.preventDefault();
        event.stopPropagation();
        this.cartService.toggleCart()
    }

    logout() {
        sessionStorage.removeItem("username");
        this.router.navigate(['/cart/login']);
    }

    homePage() {
        if(sessionStorage.getItem("username") == null) {
            this.router.navigate(['/cart/login']);
        } else {
            this.router.navigate(['/']);
        }
    }
}