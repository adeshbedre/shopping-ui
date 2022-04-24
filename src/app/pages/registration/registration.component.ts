import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../services/products.service";
import {Product} from "../../model/product";
import {CartService} from "../../services/cart.service";
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'app-product',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
    userName; 
   formdata;
    constructor(private route: ActivatedRoute,
                private productService:ProductService,
                private cartService:CartService,
                private router: Router
    ) { 
        console.log("helloo");
    }

    ngOnInit() {
        this.formdata = new FormGroup({ 
            userName: new FormControl(""),
            emailId: new FormControl(""),
            password: new FormControl(""),
            address: new FormControl(""),
         });
    }

    public onClickSubmit(data) {
        this.userName = data.userName;
        console.log("the username is "+this.userName);
        this.cartService.registerUser(data.userName,data.emailId,data.password,data.address).subscribe(res => {
            this.router.navigate(['/cart/login']);
        });
    }
}
