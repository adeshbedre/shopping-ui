/**
 * Created by andrew.yang on 7/27/2017.
 */
import { LoginComponent } from "../registration/login.component";
import { RegistrationComponent } from "../registration/registration.component";
import {CartPageComponent} from "./cart-page.component";
import { CheckoutPageComponent } from "./checkout-page.component";
import { MyOrdersComponent } from "./my-orders.component";

export const cartPageRoutes=[
    {
        path:'',
        component:CartPageComponent
    },
    {
        path:'checkout',
        component: CheckoutPageComponent
    },
    {
        path:'register',
        component: RegistrationComponent
    },
    {
        path:'login',
        component: LoginComponent
    },
    {
        path:'orders',
        component: MyOrdersComponent
    }
];